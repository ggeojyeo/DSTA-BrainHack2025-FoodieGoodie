import React from "react";
import { View, Text, Modal, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { cards } from "../../utils/cards";

export default function ChangeAddress2({ visible, address, postcode, setAddress, setPostcode, onClose, onSubmit }) {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={cards.modalContainer}>
        <View style={cards.modalCard}>
          <TouchableOpacity onPress={onClose} style={cards.closeBtn}>
            <Text style={{ fontSize: 18 }}>✕</Text>
          </TouchableOpacity>
          <Text style={cards.modalTitle}>Update Address</Text>
          <TextInput
            value={address}
            onChangeText={setAddress}
            keyboardType="ascii-capable"
            style={cards.input}
            placeholder="New address"
          />
          <TextInput
            value={postcode}
            onChangeText={setPostcode}
            keyboardType="number-pad"
            style={cards.input}
            placeholder="New postcode"
          />
          <TouchableOpacity style={cards.submitBtn} onPress={onSubmit}>
            <Text style={cards.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
