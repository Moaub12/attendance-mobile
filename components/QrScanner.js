import React, { useState, useEffect } from 'react';
import { CameraView } from 'expo-camera';
import { Text, View, Button } from 'react-native';
import Toast from 'react-native-toast-message';
import api from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

function QrScanner({ setScan, location }) {
  const [hasPermission, setHasPermission] = useState(true);
  const [scannedData, setScannedData] = useState(null);
  const [isScanning, setIsScanning] = useState(true);
  const [userId, setUserId] = useState(null);

  const handleExit = () => {
    setScan(false);
  };
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const user_id = await AsyncStorage.getItem('user_id');
        if (user_id) {
          setUserId(user_id);
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchUserId();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    if (!isScanning) return;

    setIsScanning(false);
    setScannedData(data);
    try {
      const res = await api.post('/api/getScannedInfo', {
        data: data,
        user_id: userId,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (res.data.response === 'success') {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: res.data.message,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: res.data.message,
        });
      }
    } catch (err) {
      let errorMessage = 'Something went wrong. Please try again.';
      if (err.response && err.response.data && err.response.data.message) {
        errorMessage = err.response.data.message;
      }
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: errorMessage,
      });
    }
    setScan(false);
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permissions...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center' }}></View>
      <CameraView
        ratio={'16:9'}
        style={{ width: '100%', height: 600 }}
        onBarcodeScanned={isScanning ? handleBarCodeScanned : undefined}
      >
        {scannedData ? (
          <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, marginBottom: 10 }}>Scanned Data:</Text>
            <Text>{scannedData}</Text>
            <Button title="Clear" onPress={() => setScannedData(null)} />
          </View>
        ) : null}
      </CameraView>
      <Button title="X" onPress={handleExit} />
    </View>
  );
}

export default QrScanner;
