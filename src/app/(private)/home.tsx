import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={() => router.push('/login')}>
                <Text>Logout</Text>
            </TouchableOpacity>
    </View>
  );
}