export interface UpdateProfileParams {
    name: string;
    email: string;
    phone: string;
    password?: string;
    newPassword?: string;
}

export interface UpdateProfileResponse {
    user: {
        id: number;
        name: string;
        email: string;
        phone: string;
        avatarUrl: string;
        createdAt: string;
        updatedAt: string;
        deletedAt: string;
    }
}