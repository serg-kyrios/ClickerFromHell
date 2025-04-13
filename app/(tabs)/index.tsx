// app/index.tsx
import { Audio } from "expo-av";
import { Vibration } from "react-native";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import useCounterStore from "..//../store/useCounterStore";

import { useState } from "react";
import { Link, Stack, useRouter } from "expo-router";
import shop from "./shop";
import HellButton from "..//../components/HellButton";
import { hellEffect } from "@/components/utils/hellEffect";
import HellFlash from "..//../components/HellFlash";
import GameScreen from "@/screens/GameScreen";
// import FinalScreen from "../components/FinalScreen";
export default function HomeScreen() {
  const router = useRouter();
  const [souls, setSouls] = useState(0);
  const count = useCounterStore((state) => state.count);
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);
  const reset = useCounterStore((state) => state.reset);

  const [sound, setSound] = useState();

  async function playScream() {
    const { sound } = await Audio.Sound.createAsync(
      require("..//../assets/sounds/hell-scream.mp3") // шлях до твого аудіо
    );
    // setSound(sound);
    await sound.playAsync();
  }

  async function handleRestart() {
    await playScream();

    // тут скидання гри
    reset(); // заміни на свою функцію, яка скидає стан гри
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔥 Clicker From Hell 🔥</Text>
      <Text style={styles.counter}>Душ зібрано: {count}</Text>
      <Button title="Молоти душі 🪓" onPress={increase} />
      {/* <Button title="➖" onPress={decrease} /> */}
      <View style={{ height: 20 }} />
      <Button title="🛒 Магазин душ" onPress={() => router.push("/shop")} />
      <View style={{ height: 20 }} />
      <HellButton onReset={handleRestart} onFlash={playScream} />

      {/* <Button title="🔁" onPress={reset} /> */}
      {/* <TouchableOpacity onPress={() => HellButton}>
        <Text style={styles.buttonText}>😈 Почати знову (Hell+)</Text>
      </TouchableOpacity> */}
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
  buttonText: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
});
