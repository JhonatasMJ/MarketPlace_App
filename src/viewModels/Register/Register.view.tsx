import { FC, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";
import { InputController } from "../../shared/components/InputController/InputController";
import FormHeader from "../../shared/components/FormHeader/FormHeader";
import { router } from "expo-router";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer/KeyboardContainer";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
  control,
  errors,
}) => {
  const [email, setEmail] = useState("");

  return (
    <KeyboardContainer>
      <ScrollView className="flex-1  px-[40px]">
      <FormHeader 
      title="Crie sua conta" 
      subtitle="Informe seus dados pessoais e de acesso" 
      />
      <InputController
        control={control}
        name="name"
        errors={errors}
        label="Nome"
        leftIcon="person-outline"
        placeholder="Digite seu nome"
      />
         <InputController
        control={control}
        name="phone"
        errors={errors}
        label="Telefone"
        leftIcon="call-outline"
        placeholder="(00) 00000-0000"
      />

      <Text className="text-base mt-6 font-bold text-gray-500">Acesso</Text>
       <InputController
        control={control}
        name="email"
        errors={errors}
        label="E-mail"
        leftIcon="mail-outline"
        placeholder="Digite seu e-mail"
      />
     
         <InputController
        control={control}
        name="password"
        errors={errors}
        label="Senha"
        secureTextEntry
        leftIcon="lock-closed-outline"
        placeholder="Digite sua senha"
      />
        <InputController
        control={control}
        name="confirmPassword"
        errors={errors}
        label="Confirmar Senha"
        secureTextEntry
        leftIcon="lock-closed-outline"
        placeholder="Confirmesua senha"
      />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text>Voltar para login</Text>
      </TouchableOpacity>
      </ScrollView>
    </KeyboardContainer>
  );
};
