import prisma from "../db";

export async function deleteItem(id: number){
    const itemToDelte = await prisma.item.delete({
        where: {id}
    });
}