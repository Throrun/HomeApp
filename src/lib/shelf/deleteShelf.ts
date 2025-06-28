import prisma from "../db";

export async function deleteShelf(id: number) {
    const itemsFromShelfToDelete = await prisma.item.deleteMany({
        where: { shelfId: id },
    });

    const shelfToDelte = await prisma.shelf.delete({
        where: { id },
    });

    return shelfToDelte;
}
