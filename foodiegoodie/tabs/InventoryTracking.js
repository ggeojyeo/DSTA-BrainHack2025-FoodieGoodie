import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { colours } from '../utils/colours';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function InventoryTracking() {
    const [score, setScore] = useState(null);
    const [supplyData, setSupplyData] = useState(null);

    const route = useRoute();
    const navigation = useNavigation();
    const { hasData } = route.params || { hasData: false };
    const API_URL = process.env.EXPO_PUBLIC_API_URL;

    useEffect(() => {
        const fetchData = async () => {
            const email = await AsyncStorage.getItem("userEmail");
            const token = await AsyncStorage.getItem("userToken");
            if (!email || !token) return;

            try {
                const scoreRes = await fetch(`${API_URL}/api/supply-score?email=${email}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                const supplyRes = await fetch(`${API_URL}/api/supply-ques/searchByUser?email=${email}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (scoreRes.ok) {
                    const scoreData = await scoreRes.json();
                    setScore(scoreData.score);
                }

                if (supplyRes.ok) {
                    const supply = await supplyRes.json();
                    setSupplyData(supply.data);
                }

            } catch (err) {
                console.error("Fetch failed", err);
            }
        };

        if (hasData) fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Text style={styles.title}>Inventory Tracking</Text>
            </View>

            <View style={styles.circleContainer}>
                <AnimatedCircularProgress
                    size={150}
                    width={12}
                    fill={hasData && score !== null ? score : 0}
                    tintColor={colours.darkPurple}
                    backgroundColor="#f0f0f0"
                    rotation={0}
                    lineCap="round"
                >
                    {(fill) => (
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.scoreText}>{hasData && score !== null ? `${score.toFixed(1)}%` : "N.A."}</Text>
                            <Text style={styles.subText}>Supply Score</Text>
                        </View>
                    )}
                </AnimatedCircularProgress>
            </View>

            {!hasData && <Text style={styles.recommend}>Recommended Amount for Your Household</Text>}

            {hasData && supplyData && (
                <View style={styles.listBox}>
                    <View style={styles.row}>
                        <Text>Staples & Dry Goods</Text>
                        <Text style={styles.itemCount}>{(supplyData.rice || 0) + (supplyData.snacks || 0)} items</Text>
                    </View>
                    <View style={styles.row}>
                        <Text>Meat, Vegetables & Fruits</Text>
                        <Text style={styles.itemCount}>{(supplyData.eggs || 0) + (supplyData.milk || 0) + (supplyData.bread || 0)} items</Text>
                    </View>
                    <View style={styles.row}>
                        <Text>Beverages</Text>
                        <Text style={styles.itemCount}>{supplyData.beverage || 0} items</Text>
                    </View>
                    <View style={styles.row}>
                        <Text>Hygiene & Sanitation</Text>
                        <Text style={styles.itemCount}>{supplyData.cleaningSupplies || 0} items</Text>
                    </View>
                    <View style={styles.row}>
                        <Text>Medication</Text>
                        <Text style={styles.itemCount}>0 items</Text>
                    </View>
                    <View style={styles.row}>
                        <Text>Household/Others</Text>
                        <Text style={styles.itemCount}>0 items</Text>
                    </View>
                </View>
            )}

            {hasData ? (
                <>
                    <View style={styles.actionRow}>
                        <TouchableOpacity style={styles.actionButton}><Text>+ Add</Text></TouchableOpacity>
                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={() => navigation.navigate("Question1")}
                        >
                            <Text>Edit</Text>
                        </TouchableOpacity>
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
