import prisma from "../db";

export async function deleteProfile(id: number) {
    await prisma.item.deleteMany({
        where: { profileId: id }
    });

    await prisma.shelf.deleteMany({
        where: { profileId: id }
    });

    await prisma.profilesOfRooms.deleteMany({
        where: { profileId: id }
    });

    const deletedProfile = await prisma.profile.delete({
        where: { id }
    });

    return deletedProfile;
}
