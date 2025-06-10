import { connect } from "http2";
import prisma from "../db";
import { CreateShelfDTO } from "./types";

export async function createShelf(shelfDTO:CreateShelfDTO) {
    const shelfToAdd = await prisma.shelf.create({
        data: {
            name: shelfDTO.name,
            description: shelfDTO.description,
            profileId: shelfDTO.profileId,
            roomId: shelfDTO.roomId
        },
    });
    return shelfToAdd;
}