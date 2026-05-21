import * as yup from "yup";

export const loginSchema = yup.object({
    email: yup.string().email("E-mail inválido").required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatória").min(6, "Senha deve ter no mínimo 6 caracteres"),
})

export type LoginFormData = yup.InferType<typeof loginSchema>;