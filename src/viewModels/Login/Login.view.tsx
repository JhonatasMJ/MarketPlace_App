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
        <View className="flex-1 w-full items-center justify-center">
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
         className="mt-6"
         >
          
         Login
         </Button>
        </View>
         <View className="flex-2 pb-16">
        <Text className=" text-base text-gray-300 mb-6">Ainda não tem uma conta?</Text>
         <Button
         onPress={() => router.push("/register")}
         rightIcon="arrow-forward"
         variant="outlined"
         >
          Registro
         </Button>
         </View>
      </View>

    </KeyboardContainer>
  );
};
