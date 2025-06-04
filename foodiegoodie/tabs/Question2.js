import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { colours } from "../utils/colours";

export default function Question3() {
  const [rice, setRice] = useState("");
  const [canned, setCanned] = useState("");
  const [instant, setInstant] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Questionnaire</Text>
      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>
      <Text style={styles.step}>Step 2 of 2</Text>
      <Text style={styles.title}>Current Supply List</Text>

      <View style={styles.inputGroup}>
        <Text>Rice/Noodles (kg)</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={rice} onChangeText={setRice} />
      </View>

      <View style={styles.inputGroup}>
        <Text>Canned Food (units)</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={canned} onChangeText={setCanned} />
      </View>

      <View style={styles.inputGroup}>
        <Text>Instant Food (units)</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={instant} onChangeText={setInstant} />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 10 }}>
        <Text style={{ color: "#999", textAlign: "center" }}>Skip This Step</Text>
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
    width: "100%", 
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
  inputGroup: { 
    marginBottom: 20 
  },
  input: { 
    borderWidth: 1, 
    borderColor: "#ccc", 
    padding: 12, 
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
