import prisma from "../db";
import { UpdateProfileDTO } from "./types";

export async function updateProfile(profileDTO:UpdateProfileDTO) {
    const {id, ...data} = profileDTO;

    const cleanData = Object.fromEntries(
        Object.entries(data).filter(([_, value]) => value !== undefined)
    );

    const updatedProfile = await prisma.profile.update({
        where: { id },
        data: cleanData
    });

    return updateProfile;
}