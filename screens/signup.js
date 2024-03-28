import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constant/color";
import CustomButton from "../components/button";

const Signup = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient style={{ flex: 1 }} colors={[COLORS.black, COLORS.grey]}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={{ color: COLORS.white }}>Back</Text>
        </TouchableOpacity>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : null}
          keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 0}
        >
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Register</Text>
            <Text style={styles.subtitle}>and enjoy your night</Text>
          </View>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                  placeholder="+00 000 000 000"
                  placeholderTextColor={COLORS.white}
                  keyboardType="phone-pad"
                  style={styles.input}
                />
                <View style={styles.inputLine} />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                  placeholder="someone@gmail.com"
                  placeholderTextColor={COLORS.white}
                  keyboardType="email-address"
                  style={styles.input}
                />
                <View style={styles.inputLine} />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                  placeholder="Full Name"
                  keyboardType="name-phone-pad"
                  placeholderTextColor={COLORS.white}
                  style={styles.input}
                />
                <View style={styles.inputLine} />
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: 50,
                }}
              >
                <Text
                  style={{
                    color: COLORS.lightwhite,
                    fontSize: 16,
                  }}
                >
                  We'll send you a verification code.
                </Text>
              </View>
            </View>
          </ScrollView>
          <View style={{ backgroundColor: COLORS.black }}>
            <CustomButton
              title="Continue"
              style={{
                marginBottom: "7%",
                borderRadius: 20,
              }}
              onPress={() => navigation.navigate("OtpScreen")}
            />
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    // top: "3%",
    paddingTop: "15%",
    left: "6%",
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 45,
    alignItems: "center",
  },
  title: {
    color: COLORS.white,
    fontSize: 32,
  },
  subtitle: {
    color: COLORS.lightwhite,
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 55,
  },
  formContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: COLORS.lightwhite,
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    color: COLORS.white,
    paddingBottom: 6,
  },
  inputLine: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
  },
});

export default Signup;
