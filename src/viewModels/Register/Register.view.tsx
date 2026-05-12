import { FC } from "react";
import { Text, View } from "react-native";
import { useRegisterViewModel } from "./userRegister.viewModel";

export const RegisterView :FC<ReturnType<typeof useRegisterViewModel>> = () => {
    return (
        <View>
            <Text>Register</Text>
        </View>
    )
}