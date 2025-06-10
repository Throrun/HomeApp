import prisma from "../db";

export async function deleteRoom(id: number) {
    //Szukanie półek dla usuwanego pokoju
    const shelfs = await prisma.shelf.findMany({
    where: { roomId: id },
    select: { id: true }
    });

    const shelfIds = shelfs.map(s => s.id);

    //Usuwanie przedmiotów na znalezionych półkach
    await prisma.item.deleteMany({
    where: { shelfId: { in: shelfIds } }
    });

    //Usuwanie półek
    await prisma.shelf.deleteMany({
    where: { id: { in: shelfIds } }
    });

    await prisma.profilesOfRooms.deleteMany({
    where: { roomId: id }
    });

    //Usuwanie pokojów
    const deletedRoom = await prisma.room.delete({
    where: { id }
    });

    return deletedRoom;
}
