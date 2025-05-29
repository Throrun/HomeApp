import prisma from "./db";

export async function createProfile(name: string, surname: string) {
    const user = await prisma.profile.create({
        data: { name: `${name}`, surname: `${surname}` }
    })
    return user;
}