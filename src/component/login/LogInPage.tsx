import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Button,
  Image,
} from "react-native";

function LogInPage() {
  const [input, setInput] = useState("");
  return (
    <SafeAreaView>
      <Text>Welcome to Loreal !</Text>
      <Text> Log in</Text>
      <StatusBar style="auto" />
      <TextInput onChangeText={setInput} value={input}>
        Email/ User Name
      </TextInput>
      <Button title="Log In"> </Button>
    </SafeAreaView>
  );
}

export default LogInPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
