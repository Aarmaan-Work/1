import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constant/color";
import CustomButton from "../components/button";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const OtpScreen = ({ navigation }) => {
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
            <Text style={styles.title}>Verification</Text>
            <Text style={styles.subtitle}>+44 000*********0</Text>
          </View>
          <View style={styles.formContainer}>
            <OTPInputView
              pinCount={4}
              autoFocusOnLoad
              style={{
                width: "80%",
                height: 200,
                color: COLORS.lightwhite,
              }}
              codeInputFieldStyle={{
                width: 35,
                height: 40,
                color: "#f4a135",
                backgroundColor: COLORS.grey,
              }}
              codeInputHighlightStyle={{ color: COLORS.white }}
            ></OTPInputView>
          </View>
          <View style={{ backgroundColor: COLORS.black }}>
            <CustomButton
              title="Continue"
              style={{
                marginBottom: "7%",
                borderRadius: 20,
              }}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Tab" }],
                })
              }
            />
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backButton: {
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
    // justifyContent: "center",
    alignItems: "center",
  },
});

export default OtpScreen;
