import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState(null);

  const handleLogin = () => {
    // Validasi login sederhana
    if (email === "admin@mail.com" && password === "1234567890") {
      router.replace({ pathname: "/home", params: { name: "Admin" } });
    } else {
      Alert.alert("❌ Error", "Email atau Password salah! (Coba daftar dulu)");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.missionBanner}>
          <Text style={styles.missionText}>MISSION: THE SECURE GUARD</Text>
        </View>
        <Text style={styles.title}>🔐 Login</Text>

        <TextInput
          style={[styles.input, focused === "email" && styles.inputFocused]}
          placeholder="Email (admin@mail.com)"
          onChangeText={setEmail}
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused(null)}
        />
        <TextInput
          style={[styles.input, focused === "pass" && styles.inputFocused]}
          placeholder="Password (1234567890)"
          secureTextEntry
          onChangeText={setPassword}
          onFocus={() => setFocused("pass")}
          onBlur={() => setFocused(null)}
        />

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>🚀 Masuk Sekarang</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/register")}
          style={styles.linkContainer}
        >
          <Text style={styles.link}>
            Belum punya akun? <Text style={styles.linkBold}>Daftar Disini</Text>
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fdf2f8" },
  scroll: { flexGrow: 1, padding: 24, justifyContent: "center" },
  missionBanner: {
    backgroundColor: "#e91e63",
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 50,
    marginBottom: 20,
  },
  missionText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 2,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#f0f0f0",
  },
  inputFocused: { borderColor: "#e91e63" },
  button: {
    backgroundColor: "#e91e63",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "700" },
  linkContainer: { marginTop: 25 },
  link: { textAlign: "center", color: "#666", fontSize: 16 },
  linkBold: { color: "#e91e63", fontWeight: "bold" },
});
