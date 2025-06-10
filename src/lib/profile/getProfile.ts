import { profile } from "console";
import prisma from "../db";

export async function getProfile(id:number) {
    const profileToGet = await prisma.profile.findUnique({
        where: { id },
    });

    return profileToGet;
}

export async function getAllProfiles() {
    const profilesToGet = await prisma.profile.findMany();

    return profilesToGet;
}