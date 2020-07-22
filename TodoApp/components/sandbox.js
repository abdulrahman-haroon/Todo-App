import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxthree}>three</Text>
      <Text style={styles.boxfour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    padding: 40,
    backgroundColor: "#ddd",
  },
  boxOne: {
    flex: 1,
    backgroundColor: "violet",
    padding: 10,
  },
  boxTwo: {
    flex: 2,
    backgroundColor: "gold",
    padding: 20,
  },
  boxthree: {
    flex: 1,
    backgroundColor: "coral",
    padding: 30,
  },
  boxfour: {
    flex: 3,
    backgroundColor: "skyblue",
    padding: 40,
  },
});
