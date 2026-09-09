import { GetCreditCard } from "@/shared/interfaces/credit-card";

export interface CreateCreditCardRequest {
    number: string;
    CVV: number;
    expirationDate: string;

}

export interface CreateCreditCardResponse {
    data: GetCreditCard;
    message: string;
    success: boolean;
}