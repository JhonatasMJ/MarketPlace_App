import { ProductCommentInterface } from "../product-commets";
import { PaginatedResponse } from "./paginated-response";

export interface GetProductCommentsInterface {
    productId: number;
    pagination: {
        page: number;
        perPage: number;
    };
}


 
