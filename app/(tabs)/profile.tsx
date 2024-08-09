import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import auth from '@react-native-firebase/auth';

const GirisEkrani = () => {
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");
  const [yukleniyor, setYukleniyor] = useState(false);
  const [hata, setHata] = useState("");

  const handleGiris = async () => {
    setYukleniyor(true);
    setHata("");

    try {
      await auth().signInWithEmailAndPassword(email, sifre);
      alert("Giriş başarılı!");
    } catch (e) {
        console.log(e)
      setHata("Geçersiz e-posta veya şifre");
    } finally {
      setYukleniyor(false);
    }
  };

  return (
    <View style={stil.container}>
      <Text style={stil.baslik}>Giriş Yap</Text>

      <TextInput
        style={stil.input}
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={stil.input}
        placeholder="Şifre"
        value={sifre}
        onChangeText={setSifre}
        secureTextEntry
      />

      {hata ? <Text style={stil.hataMetni}>{hata}</Text> : null}

      <TouchableOpacity
        style={stil.buton}
        onPress={handleGiris}
        disabled={yukleniyor}
      >
        {yukleniyor ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={stil.butonMetni}>Giriş Yap</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const stil = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  baslik: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  buton: {
    width: "100%",
    padding: 15,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  butonMetni: {
    color: "#fff",
    fontSize: 16,
  },
  hataMetni: {
    color: "red",
    marginTop: 10,
  },
});

export default GirisEkrani;
