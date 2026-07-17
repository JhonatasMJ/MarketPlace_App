import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "../../services/profile.service";
import { Toast } from "toastify-react-native";
import { useUserStore } from "../../store/user-store";
import { useModal } from "../../hooks/useModal";

export const useUpdateProfileMutation = () => {
  const { updateUser } = useUserStore();
  const {showSuccess} = useModal();
  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: (response) => {
      updateUser({ ...response.user });
      showSuccess({
        title: "Sucesso",
        message: "Dados cadastrais atualizados com sucesso"
      })
    },
    onError: (error) => {
      Toast.error(error.message ?? "Erro ao atualizar perfil", "top");
    },
  });
  return mutation;
};
