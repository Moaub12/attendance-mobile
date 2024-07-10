// Index.js
import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from "../screens/Login";

const Index = () => {
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const user_id = await AsyncStorage.getItem('user_id');
        if (user_id) {
          setUserId(user_id);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchUserId();
  }, []);

  if (loading) {
    return null; // Or a loading spinner
  }

  return userId ? <Redirect href='Hometab' /> : <Login setUserId={setUserId} />;
};

export default Index;
