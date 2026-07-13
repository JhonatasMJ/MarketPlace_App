import { GetCreditCard } from "../credit-card";

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