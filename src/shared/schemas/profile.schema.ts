import * as yup from "yup";

export const profileSchema: yup.ObjectSchema<{
  name: string;
  email: string;
  phone: string;
  password?: string;
  newPassword?: string;
}> = yup.object({
  name: yup
    .string()
    .required("Nome é obrigatório")
    .min(4, "Nome deve ter no mínimo 4 caracteres"),
  email: yup.string().email("E-mail inválido").required("Email é obrigatório"),
  password: yup.string().optional(),
  newPassword: yup.string().optional(),
  phone: yup
    .string()
    .required("Telefone é obrigatório")
    .matches(/^\d{11}$/, "Telefone deve ter 11 dígitos (DDD + Número)"),
});

export type ProfileFormData = yup.InferType<typeof profileSchema>;
