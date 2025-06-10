import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colours } from "../utils/colours";
import Constants from 'expo-constants';

const API_URL = Constants.expoConfig.extra.API_URL;

export default function DonationConfirmation() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
                <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Donation Confirmation</Text>
      </View>

      <Text style={styles.thankyou}>Thank you for your generous donation!</Text>

      <View style={styles.checkmark}>
        <Ionicons name="checkmark-circle" size={100} color="green" />
      </View>

      <Text style={styles.reminder}>
        We'll remind you on the day your item(s) are scheduled for pick-up.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MainTabs', { screen: 'Community' })}
      >
        <Text style={styles.buttonText}>Return to Homepage</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 24, 
    paddingTop: '20%',
  },
  headerRow: {
    position: 'relative',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  back: {
    position: 'absolute',
    left: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },  
  thankyou: { 
    fontWeight: '600', 
    marginTop: 20, 
    textAlign: 'center',
    fontSize: 18,
  },
  checkmark: { 
    alignItems: 'center', 
    marginVertical: 20,
  },
  reminder: { 
    textAlign: 'center', 
    color: '#333' 
  },
  button: { 
    backgroundColor: colours.darkPurple, 
    padding: 14, 
    borderRadius: 8, 
    marginTop: 30 
  },
  buttonText: { 
    color: 'white', 
    textAlign: 'center', 
    fontWeight: 'bold',
    fontSize: 16,
  }
});
