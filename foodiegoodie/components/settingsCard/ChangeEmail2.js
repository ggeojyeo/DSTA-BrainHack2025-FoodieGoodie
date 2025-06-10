import React from "react";
import { View, Text, Modal, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { cards } from "../../utils/cards";

export default function ChangeEmail2({ visible, email, setEmail, onClose, onSubmit }) {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={cards.modalContainer}>
        <View style={cards.modalCard}>
          <TouchableOpacity onPress={onClose} style={cards.closeBtn}>
            <Text style={{ fontSize: 18 }}>✕</Text>
          </TouchableOpacity>
          <Text style={cards.modalTitle}>Update Contact Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            keyboardType="ascii-capable"
            style={cards.input}
            placeholder="Please enter new contact email"
          />
          <TouchableOpacity style={cards.submitBtn} onPress={onSubmit}>
            <Text style={cards.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
