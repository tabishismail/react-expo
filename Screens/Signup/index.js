import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, MyInputs } from '../../Components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function SignUp() {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Login </Text>
        <MyInputs type="name" placeholder={"Enter Name"}/>
      <MyInputs type="email-address" placeholder={"Enter Email Address"}/>
      <MyInputs type="password" placeholder="Enter Password"/>
      <MyInputs type="password" placeholder="Re Enter Password"/>

      <Button>SignUp</Button>
      <Text>Already have an Account? <Text onPress={() => navigation.navigate('Login')}> Login</Text></Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading:{
        fontSize:20
    }
  });