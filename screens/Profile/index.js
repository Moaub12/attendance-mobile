import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { color } from "../../app/theme"; 
import styles from "./styles";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const username = "moaub"; // Replace with your username source

  const Logout = async () => {
  await AsyncStorage.clear();
  router.replace('/')
  };

 

  const NavigateToAboutUS = () => {
    // navigation.navigate('AboutUS');
  };

  const NavigateToMyAccount = () => {
    router.push('/Attendances')
  };

  const RenderInfoSection = () => (
    <View style={styles.infoSection}>
      <Ionicons name="person" size={60} color={color} />
      <View style={styles.verticalLine}></View>
      <View>
        <Text style={styles.name}>Mohamad Ayoubi</Text>
        <Text>@{username}</Text>
      </View>
    </View>
  );

  const renderButton = (iconName, title, onPress) => (
    <View style={styles.button}>
      <View style={styles.iconTitleWraper}>
        <MaterialCommunityIcons name={iconName} style={styles.icon} color={color} size={50} />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <MaterialCommunityIcons name="arrow-right" size={30} color={color} style={{ marginLeft: 'auto', padding: 10 }} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const RenderButtonsSection = () => (
    <View style={{ marginTop: 100, marginLeft: 1 }}>
      {renderButton("account-circle", "My Attendences", NavigateToMyAccount)}
      {/* {renderButton("information-outline", "About Us", NavigateToAboutUS)} */}
      {renderButton("logout", "Logout", Logout)}
    </View>
  );

  return (
    <View style={styles.container}>
      {RenderInfoSection()}
      {RenderButtonsSection()}
    </View>
  );
};

export default Profile;
