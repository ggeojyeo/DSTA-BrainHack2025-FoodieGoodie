import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Settings, Switch } from "react-native";
import { colours } from "../utils/colours";
import { useNavigation } from "@react-navigation/native";
import BottomNavBar from "../components/BottomNavBar";
import SettingsScreenNavBar from "../components/SettingsScreenNavBar";
import { cards } from "../utils/cards";
import ChangeUsername from "../components/settingsCard/ChangeUsername";
import ChangeContact1 from "../components/settingsCard/ChangeContact1";
import ChangeContact2 from "../components/settingsCard/ChangeContact2";
import ChangeEmail1 from "../components/settingsCard/ChangeEmail1";
import ChangeEmail2 from "../components/settingsCard/ChangeEmail2";
import ChangeAddress1 from "../components/settingsCard/ChangeAddress1";
import ChangeAddress2 from "../components/settingsCard/ChangeAddress2";
import Delete1 from "../components/settingsCard/Delete1";
import Delete2 from "../components/settingsCard/Delete2";

export default function SettingsScreen() {
  const navigation = useNavigation();
  const [pushEnabled, setPushEnabled] = useState(false);
  const [showUsername, setShowUsername] = useState(false);
  const [username, setUsername] = useState("");
  const [showContact, setShowContact] = useState(false);
  const [contact, setContact] = useState("");
  const [showContact2, setShowContact2] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [showEmail2, setShowEmail2] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [showAddress2, setShowAddress2] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deleted, setDeleted] = useState("");
  const [showDelete2, setShowDelete2] = useState(false);


  const handleTogglePush = () => setPushEnabled(prev => !prev);

  const goTo = (screen) => navigation.navigate(screen);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <SettingsScreenNavBar />

        {/* Account Section */}
        <Text style={[styles.sectionTitle, {marginTop: 20}]}>Account</Text>
        <View style={styles.card}>
          {[
            { label: "Username", action: () => setShowUsername(true) },
            { label: "Contact Number", action: () => setShowContact(true) },
            { label: "Contact Email", action: () => setShowEmail(true) },
            { label: "Address", action: () => setShowAddress(true) },
          ].map(({ label, action }) => (
            <TouchableOpacity
              key={label}
              style={styles.row}
              onPress={action}
            >
              <Text style={styles.rowText}>{label}</Text>
              <Text style={styles.arrow}>{">"}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* General Section */}
        <Text style={styles.sectionTitle}>General</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.rowText}>Push Notifications</Text>
            <Switch
              value={pushEnabled}
              onValueChange={handleTogglePush}
              trackColor={{ false: "#ccc", true: "#583CFF" }}
              thumbColor="#fff"
            />
          </View>

          <TouchableOpacity style={[styles.row, {justifyContent: 'center', alignItems: 'center', borderTopColor: 'grey', borderTopWidth: 0.5}]} onPress={() => setShowDelete(true)}>
            <Text style={[styles.rowText, {color: 'red', fontWeight: 'bold'}]}>Delete Account</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutBtn} onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
      
      <ChangeUsername
        visible={showUsername}
        username={username}
        setUsername={setUsername}
        onClose={() => setShowUsername(false)}
        onSubmit={() => {
          setShowUsername(false);
          console.log("New username:", username); // You can send this to Supabase later
        }}
      />
      <ChangeContact1
        visible={showContact}
        contact={contact}
        onClose={() => setShowContact(false)}
        onNext={() => {
          setShowContact(false);
          setShowContact2(true);
        }}
      />

      <ChangeContact2
        visible={showContact2}
        contact={contact}
        setContact={setContact}
        onClose={() => setShowContact2(false)}
        onSubmit={() => {
          console.log("New contact:", contact); // You can send this to Supabase later
          setShowContact2(false);
        }}
      />
      <ChangeEmail1
        visible={showEmail}
        email={email}
        onClose={() => setShowEmail(false)}
        onNext={() => {
          setShowEmail(false);
          setShowEmail2(true);
        }}
      />

      <ChangeEmail2
        visible={showEmail2}
        email={email}
        setEmail={setEmail}
        onClose={() => setShowEmail2(false)}
        onSubmit={() => {
          console.log("New email:", email); // You can send this to Supabase later
          setShowEmail2(false);
        }}
      />
      <ChangeAddress1
        visible={showAddress}
        postcode={postcode}
        address={address}
        onClose={() => setShowAddress(false)}
        onNext={() => {
          setShowAddress(false);
          setShowAddress2(true);
        }}
      />

      <ChangeAddress2
        visible={showAddress2}
        postcode={postcode}
        address={address}
        setAddress={setAddress}
        setPostcode={setPostcode}
        onClose={() => setShowAddress2(false)}
        onSubmit={() => {
          console.log("New address:", address); // You can send this to Supabase later
          console.log("New postcode:", postcode); // You can send this to Supabase later
          setShowAddress2(false);
        }}
      />
      <Delete1
        visible={showDelete}
        deleted={deleted}
        onClose={() => setShowDelete(false)}
        onNext={() => {
          setShowDelete(false);
          setShowDelete2(true);
        }}
      />

      <Delete2
        visible={showDelete2}
        deleted={deleted}
        setDeleted={setDeleted}
        onClose={() => setShowDelete2(false)}
        onDelete={() => {
          console.log("Account deleted"); // You can send this to Supabase later
          setShowDelete2(false);
          navigation.navigate("SignUp")
        }}
      />
      <BottomNavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
    marginTop: 20,
    marginLeft: 30,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 24,
    marginBottom: 10,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  rowText: {
    fontSize: 16,
    color: "#333",
  },
  arrow: {
    fontSize: 16,
    color: "#24167A",
    fontWeight: "bold",
  },
  logoutBtn: {
    backgroundColor: "#24167A",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignSelf: "center",
    marginTop: 60,
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
})