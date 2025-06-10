import prisma from "../db";
import { UpdateRoomDTO } from "./types";

export async function updateRoom(roomDTO:UpdateRoomDTO){
    const {id,profilesIds,shelfsIds, ...data} = roomDTO;

    //Tu usuwam pola, które są undefined, ponieważ prisma w .update nie akceptuje takich pól
    const cleanData = Object.fromEntries(
    Object.entries(data).filter(([_, value]) => value !== undefined));

    const roomToUpdate = prisma.room.update({
        where: {id},
        data: {
            ...cleanData,
            shelfs: shelfsIds
            ? {
                set: shelfsIds.map(id => ({ id }))
            }
            : undefined
        }
    });
    
    // Jeśli przekazano profileIds, aktualizujemy ręcznie relację wiele-do-wielu
    // przez tabelę pośrednią ProfilesOfRooms (Prisma nie obsługuje connect w takim układzie)
    if (profilesIds) {

        await prisma.profilesOfRooms.deleteMany({
            where: { roomId: id }
        });

    await prisma.profilesOfRooms.createMany({
        data: profilesIds.map(profileId => ({
            profileId,
            roomId: id
        }))
    });
    }

    return roomToUpdate;
}