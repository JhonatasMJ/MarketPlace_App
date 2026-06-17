//Interface genérica para resposta paginada, T é o tipo do dado que será retornado

export interface PaginatedResponse<T> {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
    data: T[];
}