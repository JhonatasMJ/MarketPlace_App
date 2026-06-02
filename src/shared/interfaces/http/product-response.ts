import { ProductInterface } from "../product";

export interface ProductResponse {
    page: number;
    perPage: number;
    data: ProductInterface[];
    total: number;
    totalPages: number;
}