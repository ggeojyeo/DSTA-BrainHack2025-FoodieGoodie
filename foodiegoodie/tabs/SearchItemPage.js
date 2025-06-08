import React, { use } from 'react'
import { View, Text, StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity, RefreshControl } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import BottomNavBar from "../components/BottomNavBar";
import SearchItemPageNavBar from '../components/SearchItemPageNavBar';
import { useState, useEffect, useContext } from 'react';
import { colours } from '../utils/colours';
import { ItemContext } from '../context/ItemContext';

export default function SearchItemPage() {
    const navigation = useNavigation();
    const { item } = useContext(ItemContext);
    const route = useRoute();
    const { searchedValue } = route.params;
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{paddingBottom: 80}}>
                <SearchItemPageNavBar/>
                <Text style={styles.searchTitle}>Search Results for "{searchedValue}"</Text>
                <View style={styles.imageContainer}>
                    <Image style={styles.itemImage} 
                        source={item?.image} resizeMode='contain'/>
                </View>
                <View style={styles.cardInformation}>
                    {item?.stock == 0 && (
                        <Text style={[styles.itemStock, {color: 'red', fontSize: 20, alignSelf: 'center'}]}>Out of Stock</Text>
                    )}
                    {item?.stock > 0 && item?.stock <= 20 && (
                        <Text style={styles.itemStock}>In-Stock: {item?.stock}</Text>
                    )}
                    {item?.stock > 20 && (
                        <Text style={styles.itemStock}>In-Stock: {item?.stock}</Text>
                    )}
                    {item?.stock > 0 && item?.stock <= 20 && (
                        <Text style={styles.lowStockAlert}>Low Stock Alert!</Text>
                    )}
                    <Text>
                        Would you like to:
                    </Text>
                    <Text>1. Select Alternative Brands in the same store <Text style={{fontWeight: 'bold'}}>OR</Text></Text>
                    <Text style={{marginBottom: 6}}>2. Select Alternative Stores with the same brand</Text>
                    <View style={styles.itemButtons}>
                        <TouchableOpacity style={styles.otherStoresBtn} onPress={() => {navigation.navigate("OtherStoresScreen")}}>
                            <Text style={{ color: "#583CFF" }}>Other Stores</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.otherBrandsBtn} onPress={() => {navigation.navigate("OtherBrandsScreen")}}>
                            <Text style={{ color: "#583CFF" }}>Other Brands</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <BottomNavBar/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#fff" 
    },
    searchTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#4B0082",   
        marginLeft: 16,
        marginTop: 20,
    },
    itemImage: {
        width: 180, // or any fixed size like '100%' if inside a container
        height: 180, // square shape
        borderRadius: 16,
        marginBottom: 6,
        elevation: 3,
        backgroundColor: '#fff' // optional: helps with image boundaries if it's smaller
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    otherBrandsBtn: {
        flexDirection: "row",
        alignItems: "center",
    },
    otherStoresBtn: {
        flexDirection: "row",
        alignItems: "center",
    },
    directionsIcon: {
        width: 16,
        height: 16,
        marginRight: 8,
    },
    cardInformation: {
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
    itemStock: {
        fontSize: 16, 
        color: "#666", 
        marginBottom: 4,
    },
    lowStockAlert: {
        fontSize: 16,
        color: 'red',
        marginBottom: 4,
    },
    itemButtons: { 
        flexDirection: "row", 
        justifyContent: "space-between",
        marginBottom: 12,
        paddingHorizontal: 12,
    },
})