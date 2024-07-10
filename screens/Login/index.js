// Login.js
import React, { useState } from 'react';
import { Image } from 'react-native';
import { Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Background from '../../components/Background';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

import { emailValidator } from '../../helpers/emailValidator';
import { passwordValidator } from '../../helpers/passwordValidator';
import styles from './styles';
import { router } from 'expo-router';
import api from '../../api';

const Login = ({ setUserId }) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const Logo = require("../../assets/icon.png");

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    const verifiedemail = email.value;
    const verifiedpassword = password.value;

    try { 
      const response = await api.post('api/login', { email: verifiedemail, password: verifiedpassword });
      const user_id = response.data.data.user_id;
      
      if (user_id) {
        await AsyncStorage.setItem('user_id', user_id.toString());
        setUserId(user_id);
        router.replace('/Hometab');
      } else {
        setPassword({ ...password, error: "Failed to retrieve user ID" });
      }
    } catch (error) {
      setPassword({ ...password, error: "Invalid email or password" });
      console.log(error);
    }
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
