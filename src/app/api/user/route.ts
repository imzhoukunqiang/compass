import { UserNoPwd } from "@/_types/user";
import { PrismaClient, User } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request): Promise<NextResponse<UserNoPwd[]>> {
  const user: User = await req.json();
  await prisma.user.create({
    data: {
      ...user,
      id: undefined,
      createdAt: undefined,
      updatedAt: undefined,
    },
  });

  const users: UserNoPwd[] = (await prisma.user.findMany()).map((user) => {
    return { ...user, password: undefined } as UserNoPwd;
  });
  return NextResponse.json(users);
}
