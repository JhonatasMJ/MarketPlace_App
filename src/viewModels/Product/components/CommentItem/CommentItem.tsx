import { Image, Text, View } from "react-native";
import { ProductCommentInterface } from "../../../../shared/interfaces/product-commets";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../styles/colors";
import { useUserStore } from "../../../../shared/store/user-store";

interface CommentItemProps {
  comment: ProductCommentInterface;
}

export const CommentItem = ({ comment }: CommentItemProps) => {
  const { user } = useUserStore();
  const isCurrentUser = user?.id === comment.user.id;

  const rating = comment.user.rating.value;

  return (
    <View className="bg-white p-4 mb-3 rounded-lg shadow-sm">
      <View className="flex-row items-center justify-between mb-2">
        <View className="w-8 h-8 rounded-md overflow-hidden bg-gray-200">
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
        </View>
        <View className="flex-row items-center gap-0.5">
          {Array.from({ length: 5 }, (_, index) => {
            const starNumber = index + 1;
            const isSelected = starNumber <= rating;
            return (
              <Ionicons
                key={`comment-star-${starNumber}`}
                name={isSelected ? "star" : "star-outline"}
                size={16}
                color={isSelected ? colors["purple-base"] : colors.gray[200]}
              />
            );
          })}
        </View>
      </View>
      <View className="flex-row items-center gap-2 mb-3">
        <Text className="text-base font-medium text-gray-800">
          {comment.user.name}
        </Text>
        {isCurrentUser && (
          <View className="bg-blue-base px-2 py-1 rounded-full">
            <Text className="text-xs font-bold text-white">Você</Text>
          </View>
        )}
      </View>
      <Text className="text-gray-600">{comment.content}</Text>
    </View>
  );
};
