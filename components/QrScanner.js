import React, { useState, useEffect } from 'react';
import { CameraView } from 'expo-camera/next';
import { Text, View, Button } from 'react-native';

function   QrScanner({ setScan }) {
  const [hasPermission, setHasPermission] = useState(true);
  const [scannedData, setScannedData] = useState(null);
  const handleExit = () => {
    setScan(false);
  };
  useEffect(() => {
    // askForCameraPermission();
  }, []);

//   const askForCameraPermission = async () => {
//     const { status, requestPermissionsAsync } = useCameraPermissions();
//     if (status === 'granted') {
//       setHasPermission(true);
//       return;
//     }

//     const { status: granted } = await requestPermissionsAsync();
//     setHasPermission(granted === 'granted');
//   };

  const handleBarCodeScanned = ({ type, data }) => {
    setScannedData(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permissions...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{alignItems:'center'}}></View>
      <CameraView ratio={'16:9'} style={{ width: '100%', height: 600 }} onBarcodeScanned={handleBarCodeScanned}>
        {scannedData ? (
          <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, marginBottom: 10 }}>Scanned Data:</Text>
            <Text>{scannedData}</Text>
            <Button title="Clear" onPress={() => setScannedData(null)} />
          </View>
        ) : null}
      </CameraView>
      <Button title="X" onPress={handleExit}  />

    </View>
  );
}

export default QrScanner;
