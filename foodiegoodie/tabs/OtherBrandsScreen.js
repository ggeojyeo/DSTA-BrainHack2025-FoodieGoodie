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
////
    const route = useRoute();
    const { itemName } = route.params;

    // Map item names to categories
  const categoryMap = {
    "Soya Sauce": "soya_sauce",
    "Milo Powder 1kg": "chocolate_powder",
    "Pasar Fresh Eggs": "eggs"
  };

  const category = categoryMap[itemName] || "unknown";

    useEffect(() => {
            (async () => {
const dummyOtherItems = {
  soya_sauce: [
    {
      id: "1",
      name: "Tiger Brand Soya Sauce",
      stock: 25,
      country: "Singapore",
      image: require("../assets/soya_tiger1.png"),
    },
    {
      id: "2",
      name: "Standard Grade Light Soya Sauce",
      stock: 40,
      country: "Singapore",
      image: require("../assets/soya_green2.png"),
    },
    {
      id: "3",
      name: "Nanyang Sauce",
      stock: 33,
      country: "Singapore",
      image: require("../assets/soya_nanyang3.jpg"),
    },
  ],
  chocolate_powder: [
    {
      id: "1",
      name: "Cadbury Hot Chocolate Drink",
      stock: 70,
      country: "Indonesia",
      image: require("../assets/milo_cadbury1.png"),
    },
    {
      id: "2",
      name: "Hershey's Cocoa",
      stock: 22,
      country: "United States of America",
      image: require("../assets/milo_hershey2.png"),
    },
    {
      id: "3",
      name: "Lindt Hot Chocolate Drink Powder",
      stock: 55,
      country: "UK",
      image: require("../assets/milo_lindt3.png"),
    },
  ],
  eggs: [
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
  ],
  unknown: [],
};

        
setItems(dummyOtherItems[category] || []);            })();
          }, [category]);


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