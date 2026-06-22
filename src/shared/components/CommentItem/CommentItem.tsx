import { Image, Text, View } from "react-native";
import { ProductCommentInterface } from "../../interfaces/product-commets";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../styles/colors";
import { useUserStore } from "../../store/user-store";

interface CommentItemProps {
  comment: ProductCommentInterface;
}

export const CommentItem = ({ comment }: CommentItemProps) => {
  const { user } = useUserStore();
  const isCurrentUser = user?.id === comment.user.id;

  return (
    <View className="bg-white p-4 mb-3 rounded-lg shadow-sm">
      <View className="flex-row items-center justify-between mb-3"></View>
      <View className="flex-row items-center flex-1">
        <View className="w-8 h-8 rounded-md overflow-hidden bg-gray-200 mr-3">
          {comment.user.avatar.url && comment.user.avatar.url !== "" ? (
            <Image
              source={{ uri: comment.user.avatar.url }}
              resizeMode="cover"
              className="w-full h-full"
            />
          ) : (
            <View className="w-full h-full items-center justify-center">
              <Ionicons name="person" size={20} color={colors.gray[400]} />
            </View>
          )}
          <View className="flex-row items-center flex-1 ml-2">
            <Text className="text-base font-medium text-gray-800">
              {comment.user.name}
            </Text>
            {isCurrentUser && (
              <View className="bg-blue-base px-2 py-1 rounded-full">
                <Text className="text-xs font-bold text-white">Você</Text>
              </View>
            )}
          </View>
        </View>
      </View>
      <View className="flex-row items-end">
        <Ionicons name="star" size={16} color={colors["purple-base"]} />
        <Text className="text-sm font-bold text-gray-600">
          {comment.user.rating.value} /{" "}
          <Text className="text-[10px] text-gray-600">5</Text>
        </Text>
      </View>
      <Text> {comment.content}</Text>
    </View>
  );
};
