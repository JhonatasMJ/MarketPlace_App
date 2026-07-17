import { yupResolver } from "@hookform/resolvers/yup";
import {
  ProfileFormData,
  profileSchema,
} from "../../shared/schemas/profile.schema";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useUserStore } from "../../shared/store/user-store";

export const useProfileViewModel = () => {
  const { user } = useUserStore();
  const [avatarUri, setAvatarUri] = useState<string | null>(
    user?.avatarUrl ?? null,
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = handleSubmit(async () => {});

  return {
    control,
    onSubmit,
    avatarUri,
    errors,
  };
};
