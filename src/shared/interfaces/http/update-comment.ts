export interface UpdateCommentRequest{
    content: string;
    rating: number;
    commentId: number;
}

export interface UpdateCommentResponse {
    message: string;
    ratingApplied: boolean;
    comment: {
        id: number;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }
}