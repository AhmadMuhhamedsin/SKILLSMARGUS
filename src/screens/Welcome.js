import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, AsyncStorage } from "react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem("email");
      const storedPassword = await AsyncStorage.getItem("password");
      if (email === storedEmail && password === storedPassword) {
        navigation.navigate("Home");
      } else {
        alert("Incorrect email or password");
      }
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
        onPress={handleLogin}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
