import {useForm} from "react-hook-form"
import { RegisterFormData, registerSchema } from "./register.schema";
import { yupResolver } from "@hookform/resolvers/yup";

export const useRegisterViewModel = () => { 

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
      }
    })

    const onSubmit = handleSubmit(({}) => {

    })
        
    return {
        control,
        onSubmit,
        errors,
    }
}