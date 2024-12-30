import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="h-full bg-black">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="items-center w-full min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[150px] h-[100px] "
            //style={{ width: 150, height: 100 }}
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="w-[350px] h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl font-bold text-center text-white">
              Discover Limitless{"\n"}
              Potential with <Text className="text-secondary-200">LIFTME</Text>
            </Text>
          </View>
          <Text className="text-sm text-center text-gray-100 font-pregular mt-7">
            Whether you're a beginner or pro, LIFTME is your perfect partner for
            reaching fitness goals.
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
