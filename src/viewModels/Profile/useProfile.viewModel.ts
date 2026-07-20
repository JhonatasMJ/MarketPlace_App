import { yupResolver } from "@hookform/resolvers/yup";
import {
  ProfileFormData,
  profileSchema,
} from "../../shared/schemas/profile.schema";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useUserStore } from "../../shared/store/user-store";
import { useUpdateProfileMutation } from "../../shared/queries/profile/use-update-profile.mutation";
import { useModal } from "../../shared/hooks/useModal";
import { useModalStore } from "../../shared/store/modal-store";
import { useCartStore } from "../../shared/store/cart-store";
import { useImage } from "../../shared/hooks/useImage";
import { CameraType } from "expo-image-picker";
import { useUploadAvatarMutation } from "../../shared/queries/auth/use-upload-avatar.mutation";

export const useProfileViewModel = () => {
  const { user, logout } = useUserStore();
  const { close } = useModalStore();
  const updateProfileMutation = useUpdateProfileMutation();
  const { showSelection } = useModal();
  const { clearCart } = useCartStore();
  const uploadAvatarMutation = useUploadAvatarMutation();
  const { handleSelectImage } = useImage({
    callback: async (uri) => {
      if (uri) {
          await uploadAvatarMutation.mutateAsync(uri);
      }
    },
    cameraType: CameraType.front,
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormData>({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
      phone: user?.phone ?? "",
      newPassword: undefined,
      password: undefined,
    },
  });

  const validatePasswords = (userData: ProfileFormData) => {
    if (userData.password) return true;
    if (
      userData.password === userData.newPassword &&
      (userData.password?.length ?? 0) > 0
    ) {
      return false;
    }
    return true;
  };

  const onSubmit = handleSubmit(async (userData) => {
    if (!validatePasswords(userData)) {
      return;
    }
    await updateProfileMutation.mutateAsync(userData);
  });

  const handleLogout = () =>
    showSelection({
      title: "Sair",
      message: "Tem certeza que deseja sair da sua conta?",
      options: [
        {
          text: "Continuar logado",
          onPress: close,
          variant: "primary",
        },
        {
          variant: "danger",
          onPress: () => {
            clearCart();
            logout();
            close();
          },
          text: "Sair",
        },
      ],
    });

  return {
    control,
    onSubmit,
    errors,
    isSubmitting,
    handleLogout,
    avatarUri: user?.avatarUrl ?? null,
    handleSelectImage,
  };
};
