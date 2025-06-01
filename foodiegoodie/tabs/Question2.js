import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colours } from "../utils/colours";

export default function Question2() {
  const [dietary, setDietary] = useState("");
  const [medication, setMedication] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Questionnaire</Text>
      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>
      <Text style={styles.step}>Step 2 of 3</Text>
      <Text style={styles.title}>Tell us more about you</Text>

      <TextInput
        placeholder="Any dietary restrictions?"
        style={styles.input}
        value={dietary}
        onChangeText={setDietary}
      />
      <TextInput
        placeholder="Any important medication info?"
        style={styles.input}
        value={medication}
        onChangeText={setMedication}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Question3")}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#fff"
  },
  header: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
  },
  progressBar: {
    height: 6,
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 20,
  },
  progressFill: {
    width: "66%", 
    height: "100%",
    backgroundColor: colours.lightPurple,
  },
  step: {
    fontSize: 13,
    color: "#777",
    textAlign: "center",
    marginBottom: 20,
  },
  title: { 
    fontSize: 16, 
    fontWeight: "500", 
    marginBottom: 20, 
    textAlign: "center" 
  },
  input: { 
    borderWidth: 1, 
    borderColor: "#ccc", 
    padding: 12, 
    marginBottom: 20, 
    borderRadius: 10 
  },
  button: { 
    backgroundColor: colours.darkPurple,
    padding: 15, 
    borderRadius: 10, 
    alignItems: "center" 
  },
  buttonText: { 
    color: "white", 
    fontWeight: "bold" 
  },
});
