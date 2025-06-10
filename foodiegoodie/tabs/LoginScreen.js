import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colours } from "../utils/colours";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from 'expo-constants';


export default function LoginScreen() {
    const navigation = useNavigation();
    const API_URL = Constants.expoConfig.extra.API_URL;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Missing Fields", "Please enter both email and password.");
            return;
        }

        try {
            const response = await fetch(`${API_URL}/api/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                Alert.alert("Login Failed", data.error || "Invalid Credentials");
                return;
            }

            await AsyncStorage.setItem("userToken", data.token);
            await AsyncStorage.setItem("userEmail", data.user.email);

            Alert.alert("Login Successful", "Welcome back!");

            const questionnaireRes = await fetch(
                `${API_URL}/api/supply-ques/searchByUser?email=${email}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${data.token}`,
                    },
                }
            );

            if (questionnaireRes.ok) {
                navigation.reset({
                    index: 0,
                    routes: [
                        {
                            name: "MainTabs",
                            state: {
                                index: 0,
                                routes: [{ name: "Home" }],
                            },
                        },
                    ],
                });
            } else if (questionnaireRes.status === 404) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: "Question1", params: { email } }],
                });
            } else {
                Alert.alert("Error", "Unable to check questionnaire status.");
            }

        } catch (error) {
            Alert.alert("Error", "Something went wrong. Please try again.");
            console.error("Login Error:", error);
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require("../assets/FoodieGoodieLogo/withoutName.png")} style={styles.logo} />
            <Text style={styles.header}>Welcome Back to <Text style={styles.brand}>FoodieGoodie</Text></Text>
            <Text style={styles.subtext}>Enter your Email and Password</Text>

            <TextInput style={styles.input} placeholder="email@domain.com" keyboardType="email-address" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="password..." secureTextEntry value={password} onChangeText={setPassword} />

            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: colours.background,
        alignItems: "center",
        paddingHorizontal: 30,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
        resizeMode: "contain",
    },
    header: {
        fontSize: 22,
        fontWeight: "600",
        textAlign: "center",
    },
    brand: {
        color: colours.lightPurple,
        fontWeight: "bold",
    },
    subtext: {
        fontSize: 14,
        marginVertical: 10,
        color: colours.gray,
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: colours.inputBorder,
        borderRadius: 10,
        padding: 12,
        marginVertical: 8,
    },
    button: {
        backgroundColor: colours.darkPurple,
        padding: 14,
        borderRadius: 10,
        width: "100%",
        marginTop: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    forgotText: {
        marginTop: 10,
        color: colours.gray,
        fontSize: 12,
    },
});
