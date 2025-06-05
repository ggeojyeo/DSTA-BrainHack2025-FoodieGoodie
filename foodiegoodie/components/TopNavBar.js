import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TopNavBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.navContainer}>
      <Pressable onPress={() => navigation.navigate('Settings')}>
        <Image style={styles.icon} source={require('../assets/settingsIcon.png')} />
      </Pressable>
      <Text style={styles.title}>Home</Text>
      <Pressable onPress={() => navigation.navigate('Profile')}>
        <Image style={styles.icon} source={require('../assets/profileIcon.png')} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
