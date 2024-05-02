import React, { useState } from 'react';
import { TouchableOpacity, SafeAreaView, View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../../components/Background';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
// import { useDispatch } from 'react-redux';
// import { authenticate } from "../../redux/slices/app.slice";
// import { emailValidator } from '../../helpers/emailValidator';
// import { passwordValidator } from '../../helpers/passwordValidator';
// import api from '../../Services/axiosInst';
import styles from './styles'
import { Link } from 'expo-router';
// import jwtDecode from 'jwt-decode';

const Login = () => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const Logo = require("../../assets/icon.png");
  // const dispatch = useDispatch();

  const onLoginPressed = async () => {
    // const emailError = emailValidator(email.value);
    // const passwordError = passwordValidator(password.value);
    // if (emailError || passwordError) {
    //   setEmail({ ...email, error: emailError });
    //   setPassword({ ...password, error: passwordError });
    //   return;
    // } else {
    //   const verifiedemail = email.value;
    //   const verifiedpassword = password.value;

    //   try{ 
    //     const response = await api.post('api/token/', { username: verifiedemail, password: verifiedpassword })
    //     if(response.status===200) {
    //        dispatch(authenticate({ loggedIn: true,username:jwtDecode(response.data.access).username,token:response.data.access}));
    //      }

    //   } catch(error){
    //     setPassword({...password,error:"Unvalid username or password"})
    //     console.log(error)
    //   }
     
      
    // }
  };

  return (
   
      <Background>
        <Image source={Logo} style={styles.logo} />
        <Header>Login</Header>
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />

        <Button mode="contained" onPress={onLoginPressed}>
          Login
        </Button>
      
      </Background>
   
  );
};

export default Login;
