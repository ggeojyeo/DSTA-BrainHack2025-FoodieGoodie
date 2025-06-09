import React from "react";
import { View, Text, Modal, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { cards } from "../../utils/cards";

export default function ChangeContact1({ visible, contact, onClose, onNext }) {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={cards.modalContainer}>
        <View style={cards.modalCard}>
          <TouchableOpacity onPress={onClose} style={cards.closeBtn}>
            <Text style={{ fontSize: 18 }}>✕</Text>
          </TouchableOpacity>
          <Text style={cards.modalTitle}>Your current contact number is 82** **43.</Text>
          <Text style={cards.modalTitle}>Would you like to update it?</Text>
          <TouchableOpacity style={cards.submitBtn} onPress={onNext}>
            <Text style={cards.submitText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}