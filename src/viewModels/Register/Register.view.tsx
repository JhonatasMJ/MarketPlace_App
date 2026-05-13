import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./userRegister.viewModel";

export const RegisterView :FC<ReturnType<typeof useRegisterViewModel>> = ({onSubmit}) => {
    return (
        <View>
            <Text>Register</Text>
            <TouchableOpacity onPress={onSubmit}>
                <Text>Registrar</Text>
            </TouchableOpacity>
        </View>
    )
}