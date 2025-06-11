import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ItemContext } from '../context/ItemContext';
import { useContext, useEffect } from 'react';

export default function SelectedStoreCard({ itemName, itemStock, itemImage, itemCountry }) {
    const navigation = useNavigation();

    const { item, setItem } = useContext(ItemContext);

    useEffect(() => {
        setItem({
            name: itemName,
            stock: itemStock,
            image: itemImage,
            country: itemCountry,
        });
    }, [itemName, itemStock, itemImage, itemCountry]);

    return (
        <View style={styles.itemCard}>
            <View style={styles.imageBG}>
                <Image source={itemImage} style={styles.itemImage} resizeMode='contain'/>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.itemName}>{itemName}</Text>
                <Text style={styles.itemCountry}>Country: {itemCountry}</Text>
                {itemStock == 0 && (
                    <Text style={[styles.itemStock, {color: 'red', fontSize: 20, alignSelf: 'center'}]}>Out of Stock</Text>
                )}
                {itemStock > 0 && itemStock <= 20 && (
                    <Text style={styles.itemStock}>In-Stock: {itemStock}</Text>
                )}
                {itemStock > 20 && (
                    <Text style={styles.itemStock}>In-Stock: {itemStock}</Text>
                )}
                {itemStock > 0 && itemStock <= 20 && (
                    <Text style={styles.lowStockAlert}>Low Stock Alert!</Text>
                )}
            </View>
            <View style={styles.itemButtons}>
                <TouchableOpacity style={styles.otherStoresBtn} onPress={() => navigation.navigate("OtherStoresScreen")}>
                    <Text>Other Stores</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.otherBrandsBtn} onPress={() => {navigation.navigate("OtherBrandsScreen", {
                    itemName: itemName,
                })}}>
                <Text style={{color: 'white'}}>Other Brands</Text>
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
    itemImage: {
        width: '100%',
        height: 160,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        resizeMode: 'cover',
    },
    itemName: { 
        fontWeight: "bold", 
        fontSize: 20, 
        marginBottom: 4,
    },
    itemStock: {
        fontSize: 16, 
        color: "#666", 
        marginBottom: 6,
    },
    itemCountry: { 
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
        justifyContent: "space-between",
        marginBottom: 12,
        paddingHorizontal: 12,
    },
    otherStoresBtn: {
        backgroundColor: "white",
        padding: 6,
        borderRadius: 30,
        height: 40,
        width: 100,
        borderWidth: 1,
        borderColor: '#CAC4D0',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    otherBrandsBtn: {
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