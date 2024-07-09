import { Text, View, ActivityIndicator, Alert } from "react-native";
import QrScanner from "../../components/QrScanner";
import Button from "../../components/Button";
import React, { useState } from "react";
import { getUserLocation } from "../../helpers/getLocation";
import Toast from 'react-native-toast-message';

const Home = () => {
  const [scan, setScan] = useState(false);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null); // Add this line
  const toastConfig = {
    success: (internalState) => (
      <View style={{ height: 60, width: '100%', backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>{internalState.text1}</Text>
        <Text style={{ color: 'white', fontSize: 14 }}>{internalState.text2}</Text>
      </View>
    ),
    error: (internalState) => (
      <View style={{ height: 60, width: '100%', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>{internalState.text1}</Text>
        <Text style={{ color: 'white', fontSize: 14 }}>{internalState.text2}</Text>
      </View>
    ),
  };
  const onscanPressed = async () => {
    setLoading(true);
    try {
      const loc = await getUserLocation();
      if (loc) {
        setLocation(loc); // Save location
        setScan(true);
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
       <Toast config={toastConfig}  innerRef={(ref) => Toast.setRef(ref)} />
      {!scan ? (
        <View style={{ alignItems: 'center' }}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <Button mode="contained" style={{ width: '50%' }} onPress={onscanPressed}>
              Scan
            </Button>
          )}
        </View>
      ) : (
        
        

     <QrScanner setScan={setScan} location={location} /> 
       
      )}
    </View>
  );
};

export default Home;
