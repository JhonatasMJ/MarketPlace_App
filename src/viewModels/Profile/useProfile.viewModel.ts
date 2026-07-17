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

export const useProfileViewModel = () => {
  const { user, logout } = useUserStore();
  const [avatarUri, setAvatarUri] = useState<string | null>(
    user?.avatarUrl ?? null,
  );

  const { close } = useModalStore();
  const updateProfileMutation = useUpdateProfileMutation();
  const { showSelection } = useModal();
  const {clearCart} = useCartStore();

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
            close();
            clearCart();
            logout();
          },
          text: "Sair",
        },
      ],
    });

  return {
    control,
    onSubmit,
    avatarUri,
    errors,
    isSubmitting,
    handleLogout,
  };
};
