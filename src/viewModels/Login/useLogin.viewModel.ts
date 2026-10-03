import { useForm } from "react-hook-form"
import { LoginFormData, loginSchema } from "./login.schema"
import { yupResolver } from "@hookform/resolvers/yup"
import { useLoginMutation } from "@/shared/queries/auth/use-login.mutation"
import { useOneSignal } from "@/shared/hooks/useOneSignal"

export const useLoginViewModel = () => { 
    const {playerId} = useOneSignal()
    const {control, handleSubmit} = useForm<LoginFormData>({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const loginMutation = useLoginMutation();
    const onSubmit = handleSubmit(async (userFormData) => {
        await loginMutation.mutateAsync(
            {...userFormData, notificationToken: playerId}
        );
    });

    return{control, onSubmit};
}