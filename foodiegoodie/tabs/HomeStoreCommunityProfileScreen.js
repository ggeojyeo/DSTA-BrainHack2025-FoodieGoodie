// import React from "react";
// import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView, TextInput, FlatList } from 'react-native';
// import { colours } from '../utils/colours';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { useState, useEffect, useContext } from 'react';
// import HomeStoreCommunityProfileBottomNavBar from "../components/HomeStoreCommunityProfileBottomNavBar";
// import HomeStoreCommunityProfileNavBar from "../components/HomeStoreCommunityProfileNavBar";
// import { StoreContext } from "../context/StoreContext";
// import MapView from "react-native-maps";


// export default function HomeStoreCommunityProfileScreen() {
//     const navigation = useNavigation();
//     const { store } = useContext(StoreContext);

//     return (
//         <View style={styles.container}>
//             <ScrollView contentContainerStyle={{paddingBottom: 80}}>
//                 <HomeStoreCommunityProfileNavBar/>
//                 <Text style={[styles.title, {marginBottom: 10}]}>Enroute to {store?.name}</Text>
//                 <View style={styles.cardMap}>
//                     <MapView>

//                     </MapView>
//                 </View>
//                 {/* Summary Card */}
//                 <View style={styles.cardSummary}>
//                     <Text style={{ fontWeight: "bold", marginBottom: 4 }}>Summary:</Text>
//                     <Text style={{ marginBottom: 10 }}>
//                         Address: {store?.address}
//                     </Text>
//                     <TouchableOpacity style={styles.directionsBtn} onPress={() => navigation.navigate("SelectedStoreScreen")}>
//                         <Image source={require("../assets/purpleDirectionIcon.png")} style={styles.directionsIcon} />
//                         <Text style={{ color: "#583CFF" }}>Arrived at Destination</Text>
//                     </TouchableOpacity>
//                 </View>
//             </ScrollView>
//             <HomeStoreCommunityProfileBottomNavBar/>
//         </View>
//     ) 
// }

// const styles = StyleSheet.create({
//     container: { 
//         flex: 1, 
//         backgroundColor: "#fff" 
//     },
//     title: {
//         fontSize: 22,
//         fontWeight: "bold",
//         color: "#4B0082",   
//         marginLeft: 16,
//         marginTop: 10,
//     },
//     cardSummary: {
//         backgroundColor: "#F8F9FA",
//         padding: 16,
//         margin: 16,
//         marginBottom: 4,
//         borderRadius: 12,
//         shadowColor: 'black',
//         shadowOffset: {
//             width: 0,
//             height: 4,
//         },
//         elevation: 3
//     },
//     directionsBtn: {
//         flexDirection: "row",
//         alignItems: "center",
//     },
//     directionsIcon: {
//         width: 16,
//         height: 16,
//         marginRight: 8,
//     },
//     cardMap: {
//     height: 440,
//     marginHorizontal: 16,
//     borderRadius: 16,
//     overflow: "hidden",
//     outlineColor: 'black',
//     outlineWidth: 2,
//     marginBottom: 6,
//     elevation:3,
//   },
// })

import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import { StoreContext } from "../context/StoreContext";
import HomeStoreCommunityProfileNavBar from "../components/HomeStoreCommunityProfileNavBar";
import HomeStoreCommunityProfileBottomNavBar from "../components/HomeStoreCommunityProfileBottomNavBar";

export default function HomeStoreCommunityProfileScreen() {
  const navigation = useNavigation();
  const { store } = useContext(StoreContext);

  const [userLocation, setUserLocation] = useState(null);
  const [storeCoords, setStoreCoords] = useState(null);

  useEffect(() => {
    (async () => {
      // Get user location
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.warn("Location permission denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setUserLocation(location.coords);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      // Convert store address to coordinates
      if (store?.address) {
        const geocode = await Location.geocodeAsync(store.address);
        if (geocode.length > 0) {
          setStoreCoords({
            latitude: geocode[0].latitude,
            longitude: geocode[0].longitude,
          });
        }
      }
    })();
  }, [store]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <HomeStoreCommunityProfileNavBar />
        <Text style={[styles.title, { marginBottom: 10 }]}>
          Enroute to {store?.name}
        </Text>

        <View style={styles.cardMap}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: userLocation?.latitude || 1.3521,
              longitude: userLocation?.longitude || 103.8198,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            showsUserLocation
          >
            {userLocation && (
              <Marker coordinate={userLocation} title="You" pinColor="blue" />
            )}
            {storeCoords && (
              <Marker coordinate={storeCoords} title={store?.name} />
            )}
            {userLocation && storeCoords && (
              <Polyline
                coordinates={[userLocation, storeCoords]}
                strokeColor="#583CFF"
                strokeWidth={4}
              />
            )}
          </MapView>
        </View>

        {/* Summary Card */}
        <View style={styles.cardSummary}>
          <Text style={{ fontWeight: "bold", marginBottom: 4 }}>Summary:</Text>
          <Text style={{ marginBottom: 10 }}>Address: {store?.address}</Text>
          <TouchableOpacity
            style={styles.directionsBtn}
            onPress={() => navigation.navigate("SelectedStoreScreen")}
          >
            <Image
              source={require("../assets/purpleDirectionIcon.png")}
              style={styles.directionsIcon}
            />
            <Text style={{ color: "#583CFF" }}>Arrived at Destination</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <HomeStoreCommunityProfileBottomNavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4B0082",
    marginLeft: 16,
    marginTop: 10,
  },
  cardMap: {
    height: 440,
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: "hidden",
    outlineColor: "black",
    outlineWidth: 2,
    marginBottom: 6,
    elevation: 3,
  },
  cardSummary: {
    backgroundColor: "#F8F9FA",
    padding: 16,
    margin: 16,
    marginBottom: 4,
    borderRadius: 12,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
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
});
