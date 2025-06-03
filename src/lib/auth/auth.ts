import prisma from "../db"

export async function validateProfile(profileName: string) {
    const profile = await prisma.profile.findFirst({
        where: {
            name: `${profileName}`,
        },
    });
    return profile;
}