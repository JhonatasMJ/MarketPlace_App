import "react-native-reanimated";
import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/global.css";
import { Modal } from "@/shared/components/Modals/Modal/Modal";
import { AppBottomSheet } from "@/shared/components/BottomSheet/BottomSheet";
import ToastManager from "toastify-react-native";
const queryClient = new QueryClient();
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNotifications } from "@/shared/hooks/useNotifications";
import { useOneSignal } from "@/shared/hooks/useOneSignal";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  return (
    useNotifications(),
    useOneSignal(),
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
