import { useMutation } from "@tanstack/react-query";
import * as authService from "../../services/auth.service";
import { LoginHttpParams } from "../../interfaces/http/login";
import { useUserStore } from "../../store/user-store";

/* Essa função é responsável por criar uma instância do useMutation do tanstack/react-query de login de usuário, pegando do service de autenticação a função de login, ja retorna um loading, sucesso e erro */
export const useLoginMutation = () => {

  const {setSession} = useUserStore()

  const mutation = useMutation({
    mutationFn: (userData: LoginHttpParams) =>
      authService.login(userData),
    onSuccess: (response) => {
      setSession(response)
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return mutation;
};
