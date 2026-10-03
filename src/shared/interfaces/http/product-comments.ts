import { ProductCommentInterface } from "@/shared/interfaces/product-commets";
import { PaginatedResponse } from "./paginated-response";

export interface GetProductCommentsInterface {
    productId: number;
    pagination: {
        page: number;
        perPage: number;
    };
}


 
