import { Text, TouchableOpacity, View } from "react-native";
import FormHeader from "../../shared/components/FormHeader/FormHeader";
import { Input } from "../../shared/components/Input/Input";
import { router } from "expo-router";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer/KeyboardContainer";

export const LoginView = () => {
  return (
    <KeyboardContainer>
      <View className="flex-1 items-center justify-center px-[40px]">
        <FormHeader
          title="Acesse sua conta"
          subtitle="Informe seus e-mail e senha para entrar"
        />
        <Input />
        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text>Registro</Text>
        </TouchableOpacity>
      </View>
    </KeyboardContainer>
  );
};
