import * as React from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-material-ui";

import BigIcon from "../assets/images/icon-big.png";
import { AuthSession } from "expo";

export default function LoginScreen({ navigation }) {
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
        <TextInput style={styles.textInput} placeholder="Username" />
        <TextInput style={styles.textInput} placeholder="Password" />
        <Button
          style={{
            container: { height: 50, marginTop: 40 },
            text: { fontSize: 10 }
          }}
          raised
          primary
          text="Submit"
        />
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
  }
});
