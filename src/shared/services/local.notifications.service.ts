import { colors } from "@/styles/colors";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

const DEFAULT_CHANNEL = "default";

const NOTIFICATIONS_IDS = {
  CART_REMINDER: "cart-reminder",
  PURCHASE_FEEDBACK: "purchase-feedback",
};

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true /* Faz som da notificação
     */,
    shouldShowBanner: true /* Mostra a notificação na tela */,
    shouldSetBadge: false /* Não mostra o badge no ícone do app */,
    shouldShowList: true /* Mostra a notificação na lista de notificações */,
  }),
});

const requestPermissions = async ():Promise<boolean> => {
  const {status:existingStatus} = await Notifications.getPermissionsAsync();

  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const {status} = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  return finalStatus === "granted";
}

const setupNotificationChannel = async () => {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync(DEFAULT_CHANNEL, {
      name: "Notificações do marketplace",
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: colors["purple-base"],
    });
  }
};

interface ScheduleCartReminderInterface {
  productName: string;
  productId: number;
  delayInMinutes: number;
}

const scheduleCartReminder = async ({
  productName,
  productId,
  delayInMinutes,
}: ScheduleCartReminderInterface) => {
  const hasPermission = await requestPermissions();
  if (!hasPermission) {
    return
  };
  const notification = await Notifications.scheduleNotificationAsync({
    identifier: NOTIFICATIONS_IDS.CART_REMINDER,
    content: {
      title: "Você esqueceu algo no carrinho!",
      body: `O produto ${productName} está esperando por você. Finalize sua compra agora!`,
      data: {
        type: "cart-reminder",
        productId: String(productId),
      },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: delayInMinutes,
    },
  });
  return notification;
};

export const LocalNotificationsService = {
  scheduleCartReminder,
  requestPermissions,
  setupNotificationChannel,
};
