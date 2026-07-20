import { FC } from "react";
import { useCreditCardViewModel } from "./useCreditCard.viewModel";
import { View } from "react-native";
import { FocusedField } from "../../useCartBottomSheet.viewModel";

export const CreditCardView: FC<
  ReturnType<typeof useCreditCardViewModel> & { focusedField: FocusedField | null }
> = ({ focusedField }) => {
    return (
        <View className="w-full h-[192px] bg-red-500">

        </View>
    )
};
