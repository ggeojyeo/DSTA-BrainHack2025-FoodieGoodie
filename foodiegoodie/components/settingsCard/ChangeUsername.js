import React from "react";
import { View, Text, Modal, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { cards } from "../../utils/cards";

export default function ChangeUsername({ visible, username, setUsername, onClose, onSubmit }) {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={cards.modalContainer}>
        <View style={cards.modalCard}>
          <TouchableOpacity onPress={onClose} style={cards.closeBtn}>
            <Text style={{ fontSize: 18 }}>✕</Text>
          </TouchableOpacity>
          <Text style={cards.modalTitle}>Change Username</Text>
          <TextInput
            placeholder="Please enter new username"
            placeholderTextColor="#999"
            value={username}
            onChangeText={setUsername}
            style={cards.input}
          />
          <TouchableOpacity style={cards.submitBtn} onPress={onSubmit}>
            <Text style={cards.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}