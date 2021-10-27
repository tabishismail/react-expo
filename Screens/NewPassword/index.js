import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, MyInputs } from '../../Components';



export default function NewPassword() {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>New Password</Text>
      <MyInputs type="password" placeholder={"Enter New Password"}/>
      <MyInputs type="password" placeholder={"Re Enter Password"}/>
      <Button>Next</Button>
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