import React from "react";
import { View, Text, Modal, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { cards } from "../../utils/cards";

export default function ChangeAddress1({ visible, address, postcode, onClose, onNext }) {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={cards.modalContainer}>
        <View style={cards.modalCard}>
          <TouchableOpacity onPress={onClose} style={cards.closeBtn}>
            <Text style={{ fontSize: 18 }}>✕</Text>
          </TouchableOpacity>
          <Text style={cards.modalTitle}>Would you like to update your current address?</Text>
          <Text style={[cards.input, {color: 'grey', fontStyle: 'italic',}]}>20 Nanyang Ave</Text>
          <Text style={[cards.input, {color: 'grey', fontStyle: 'italic',}]}>639809</Text>
          <TouchableOpacity style={cards.submitBtn} onPress={onNext}>
            <Text style={cards.submitText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}