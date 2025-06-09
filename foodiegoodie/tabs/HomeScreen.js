import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity, RefreshControl } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import BottomNavBar from "../components/BottomNavBar";
import { colours } from "../utils/colours";
import HomeNavBar from "../components/HomeNavBar";
import HomeStoreCard from "../components/HomeStoreCard";
import { StoreContext } from "../context/StoreContext";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [search, setSearch] = useState("");
  const [stores, setStores] = useState([]);
  const [closestStore, setClosestStore] = useState(null);
  const { store, setStore } = useContext(StoreContext);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

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
          address: "Blk 866A Tampines Street 83, Tampines Central 1, #01-01 Community Complex, 521866",
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
      <ScrollView 
        contentContainerStyle={{paddingBottom: 80}} 
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} progressViewOffset={70}/>
      }>
        {/* Floating Top Nav */}
        <HomeNavBar/>
        {/* Current Location Section */}
        <Text style={[styles.sectionHeader, {marginBottom: 10}]}>Current Location</Text>
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
          <TouchableOpacity style={styles.directionsBtn} onPress={() => {setStore({
                    name: closestStore?.name,
                    distance: closestStore?.distance,
                    address: closestStore?.address,
                    image: closestStore?.image,
                }), navigation.navigate("HomeStoreCommunityProfileScreen")}}>
            <Image source={require("../assets/purpleDirectionIcon.png")} style={styles.directionsIcon} />
            <Text style={{ color: "#583CFF" }}>Directions</Text>
          </TouchableOpacity>
        </View>

        {/* Nearby Stores */}
        <Text style={[styles.sectionHeader, {marginVertical: 12,}]}>Nearby Stores</Text>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search for Store..."
            value={search}
            onChangeText={setSearch}
            style={styles.searchBar}
          />
          <TouchableOpacity style={styles.searchBtn} onPress={() => navigation.navigate("OtherStoresScreen")}>
            <Image source={require("../assets/searchIcon.png")} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 8, marginBottom: 8 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={stores.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <HomeStoreCard storeName={item.name} storeImage={item.image} storeDistance={item.distance} storeAddress={item.address}/>
            )}
          />
        </View>
      </ScrollView>

      <BottomNavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4B0082",
    marginLeft: 16,
  },
  cardMap: {
    height: 180,
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: "hidden",
    outlineColor: 'black',
    outlineWidth: 2,
    marginBottom: 6,
    elevation:3,
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
    elevation: 3,
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
});
