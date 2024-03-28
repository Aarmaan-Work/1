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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constant/color";
import CustomButton from "../components/button";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[COLORS.black, COLORS.grey]}
    >
      <TouchableOpacity
        style={{ top: "6%", left: "5%" }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={{ color: COLORS.white }}>Back</Text>
      </TouchableOpacity>
      <View>
        <Image
          source={require("../assets/icon.png")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 20,
            position: "absolute",
            top: 130,
            left: -50,
            transform: [
              { translateX: 50 },
              { translateY: 50 },
              { rotate: "15deg" },
            ],
          }}
        />
        <Image
          source={require("../assets/icon.png")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 20,
            position: "absolute",
            top: 10,
            transform: [
              { translateX: 20 },
              { translateY: 50 },
              { rotate: "-15deg" },
            ],
          }}
        />
        <Image
          source={require("../assets/icon.png")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 20,
            position: "absolute",
            top: -30,
            left: 100,
            transform: [
              { translateX: 50 },
              { translateY: 50 },
              { rotate: "5deg" },
            ],
          }}
        />
        <Image
          source={require("../assets/icon.png")}
          style={{
            width: 200,
            height: 200,
            borderRadius: 20,
            position: "absolute",
            top: 110,
            left: 100,
            transform: [
              { translateX: 50 },
              { translateY: 50 },
              { rotate: "-15deg" },
            ],
          }}
        />
      </View>
      {/* Content */}
      <View
        style={{
          paddingHorizontal: 25,
          position: "absolute",
          top: "50%",
          height: "100%",
          width: "100%",
          backgroundColor: COLORS.grey,
          flex: 1,
        }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ marginVertical: 22 }}>
            <Text
              style={{
                color: COLORS.lightwhite,
                fontSize: 24,
              }}
            >
              Sign In Now
            </Text>
            <View style={{ marginVertical: "10%" }}>
              <Text style={{ color: COLORS.lightwhite, marginBottom: 5 }}>
                Phone Number
              </Text>
              <TextInput
                placeholder="+00 000 000 000"
                placeholderTextColor={COLORS.white}
                keyboardType="numbers-and-punctuation"
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  borderBottomWidth: 2,
                  paddingBottom: 6,
                }}
              />
              <TouchableOpacity style={{ alignItems: "flex-end" }}>
                <Text
                  style={{
                    color: COLORS.lightwhite,
                    fontSize: 14,
                    marginTop: "5%",
                  }}
                >
                  New Number?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={{ flexDirection: "row" }}> */}
          <CustomButton
            title="Login In"
            filled={true}
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: "Tab" }],
              })
            }
            // style={{ width: "50%", marginRight: 5, marginTop: 20 }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: "5%",
            }}
          >
            <CustomButton
              title="Google"
              filled={true}
              onPress={() => navigation.navigate("Login")}
              style={{ width: "40%" }}
            />
            <CustomButton
              title="Facbook"
              filled={true}
              onPress={() => navigation.navigate("Login")}
              style={{ width: "40%" }}
            />
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
