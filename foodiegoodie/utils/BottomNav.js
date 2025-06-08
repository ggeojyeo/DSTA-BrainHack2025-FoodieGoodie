import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colours } from '../utils/colours';

export default function BottomNav({ currentTab }) {
  const navigation = useNavigation();

  return (
    <View style={styles.nav}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Community')}
      >
        <Ionicons
          name="home-outline"
          size={24}
          color={currentTab === 'home' ? 'white' : colours.darkPurple}
        />
        <Text style={currentTab === 'home' ? styles.navLabelActive : styles.navLabel}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={currentTab === 'community' ? styles.navItemActive : styles.navItem}
        onPress={() => navigation.navigate('Community')}
      >
        <View style={currentTab === 'community' ? styles.activeIconContainer : null}>
          <Ionicons
            name="people-outline"
            size={24}
            color={currentTab === 'community' ? 'white' : colours.darkPurple}
          />
        </View>
        <Text style={currentTab === 'community' ? styles.navLabelActive : styles.navLabel}>
          Community
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={currentTab === 'profile' ? styles.navItemActive : styles.navItem}
        onPress={() => navigation.navigate('InventoryTracking')}
      >
        <View style={currentTab === 'profile' ? styles.activeIconContainer : null}>
          <Ionicons
            name="person-outline"
            size={24}
            color={currentTab === 'profile' ? 'white' : colours.darkPurple}
          />
        </View>
        <Text style={currentTab === 'profile' ? styles.navLabelActive : styles.navLabel}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: colours.background,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 75,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navItemActive: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLabel: {
    fontSize: 12,
    color: colours.darkPurple,
    marginTop: 4,
  },
  navLabelActive: {
    fontSize: 12,
    color: 'white',
    marginTop: 4,
  },
  activeIconContainer: {
    backgroundColor: colours.darkPurple,
    padding: 10,
    borderRadius: 50,
  },
});
