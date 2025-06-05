import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { colours } from "../utils/colours";
import { useNavigation } from "@react-navigation/native";
import BottomNavBar from "../components/BottomNavBar";

export default function ProfileScreen() {


    return(
        <View style={styles.container}>
            <Text>
                Hello Mogon
            </Text>

            <BottomNavBar />
        </View>
    )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    color: colours.background,
    marginVertical: 30,
    marginBottom: 0,
  },
})