import { FC, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./userRegister.viewModel";
import { InputController } from "../../shared/components/InputController/InputController";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
  control,
  errors,
}) => {
  const [email, setEmail] = useState("");

  return (
    <View className="flex-1 justify-center">
      <InputController
        control={control}
        name="email"
        errors={errors}
        label="E-mail"
        leftIcon="mail-outline"
      />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};
