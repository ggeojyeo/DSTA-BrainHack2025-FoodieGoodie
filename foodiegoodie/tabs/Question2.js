import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { colours } from '../utils/colours';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Question2() {
    const [openCategory, setOpenCategory] = useState(null);
    const [formData, setFormData] = useState({});
    const [recordExists, setRecordExists] = useState(false);

    const navigation = useNavigation();
    const API_URL = process.env.EXPO_PUBLIC_API_URL

    useEffect(() => {
        const fetchExisting = async () => {
            const email = await AsyncStorage.getItem("userEmail");
            const token = await AsyncStorage.getItem("userToken");
            if (!email || !token) return;

            const res = await fetch(`${API_URL}/api/supply-ques/searchByUser`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (res.ok) {
                const data = await res.json();
                setFormData({
                    eggs: data.data.eggs,
                    milk: data.data.milk,
                    bread: data.data.bread,
                    rice: data.data.rice,
                    snacks: data.data.snacks,
                    beverage: data.data.beverage,
                    cleaningSupplies: data.data.cleaningSupplies,
                });
                setRecordExists(true);
            }
        };

        fetchExisting();
    }, []);

    const handleDone = async () => {
        try {
            const email = await AsyncStorage.getItem("userEmail");
            const token = await AsyncStorage.getItem("userToken");
            if (!email || !token) return Alert.alert("Error", "Missing credentials");

            const body = {
                eggs: parseInt(formData["eggs"]) || 0,
                milk: parseInt(formData["milk"]) || 0,
                bread: parseInt(formData["bread"]) || 0,
                rice: parseInt(formData["rice"]) || 0,
                snacks: parseInt(formData["snacks"]) || 0,
                beverage: parseInt(formData["beverage"]) || 0,
                cleaningSupplies: parseInt(formData["cleaningSupplies"]) || 0,
            };


            const res = await fetch(
                `${API_URL}/api/supply-ques/${recordExists ? "edit" : "create"}`,
                {
                    method: recordExists ? "PUT" : "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(body),
                }
            );

            if (!res.ok) {
                const err = await res.json();
                return Alert.alert("Error", err.message || "Submission failed");
            }

            navigation.navigate("MainTabs", {
                screen: "InventoryTracking",
                params: { hasData: true },
            });
        } catch (err) {
            console.error("Submit error", err);
            Alert.alert("Error", "An unexpected error occurred");
        }
    }

    const categories = [
        {
            title: "Staples & Dry Goods",
            fields: [
                { key: "rice", label: "Rice/Noodles", unit: "kg" },
                { key: "snacks", label: "Snacks", unit: "units" },
            ],
        },
        {
            title: "Meat, Vegetables & Fruits",
            fields: [
                { key: "eggs", label: "Eggs", unit: "units" },
                { key: "milk", label: "Milk", unit: "litres" },
                { key: "bread", label: "Bread", unit: "loaves" },
            ],
        },
        {
            title: "Beverages",
            fields: [{ key: "beverage", label: "Beverage", unit: "bottles" }],
        },
        {
            title: "Hygiene & Sanitation",
            fields: [{ key: "cleaningSupplies", label: "Cleaning Supplies", unit: "items" }],
        },
    ];


    const handleInput = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.header}>Questionnaire</Text>
            </View>
            <View style={styles.progressBar}>
                <View style={styles.progressFill} />
            </View>
            <Text style={styles.step}>Step 2 of 2</Text>
            <Text style={styles.title}>Current Supply List</Text>

            {categories.map((cat, index) => (
                <View key={index} style={styles.categoryBox}>
                    <TouchableOpacity
                        style={styles.categoryHeader}
                        onPress={() => setOpenCategory(openCategory === index ? null : index)}
                    >
                        <Text style={styles.categoryTitle}>{cat.title}</Text>
                        <Ionicons
                            name={openCategory === index ? "chevron-up" : "chevron-down"}
                            size={20}
                            color="#333"
                        />
                    </TouchableOpacity>

                    {openCategory === index && (
                        <View style={styles.fields}>
                            {cat.fields.map((field, i) => (
                                <View key={i} style={styles.inputRow}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={field.label}
                                        keyboardType="numeric"
                                        value={formData[field.key]?.toString() || ''}
                                        onChangeText={(text) => handleInput(field.key, text)}
                                    />


                                    <Text>{field.unit}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            ))}

            <TouchableOpacity
                style={styles.button}
                onPress={handleDone}
            >
                <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("MainTabs", {
                screen: "InventoryTracking",
                params: { hasData: false },
            })}
            >
                <Text style={styles.skip}>Skip This Step</Text>
            </TouchableOpacity>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: '25%',
        backgroundColor: "#fff",
    },
    headerRow: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        position: 'relative',
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    progressBar: {
        height: 6,
        backgroundColor: "#eee",
        borderRadius: 10,
        overflow: "hidden",
        marginHorizontal: 20,
        marginBottom: 10,
    },
    progressFill: {
        width: "100%",
        height: "100%",
        backgroundColor: colours.lightPurple,
    },
    step: {
        fontSize: 13,
        color: "#777",
        textAlign: "center",
        marginBottom: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center",
        marginBottom: 20,
    },
    categoryBox: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
    },
    categoryHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 14,
        backgroundColor: "#f7f7f7",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    categoryTitle: {
        fontWeight: "600",
        fontSize: 14,
    },
    fields: {
        padding: 12,
        backgroundColor: "#fff",
    },
    inputRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 8,
        marginRight: 10,
        borderRadius: 6,
    },
    button: {
        backgroundColor: colours.darkPurple,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 20,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
    skip: {
        textAlign: "center",
        color: "#aaa",
        marginTop: 14,
        textDecorationLine: "underline",
    },
    back: {
        position: 'absolute',
        left: 5,
    },
});
