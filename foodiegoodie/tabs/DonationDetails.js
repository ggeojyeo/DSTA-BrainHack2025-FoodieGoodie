import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colours } from "../utils/colours";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DonationDetails() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState("5pm - 6pm");

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };
  const timeSlots = [
    "9am - 10am",
    "10am - 11am",
    "11am - 12pm",
    "12pm - 1pm",
    "1pm - 2pm",
    "2pm - 3pm",
    "3pm - 4pm",
    "4pm - 5pm",
    "5pm - 6pm",
    "6pm - 7pm",
  ];
  

  const [location, setLocation] = useState('Tampines West Avenue 3, Blk 134, #12-13');
  const [agreed, setAgreed] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { item, quantity } = route.params;

  const confirmDonation = () => {
    if (agreed) {
      navigation.navigate('DonationConfirmation');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Donation Details</Text>
      </View>

      <Text style={styles.label}>Select a Pick-up Date</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
        <Text style={{ color: '#000' }}>{date.toLocaleDateString()}</Text>
      </TouchableOpacity>
        {showDatePicker && (
        <DateTimePicker
            value={date}
            mode="date"
            display={Platform.OS === 'ios' ? 'inline' : 'default'} // optional override
            onChange={onChangeDate}
        />
        )}
      <Text style={styles.label}>Select a Pick-up Time</Text>
      <View style={styles.pickerContainer}>
        <Picker
            selectedValue={timeSlot}
            onValueChange={(value) => setTimeSlot(value)}
            style={styles.picker}
        >
            {timeSlots.map((slot) => (
            <Picker.Item key={slot} label={slot} value={slot} />
            ))}
        </Picker>
      </View>

      <Text style={styles.label}>Pick-up Location</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        placeholder="Enter address"
      />

      <TouchableOpacity onPress={() => setAgreed(!agreed)} style={styles.confirmRow}>
        <Ionicons name={agreed ? "radio-button-on" : "radio-button-off"} size={18} color="red" />
        <Text style={styles.confirmText}>
          <Text style={{ color: 'red' }}>* </Text>
          I confirm that the food I am donating has an expiry date of at least 3 days from the date of donation.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: agreed ? colours.darkPurple : '#ccc' }]}
        onPress={confirmDonation}
        disabled={!agreed}
      >
        <Text style={styles.buttonText}>Donate</Text>
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
  label: {
    fontWeight: '600',
    marginTop: 20,
  },
  subtext: {
    fontSize: 12,
    color: '#777',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: colours.darkPurple,
    padding: 10,
    borderRadius: 8,
    marginTop: 6,
  },
  confirmRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  confirmText: {
    marginLeft: 8,
    fontSize: 12,
    flex: 1,
  },
  button: {
    marginTop: 24,
    padding: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});