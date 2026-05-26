import { useForm } from "react-hook-form";
import { RegisterFormData, registerSchema } from "./register.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation";
import { useUserStore } from "../../shared/store/user-store";
import { useModal } from "../../shared/hooks/useModal";
import { useCamera } from "../../shared/hooks/useCamera";
import { useGallery } from "../../shared/hooks/useGallery";

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation();
  const { setSession } = useUserStore();
  const modals = useModal();
  const { openCamera } = useCamera({});
  const { openGallery } = useGallery({});

  const handleSelectAvatar = () => { 
    modals.showSelection({
      title: "Selecionar Foto",
      message: "Escolha uma opção:",
      options: [
        {
          text: "Galeria",
          icon: "images",
          variant: "primary",
          onPress:  async () => {
            const image = await openGallery();
            console.log(image);
          },
        },
        {
          text: "Câmera",
          icon: "camera",
          variant: "primary",
          onPress: openCamera,
        },
      ],
    });
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
