import { useForm } from "react-hook-form"
import { LoginFormData, loginSchema } from "./login.schema"
import { yupResolver } from "@hookform/resolvers/yup"

export const useLoginViewModel = () => { 
    const {control, handleSubmit} = useForm<LoginFormData>({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    return{control}
}