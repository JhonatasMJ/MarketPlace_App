import { ImagePickerOptions } from "expo-image-picker";
import { useCamera } from "./useCamera";
import { useGallery } from "./useGallery";
import { useModal } from "./useModal";
import { useModalStore } from "../store/modal-store";

interface UseImageProps extends ImagePickerOptions {
  callback: (uri: string | null) => void;
}


export const useImage = ({ callback, ...pickerOptions }: UseImageProps) => {
    const { openCamera, isLoading: isLoadingCamera } = useCamera(pickerOptions);
    const { openGallery, isLoading: isLoadingGallery } = useGallery(pickerOptions);
    const modals = useModal();
    const {close} = useModalStore();

    const loading = Boolean(isLoadingCamera || isLoadingGallery);

    const handleCallback = (uri: string | null) => { 
      close();
      callback(uri);
    }
  
    const handleSelectImage = () => { 
      modals.showSelection({
        title: "Selecionar Foto",
        message: "Escolha uma opção:",
        options: [
          {
            text: "Galeria",
            icon: "images",
            variant: "primary",
            onPress:  async () => {
              const image = await openGallery();
              handleCallback(image);
            },
          },
          {
            text: "Câmera",
            icon: "camera",
            variant: "primary",
            onPress: async () => {
              const image = await openCamera();
              handleCallback(image);
            },
          },
        ],
      });
     }
    return {
        handleSelectImage,
        loading,
    }
}