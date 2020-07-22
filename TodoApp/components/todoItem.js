import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, handlePress }) {
  return (
    <TouchableOpacity onPress={() => handlePress(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={20} color="black" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  itemText: {
    marginLeft: 10,
  },
});
