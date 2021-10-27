import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, MyInputs } from '../../Components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Login </Text>
      <MyInputs type="email-address" placeholder={"Enter Email Address"}/>
      <MyInputs type="password" placeholder="Enter Password"/>
      <Button>Login</Button>
      <Text onPress={() => navigation.navigate('SignUp')}>SignUp</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading:{
        fontSize:20
    }
  });