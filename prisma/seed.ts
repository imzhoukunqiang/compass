// create some users
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedUsers() {
  const users = [
    { email: 'user1@example.com', name: 'User One' ,password: 'password1'},
    { email: 'user2@example.com', name: 'User Two' ,password: 'password2'},
    { email: 'user3@example.com', name: 'User Three' ,password: 'password3'},
  ];

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }
}

seedUsers()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
