import { FC } from "react";
import { useCreditCardViewModel } from "./useCreditCard.viewModel";
import { Text, View } from "react-native";
import { FocusedField } from "../../useCartBottomSheet.viewModel";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import clsx from "clsx";
import { CardData } from ".";

const PURPLE_GRADIENT = ["#5B3A8F", "#6B5CA5", "#7B6CB5"] as const;

export const CreditCardView: FC<
  ReturnType<typeof useCreditCardViewModel> & {
    focusedField: FocusedField | null;
    cardData: CardData;
  }
> = ({ focusedField, frontAnimatedStyle, backAnimatedStyle, cardData, formatCardNumber }) => {
  return (
    <View className="w-full h-[192px]">
     <Animated.View 
        style={[
          frontAnimatedStyle,
          {
            position: "absolute",
            width: "100%",
            height: 192,
            backfaceVisibility: "hidden",
          },
        ]}
      >
        <LinearGradient
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0 }}
          colors={PURPLE_GRADIENT}
          style={{
            flex: 1,
            borderRadius: 16,
            padding: 20,
          }}
        >
          <View className="flex-row justify-between items-center mb-4">
            <View className="w-12 h-8 bg-yellow-400 rounded-md" />
          </View>
          <View
            className={clsx("py-2 px-1 rounded-lg mb-6", {
              "bg-white/20": focusedField === "number",
            })}
          >
            <Text className="text-white text-lg tracking-widest text-center">
              {formatCardNumber(cardData.number)}
            </Text>
            <View className="flex-row justify-between items-end">
              <View
                className={clsx("flex-1 p-2 rounded-lg", {
                  "bg-white/20": focusedField === "name",
                })}
              >
                <Text className="text-white text-sm font-bold uppercase">
                  PORTADOR
                </Text>
                <Text className="text-white text-sm font-bold uppercase">
                  {cardData.name.length ? cardData.name : "NOME DO TITULAR"}
                </Text>
              </View>
              <View
                className={clsx("ml-4 p-1 rounded-lg", {
                  "bg-white/20": focusedField === "expirationDate",
                })}
              >
                <Text className="text-white text-xs mb-1 font-semibold">
                  VÁLIDO ATÉ
                </Text>
                <Text className="text-white text-sm font-bold">
                  {cardData.expirationDate.length ? cardData.expirationDate : "MM/AA"}
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </Animated.View>
       <Animated.View
        style={[
          backAnimatedStyle,
          {
            position: "absolute",
            width: "100%",
            height: 192,
            backfaceVisibility: "hidden",
          },
        ]}
      >
        <LinearGradient
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0 }}
          colors={PURPLE_GRADIENT}
          style={{
            flex: 1,
            borderRadius: 16,
          }}
        >
          <View className="h-[40px] bg-black w-full mt-[20px]"/>
          <View className="flex-1 justify-center items-end px-5">
            <View className="w-24">
              <Text className="text-white text-center text-xs font-semibold uppercase mb-2">
                CVV
              </Text>
              <View className={clsx("bg-white p-2 rounded h-8 justify-center", {
                "bg-blue-100": focusedField === "cvv",
              })}>
                <Text>
                  {cardData.CVV || "***"}
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </Animated.View>
    </View>
  );
};
