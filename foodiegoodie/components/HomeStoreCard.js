// import React from 'react';
// import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useContext } from 'react';
// import { StoreContext } from '../context/StoreContext';


// export default function HomeStoreCard({ storeName, storeDistance, storeAddress, storeImage }) {
//     const navigation = useNavigation();
//     const { store, setStore } = useContext(StoreContext);
    
//     return (
//         <View style={styles.storeCard}>
//             <Image source={storeImage} style={styles.storeImage} />

//             <View style={styles.contentContainer}>
//                 <Text style={styles.storeName}>{storeName}</Text>
//                 <Text style={styles.storeDistance}>Less than {storeDistance} away</Text>
//                 <Text style={styles.storeAddress}>Address: {storeAddress}</Text>
//             </View>
//             <View style={styles.storeButtons}>
//                 <TouchableOpacity style={styles.checkCardBtn} onPress={() => {setStore({
//                     name: storeName,
//                     distance: storeDistance,
//                     address: storeAddress,
//                     image: storeImage,
//                 }), navigation.navigate("SelectedStoreScreen")} }>
//                     <Image source={require("../assets/checkIcon.png")} style={styles.directionsIcon} />
//                     <Text>Check </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.directionsCardBtn} onPress={() => {setStore({
//                     name: storeName,
//                     distance: storeDistance,
//                     address: storeAddress,
//                     image: storeImage,
//                 }),navigation.navigate("HomeStoreCommunityProfileScreen")}}>
//                 <Image source={require("../assets/whiteDirectionIcon.png")} style={styles.directionsIcon} />
//                 <Text style={{color: 'white'}}>Directions</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     contentContainer: {
//         paddingHorizontal: 12,
//         paddingTop: 10,
//         flex: 1,
//     },
//     storeImage: {
//         width: '100%',
//         height: 160,
//         borderTopLeftRadius: 16,
//         borderTopRightRadius: 16,
//         resizeMode: 'cover',
//     },
//     storeName: { 
//         fontWeight: "bold", 
//         fontSize: 20, 
//         marginBottom: 4,
//     },
//     storeDistance: {
//         fontSize: 14, 
//         color: "#666", 
//         marginBottom: 30,
//     },
//     storeInfo: { 
//         fontSize: 14, 
//         color: "#666", 
//         marginBottom: 6,
//     },
//     storeCard: {
//         width: 275,
//         height: 400,
//         marginHorizontal: 10,
//         backgroundColor: "#F8F9FA",
//         borderRadius: 16,
//         elevation: 3,
//         shadowOffset: { width: 1, height: 1 },
//         shadowColor: 'black',
//         shadowOpacity: 0.3,
//         overflow: 'hidden',
//         marginBottom: 10,
//     },
//     storeButtons: {
//         flexDirection: "row", 
//         justifyContent: "space-between",
//         marginBottom: 12,
//         paddingHorizontal: 12,
//     },
//     checkCardBtn: {
//         backgroundColor: "white",
//         padding: 6,
//         borderRadius: 30,
//         height: 40,
//         width: 100,
//         borderWidth: 1,
//         borderColor: '#CAC4D0',
//         alignItems: 'center',
//         flexDirection: 'row',
//         justifyContent: 'center',
//     },
//     directionsCardBtn: {
//         backgroundColor: "#24167A",
//         height: 40,
//         width: 120,
//         padding: 6,
//         borderRadius: 30,
//         alignItems: 'center',
//         flexDirection: 'row',
//         justifyContent: 'center',
//     },
//     directionsIcon: {
//         width: 16,
//         height: 16,
//         marginRight: 8,
//     },
// })

// import React from 'react';
// import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useContext } from 'react';
// import { StoreContext } from '../context/StoreContext';

// export default function HomeStoreCard({ storeName, storeDistance, storeAddress, storeImage }) {
//     const navigation = useNavigation();
//     const { store, setStore } = useContext(StoreContext);

//     // Add your hardcoded coordinates here
//     const coords = {
//         "Jasons Deli Marina Bay Link Mall": { latitude: 1.279780, longitude: 103.853508 },
//         "Jasons Deli Marina Bay Sands": { latitude: 1.281390, longitude: 103.857986 },
//         "FairPrice Chinatown Point": { latitude: 1.285700, longitude: 103.844749 },
//         // add more as needed
//     };

//     return (
//         <View style={styles.storeCard}>
//             <Image source={storeImage} style={styles.storeImage} />

//             <View style={styles.contentContainer}>
//                 <Text style={styles.storeName}>{storeName}</Text>
//                 <Text style={styles.storeDistance}>Less than {storeDistance} away</Text>
//                 <Text style={styles.storeAddress}>Address: {storeAddress}</Text>
//             </View>

//             <View style={styles.storeButtons}>
//                 <TouchableOpacity
//                     style={styles.checkCardBtn}
//                     onPress={() => {
//                         setStore({
//                             name: storeName,
//                             distance: storeDistance,
//                             address: storeAddress,
//                             image: storeImage,
//                             ...(coords[storeName] || {}) // inject lat/lng if matched
//                         });
//                         navigation.navigate("SelectedStoreScreen");
//                     }}
//                 >
//                     <Image source={require("../assets/checkIcon.png")} style={styles.directionsIcon} />
//                     <Text>Check</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                     style={styles.directionsCardBtn}
//                     onPress={() => {
//                         setStore({
//                             name: storeName,
//                             distance: storeDistance,
//                             address: storeAddress,
//                             image: storeImage,
//                             ...(coords[storeName] || {}) // inject lat/lng if matched
//                         });
//                         navigation.navigate("HomeStoreCommunityProfileScreen");
//                     }}
//                 >
//                     <Image source={require("../assets/whiteDirectionIcon.png")} style={styles.directionsIcon} />
//                     <Text style={{ color: 'white' }}>Directions</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     contentContainer: {
//         paddingHorizontal: 12,
//         paddingTop: 10,
//         flex: 1,
//     },
//     storeImage: {
//         width: '100%',
//         height: 160,
//         borderTopLeftRadius: 16,
//         borderTopRightRadius: 16,
//         resizeMode: 'cover',
//     },
//     storeName: {
//         fontWeight: "bold",
//         fontSize: 20,
//         marginBottom: 4,
//     },
//     storeDistance: {
//         fontSize: 14,
//         color: "#666",
//         marginBottom: 30,
//     },
//     storeInfo: {
//         fontSize: 14,
//         color: "#666",
//         marginBottom: 6,
//     },
//     storeCard: {
//         width: 275,
//         height: 400,
//         marginHorizontal: 10,
//         backgroundColor: "#F8F9FA",
//         borderRadius: 16,
//         elevation: 3,
//         shadowOffset: { width: 1, height: 1 },
//         shadowColor: 'black',
//         shadowOpacity: 0.3,
//         overflow: 'hidden',
//         marginBottom: 10,
//     },
//     storeButtons: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         marginBottom: 12,
//         paddingHorizontal: 12,
//     },
//     checkCardBtn: {
//         backgroundColor: "white",
//         padding: 6,
//         borderRadius: 30,
//         height: 40,
//         width: 100,
//         borderWidth: 1,
//         borderColor: '#CAC4D0',
//         alignItems: 'center',
//         flexDirection: 'row',
//         justifyContent: 'center',
//     },
//     directionsCardBtn: {
//         backgroundColor: "#24167A",
//         height: 40,
//         width: 120,
//         padding: 6,
//         borderRadius: 30,
//         alignItems: 'center',
//         flexDirection: 'row',
//         justifyContent: 'center',
//     },
//     directionsIcon: {
//         width: 16,
//         height: 16,
//         marginRight: 8,
//     },
// });


import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

export default function HomeStoreCard({ storeName, storeDistance, storeAddress, storeImage }) {
    const navigation = useNavigation();
    const { setStore } = useContext(StoreContext);

    // Hardcoded coordinates for specific store names
    const coords = {
        "Jasons Deli Marina Bay Link Mall": { latitude: 1.279780, longitude: 103.853508 },
        "Jasons Deli Marina Bay Sands": { latitude: 1.281390, longitude: 103.857986 },
        "FairPrice Chinatown Point": { latitude: 1.285700, longitude: 103.844749 },
        // Add more store name → lat/lng mappings here as needed
    };

    const storePayload = {
        name: storeName,
        distance: storeDistance,
        address: storeAddress,
        image: storeImage,
        ...(coords[storeName] || {}) // add latitude & longitude if available
    };

    return (
        <View style={styles.storeCard}>
            <Image source={storeImage} style={styles.storeImage} />

            <View style={styles.contentContainer}>
                <Text style={styles.storeName}>{storeName}</Text>
                <Text style={styles.storeDistance}>Less than {storeDistance} away</Text>
                <Text style={styles.storeAddress}>Address: {storeAddress}</Text>
            </View>

            <View style={styles.storeButtons}>
                <TouchableOpacity
                    style={styles.checkCardBtn}
                    onPress={() => {
                        setStore(storePayload);
                        navigation.navigate("SelectedStoreScreen");
                    }}
                >
                    <Image source={require("../assets/checkIcon.png")} style={styles.directionsIcon} />
                    <Text>Check</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.directionsCardBtn}
                    onPress={() => {
                        setStore(storePayload);
                        navigation.navigate("HomeStoreCommunityProfileScreen");
                    }}
                >
                    <Image source={require("../assets/whiteDirectionIcon.png")} style={styles.directionsIcon} />
                    <Text style={{ color: 'white' }}>Directions</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 12,
        paddingTop: 10,
        flex: 1,
    },
    storeImage: {
        width: '100%',
        height: 160,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        resizeMode: 'cover',
    },
    storeName: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 4,
    },
    storeDistance: {
        fontSize: 14,
        color: "#666",
        marginBottom: 30,
    },
    storeInfo: {
        fontSize: 14,
        color: "#666",
        marginBottom: 6,
    },
    storeCard: {
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
    storeButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12,
        paddingHorizontal: 12,
    },
    checkCardBtn: {
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
    directionsCardBtn: {
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
});
