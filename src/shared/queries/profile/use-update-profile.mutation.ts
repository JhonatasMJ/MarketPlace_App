import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "../../services/profile.service";
import { Toast } from "toastify-react-native";
import { useUserStore } from "../../store/user-store";

export const useUpdateProfileMutation = () => {
  const { updateUser } = useUserStore();
  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: (response) => {
      updateUser({ ...response.user });
    },
    onError: (error) => {
      Toast.error(error.message ?? "Erro ao atualizar perfil", "top");
    },
  });
  return mutation;
};
