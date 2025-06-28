export interface Room {
    id: number;
    name: string;
    description?: string;
    profilesIds: number[];
    shelfsIds: number[];
}
export interface CreateRoomDTO{
    name: string;
    description?: string;
    profilesIds?: number[];
    shelfsIds?: number[];
}
export interface UpdateRoomDTO{
    id: number;
    name?: string;
    description?: string;
    profilesIds?: number[];
    shelfsIds?: number[];
}