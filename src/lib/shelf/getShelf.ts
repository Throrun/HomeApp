import prisma from "../db";

export async function getShelf(id:number) {
    const shelfToGet = prisma.shelf.findUnique({
        where: {
            id: id
        }
    });

    return shelfToGet;
}

export async function getShelfs() {
    const shelfsToGet = prisma.shelf.findMany();

    return shelfsToGet;
}