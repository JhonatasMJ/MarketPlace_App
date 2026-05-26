import { useForm } from "react-hook-form";
import { RegisterFormData, registerSchema } from "./register.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation";
import { useUserStore } from "../../shared/store/user-store";
import { useImage } from "../../shared/hooks/useImage";


export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation();
  const { setSession } = useUserStore();
  const { handleSelectImage } = useImage({});

  const handleSelectAvatar = async () => { 
    await handleSelectImage();
   }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  /* Função para enviar os dados do formulário para o backend */
  const onSubmit = handleSubmit(async (userData) => {
    /* Remove o confirmPassword do objeto userData */
    const { confirmPassword, ...registerData } = userData;
    const mutationResponse =
      await userRegisterMutation.mutateAsync(registerData);
    setSession({
      user: mutationResponse.user,
      token: mutationResponse.token,
      refreshToken: mutationResponse.refreshToken,
    });
  });

  return {
    control,
    onSubmit,
    errors,
    handleSelectAvatar,
  };
};
