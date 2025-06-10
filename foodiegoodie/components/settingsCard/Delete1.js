import React from "react";
import { View, Text, Modal, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { cards } from "../../utils/cards";

export default function Delete1({ visible, deleted, onClose, onNext }) {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={cards.modalContainer}>
        <View style={cards.modalCard}>
          <TouchableOpacity onPress={onClose} style={cards.closeBtn}>
            <Text style={{ fontSize: 18 }}>✕</Text>
          </TouchableOpacity>
          <Text style={cards.modalTitle}>Would you like to <Text style={[cards.modalTitle, {color: 'red'}]}>delete</Text> your account permanently?</Text>
          <TouchableOpacity style={cards.submitBtn} onPress={onNext}>
            <Text style={cards.submitText}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}