import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colours } from "../utils/colours";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from 'expo-constants';


export default function SignUpScreen() {
    const navigation = useNavigation();
    const API_URL = Constants.expoConfig.extra.API_URL;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");

    const handleSignUp = async () => {
        if (!email || !password || !mobile || !address) {
            Alert.alert("Missing Fields", "Please enter all required fields.");
            return;
        }

        try {
            const response = await fetch(`${API_URL}/api/users/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password, mobile, address, }),
            });

            const data = await response.json();

            if (!response.ok) {
                Alert.alert(data.error || "Sign up failed. Please try again.");
                return;
            }

            if (data.token) {
                await AsyncStorage.setItem("userToken", data.token);
            }

            // ✅ Store email too if needed
            await AsyncStorage.setItem("userEmail", email);

            Alert.alert("Sign up successful! Welcome to FoodieGoodie!");

            // ✅ Navigate to Questionnaire with email param
            navigation.reset({
                index: 0,
                routes: [{ name: "Question1", params: { email } }],
            });


        } catch (error) {
            console.error("Sign Up Error:", error);
            Alert.alert("An error occurred. Please try again later.");
        }
    }

    return (

        <View style={styles.container}>
            <Image source={require("../assets/FoodieGoodieLogo/withoutName.png")} style={styles.logo} />
            <Text style={styles.header}>Welcome to <Text style={styles.brand}>FoodieGoodie</Text></Text>
            <Text style={styles.subtext}>Create an account</Text>

            <TextInput style={styles.input} placeholder="email@domain.com" keyboardType="email-address" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="password..." secureTextEntry value={password} onChangeText={setPassword} />
            <TextInput style={styles.input} placeholder="mobile" value={mobile} onChangeText={setMobile} />
            <TextInput style={styles.input} placeholder="address" value={address} onChangeText={setAddress} />

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign up with email</Text>
            </TouchableOpacity>

            <Text style={styles.or}>or continue with</Text>

            <TouchableOpacity style={styles.googleButton}>
                <Image source={require("../assets/googleLogo.png")} style={styles.googleLogo} />
                <Text style={styles.googleText}>Google</Text>
            </TouchableOpacity>

            <Text style={styles.terms}>
                By clicking continue, you agree to our <Text style={styles.link}>Terms of Service</Text> and <Text style={styles.link}>Privacy Policy</Text>
            </Text>

            <Text style={styles.loginLink}>
                Already have an account?{" "}
                <Text style={styles.link} onPress={() => navigation.navigate("Login")}>Login</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: colours.background,
        alignItems: "center",
        paddingTop: 20,
        paddingHorizontal: 30,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
        resizeMode: "contain",
    },
    header: {
        fontSize: 24,
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
        textAlign: "center",
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
    row: {
        flexDirection: "row",
        width: "100%",
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
    or: {
        marginTop: 16,
        color: colours.gray,
    },
    googleButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        borderRadius: 8,
        padding: 12,
        marginTop: 10,
        width: "100%",
        justifyContent: "center",
    },
    googleLogo: {
        width: 18,
        height: 18,
        marginRight: 10,
    },
    googleText: {
        fontWeight: "500",
    },
    terms: {
        fontSize: 11,
        textAlign: "center",
        marginTop: 15,
        color: colours.gray,
    },
    link: {
        color: colours.lightPurple,
        textDecorationLine: "underline",
    },
    loginLink: {
        marginTop: 20,
        fontSize: 14,
        color: colours.gray,
    },
});
