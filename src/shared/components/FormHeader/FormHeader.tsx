import { Image, Text, View } from "react-native";

interface FormHeaderProps {
    title: string;
    subtitle: string;
}

export default function FormHeader({ title, subtitle }: FormHeaderProps) {
  return (
    <View className="items-center mb-8">
        <Image
          className="w-[80px] h-[60px] mb-8"
          resizeMode="contain"
          source={require("../../../assets/images/Logo.png")}
        />
      <Text className="text-3xl font-bold mb-3 text-gray-500">{title}</Text>
      <Text className="text-base text-gray-300">{subtitle}</Text>
    </View>
  );
}
