import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {colours} from '../utils/colours';

export default function OtherStoresNavBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.navContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>            
        <Image source={require("../assets/backIcon.png")} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>Other Stores</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>            
        <Image source={require("../assets/profileIcon.png")} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 25,
      color: colours.background,
      marginVertical: 30,
      marginBottom: 0,
    },
  icon: { width: 30, height: 30 },
  title: { fontSize: 20, fontWeight: "bold" },
});
