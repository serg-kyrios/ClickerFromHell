// app/index.tsx
import { View, Text, Button, StyleSheet, Platform, Image } from "react-native";
import useCounterStore from "..//../store/useCounterStore";

import { useState } from "react";
import { Link, Stack, useRouter } from "expo-router";
import shop from "./shop";

export default function HomeScreen() {
  const router = useRouter();
  const [souls, setSouls] = useState(0);
  const count = useCounterStore((state) => state.count);
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);
  const reset = useCounterStore((state) => state.reset);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔥 Clicker From Hell 🔥</Text>
      <Text style={styles.counter}>Душ зібрано: {count}</Text>
      <Button title="Молоти душі 🪓" onPress={increase} />
      {/* <Button title="➖" onPress={decrease} /> */}
      <View style={{ height: 20 }} />
      <Button title="🛒 Магазин душ" onPress={() => router.push("/shop")} />
      <View style={{ height: 20 }} />
      <Button title="🔁" onPress={reset} />
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
