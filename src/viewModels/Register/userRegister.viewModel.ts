import {useForm} from "react-hook-form"
import { RegisterFormData, registerSchema } from "./register.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterMutation } from "../../shared/queries/auth/user-register.mutation";

export const useRegisterViewModel = () => { 
    const userRegisterMutation = useRegisterMutation();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
      resolver: yupResolver(registerSchema),  
      defaultValues: {
        name: "Jhonatas",
        email: "jhonatas@gmail.com",
        phone: "11999999999",
        password: "123456",
        confirmPassword: "123456",
      }
    })

    /* Função para enviar os dados do formulário para o backend */
    const onSubmit = handleSubmit(async(userData) => {
        /* Remove o confirmPassword do objeto userData */
        const {confirmPassword, ...registerData} = userData;
        await userRegisterMutation.mutateAsync(registerData);
    })
        
    return {
        control,
        onSubmit,
        errors,
    }
}