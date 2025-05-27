import prisma from "@/lib/db";
import { NextResponse } from "next/server";

type Item = {
  id: number;
  value: string;
};

// mock bazy
export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const { name } = await params;

  let data: Item[] = [];

  switch (name) {
    case "profiles":
      data = [
        { id: 1, value: "Patryk" },
        { id: 2, value: "Piotr" }
      ];
      break;
    case "rooms":
      data = [
        { id: 1, value: "Kuchnia" },
        { id: 2, value: "Salon" },
      ];
      break;
    case "shelfs":
      data = [
        { id: 1, value: "Szafka 1" },
        { id: 2, value: "Szafka 2" },
      ];
      break;
    case "items":
      data = [
        { id: 1, value: "Piłka" },
        { id: 2, value: "Laptop Piotr" },
        { id: 3, value: "Myszka" },
        { id: 4, value: "Kabel USB" },
        { id: 5, value: "Kabel ethernet" },
        { id: 6, value: "Router" },
        { id: 7, value: "Słuchawki" },
        { id: 8, value: "Laptop Patryk" },
      ];
      break;
    default:
      data = [];
  }

  return NextResponse.json(data);
}
