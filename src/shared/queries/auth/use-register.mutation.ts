import { useMutation } from "@tanstack/react-query";
import * as authService from "../../services/auth.service";
import { RegisterHttpParams } from "../../interfaces/http/register";
import { AuthResponse } from "../../interfaces/http/auth-response";
import { useUserStore } from "../../store/user-store";


interface UseRegisterMutationParams {
  onSuccess?: () => void;

}

/* Essa função é responsável por criar uma instância do useMutation do tanstack/react-query de registro de usuário, pegando do service de autenticação a função de registro, ja retorna um loading, sucesso e erro */
export const useRegisterMutation = ({ onSuccess }: UseRegisterMutationParams) => {
  const { setSession } = useUserStore();
  const mutation = useMutation({
    mutationFn: (userData: RegisterHttpParams) =>
      authService.register(userData),
    onSuccess: (response) => {
      console.log(response);
      setSession({
        user: response.user,
        token: response.token,
        refreshToken: response.refreshToken,
      });
      onSuccess?.();
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return mutation;
};
