import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api';
import BackButton from '../../components/BackButton';
import { router } from 'expo-router';
const MyAttendances = () => {
  const [userId, setUserId] = useState(null);
  const [attendances, setAttendances] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserIdAndAttendances = async () => {
      try {
        const user_id = await AsyncStorage.getItem('user_id');
        if (user_id) {
          setUserId(user_id);
          await getAttendances(user_id);
        }
      } catch (e) {
        console.error(e);
        setError('Failed to fetch user ID');
      }
    };

    fetchUserIdAndAttendances();
  }, []);

  const getAttendances = async (userId) => {
    try {
      const response = await api.get(`api/user/${userId}/courses-attendance`);
      setAttendances(response.data.data);
    } catch (error) {
      console.error(error);
      setError('Failed to fetch attendances');
    }
  };

  const renderAttendance = ({ item }) => (
    <View style={styles.attendanceCard}>
      <Text style={styles.courseName}>{item.course.name}</Text>
      <Text style={styles.courseCode}>{item.course.code}</Text>
      <Text style={styles.attendanceCount}>Attendances: {item.attendance_count}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <BackButton goBack={()=>{router.back()}}></BackButton>
      <Text style={styles.title}>My Attendances</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        data={attendances}
        renderItem={renderAttendance}
        keyExtractor={(item) => item.course.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  error: {
    color: 'red',
    marginBottom: 20,
  },
  list: {
    width: '90%',
  },
  attendanceCard: {
    backgroundColor:'#2E63A9',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#ffff'
  },
  courseCode: {
    fontSize: 14,
    color:'#ffff',
    marginBottom: 10,
  },
  attendanceCount: {
    fontSize: 16,
      color:'#ffff',
  },
});

export default MyAttendances;
