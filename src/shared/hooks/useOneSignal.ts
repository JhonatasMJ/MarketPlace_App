import { useEffect, useState } from "react";
import { OneSignal } from "react-native-onesignal";

const ONESIGNAL_APP_ID = process.env.EXPO_PUBLIC_ONESIGNAL_APP_ID;

const [playerId, setPlayerId] = useState<string | undefined>(undefined);

export const useOneSignal = () => {
  useEffect(() => {
    if (!ONESIGNAL_APP_ID) return;
    OneSignal.initialize(ONESIGNAL_APP_ID);
    (async () => {
      const playerId = await OneSignal.User.pushSubscription.getIdAsync();
      if(playerId) {
        setPlayerId(playerId);
      }
    })();
  }, []);
  return { playerId };
};
