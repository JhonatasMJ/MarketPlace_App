import { ActivityIndicator, Text, View } from "react-native";
import { colors } from "../../../styles/colors";

interface EmptyListParams {
    isLoadingComments: boolean;
}

export const EmptyList = ({ isLoadingComments }: EmptyListParams) => {
    if (isLoadingComments) {
        return (
            <View className="items-center py-8 ">
            <ActivityIndicator size="small" color={colors["purple-base"]} />
            <Text className="text-gray-500 mt-2">Carregando Avaliações...</Text>
        </View>
        )
    }
    return (
        <View className="py-8 items-center">
            <Text className="text-gray-500 text-base">Ainda não há avaliações para este produto</Text>
            <Text className="text-gray-400 text-sm mt-1">Seja o primeiro a avaliar</Text>
        </View>
    )
};