import { colors } from "@/styles/colors";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

const DEFAULT_CHANNEL = "default";

const NOTIFICATIONS_IDS = {
  CART_REMINDER: "cart-reminder",
  PURCHASE_FEEDBACK: "purchase-feedback",
};

//configurar o scheme no app.json para que o deep link funcione corretamente
const DEEP_LINK = "marketplace://"

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true /* Faz som da notificação
     */,
    shouldShowBanner: true /* Mostra a notificação na tela */,
    shouldSetBadge: false /* Não mostra o badge no ícone do app */,
    shouldShowList: true /* Mostra a notificação na lista de notificações */,
  }),
});

const requestPermissions = async (): Promise<boolean> => {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();

  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  return finalStatus === "granted";
};

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

interface ScheduleProductInterface {
  productName: string;
  productId: number;
  delayInMinutes: number;
}

const scheduleCartReminder = async ({
  productName,
  productId,
  delayInMinutes,
}: ScheduleProductInterface) => {
  const hasPermission = await requestPermissions();
  if (!hasPermission) {
    return;
  }
  await Notifications.scheduleNotificationAsync({
    identifier: NOTIFICATIONS_IDS.CART_REMINDER,
    content: {
      title: "Você esqueceu algo no carrinho!",
      body: `O produto ${productName} está esperando por você. Finalize sua compra agora!`,
      data: {
        type: "cart-reminder",
        productId: String(productId),
        deepLink: `${DEEP_LINK}cart`
      },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: delayInMinutes * 60,
    },
  });
};

const scheduleFeedbackNotification = async ({
  productName,
  productId,
  delayInMinutes,
}: ScheduleProductInterface) => {
  const hasPermission = await requestPermissions();
  if (!hasPermission) {
    return;
  }

  await Notifications.scheduleNotificationAsync({
    identifier: `${NOTIFICATIONS_IDS.PURCHASE_FEEDBACK}-${productId}`,
    content: {
      title: "Como foi sua compra?",
      body: `Você realizou o pedido do produto ${productName}. Envie um feedback do que achou do produto!`,
      data: {
        type: "purchase-feedback",
        productId: String(productId),
        deepLink: `${DEEP_LINK}product/${productId}`
      },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: delayInMinutes * 60,
    },
  });
};

export const LocalNotificationsService = {
  scheduleCartReminder,
  requestPermissions,
  setupNotificationChannel,
  scheduleFeedbackNotification,
};
