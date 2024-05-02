import React from "react";
import { StyleSheet } from "react-native";
import { color } from "../../app/theme";
const styles = StyleSheet.create({
  
    row: {
      flexDirection: 'row',
      
      justifyContent:'space-between'
    },
   
    link: {
      fontWeight: 'bold',
      color:color,
      padding:5,
      //  marginLeft:5,
        },
    text:{
     padding:5,
    },
  })
  export default styles;