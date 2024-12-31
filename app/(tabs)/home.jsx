import {
  View,
  Text,
  FlatList,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import CustomButton from "../../components/CustomButton";

const Home = () => {
  const [userName, setUserName] = useState("Avishka");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  //setUserName(useLocalSearchParams());

  //console.log(username);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://wger.de/api/v2/exercise-translation/?limit=20&offset=80"
        );

        if (!response.ok) {
          Alert.alert("Error", "Failed to fetch data");
          //throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        // Clean descriptions by stripping HTML tags
        const cleanedData = data.results.map((item) => ({
          ...item,
          description: item.description.replace(/<[^>]+>/g, ""), // Remove HTML tags
        }));

        setItems(cleanedData); // Assuming data is in results array

        console.log(data);
      } catch (err) {
        Alert.alert("Error", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView className="h-full bg-primary">
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setCount(count + 1)}>
            <View className="flex-row m-4 bg-gray-600 rounded-xl">
              <View className="items-center justify-center basis-1/3">
                <Image
                  source={images.exercise}
                  resizeMode="contain"
                  className="w-full h-32"
                />
              </View>
              <View className="p-4 basis-2/3">
                <Text className="text-xl text-white font-pregular">
                  {item.name}
                </Text>
                <Text className="text-sm font-pregular line-clamp-5">
                  {item.description}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ListHeaderComponent={() => (
          <View className="px-4 my-6 space-y-6">
            <View className="flex-row items-start justify-between mb-6">
              <View>
                <Text className="text-sm text-gray-100 font-pmedium">
                  Welcome back
                </Text>
                <Text className="text-2xl text-white font-psemibold">
                  Avishka
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logo}
                  className="w-14 h-14"
                  resizeMode="cover"
                />
              </View>
            </View>
          </View>
        )}
      />
      <View className="justify-end w-full ">
        <CustomButton
          title={"Count = " + count.toString()}
          //handlePress={}
          textStyles="font-psemibold"
          containerStyles="h-10 rounded bg-gray-100"
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
