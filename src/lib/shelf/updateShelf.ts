import prisma from "../db";
import { UpdateShelfDTO } from "./types";

export async function updateShelf(shelfDTO: UpdateShelfDTO) {
    const { id, ...data } = shelfDTO;

    const cleanData = Object.fromEntries(
        Object.entries(data).filter(([_, value]) => value !== undefined)
    );

    const shelfToUpdate = await prisma.shelf.update({
        where: { id },
        data: cleanData
    });

    return shelfToUpdate;
}
