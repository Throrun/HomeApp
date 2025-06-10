import prisma from "../db";
import { CreateRoomDTO } from "./types";

export async function createRoom(roomDTO:CreateRoomDTO){
    const roomToAdd = await prisma.room.create({
        data:{
            name: roomDTO.name,
            description: roomDTO.description,
            shelfs: {
                connect: roomDTO.shelfsIds?.map(id => ({ id })) ?? [],
            }
        },
    });

    // Dodaje profile do pokoju tylko jeśli zostały one podane
    // Prisma nie akceptuje pustej tablicy w createMany().
    if(roomDTO.profilesIds?.length){
        await prisma.profilesOfRooms.createMany({
            data:roomDTO.profilesIds.map(profileId => ({
                profileId,
                roomId: roomToAdd.id
            }))
        });
    }

    return roomToAdd;
}
