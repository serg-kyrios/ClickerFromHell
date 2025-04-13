// FinalScreen.tsx (React Native)
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function FinalScreen({ onRestart }: { onRestart: () => void }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/hellfire.gif")}
        style={styles.background}
      />
      <Text style={styles.title}>🔥 ВОРОТА РАЮ ЗАКРИЛИСЬ 🔥</Text>
      <Text style={styles.text}>
        Ти зібрав 666 666 душ. Пекло прийняло тебе як свого повелителя. Земля
        охоплена вогнем.
      </Text>
      <TouchableOpacity onPress={onRestart} style={styles.button}>
        <Text style={styles.buttonText}>😈 Почати знову (Hell+)</Text>
      </TouchableOpacity>
      +
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    opacity: 0.3,
  },
  title: {
    fontSize: 30,
    color: "#FF4500",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: "#FFF",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#FF0000",
    padding: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
