import { Text, TouchableOpacity, View } from "react-native";
import { Input } from "../Input/Input";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../styles/colors";

export function SearchInput() {
    return (
        <View className="mb-3 mt-6">
        <Text className="text-2xl font-bold mt-6 ">Explore Produtos</Text>
        <View className="flex-row">
            <View className="flex-1">
                <Input leftIcon="search" placeholder="Pesquisar produto" className="text-lg flex-1"/>
            </View>
            <TouchableOpacity className="ml-5 mt-14 items-center justify-center rounded-md border h-12 w-12 border-purple-base">
            <Ionicons name="filter-outline" size={24} color={colors["purple-base"]} />
            </TouchableOpacity>
        </View>
        </View>
    )
}