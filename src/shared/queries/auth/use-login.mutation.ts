import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { Toast } from "toastify-react-native";
import * as authService from "../../services/auth.service";
import { LoginHttpParams } from "../../interfaces/http/login";
import { useUserStore } from "../../store/user-store";

const getApiErrorMessage = (error: unknown) => {
  if (isAxiosError(error)) {
    return (
      (error.response?.data as { message?: string })?.message ??
      "Não foi possível fazer login. Tente novamente."
    );
  }

  return "Não foi possível fazer login. Tente novamente.";
};

/* Essa função é responsável por criar uma instância do useMutation do tanstack/react-query de login de usuário, pegando do service de autenticação a função de login, ja retorna um loading, sucesso e erro */
export const useLoginMutation = () => {
  const { setSession } = useUserStore();

  const mutation = useMutation({
    mutationFn: (userData: LoginHttpParams) =>
      authService.login(userData),
    onSuccess: (response) => {
      setSession({
        user: response.user,
        token: response.token,
        refreshToken: response.refreshToken ?? null,
      });
    },
    onError: (error) => {
      Toast.error(getApiErrorMessage(error), "top");
    },
  });
  return mutation;
};
