import prisma from "../db";
import { CreateProfileDTO } from "./types";


export async function createProfile(profileDTO:CreateProfileDTO) {
    const profile = await prisma.profile.create({
        data: {
            name: profileDTO.name,
            surname: profileDTO.surname,
        },
    });
    return profile;
}