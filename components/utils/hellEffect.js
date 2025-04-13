import { Audio } from "expo-av";
import { Vibration } from "react-native";

export async function hellEffect({ onFlash, onReset, onShake }) {
  try {
    // 🔊 Крик
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/hell-scream.mp3")
    );
    await sound.playAsync();

    // 📳 Вібрація
    Vibration.vibrate(500);

    // 🌩️ Спалах екрана
    if (onFlash) onFlash();

    // 🌀 Тряска / анімація кнопки
    if (onShake) onShake();

    // 🔁 Скидання гри
    if (onReset) onReset();
  } catch (error) {
    console.warn("Hell effect error:", error);
  }
}
