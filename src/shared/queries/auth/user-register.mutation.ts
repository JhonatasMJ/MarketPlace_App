import { useMutation } from "@tanstack/react-query";
import * as authService from "../../services/auth.service";
import { RegisterHttpParams } from "../../interfaces/http/register";

/* Essa função é responsável por criar uma instância do useMutation do tanstack/react-query de registro de usuário, pegando do service de autenticação a função de registro, ja retorna um loading, sucesso e erro */
export const useRegisterMutation = () => {
  const mutation = useMutation({
    mutationFn: (userData: RegisterHttpParams) =>
      authService.register(userData),
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return mutation;
};
