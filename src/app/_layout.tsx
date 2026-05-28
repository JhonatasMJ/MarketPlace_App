import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/global.css";
import { Modal } from "../shared/components/Modal/Modal";
import ToastManager from "toastify-react-native";

const queryClient = new QueryClient();

export const unstable_settings = {
  initialRouteName: "index",
};

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
