export interface Room {
    id: number;
    name: string;
    description?: string;
    profilesIds: number[];
    shelfs: number[];
}