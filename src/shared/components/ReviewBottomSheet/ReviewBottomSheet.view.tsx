import { FC } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { useReviewBottomSheetViewModel } from "./useReviewBottomSheet.viewModel";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../styles/colors";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Stars } from "../Stars/Stars";
import { useBottomSheetStore } from "../../store/bottomSheet-store";

export const ReviewBottomSheetView: FC<
  ReturnType<typeof useReviewBottomSheetViewModel>
> = ({
  handleRatingChange,
  handleContentChange,
  ratingForm,
  handleFormSubmit,
  isLoading,
}) => {
  const { close } = useBottomSheetStore();
  return (
    <View className="bg-background rounded-t-2xl">
      <View className="flex-row items-center justify-between p-6">
        <Text className="text-lg font-bold text-gray-900">
          {ratingForm.isEdit ? "Editar Avaliação" : "Avaliar Produto"}
        </Text>
        <TouchableOpacity
          onPress={close}
          className="w-8 h-8 items-center justify-center rounded-md border border-gray-400"
        >
          <Ionicons name="close" size={24} color={colors.gray[400]} />
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <View className="p-6 items-center justify-center min-h-[300px]">
          <ActivityIndicator size="large" color={colors["purple-base"]} />
          <Text className="text-gray-600 mt-4 text-center">
            Verificando avaliação existente...
          </Text>
        </View>
      ) : (
        <View className="p-6">
          <Text className="font-semibold text-base text-gray-800">Nota</Text>
          <View className="flex-row items-center mb-6 gap-2">
            <Stars
              rating={ratingForm.rating}
              handleChangeRating={handleRatingChange}
            />
          </View>
          <Input
            label="Comentário"
            labelClassName="text-base font-semibold text-gray-800"
            onChangeText={handleContentChange}
            placeholder={
              ratingForm.isEdit
                ? "Edite seu comentário"
                : "Descreva sua avaliação"
            }
            value={ratingForm.content}
            multiline
            numberOfLines={8}
            textAlign="left"
            containerClassName="mb-8"
            className="h-[150px]"
          />
          <View className="flex-row gap-3 mb-8">
            <View className="flex-1">
              <Button variant="outlined">Cancelar</Button>
            </View>
            <View className="flex-1">
              <Button onPress={handleFormSubmit}>
                {ratingForm.isEdit ? "Atualizar" : "Enviar"}
              </Button>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
