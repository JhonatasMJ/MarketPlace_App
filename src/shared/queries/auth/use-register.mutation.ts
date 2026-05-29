import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { Toast } from "toastify-react-native";
import * as authService from "../../services/auth.service";
import { RegisterHttpParams } from "../../interfaces/http/register";
import { useUserStore } from "../../store/user-store";

interface UseRegisterMutationParams {
  onSuccess?: () => void;
}

const getApiErrorMessage = (error: unknown) => {
  if (isAxiosError(error)) {
    return (
      (error.response?.data as { message?: string })?.message ??
      "Não foi possível criar a conta. Tente novamente."
    );
  }

  return "Não foi possível criar a conta. Tente novamente.";
};

/* Essa função é responsável por criar uma instância do useMutation do tanstack/react-query de registro de usuário, pegando do service de autenticação a função de registro, ja retorna um loading, sucesso e erro */
export const useRegisterMutation = ({ onSuccess }: UseRegisterMutationParams) => {
  const { setSession } = useUserStore();
  const mutation = useMutation({
    mutationFn: (userData: RegisterHttpParams) =>
      authService.register(userData),
    onSuccess: (response) => {
      setSession({
        user: response.user,
        token: response.token,
        refreshToken: response.refreshToken ?? null,
      });
      onSuccess?.();
    },
    onError: (error) => {
      Toast.error(getApiErrorMessage(error), "top");
    },
  });
  return mutation;
};
