import { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useProfileViewModel } from "./useProfile.viewModel";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer/KeyboardContainer";
import { ScrollView } from "react-native-gesture-handler";
import FormHeader from "../../shared/components/FormHeader/FormHeader";
import { InputController } from "../../shared/components/InputController/InputController";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "../../shared/components/Button/Button";
import { router } from "expo-router";
import { Header } from "./components/Header/Header";

export const ProfileView: FC<ReturnType<typeof useProfileViewModel>> = ({
  control,
  onSubmit,
  avatarUri,
  errors,
  isSubmitting,
}) => {
  return (
    <KeyboardContainer>
      <ScrollView className="flex-1  px-[40px]">
        <Header />
        <TouchableOpacity className="w-[120px] h-[120px] rounded-md items-center justify-center bg-shape self-center mt-6">
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
        <Text className="text-base mt-6 font-bold text-gray-500">Dados Pessoais</Text>
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

        <Button onPress={onSubmit} rightIcon="arrow-forward" className="mt-6" isLoading={isSubmitting}>
          Atualizar Cadastro
        </Button>
      </ScrollView>
    </KeyboardContainer>
  );
};
