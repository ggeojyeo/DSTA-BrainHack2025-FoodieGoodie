import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colours } from "../utils/colours";
import BottomNav from '../utils/BottomNav';

export default function Community() {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState('');

    const filterItems = (items) =>
        items.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Make A Donation!</Text>
                <TextInput
                    style={styles.search}
                    placeholder="I can donate..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
                {/* Urgent Donations */}
                <Section title="Urgent Donations"
                    items={filterItems([
                        { name: 'Eggs', note: 'Only 4 more needed', image: require('../assets/Food/egg.jpg') },
                        { name: 'Dark Soya Sauce', note: 'Only 3 more needed', image: require('../assets/Food/soyaSauce.webp') },
                        { name: 'Milo', note: 'Only 2 more needed', image: require('../assets/Food/milo.webp') }
                    ])}
                    onItemPress={(item) => navigation.navigate('SelectQuantity', { item })}
                />

                {/* Donate Again */}
                <Section title="Donate Again"
                    items={filterItems([
                        { name: 'Jasmine Rice', note: 'Only 6 more needed', image: require('../assets/Food/rice.jpeg') },
                        { name: 'Sugar', note: 'Only 3 more needed', image: require('../assets/Food/sugar.jpg') }
                    ])}
                    onItemPress={(item) => navigation.navigate('SelectQuantity', { item })}
                />

                {/* Suggested */}
                <Section title="Suggested"
                    items={filterItems([
                        { name: 'Oyster Sauce', note: 'Only 11 more needed', image: require('../assets/Food/oysterSauce.webp') },
                        { name: 'Salt', note: 'Only 3 more needed', image: require('../assets/Food/salt.jpg') },
                        { name: 'Flour', note: 'Only 6 more needed', image: require('../assets/Food/flour.jpg') }
                    ])}
                    onItemPress={(item) => navigation.navigate('SelectQuantity', { item })}
                />
            </ScrollView>
        </View>
    );
}

const Section = ({ title, items, onItemPress }) => (
    <View style={styles.section}>
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <Text style={styles.seeAll}>See All</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ padding: 10 }}>
            {items.map((item, i) => (
                <TouchableOpacity key={i} onPress={() => onItemPress(item)} style={styles.card}>
                    <Image source={item.image} style={styles.image} />
                    <Text style={styles.itemText}>{item.name}</Text>
                    {item.note ? <Text style={styles.note}>{item.note}</Text> : null}
                </TouchableOpacity>
            ))}
        </ScrollView>
    </View>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 70,
        backgroundColor: colours.background,
    },
    header: {
        padding: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    search: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10
    },
    section: {
        marginTop: 10
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600'
    },
    seeAll: {
        color: 'blue',
        fontWeight: '500',
        fontSize: 14,
        textAlign: 'right',
    },
    card: {
        width: 150,
        backgroundColor: colours.background,
        borderRadius: 12,
        marginHorizontal: 8,
        alignItems: 'center',
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        resizeMode: 'contain',
    },
    itemText: {
        fontWeight: '500',
        marginTop: 5,
        textAlign: 'center',
        fontSize: 12,
    },
    note: {
        fontSize: 12,
        color: 'gray',
        textAlign: 'center'
    },
});
