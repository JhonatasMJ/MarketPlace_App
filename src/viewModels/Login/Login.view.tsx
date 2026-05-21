import { Text, TouchableOpacity, View } from "react-native"
import FormHeader from "../../shared/components/FormHeader/FormHeader"
import { Input } from "../../shared/components/Input/Input"
import { router } from "expo-router"

export const LoginView = () => { 
    return (
        <View className="items-center justify-center flex-1">
            <FormHeader title="Acesse sua conta" subtitle="Informe seus e-mail e senha para entrar" />
            <Input/>
            <TouchableOpacity onPress={() => router.push("/register")}>
                <Text>Registro</Text>
            </TouchableOpacity>
        </View>
    )
}