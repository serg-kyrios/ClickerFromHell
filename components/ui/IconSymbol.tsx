// This file is a fallback for using MaterialIcons on Android and web.
import Foundation from "@expo/vector-icons/Foundation";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolWeight } from "expo-symbols";
import React from "react";
import {
  OpaqueColorValue,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

const MAPPING = {
  "shop.fill": "storefront", // Магазин
  "cart.fill": "shopping-cart", // Кошик
  "bolt.fill": "flash-on", // Блискавка / енергія
  "flame.fill": "whatshot", // Вогонь / пекло
  "magic.wand": "auto-fix-high", // Магія
  "eye.fill": "visibility", // Всевидяче око
  "burst.fill": "flare", // Вибух
  "heart.soul": "psychology", // Типу душа / розум
  "moon.stars.fill": "nights-stay", // Космос / ніч
  sparkles: "auto-awesome", // Чари ✨
  "cloud.storm": "thunderstorm", // Гроза
  "hell.shop": "local-fire-department", // Магазин з пекла 😈
} as Partial<
  Record<
    import("expo-symbols").SymbolViewProps["name"],
    React.ComponentProps<typeof MaterialIcons>["name"]
  >
>;

export type IconSymbolName = keyof typeof MAPPING;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return (
    <MaterialIcons
      color={color}
      size={size}
      name={MAPPING[name]}
      style={style}
    />
  );
}
