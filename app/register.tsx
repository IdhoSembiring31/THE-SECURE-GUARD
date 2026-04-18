import { useRouter } from "expo-router";
import React, { useState } from "react";
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

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [focused, setFocused] = useState<string | null>(null);

  const emailRegex = /\S+@\S+\.\S+/;

  const handleRegister = () => {
    const trimmedName = name.trim();
    if (!trimmedName)
      return Alert.alert("❌ Error", "Nama tidak boleh kosong!");
    if (!email || !phone || !password || !confirmPassword)
      return Alert.alert("❌ Error", "Semua field wajib diisi!");

    if (!emailRegex.test(email))
      return Alert.alert(
        "❌ Error",
        "Email harus mengandung @ dan format yang benar!",
      );

    if (!/^\d+$/.test(phone) || phone.length < 10)
      return Alert.alert(
        "❌ Error",
        "Phone hanya boleh angka dan minimal 10 digit!",
      );

    if (password.length < 10)
      return Alert.alert("❌ Error", "Password minimal 10 karakter!");
    if (!/[a-zA-Z]/.test(password))
      return Alert.alert(
        "❌ Error",
        "Password harus mengandung minimal 1 huruf!",
      );

    if (password !== confirmPassword)
      return Alert.alert(
        "❌ Error",
        "Password dan Confirm Password harus sama!",
      );

    Alert.alert("🎉 Sukses!", "Akun berhasil dibuat!");
    router.replace({ pathname: "/home", params: { name: trimmedName } });
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

        <Text style={styles.title}>📝 Buat Akun Baru</Text>
        <Text style={styles.subtitle}>Isi data dengan benar ya</Text>

        <Text style={styles.label}>Nama Lengkap</Text>
        <TextInput
          style={[styles.input, focused === "name" && styles.inputFocused]}
          placeholder="Nama kamu"
          value={name}
          onChangeText={setName}
          onFocus={() => setFocused("name")}
          onBlur={() => setFocused(null)}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[styles.input, focused === "email" && styles.inputFocused]}
          placeholder="contoh@email.com"
          value={email}
          onChangeText={setEmail}
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused(null)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Nomor HP</Text>
        <TextInput
          style={[styles.input, focused === "phone" && styles.inputFocused]}
          placeholder="081234567890"
          value={phone}
          onChangeText={setPhone}
          onFocus={() => setFocused("phone")}
          onBlur={() => setFocused(null)}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Password (min. 10 karakter)</Text>
        <TextInput
          style={[styles.input, focused === "password" && styles.inputFocused]}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          onFocus={() => setFocused("password")}
          onBlur={() => setFocused(null)}
          secureTextEntry
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={[styles.input, focused === "confirm" && styles.inputFocused]}
          placeholder="Ulangi password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          onFocus={() => setFocused("confirm")}
          onBlur={() => setFocused(null)}
          secureTextEntry
        />

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>✅ Daftar Sekarang</Text>
        </Pressable>

        <Pressable onPress={() => router.back()} style={styles.linkContainer}>
          <Text style={styles.link}>
            Sudah punya akun? <Text style={styles.linkBold}>Login</Text>
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fdf2f8" },
  scroll: { flexGrow: 1, padding: 24 },
  missionBanner: {
    backgroundColor: "#e91e63",
    alignSelf: "center",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 50,
    marginBottom: 30,
  },
  missionText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 3,
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    textAlign: "center",
    color: "#1f1f1f",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 40,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#444",
    marginLeft: 8,
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
    marginBottom: 20,
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  inputFocused: {
    borderColor: "#e91e63",
    shadowColor: "#e91e63",
    shadowOpacity: 0.25,
  },
  button: {
    backgroundColor: "#e91e63",
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
  },
  buttonPressed: { backgroundColor: "#c2185b", transform: [{ scale: 0.96 }] },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "700" },
  linkContainer: { marginTop: 40 },
  link: { textAlign: "center", fontSize: 16, color: "#555" },
  linkBold: { color: "#e91e63", fontWeight: "700" },
});
