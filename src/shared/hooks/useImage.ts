import { ImagePickerOptions } from "expo-image-picker";
import { useCamera } from "./useCamera";
import { useGallery } from "./useGallery";
import { useModal } from "./useModal";


export const useImage = (pickerOptions: ImagePickerOptions ) => {
    const { openCamera, isLoading: isLoadingCamera } = useCamera(pickerOptions);
    const { openGallery, isLoading: isLoadingGallery } = useGallery(pickerOptions);
    const modals = useModal();

    const loading = Boolean(isLoadingCamera || isLoadingGallery);
  
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
              console.log(image);
            },
          },
          {
            text: "Câmera",
            icon: "camera",
            variant: "primary",
            onPress: openCamera,
          },
        ],
      });
     }
    return {
        handleSelectImage,
        loading,
    }
}