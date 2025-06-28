import prisma from "../db";
import { UpdateItemDTO } from "./types";

export async function updateItem(itemDTO: UpdateItemDTO) {
    const { id, ...data } = itemDTO;

  // Tu usuwam pola, które są undefined, ponieważ prisma w .update nie akceptuje takich pól
    const cleanData = Object.fromEntries(
    Object.entries(data).filter(([_, value]) => value !== undefined));

    const itemToUpdate = await prisma.item.update({
    where: { id },
    data: cleanData
});

    return itemToUpdate;
}
