// app/index.tsx
import { View, Text, Button, StyleSheet, Platform, Image } from "react-native";

import { useState } from "react";
import { Link, Stack, useRouter } from "expo-router";
import shop from "./shop";

export default function HomeScreen() {
  const [souls, setSouls] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔥 Clicker From Hell 🔥</Text>
      <Text style={styles.counter}>Душ зібрано: {souls}</Text>
      <Button title="Молоти душі 🪓" onPress={() => setSouls(souls + 1)} />
      <View style={{ height: 20 }} />
      <Button title="🛒 Магазин душ" onPress={() => router.push("/shop")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },
  title: {
    fontSize: 24,
    color: "orange",
    marginBottom: 20,
  },
  counter: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
  },
});
