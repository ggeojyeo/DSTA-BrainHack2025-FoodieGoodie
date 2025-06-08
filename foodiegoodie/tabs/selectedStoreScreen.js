import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView, TextInput, FlatList } from 'react-native';
import { colours } from '../utils/colours';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState, useEffect, useContext } from 'react';
import SelectedStoreNavBar from '../components/SelectedStoreNavBar';
import BottomNavBar from '../components/BottomNavBar';
import SelectedStoreCard from '../components/SelectedStoreCard';
import { StoreContext } from '../context/StoreContext';

export default function SelectedStoreScreen() {
    const navigation = useNavigation();
    // const route = useRoute();
    // const { storeName, storeDistance, storeAddress, storeImage } = route.params;
    const [search, setSearch] = useState("");
    const [items, setItems] = useState([]);

    const { store } = useContext(StoreContext);

    useEffect(() => {
        (async () => {
          // Dummy data for now, replace with API fetch
          const dummyItems = [
            {
                id: "1",
                name: "Soya Sauce",
                stock: 20,
                country: 'Malaysia',
                image: require("../assets/SoyaSauce(Light).png")
            },
            {
                id: "2",
                name: "Milo Powder 1kg",
                stock: 281,
                country: 'Australia',
                image: require("../assets/miloPowder1kg.png"),
            },
            {
                id: "3",
                name: "Pasar Fresh Eggs",
                stock: 0,
                country: 'Malaysia',
                image: require("../assets/eggsPasar10.png"),
            },
          ];
    
          setItems(dummyItems);
        })();
      }, []);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{paddingBottom: 80}}>
                <SelectedStoreNavBar/>
                <Text style={[styles.storeName, {marginBottom: 10}]}>{store?.name}</Text>
                <Image style={styles.storeImage} source={store?.image} />
                {/* Summary Card */}
                <View style={styles.cardSummary}>
                    <Text style={{ fontWeight: "bold", marginBottom: 4 }}>Address:</Text>
                    <Text style={{ marginBottom: 10 }}>
                        {store?.address}
                    </Text>
                    <TouchableOpacity style={styles.directionsBtn}>
                        <Image source={require("../assets/purpleDirectionIcon.png")} style={styles.directionsIcon} />
                        <Text style={{ color: "#583CFF" }}>Directions</Text>
                    </TouchableOpacity>
                </View>
                <Text style={[styles.storeName, {marginVertical: 12}]}>Items in Stock</Text>
                <View style={styles.searchContainer}>
                    <TextInput
                    placeholder="Search for Items..."
                    value={search}
                    onChangeText={setSearch}
                    style={styles.searchBar}
                    />
                    <TouchableOpacity style={styles.searchBtn} onPress={() => navigation.navigate("SearchItemPage",{searchedValue: search})}>
                    <Image source={require("../assets/searchIcon.png")} style={styles.searchIcon} />
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 8, marginBottom: 8 }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={items.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))}
                        keyExtractor={(object) => object.id}
                        renderItem={({ item: storeItem }) => (
                            <SelectedStoreCard itemName={storeItem.name} itemImage={storeItem.image} itemCountry={storeItem.country} itemStock={storeItem.stock}/>
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
    storeName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#4B0082",   
        marginLeft: 16,
    },
    storeImage: {
        height: 180,
        marginHorizontal: 16,
        borderRadius: 16,
        overflow: "hidden",
        marginBottom: 6,
        elevation: 3,
        width: '92%',
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
})