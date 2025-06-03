export interface Profile {
    id: number;
    name: string;
    surname: string;
    items: number[];
    shelfs: number[];
    rooms: number[];
}

export interface CreateProfileDTO {
    name: string;
    surname: string;
}