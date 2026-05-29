import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/global.css";
import { Modal } from "../shared/components/Modal/Modal";
import ToastManager from "toastify-react-native";
import { useUserStore } from "../shared/store/user-store";

const queryClient = new QueryClient();

export const unstable_settings = {
  initialRouteName: "index",
};

const { token } = useUserStore();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(public)" />
        <Stack.Screen name="(private)" />
      </Stack>
      <Modal />
      <ToastManager useModal={false} />
    </QueryClientProvider>
  );
}
