import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colours } from "../utils/colours";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function Question1() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [seniors, setSeniors] = useState(0);
  const [hasPets, setHasPets] = useState(false);
  const navigation = useNavigation();

  const CounterCard = ({ icon, label, value, setValue }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        {icon}
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.counter}>
        <TouchableOpacity onPress={() => setValue(Math.max(0, value - 1))}>
          <Text style={styles.btn}>−</Text>
        </TouchableOpacity>
        <Text style={styles.value}>{value}</Text>
        <TouchableOpacity onPress={() => setValue(value + 1)}>
          <Text style={styles.btn}>＋</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Questionnaire</Text>
      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>
      <Text style={styles.step}>Step 1 of 3</Text>
      <Text style={styles.title}>How many people live in your household?</Text>

      <CounterCard
        icon={<FontAwesome6 name="person" size={24} color="black" />}
        label="Adults"
        value={adults}
        setValue={setAdults}
      />
      <CounterCard
        icon={<FontAwesome6 name="child" size={24} color="black" />}
        label="Children"
        value={children}
        setValue={setChildren}
      />
      <CounterCard
        icon={<FontAwesome6 name="person-cane" size={24} color="black" />}
        label="Seniors"
        value={seniors}
        setValue={setSeniors}
      />

      <View
        style={[
          styles.card,
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
      >
        <View style={styles.cardContent}>
          <FontAwesome6 name="dog" size={24} color="black" />
          <Text style={styles.label}>Pets</Text>
        </View>
        <Switch value={hasPets} onValueChange={setHasPets} />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Question2")}
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
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
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
    marginBottom: 16,
    textAlign: "center",
  },
  progressBar: {
    height: 6,
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 20,
  },
  progressFill: {
    width: "33%",
    height: "100%",
    backgroundColor: colours.lightPurple,
  },
  card: {
    backgroundColor: "#f4f4f4",
    borderRadius: 12,
    padding: 14,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  btn: {
    fontSize: 20,
    paddingHorizontal: 10,
    color: colours.darkPurple,
  },
  value: {
    fontSize: 16,
    width: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: colours.darkPurple,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
