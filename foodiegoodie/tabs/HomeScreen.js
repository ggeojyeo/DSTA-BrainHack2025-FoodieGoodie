import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import BottomNavBar from "../components/BottomNavBar";
import { colours } from "../utils/colours";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [search, setSearch] = useState("");
  const [stores, setStores] = useState([]);
  const [closestStore, setClosestStore] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);

      // Dummy stores for now, replace with API fetch
      const dummyStores = [
        {
          id: "1",
          name: "Fairprice Tampines CC",
          distance: "200m",
          address: "867 Tampines Street 83",
          image: require("../assets/fairprice.jpg"),
        },
        {
          id: "2",
          name: "Sheng Siong",
          distance: "350m",
          address: "Block 888, Tampines",
          image: require("../assets/shengsiong.jpg"),
        },
      ];

      setStores(dummyStores);
      setClosestStore(dummyStores[0]);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{paddingBottom: 80}}>
        {/* Floating Top Nav */}
        <View style={styles.topNav}>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>            
            <Image source={require("../assets/settingsIcon.png")} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.title}>Home</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>            
            <Image source={require("../assets/profileIcon.png")} style={styles.icon} />
          </TouchableOpacity>
        </View>

        {/* Current Location Section */}
        <Text style={styles.sectionHeader}>Current Location</Text>
        <View style={styles.cardMap}>
          {location && (
            <MapView
              style={{ flex: 1, borderRadius: 10 }}
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
              showsUserLocation
            >
              <Marker coordinate={location} title="You are here" />
            </MapView>
          )}
        </View>

        {/* Summary Card */}
        <View style={styles.cardSummary}>
          <Text style={{ fontWeight: "bold", marginBottom: 4 }}>Summary:</Text>
          <Text style={{ marginBottom: 10 }}>
            Closest grocery store to you is {closestStore?.name}. Click the button below for directions.
          </Text>
          <TouchableOpacity style={styles.directionsBtn}>
            <Image source={require("../assets/purpleDirectionIcon.png")} style={styles.directionsIcon} />
            <Text style={{ color: "#4B0082" }}>Directions</Text>
          </TouchableOpacity>
        </View>

        {/* Nearby Stores */}
        <Text style={styles.sectionHeader}>Nearby Stores</Text>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search for Store..."
            value={search}
            onChangeText={setSearch}
            style={styles.searchBar}
          />
          <TouchableOpacity style={styles.searchBtn} nPress={() => navigation.navigate("")}>
            <Image source={require("../assets/searchIcon.png")} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <View style={{ height: 340, marginTop: 8, marginBottom: 8 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={stores.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.storeCard}>
                <View style={{width: 275, height: 150, transform: [{translateX:-11}, {translateY:-11}],borderTopLeftRadius: 8, borderTopRightRadius: 8, overflow: 'hidden'}}>
                  <Image source={item.image} style={styles.storeImage} />
                </View>
                <Text style={styles.storeName}>{item.name}</Text>
                <Text style={styles.storeDistance}>{item.distance} away</Text>
                <Text style={styles.storeInfo}>Address: {item.address}</Text>
                <View style={styles.storeButtons}>
                  <TouchableOpacity style={styles.checkCardBtn}>
                    <Image source={require("../assets/checkIcon.png")} style={styles.directionsIcon} />
                    <Text>Check</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.directionsCardBtn}>
                    <Image source={require("../assets/whiteDirectionIcon.png")} style={styles.directionsIcon} />
                    <Text style={{color: 'white'}}>Directions</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <BottomNavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    color: colours.background,
  },
  icon: { width: 24, height: 24 },
  title: { fontSize: 20, fontWeight: "bold" },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4B0082",
    marginLeft: 16,
    marginVertical: 12,
  },
  cardMap: {
    height: 180,
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: "hidden",
    outlineColor: 'black',
    outlineWidth: 2,
    marginBottom: 6,
  },
  cardSummary: {
    backgroundColor: "#F8F9FA",
    padding: 16,
    margin: 16,
    marginBottom: 4,
    borderRadius: 12,
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
  },
  directionsBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  directionsIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  searchContainer: {
    marginHorizontal: 16,
    marginBottom: 10,
    position: "relative",
    justifyContent: "center",
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  searchBtn: {
    position: "absolute",
    right: 10 ,
    top: "50%",
    transform: [{ translateY: -13 }], // vertically center the icon
    padding: 3, // make it pressable
  },
  searchBar: {
    paddingVertical: 8,
    paddingRight: 0,
    paddingLeft: 15,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
  },
  storeCard: {
    width: 275,
    marginVertical:2,
    marginHorizontal: 10,
    padding: 12,
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
  },
  storeImage: {
    width: "100%",
    height: "100%",
    marginBottom: 8,
  },
  storeName: { fontWeight: "bold", fontSize: 20 },
  storeDistance: {fontSize: 12, color: "#666", marginBottom: 30},
  storeInfo: { fontSize: 12, color: "#666", marginBottom: 16 },
  storeButtons: { flexDirection: "row", justifyContent: "space-between" },
  checkCardBtn: {
    backgroundColor: "white",
    padding: 6,
    borderRadius: 30,
    height: 40,
    width: 80,
    outlineColor: '#CAC4D0',
    outlineWidth: 1,
    marginTop: 8,
    alignItems: 'center',
    flexDirection: 'row',
    verticalAlign: 'auto',
    justifyContent: 'center',
    marginLeft: 15,
  },
  directionsCardBtn: {
    backgroundColor: "#24167A",
    outlineColor: '#CAC4D0',
    outlineWidth: 1,
    height: 40,
    width: 120,
    padding: 6,
    borderRadius: 30,
    marginTop: 8,
    alignItems: 'center',
    flexDirection: 'row',
    verticalAlign: 'auto',
    justifyContent: 'center',
    marginRight: 15,
  },
});
