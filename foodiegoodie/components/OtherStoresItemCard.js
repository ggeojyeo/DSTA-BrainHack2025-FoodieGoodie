import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ItemContext } from '../context/ItemContext';
import { useContext, useEffect } from 'react';
import { StoreContext } from '../context/StoreContext';

export default function OtherBrandsItemCard({ otherStoreName, otherStoreImage, otherStoreAddress, otherStoreStock }) {
    const navigation = useNavigation();

    const { store, setStore } = useContext(StoreContext);

    return (
        <View style={styles.itemCard}>
            <Image source={otherStoreImage} style={styles.otherStoreImage}/>

            <View style={styles.contentContainer}>
                <Text style={styles.otherStoreName}>{otherStoreName}</Text>
                <Text style={styles.otherStoreAddress}>Address: {otherStoreAddress}</Text>
                {otherStoreStock == 0 && (
                    <Text style={[styles.otherStoreStock, {color: 'red', fontSize: 20, alignSelf: 'center'}]}>Out of Stock</Text>
                )}
                {otherStoreStock > 0 && otherStoreStock <= 20 && (
                    <Text style={styles.otherStoreStock}>In-Stock: {otherStoreStock}</Text>
                )}
                {otherStoreStock > 20 && (
                    <Text style={styles.otherStoreStock}>In-Stock: {otherStoreStock}</Text>
                )}
                {otherStoreStock > 0 && otherStoreStock <= 20 && (
                    <Text style={styles.lowStockAlert}>Low Stock Alert!</Text>
                )}
            </View>
            <View style={styles.itemButtons}>
                <TouchableOpacity style={styles.otherDirectionBtn} onPress={() => {setStore({
            name: otherStoreName,
            stock: otherStoreStock,
            image: otherStoreImage,
            address: otherStoreAddress,
        }); navigation.navigate("HomeStoreCommunityProfileScreen")}}>
                    <Image source={require("../assets/whiteDirectionIcon.png")} style={styles.directionsIcon} />
                    <Text style={{color: 'white'}}>Directions</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 12,
        paddingTop: 10,
        flex: 1,
    },
    imageBG: {
        width: "100%",
        backgroundColor: 'white',
        height: 160,

    },
    otherStoreImage: {
        width: '100%',
        height: 160,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        resizeMode: 'cover',
    },
    otherStoreName: { 
        fontWeight: "bold", 
        fontSize: 20, 
        marginBottom: 4,
    },
    otherStoreStock: {
        fontSize: 16, 
        color: "#666", 
        marginBottom: 6,
    },
    otherStoreAddress: { 
        fontSize: 14, 
        color: "#666", 
        marginBottom: 30,
    },
    lowStockAlert: {
        fontSize: 16,
        color: 'red',
        marginTop: 4,
    },
    itemCard: {
        width: 275,
        height: 400,
        marginHorizontal: 10,
        backgroundColor: "#F8F9FA",
        borderRadius: 16,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        overflow: 'hidden',
        marginBottom: 10,
    },
    itemButtons: { 
        flexDirection: "row", 
        justifyContent: "center",
        marginBottom: 12,
        paddingHorizontal: "25%",
    },
    otherDirectionBtn: {
        backgroundColor: "#24167A",
        height: 40,
        width: 120,
        padding: 6,
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    directionsIcon: {
        width: 16,
        height: 16,
        marginRight: 8,
    },
})