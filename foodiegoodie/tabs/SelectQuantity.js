import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colours } from "../utils/colours";
import Constants from 'expo-constants';

const API_URL = Constants.expoConfig.extra.API_URL;

export default function SelectQuantity() {
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>{item.name}</Text>
      </View>


      <View style={styles.imageBox}>
        <Image source={item.image} style={styles.image} />
      </View>

      <Text style={styles.label}>Select Quantity to Donate</Text>
      <View style={styles.quantityRow}>
        <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
          <Text style={styles.counter}>−</Text>
        </TouchableOpacity>
        <Text style={styles.count}>{quantity}</Text>
        <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
          <Text style={styles.counter}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DonationDetails', { item, quantity })}
      >
        <Text style={styles.buttonText}>Continue</Text>
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
  imageBox: { 
    alignItems: 'center', 
    marginVertical: 20, 
    backgroundColor: colours.background, 
    padding: 15, 
    borderRadius: 16 
  },
  image: { 
    width: 150, 
    height: 150, 
    resizeMode: 'contain' 
  },
  label: { 
    textAlign: 'center', 
    fontWeight: '600', 
    marginTop: 10 
  },
  quantityRow: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical: 10
  },
  counter: { 
    fontSize: 30, 
    paddingHorizontal: 20 
  },
  count: { 
    fontSize: 18, 
    borderWidth: 1, 
    paddingHorizontal: 15, 
    paddingVertical: 4, 
    borderRadius: 6 
  },
  button: { 
    backgroundColor: colours.darkPurple, 
    padding: 14, 
    borderRadius: 8, 
    marginTop: 20 
  },
  buttonText: { 
    textAlign: 'center', 
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerRow: {
    position: 'relative',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
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
});
