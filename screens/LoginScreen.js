import * as React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { ScrollView } from "react-native-gesture-handler";

export default function LoginScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} placeholder="Username" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  textInput: {
    width: 200
  },
  textInputContainer: {
    marginTop: 40,
    marginBottom: 40,
    width: 200
  }
});
