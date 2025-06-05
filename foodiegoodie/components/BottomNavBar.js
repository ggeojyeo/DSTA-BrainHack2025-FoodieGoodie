import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function BottomNavBar() {
  const navigation = useNavigation();
  const route = useRoute();
  const currentScreen = route.name;
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={currentScreen === "HomeScreen" ? styles.tabClicked : styles.tabNormal} onPress={() => navigation.navigate("HomeScreen")}>
          <Image
            source={
              currentScreen === "HomeScreen" ? require("../assets/whiteHomeIcon.png") : require("../assets/purpleHomeIcon.png")
            }
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.label}>Home</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={currentScreen === "CommunityScreen" ? styles.tabClicked : styles.tabNormal} onPress={() => navigation.navigate("CommunityScreen")}>
          <Image
            source={
              currentScreen === "CommunityScreen" ? require("../assets/whiteCommunityIcon.png") : require("../assets/purpleCommunityIcon.png")
            }
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.label}>Community</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={currentScreen === "ProfileScreen" ? styles.tabClicked : styles.tabNormal} onPress={() => navigation.navigate("ProfileScreen")}>
          <Image
            source={
              currentScreen === "ProfileScreen" ? require("../assets/whiteProfileIcon.png") : require("../assets/purpleProfileIcon.png")
            }
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.label}>Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    paddingBottom: 20,
    backgroundColor: "#fff",
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  tabNormal: {
    alignItems: "center",
  },
  tabClicked: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: '#583CFF',
    paddingVertical: 2,
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: "#24167A",
    alignContent: 'center'
  },
});
