import { Audio } from "expo-av";
import React, { useRef } from "react";
import {
  Text,
  TouchableOpacity,
  Animated,
  Vibration,
  StyleSheet,
} from "react-native";

// 🔥 Типи пропсів
type HellButtonProps = {
  onReset: () => void;
  onFlash: () => void;
};

export default function HellButton({ onReset, onFlash }: HellButtonProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePress = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/sounds/hell-scream.mp3")
      );
      await sound.playAsync();

      triggerShake();
      onFlash(); // ⚡ Спалах
      onReset(); // 🔄 Скидання гри

      // Автоматичне вивільнення ресурсу після завершення
      sound.setOnPlaybackStatusUpdate((status) => {
        if (!status.isLoaded || status.didJustFinish) {
          sound.unloadAsync();
        }
      });
    } catch (error) {
      console.error("Помилка при відтворенні звуку:", error);
    }
  };

  const triggerShake = () => {
    Vibration.vibrate(500); // 🌀 Тряска

    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.text}>😈 Почати знову (Hell++)</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#b30000",
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});
