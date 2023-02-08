import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, AsyncStorage } from "react-native";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("password", password);
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        placeholder="Email"
        style={{ height: 40, width: "80%", borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        style={{ height: 40, width: "80%", borderColor: "gray", borderWidth: 1, marginTop: 10 }}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity
        style={{ backgroundColor: "lightgray", padding: 10, marginTop: 10 }}
        onPress={handleRegister}
      >
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
