import { ImagePickerOptions } from "expo-image-picker";
import { useCallback, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Toast } from "toastify-react-native";
import { Alert, Linking } from "react-native";

export const useGallery = (pickerOptions: ImagePickerOptions) => {
  const [isLoading, setIsLoading] = useState(false);
  const requestGalleryPermission = useCallback(async (): Promise<boolean> => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      const currentStatus = status === "granted";
      if (!currentStatus) {
        Alert.alert(
          "Permissão de galeria negada",
          "Precisamos da sua permissão para acessar a galeria",
          [
            {
              text: "Cancelar",
              style: "cancel",
            },
            {
              text: "Abrir configurações",
              onPress: () => {
                Linking.openSettings();
              },
              style: "default",
            },
          ],
        )
      }
      return currentStatus;
    } catch (error) {
      Toast.error("Erro ao solicitar permissão de galeria", "top");
      return false;
    }
  }, []);

  const openGallery = useCallback(async (): Promise<string | null> => {
    setIsLoading(true);
    try {
      const hasPermission = await requestGalleryPermission();
      if (!hasPermission) return null;
      const result = await ImagePicker.launchImageLibraryAsync(pickerOptions);
      if (!result.canceled && result.assets && result.assets.length > 0) {
        Toast.success("Imagem selecionada com sucesso", "top");
        return result.assets[0].uri;
      }
      return null;
    } catch (error) {
      Toast.error("Erro ao abrir a galeria", "top");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    requestGalleryPermission,
    openGallery,
  };
};
