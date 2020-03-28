import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  AsyncStorage
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-material-ui";
import axios from "axios";

import BigIcon from "../assets/images/icon-big.png";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("hi there");

  async function onSubmit() {
    setError();
    try {
      let result = await axios.post(
        "https://dropent-backend.herokuapp.com/auth",
        { email, password }
      );

      await AsyncStorage.setItem("token", `Bearer ${result.data.accessToken}`);

      navigation.navigate("Home");
    } catch (e) {
      setError("The email and password don't match");
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={BigIcon} />
        <Text style={styles.description}>Stay active during quarantine</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Username"
        />
        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
        />
        <Button
          style={{
            container: { height: 50, marginTop: 40 },
            text: { fontSize: 20 }
          }}
          raised
          primary
          text="Submit"
          onPress={onSubmit}
        />
        <Text style={styles.error}>{error && error}</Text>
      </View>
    </ScrollView>
  );
}

LoginScreen.navigationOptions = { header: null };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  iconContainer: {
    marginTop: 40,
    flex: 1
  },
  icon: {
    flex: 1,
    width: "auto",
    height: 200,
    resizeMode: "contain"
  },
  description: {
    fontFamily: "indie-flower",
    fontSize: 25,
    transform: [{ rotate: "-5deg" }],
    alignItems: "flex-end",
    textAlign: "right",
    top: -20
  },
  textInputContainer: {
    alignSelf: "stretch",
    justifyContent: "center",
    flex: 2,
    margin: 10
  },
  textInput: {
    padding: 20,
    borderBottomColor: "#13881F",
    borderBottomWidth: 1
  },
  error: {
    color: "red",
    marginTop: 10
  }
});
