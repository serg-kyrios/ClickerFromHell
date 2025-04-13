import { hellEffect } from "../components/utils/hellEffect";
import HellButton from "../components/HellButton";
import HellFlash from "../components/HellFlash";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Link, Stack, useRouter } from "expo-router";

export default function GameScreen() {
  const [flash, setFlash] = useState(false);

  const triggerFlash = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 400);
  };

  const triggerShake = () => {
    // Можеш анімацію кнопки сюди додати
  };

  const resetGame = () => {
    // твоя логіка перезапуску гри
  };

  return (
    <View style={{ flex: 1 }}>
      <HellFlash trigger={flash} />

      <TouchableOpacity
        onPress={() =>
          hellEffect({
            onFlash: triggerFlash,
            onReset: resetGame,
            onShake: triggerShake,
          })
        }
      >
        <Text style={{ fontSize: 20 }}>😈 Почати знову (Hell+)</Text>
      </TouchableOpacity>
    </View>
  );
}

// import FinalScreen from "../components/FinalScreen";
// import { useState, useEffect } from "react";

// const [souls, setSouls] = useState(0);
// const [gameOver, setGameOver] = useState(false);

// useEffect(() => {
//   if (souls >= 666666) {
//     setGameOver(true);
//   }
// }, [souls]);

// if (gameOver) {
//   return (
//     <FinalScreen
//       onRestart={() => {
//         setSouls(0);
//         setGameOver(false);
//       }}
//     />
//   );
// }
