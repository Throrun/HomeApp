import prisma from "../db";

export async function getRoom(id:number){
    const roomToGet = prisma.room.findUnique({
        where: {
            id: id
        }
    });
    return roomToGet;
}

export async function getAllRooms(){
    const roomsToGet = prisma.room.findMany();
    return roomsToGet;
}