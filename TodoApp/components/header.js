import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 38,
    backgroundColor: "#A0D2EB",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
