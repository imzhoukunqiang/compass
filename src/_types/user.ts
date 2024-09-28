import { User } from "@prisma/client";

export type UserNoPwd = Omit<User, "password"> & { password?: string };
