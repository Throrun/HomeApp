export interface Shelf {
    id: number;
    name: string;
    description?: string;
    profileId: number;
    items: number[];
    roomId: number;
    
}
export interface CreateShelfDTO {
    name: string;
    description?: string;
    profileId: number;
    roomId: number;
}

export interface UpdateShelfDTO {
    id: number;
    name?: string;
    description?: string;
    profileId?: number;
    roomId?: number;
}
