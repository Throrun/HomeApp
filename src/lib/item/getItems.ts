import prisma from "../db";

export async function getItem(id:number) {
    const item = await prisma.item.findUnique({
        where: {
            id: id,
        }
    });
    return item;
}

export async function getItems() {
    const items = await prisma.item.findMany();
    return items;  
}