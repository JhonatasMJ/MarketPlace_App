import "react-native-reanimated";
import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/global.css";
import { Modal } from "../shared/components/Modal/Modal";
import { AppBottomSheet } from "../shared/components/BottomSheet/BottomSheet";
import ToastManager from "toastify-react-native";
const queryClient = new QueryClient();
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(public)" />
        <Stack.Screen name="(private)" />
      </Stack>
      <Modal />
      <AppBottomSheet />
      <ToastManager useModal={false} />
    </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
