import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, MyInputs } from '../../Components';



export default function Reset() {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Reset </Text>
        <Text>Please Enter Your Email to receive a link to create a new password via email</Text>
      <MyInputs type="email-address" placeholder={"Enter Email Address"}/>

      <Button>Send</Button>
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