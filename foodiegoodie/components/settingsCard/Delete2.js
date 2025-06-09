import React from "react";
import { View, Text, Modal, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { cards } from "../../utils/cards";

export default function Delete2({ visible, deleted, setDeleted, onClose, onDelete }) {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={cards.modalContainer}>
        <View style={cards.modalCard}>
          <TouchableOpacity onPress={onClose} style={cards.closeBtn}>
            <Text style={{ fontSize: 18 }}>✕</Text>
          </TouchableOpacity>
          <Text style={cards.modalTitle}>Enter Username to confirm deletion</Text>
          <TextInput
            value={deleted}
            onChangeText={setDeleted}
            keyboardType="ascii-capable"
            style={cards.input}
            placeholder="Enter username"
          />
          <TouchableOpacity style={[cards.submitBtn, {backgroundColor: '#C33121'}]} onPress={onDelete}>
            <Text style={cards.submitText}>DELETE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
