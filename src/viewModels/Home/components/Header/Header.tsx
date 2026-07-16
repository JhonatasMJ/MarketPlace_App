import { Image, Text, TouchableOpacity, View } from "react-native";
import { useUserStore } from "../../../../shared/store/user-store";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../styles/colors";

export const Header = () => {
  const { user, logout } = useUserStore();
  return (
    <View>
      <TouchableOpacity className="flex-row items-center gap-6">
        <View className="relative">
          {user?.avatarUrl ? (
            <Image
              source={{ uri: user?.avatarUrl }}
              className="w-[56px] h-[56px] rounded-md border-shape"
            />
          ) : (
            <View className="w-[56px] h-[56px] rounded-md  border-gray-200 items-center justify-center bg-shape border-2">
              <Ionicons name="person" size={24} color={colors.gray[300]} />
            </View>
          )}
           </View>
          <View>
            <Text className="capitalize font-bold text-base">
              Olá, {user?.name?.split(" ")[0] ?? "Usuário"}
            </Text>
            <View className="flex-row items-center gap-2">
              <Text className="color-purple-base font-bold text-sm">Ver Perfil</Text>
              <Ionicons name="arrow-forward-outline" size={20} color={colors["purple-base"]} />
            </View>
            <TouchableOpacity onPress={() => logout()}>
            <Text>
              sair da conta
            </Text>
            </TouchableOpacity>
           
          </View>
       
      </TouchableOpacity>
    </View>
  );
};
