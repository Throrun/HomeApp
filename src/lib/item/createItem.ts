import prisma from "../db";
import { CreateItemDTO } from "./types";

export async function createItem(itemDTO:CreateItemDTO) {
    const item = await prisma.item.create({
        data: {
            name: itemDTO.name,
            description: itemDTO.description,
            profileId: itemDTO.profileId,
            shelfId: itemDTO.shelfId
        },
    });
    return item;
}