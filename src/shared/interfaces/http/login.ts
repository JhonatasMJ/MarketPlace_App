import { UserInterface } from "@/shared/interfaces/user";

export interface LoginHttpParams {
    email: string;
    password: string;
    notificationToken?: string
}
