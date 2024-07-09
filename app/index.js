import React, { useEffect, useState } from "react";
import Login from "../screens/Login";
import { Redirect } from "expo-router";
const Index = () => {
   const [userId, setUserId] = useState(null);
  
  
  // useEffect(() => {
  //   const fetchUserId = async () => {
  //     const user_id = await AsyncStorage.getItem('user_id');
  //     setUserId(user_id);
  //   }

  //   fetchUserId();
  // }, []);

  return(
   
    userId ? <Redirect href='Hometab'></Redirect> : <Login></Login>
    
  )
};

export default Index;
