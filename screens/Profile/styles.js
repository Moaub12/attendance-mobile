import React from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        marginTop:100,
        
    },
    infoSection:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    verticalLine:{
        width: 2,
        backgroundColor:'black',
        marginHorizontal:20,
    }
    ,
    name:{
        fontSize:20,
        fontWeight:'400',
        
    },
    horizontalLine:{
        height:1,
    backgroundColor:'#CCCCCC',
    },
    iconTitleWraper:{
        flexDirection:'row',
    },
    icon:{
        fontSize:40,
        marginEnd:10,
    },
    title:{
   fontSize:20,
   padding:10,
    },
    button:{
        marginVertical:10,
        width:"auto",   
        marginLeft:20,
        
    },
})
export default styles;