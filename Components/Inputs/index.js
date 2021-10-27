import React from "react";
import { StyleSheet, TextInput } from "react-native";

const MyInputs = ({placeholder,type}) => {
  const [text, onChangeText] = React.useState("");

  return (
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
        type="password"

      />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    alignItems:"center",
    fontSize:20,
    color:"black",
    margin: 12,
    borderWidth: 1,
    padding: 20,
    borderRadius:10
  },
});

export default MyInputs;