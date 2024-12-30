import { View, Text, ScrollView, Image, Dimensions } from "react-native";
import React, { use, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const submit = () => {};
const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View
          className="flex justify-center w-full h-full px-4 "
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.logo}
            resizeMode="cover"
            className="w-[220px] h-[200px] -ml-6"
          />

          <Text className="text-2xl text-white font-psemibold">
            Log in to LIFTME
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => {
              setForm({
                ...form,
                email: e,
              });
            }}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => {
              setForm({
                ...form,
                password: e,
              });
            }}
            otherStyles="mt-7"
          />
          <CustomButton
            title="SignIn"
            handlePress={submit()}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex flex-row justify-center gap-2 pt-5">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default SignIn;
