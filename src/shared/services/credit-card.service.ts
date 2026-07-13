import { marketPlaceApiClient } from "../api/market-place"
import { GetCreditCardResponse } from "../interfaces/http/credit-card"

export const getCreditCard = async () => {
    const {data} = await marketPlaceApiClient.get <GetCreditCardResponse[]>("/credit-card")

    return data
}