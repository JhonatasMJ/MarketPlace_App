import { FC, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./userRegister.viewModel";
import { Input } from "../../shared/components/Input/Input";

export const RegisterView :FC<ReturnType<typeof useRegisterViewModel>> = ({onSubmit}) => {
    const [email, setEmail] = useState("");

    return (
        <View>
            <Input label="E-mail" leftIcon="mail-outline" value={email} onChangeText={setEmail} />
            <Input label="Senha" leftIcon="lock-closed-outline"  />
            <TouchableOpacity onPress={onSubmit}>
                <Text>Registrar</Text>
            </TouchableOpacity>
        </View>
    )
}

