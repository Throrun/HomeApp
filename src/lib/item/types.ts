export interface Item {
    id: number;
    name: string;
    description?: string;
    profileId: number;
    shelfId: number; 
    roomId: number;
    itemType: string;
}

export interface CreateItemDTO {
    name: string;
    description?: string;
    profileId: number;
    shelfId: number; 
    itemType: string;
}