import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const { name } = useLocalSearchParams();

  const handleLogout = () => {
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <View style={styles.missionBanner}>
        <Text style={styles.missionText}>MISSION: THE SECURE GUARD</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.welcome}>Halo, {name || "User"} 👋</Text>
        <Text style={styles.subtitle}>
          Akun kamu sudah aman dan siap digunakan!
        </Text>
        <Text style={styles.secureText}>🔒 Anti-tembus data sampah</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.logoutButton,
          pressed && styles.buttonPressed,
        ]}
        onPress={handleLogout}
      >
        <Text style={styles.logoutText}>🚪 Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf2f8",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  missionBanner: {
    backgroundColor: "#e91e63",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 50,
    marginBottom: 60,
    alignSelf: "center",
  },
  missionText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 3,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 40,
    width: "100%",
    alignItems: "center",
    shadowColor: "#e91e63",
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.2,
    shadowRadius: 25,
    elevation: 15,
  },
  welcome: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1f1f1f",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 17,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  secureText: { fontSize: 16, color: "#e91e63", fontWeight: "700" },
  logoutButton: {
    marginTop: 80,
    backgroundColor: "#444",
    paddingVertical: 18,
    paddingHorizontal: 70,
    borderRadius: 20,
  },
  buttonPressed: { backgroundColor: "#222", transform: [{ scale: 0.96 }] },
  logoutText: { color: "#fff", fontSize: 18, fontWeight: "700" },
});
