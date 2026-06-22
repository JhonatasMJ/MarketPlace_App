import { Ionicons } from "@expo/vector-icons"
import { Text, View } from "react-native"
import { colors } from "../../../styles/colors"
import { Button } from "../Button/Button"
import { router } from "expo-router"

export const Error = () => {
    return (
        <View className="flex-1 bg-background items-center justify-center px-6">
            <Ionicons name="alert-circle" size={40} color={colors.danger} />
            <Text className="text-xl text-center text-danger mt-5">Occorreu um erro ao carregar os detalhes do produto</Text>
            <Button className="mt-4 w-full" onPress={router.back}>
                Voltar
            </Button>
        </View>

    )
}