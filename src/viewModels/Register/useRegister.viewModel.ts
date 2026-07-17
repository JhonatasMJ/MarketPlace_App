import { useForm } from "react-hook-form";
import { RegisterFormData, registerSchema } from "../../shared/schemas/register.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation";
import { useUserStore } from "../../shared/store/user-store";
import { useImage } from "../../shared/hooks/useImage";
import { useState } from "react";
import { CameraType } from "expo-image-picker";
import { useUploadAvatarMutation } from "../../shared/queries/auth/use-upload-avatar.mutation";

export const useRegisterViewModel = () => {
  const { setSession, updateUser } = useUserStore();
  const [avatarUri, setAvatarUri] = useState<string | null>(null);
  const { handleSelectImage } = useImage({
    callback: setAvatarUri,
    cameraType: CameraType.front,
  });

  const handleSelectAvatar = async () => {
    await handleSelectImage();
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  /* Mutation para fazer upload da foto de perfil */
  const uploadAvatarMutation = useUploadAvatarMutation();
  const userRegisterMutation = useRegisterMutation({});

  /* Função para enviar os dados do formulário para o backend */
  const onSubmit = handleSubmit((userData) => {
    const { confirmPassword, ...registerData } = userData;
    userRegisterMutation.mutate(registerData);
  });

  return {
    control,
    onSubmit,
    errors,
    handleSelectAvatar,
    avatarUri,
  };
};
