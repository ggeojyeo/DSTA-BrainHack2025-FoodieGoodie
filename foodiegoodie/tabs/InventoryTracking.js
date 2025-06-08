import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { colours } from '../utils/colours';

export default function InventoryTracking() {
    const route = useRoute();
    const navigation = useNavigation();
    const { hasData } = route.params || { hasData: false };

    const supplyCategories = [
        { label: "Staples & Dry Goods", value: "20 items" },
        { label: "Meat, Vegetables & Fruits", value: "15 items" },
        { label: "Beverages", value: "17 items" },
        { label: "Hygiene & Sanitation", value: "8 items" },
        { label: "Medication", value: "12 items" },
        { label: "Household/Others", value: "4 items" }
    ];

    return (
        <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
            <Text style={styles.title}>Inventory Tracking</Text>
        </View>

        {/* Supply Score Circle */}
        <View style={styles.circleContainer}>
            <AnimatedCircularProgress
            size={150}
            width={12}
            fill={hasData ? 88 : 0}
            tintColor={colours.darkPurple}
            backgroundColor="#f0f0f0"
            rotation={0}
            lineCap="round"
            >
            {(fill) => (
                <View style={{ alignItems: 'center' }}>
                <Text style={styles.scoreText}>{hasData ? "88.0%" : "N.A."}</Text>
                <Text style={styles.subText}>Supply Score</Text>
                </View>
            )}
            </AnimatedCircularProgress>
        </View>

        {/* Optional recommendation label */}
        {!hasData && <Text style={styles.recommend}>Recommended Amount for Your Household</Text>}

        {/* Supply List */}
        <View style={styles.listBox}>
            {supplyCategories.map((item, idx) => (
            <View key={idx} style={styles.row}>
                <Text>{item.label}</Text>
                <Text style={styles.itemCount}>{item.value}</Text>
            </View>
            ))}
        </View>

        {/* Buttons */}
        {hasData ? (
            <>
            <View style={styles.actionRow}>
                <TouchableOpacity style={styles.actionButton}><Text>+ Add</Text></TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}><Text>Edit</Text></TouchableOpacity>
            </View>

            <View style={styles.restockRow}>
                <Text style={styles.warning}>⚠️ You may run out of rice in 2 days</Text>
                <TouchableOpacity style={styles.restockButton}>
                    <Text style={styles.restockText}>Restock</Text>
                </TouchableOpacity>
            </View>

            </>
        ) : (
            <TouchableOpacity 
                style={[styles.actionButton, { alignSelf: 'center', marginTop: 20 }]}
                onPress={() => navigation.navigate('Question2')}
            >
                <Text style={styles.buttonText}>Insert Current Supply List</Text>
            </TouchableOpacity>
        )}

    </View>
  );
}
  
const styles = StyleSheet.create({
container: { 
    flex: 1, 
    paddingBottom: 90, 
    padding: 20,
    paddingTop: '20%',
    backgroundColor: "#fff",
},
headerRow: {
    alignItems: 'center',
    marginBottom: 10,
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
},
circleContainer: {
    alignItems: 'center',
    marginVertical: 20,
},
scoreText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colours.darkPurple,
},
subText: {
    fontSize: 12,
    color: '#888',
},
recommend: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 10,
},
listBox: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
},
row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
},
itemCount: {
    color: '#888',
},
actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 15,
    marginTop: 10,
},
actionButton: {
    backgroundColor: '#eee',
    paddingHorizontal: '20%',
    paddingVertical: 8,
    borderRadius: 8,
    fontWeight: 'bold',
},
warning: {
    color: 'red',
    fontSize: 13,
    marginBottom: 8,
},
restockRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    marginTop: 20,
}, 
restockButton: {
    backgroundColor: colours.darkPurple,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
},
restockText: {
    color: 'white',
},
buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
},
insertButton: {
    backgroundColor: '#eee',
    paddingHorizontal: '10%',
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
},  
});