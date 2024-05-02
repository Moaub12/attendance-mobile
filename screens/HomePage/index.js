import { Text, View } from "react-native";
import QrScanner from "../../components/QrScanner";
import Button from "../../components/Button";
import React, { useState } from "react";

const Home = () => {
  const [scan, setScan] = useState(false);

  const onscanPressed = () => {
    setScan(prevScan => !prevScan);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {!scan ? 
        <View style={{alignItems:'center'}}>
          <Button mode="contained" style={{width:'50%'}} onPress={onscanPressed}>Scan</Button>
        </View> 
        : 
        <QrScanner setScan={setScan}/>
      }
    </View>
  );
};

export default Home;
