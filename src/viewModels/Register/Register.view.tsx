import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./userRegister.viewModel";
import { Input } from "../../shared/components/Input/Input";

export const RegisterView :FC<ReturnType<typeof useRegisterViewModel>> = ({onSubmit}) => {
    return (
        <View>
            <Input/>
            <TouchableOpacity onPress={onSubmit}>
                <Text>Registrar</Text>
            </TouchableOpacity>
        </View>
    )
}