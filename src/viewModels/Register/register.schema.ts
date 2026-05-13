import * as yup from "yup";

export const registerSchema = yup.object({
    name: yup.string().required("Nome é obrigatório").min(4, "Nome deve ter no mínimo 4 caracteres"),
    email: yup.string().email("E-mail inválido").required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatória").min(6, "Senha deve ter no mínimo 6 caracteres"),
    confirmPassword: yup.string().required("Senha é obrigatória").oneOf([yup.ref("password")], "As senhas não conferem"),
    phone: yup.string().required("Telefone é obrigatório").matches(/^\d{11}$/, "Telefone deve ter 11 dígitos (DDD + Número)"),
})

export type RegisterFormData = yup.InferType<typeof registerSchema>;