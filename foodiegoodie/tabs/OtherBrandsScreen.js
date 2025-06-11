import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView, TextInput, FlatList } from 'react-native';
import { colours } from '../utils/colours';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState, useEffect, useContext } from 'react';
import OtherBrandsNavBar from '../components/OtherBrandsNavBar';
import BottomNavBar from '../components/BottomNavBar';
import { ItemContext } from '../context/ItemContext';
import OtherBrandsItemCard from '../components/OtherBrandsItemCard';

export default function OtherBrandsScreen() {
    const [otherBrandsSearch, setOtherBrandsSearch] = useState("");
    const navigation = useNavigation();
    const [items, setItems] = useState([]);

    useEffect(() => {
            (async () => {
              const dummyOtherItems = [
                {
                    id: "1",
                    name: "N&N Big Fresh Eggs",
                    stock: 50,
                    country: 'Singapore',
                    image: require("../assets/M&NBigFreshEggs.png")
                },
                {
                    id: "2",
                    name: "Seng Choon Eggs",
                    stock: 38,
                    country: 'Singapore',
                    image: require("../assets/sengChoonEggs.png"),
                },
                {
                    id: "3",
                    name: "Chef Quail Eggs",
                    stock: 71,
                    country: 'Singapore',
                    image: require("../assets/chefQuailEggs.png"),
                },
              ];
        
              setItems(dummyOtherItems);
            })();
          }, []);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{paddingBottom: 80}}>
                <OtherBrandsNavBar/>
                <Text style={[styles.title, {marginBottom: 10}]}>Showing 3 Other Results</Text>
                <View style={styles.searchContainer}>
                    <TextInput
                    placeholder="Search for Brand..."
                    value={otherBrandsSearch}
                    onChangeText={setOtherBrandsSearch}
                    style={styles.searchBar}
                    />
                    {/* <TouchableOpacity style={styles.searchBtn} onPress={() => navigation.navigate("SearchItemPage",{searchedValue: otherBrandsSearch})}>
                    <Image source={require("../assets/searchIcon.png")} style={styles.searchIcon} />
                    </TouchableOpacity> */}
                </View>
                <View style={{marginTop: 8, marginBottom: 8 }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={items.filter((q) => q.name.toLowerCase().includes(otherBrandsSearch.toLowerCase()))}
                        keyExtractor={(object) => object.id}
                        renderItem={({ item: otherItem }) => (
                            <OtherBrandsItemCard itemName={otherItem.name} itemImage={otherItem.image} itemCountry={otherItem.country} itemStock={otherItem.stock}/>
                        )}
                    />
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
    searchContainer: {
        marginHorizontal: 16,
        marginBottom: 20,
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
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#4B0082",   
        marginLeft: 24,
        marginBottom: 10,
        marginTop: 30,
    },
})