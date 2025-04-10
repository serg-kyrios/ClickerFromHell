// app/shop.tsx
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import index from "./index";

export default function ShopScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Магазин Душ</Text>
      <Text style={styles.item}>🔥 Прокляття демона - 100 душ</Text>
      <Text style={styles.item}>🩸 Кровавий бонус - 50 душ</Text>
      <Button title="⬅ Назад" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
  },
  title: {
    fontSize: 24,
    color: "red",
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
    color: "#fff",
    marginVertical: 10,
  },
});
