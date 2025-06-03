export interface Shelf {
    id: number;
    name: string;
    description?: string;
    profileId: number;
    items: number[];
    roomId: number;
    
}