import { Text, TouchableOpacity, View } from "react-native";
import FormHeader from "../../shared/components/FormHeader/FormHeader";
import { Input } from "../../shared/components/Input/Input";
import { router } from "expo-router";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer/KeyboardContainer";
import { useLoginViewModel } from "./useLogin.viewModel";
import { FC } from "react";
import { InputController } from "../../shared/components/InputController/InputController";
import { Button } from "../../shared/components/Button/Button";

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
  control,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <View className="flex-1 items-center justify-center px-[40px]">
        <FormHeader
          title="Acesse sua conta"
          subtitle="Informe seus e-mail e senha para entrar"
        />
        <InputController
        control={control}
        name="email"
        label="E-mail"
        leftIcon="mail-outline"
        placeholder="Digite seu e-mail"
        />
        <InputController
        control={control}
        name="password"
        label="Senha"
        leftIcon="lock-closed-outline"
        placeholder="Digite sua senha"
        secureTextEntry
        />
         <Button
         onPress={onSubmit}
         rightIcon="arrow-forward"
         >
          Entrar
         </Button>
        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text>Registro</Text>
        </TouchableOpacity>
      </View>
    </KeyboardContainer>
  );
};
