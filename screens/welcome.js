import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constant/color";
import CustomButton from "../components/button";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[COLORS.black, COLORS.grey]}
    >
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
          bottom: "8%",
          width: "100%",
        }}
      >
        <Text style={{ fontSize: 50, fontWeight: 800, color: COLORS.white }}>
          Let's Get You Started
        </Text>

        <View style={{ marginVertical: 22 }}>
          <Text
            style={{ fontSize: 16, color: COLORS.white, marginVertical: 4 }}
          >
            Discover your posion
          </Text>
        </View>
        {/* <View style={{ flexDirection: "row" }}> */}
        <CustomButton
          title="Login In"
          filled={true}
          onPress={() => navigation.navigate("Login")}
          // style={{ width: "50%", marginRight: 5, marginTop: 20 }}
        />
        <CustomButton
          title="Sign Up"
          filled={false}
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate("Signup")}
        />
        {/* </View> */}
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
