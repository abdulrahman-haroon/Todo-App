import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState();
  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.Input}
        placeholder="Add your todo..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="Add Todo"
        color="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
