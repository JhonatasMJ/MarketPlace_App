import { FC, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";
import { InputController } from "../../shared/components/InputController/InputController";
import FormHeader from "../../shared/components/FormHeader/FormHeader";
import { router } from "expo-router";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer/KeyboardContainer";
import { Button } from "../../shared/components/Button/Button";
import { Ionicons } from "@expo/vector-icons";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
  control,
  errors,
  handleSelectAvatar,
  avatarUri,
}) => {
  const [email, setEmail] = useState("");

  return (
    <KeyboardContainer>
      <ScrollView className="flex-1  px-[40px]">
        <FormHeader
          title="Crie sua conta"
          subtitle="Informe seus dados pessoais e de acesso"
        />
        <TouchableOpacity
          className="w-[120px] h-[120px] rounded-md items-center justify-center bg-shape self-center"
          onPress={handleSelectAvatar}
        >
          {avatarUri ? (
            <Image
              source={{ uri: avatarUri }}
              className="w-full h-full rounded-md"
              resizeMode="cover"
            />
          ) : (
            <Ionicons name="cloud-upload-outline" size={32} color="gray" />
          )}
        </TouchableOpacity>
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

        <Button onPress={onSubmit} rightIcon="arrow-forward" className="mt-6">
          Registrar
        </Button>
        <View className="mt-16">
          <Text className="text-base text-gray-300 mb-2">
            Já tem uma conta?
          </Text>
          <Button
            onPress={() => router.push("/login")}
            variant="outlined"
            className="mt-6"
          >
            Login
          </Button>
        </View>
      </ScrollView>
    </KeyboardContainer>
  );
};
