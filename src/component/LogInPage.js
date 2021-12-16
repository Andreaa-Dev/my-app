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
  const [inout, setInput] = useState("");
  return (
    <View>
      <Text>Welcome to ADN !</Text>
      <Text> Log in</Text>
      <StatusBar style="auto" />
      <TextInput> Email/ User Name</TextInput>
      <TextInput> Password</TextInput>
      <Button title="Log In"> </Button>
      <Image source={require("../../assets/mainPage.jpeg")}></Image>
    </View>
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
