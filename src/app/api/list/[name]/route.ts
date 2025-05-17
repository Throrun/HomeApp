import { NextResponse } from 'next/server';

type Item = {
  id: number;
  value: string;
};

// mock bazy
const mockDB: Record<string, Item[]> = {
  Users: [
    { id: 1, value: 'Piotr Nagórny' },
    { id: 2, value: 'Patryk Weklicz' },
  ],
  Rooms: [
    { id: 1, value: 'Kuchnia' },
    { id: 2, value: 'Salon' },
  ],
  Shelfs: [
    { id: 1, value: 'Szafka 1' },
    { id: 2, value: 'Szafka 2' },
  ],
  Items: [
    { id: 1, value: 'Piłka' },
    { id: 2, value: 'Laptop Piotr' },
    { id: 3, value: 'Myszka' },
    { id: 4, value: 'Kabel USB' },
    { id: 5, value: 'Kabel ethernet' },
    { id: 6, value: 'Router' },
    { id: 7, value: 'Słuchawki' },
    { id: 8, value: 'Laptop Patryk' }
  ]
};

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const { name } = params;

  const data = mockDB[name] || [];

  return NextResponse.json(data);
}