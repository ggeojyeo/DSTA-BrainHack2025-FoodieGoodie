// import React from 'react';
// import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView, TextInput, FlatList } from 'react-native';
// import { colours } from '../utils/colours';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { useState, useEffect, useContext } from 'react';
// import BottomNavBar from '../components/BottomNavBar';
// import { ItemContext } from '../context/ItemContext';
// import OtherStoresItemCard from '../components/OtherStoresItemCard';
// import OtherStoresNavBar from '../components/OtherStoresNavBar';

// export default function OtherStoresScreen() {
//     const [otherStoresSearch, setOtherStoresSearch] = useState("");
//     const navigation = useNavigation();
//     const [otherStore, setotherStore] = useState([]);

//     useEffect(() => {
//             (async () => {
//               // Dummy data for now, replace with API fetch
//               const dummyOtherStores = [
//                 {
//                     id: "1",
//                     name: "Sheng Siong",
//                     stock: 61,
//                     address: '872C Tampines Street 86, #02-01, Singapore 523872',
//                     image: require("../assets/shengsiongv2.png")
//                 },
//                 {
//                     id: "2",
//                     name: "Cold Storage",
//                     stock: 99,
//                     address: '10 Tampines Central 1, B1-01/02, Singapore 529536',
//                     image: require("../assets/coldstorage.png"),
//                 },
//               ];
        
//               setotherStore(dummyOtherStores);
//             })();
//           }, []);

//     return (
//         <View style={styles.container}>
//             <ScrollView contentContainerStyle={{paddingBottom: 80}}>
//                 <OtherStoresNavBar/>
//                 <Text style={[styles.title, {marginBottom: 10}]}>Showing 2 Other Stores</Text>
//                 <View style={styles.searchContainer}>
//                     <TextInput
//                     placeholder="Search for Store..."
//                     value={otherStoresSearch}
//                     onChangeText={setOtherStoresSearch}
//                     style={styles.searchBar}
//                     />
//                     {/* <TouchableOpacity style={styles.searchBtn} onPress={() => navigation.navigate("SearchItemPage",{searchedValue: otherStoresSearch})}>
//                     <Image source={require("../assets/searchIcon.png")} style={styles.searchIcon} />
//                     </TouchableOpacity> */}
//                 </View>
//                 <View style={{marginTop: 8, marginBottom: 8 }}>
//                     <FlatList
//                         horizontal
//                         showsHorizontalScrollIndicator={false}
//                         data={otherStore.filter((q) => q.name.toLowerCase().includes(otherStoresSearch.toLowerCase()))}
//                         keyExtractor={(object) => object.id}
//                         renderItem={({ item: otherStores }) => (
//                             <OtherStoresItemCard otherStoreName={otherStores.name} otherStoreImage={otherStores.image} otherStoreAddress={otherStores.address} otherStoreStock={otherStores.stock}/>
//                         )}
//                     />
//                 </View>
//             </ScrollView>
//             <BottomNavBar/>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: { 
//         flex: 1, 
//         backgroundColor: "#fff" 
//     },
//     searchContainer: {
//         marginHorizontal: 16,
//         marginBottom: 20,
//         position: "relative",
//         justifyContent: "center",
//     },
//     searchIcon: {
//         width: 24,
//         height: 24,
//         marginLeft: 8,
//     },
//     searchBtn: {
//         position: "absolute",
//         right: 10 ,
//         top: "50%",
//         transform: [{ translateY: -13 }], // vertically center the icon
//         padding: 3, // make it pressable
//     },
//     searchBar: {
//         paddingVertical: 8,
//         paddingRight: 0,
//         paddingLeft: 15,
//         borderRadius: 10,
//         alignItems: 'center',
//         backgroundColor: '#F8F9FA',
//     },
//     title: {
//         fontSize: 16,
//         fontWeight: "bold",
//         color: "#4B0082",   
//         marginLeft: 24,
//         marginBottom: 10,
//         marginTop: 30,
//     },
// })

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from '../components/BottomNavBar';
import OtherStoresItemCard from '../components/OtherStoresItemCard';
import OtherStoresNavBar from '../components/OtherStoresNavBar';

export default function OtherStoresScreen() {
    const [otherStoresSearch, setOtherStoresSearch] = useState("");
    const navigation = useNavigation();
    const [otherStore, setOtherStore] = useState([]);

    useEffect(() => {
        (async () => {
            const dummyOtherStores = [
                {
                    id: "1",
                    name: "Sheng Siong",
                    stock: 61,
                    address: '872C Tampines Street 86, #02-01, Singapore 523872',
                    image: require("../assets/shengsiongv2.png"),
                },
                {
                    id: "2",
                    name: "Cold Storage",
                    stock: 99,
                    address: '10 Tampines Central 1, B1-01/02, Singapore 529536',
                    image: require("../assets/coldstorage.png"),
                },
            ];

            setOtherStore(dummyOtherStores);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                <OtherStoresNavBar />
                <Text style={styles.title}>Showing 2 Other Stores</Text>
                <View style={styles.searchContainer}>
                    <TextInput
                        placeholder="Search for Store..."
                        value={otherStoresSearch}
                        onChangeText={setOtherStoresSearch}
                        style={styles.searchBar}
                    />
                </View>
                <View style={{ marginTop: 8, marginBottom: 8 }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={otherStore.filter((q) =>
                            q.name.toLowerCase().includes(otherStoresSearch.toLowerCase())
                        )}
                        keyExtractor={(object) => object.id}
                        renderItem={({ item }) => (
                            <OtherStoresItemCard
                                otherStoreName={item.name}
                                otherStoreImage={item.image}
                                otherStoreAddress={item.address}
                                otherStoreStock={item.stock}
                            />
                        )}
                    />
                </View>
            </ScrollView>
            <BottomNavBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    searchContainer: {
        marginHorizontal: 16,
        marginBottom: 20,
        position: "relative",
        justifyContent: "center",
    },
    searchBar: {
        paddingVertical: 8,
        paddingLeft: 15,
        borderRadius: 10,
        backgroundColor: '#F8F9FA',
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#4B0082",
        marginLeft: 24,
        marginTop: 30,
    },
});
