import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView, TextInput, FlatList } from 'react-native';
import { colours } from '../utils/colours';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState, useEffect, useContext } from 'react';
import HomeStoreCommunityProfileBottomNavBar from "../components/HomeStoreCommunityProfileBottomNavBar";
import HomeStoreCommunityProfileNavBar from "../components/HomeStoreCommunityProfileNavBar";
import { StoreContext } from "../context/StoreContext";
import MapView from "react-native-maps";

export default function HomeStoreCommunityProfileScreen() {
    const navigation = useNavigation();
    const { store } = useContext(StoreContext);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{paddingBottom: 80}}>
                <HomeStoreCommunityProfileNavBar/>
                <Text style={[styles.title, {marginBottom: 10}]}>Enroute to {store?.name}</Text>
                <View style={styles.cardMap}>
                    <MapView>

                    </MapView>
                </View>
                {/* Summary Card */}
                <View style={styles.cardSummary}>
                    <Text style={{ fontWeight: "bold", marginBottom: 4 }}>Summary:</Text>
                    <Text style={{ marginBottom: 10 }}>
                        Address: {store?.address}
                    </Text>
                    <TouchableOpacity style={styles.directionsBtn} onPress={() => navigation.navigate("SelectedStoreScreen")}>
                        <Image source={require("../assets/purpleDirectionIcon.png")} style={styles.directionsIcon} />
                        <Text style={{ color: "#583CFF" }}>Arrived at Destination</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <HomeStoreCommunityProfileBottomNavBar/>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: "#fff" 
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#4B0082",   
        marginLeft: 16,
        marginTop: 10,
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
        elevation: 3
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
    cardMap: {
    height: 440,
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: "hidden",
    outlineColor: 'black',
    outlineWidth: 2,
    marginBottom: 6,
    elevation:3,
  },
})