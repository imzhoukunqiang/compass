import LikeButton from "./like-button";
import { PrismaClient } from "@prisma/client";
import "./globals.css";
import AddUserForm from "./add-user-form";
import { UserNoPwd } from "@/_types/user";

interface HeaderProps {
  title?: string;
}
const prisma = new PrismaClient();

function Header({ title }: HeaderProps) {
  return (
    <h1 className="text-2xl font-bold">{title ? title : "Default title"}</h1>
  );
}

async function HomePage() {
  const users = await prisma.user.findMany();
  // const names = users.map((user) => { return user.name; });
  function onAddComplate(newUsers: UserNoPwd[]) {
    console.log(newUsers);
  }
  return (
    <div className="m-10">
      <Header title="Develop. Preview. Ship." />
      <div className="mt-3"></div>
      <ul className="text-base">
        {users.map((user, index) => (
          <li key={user.id} className="mb-1">
            <span className="font-bold mr-2">{index + 1}.</span>
            <span className="italic font-bold"> [{user.name}]</span> email is{" "}
            <span className="italic font-bold">{user.email}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3"></div>
      <AddUserForm />
      <div className="mt-3"></div>
      <LikeButton />

      <hr />
    </div>
  );
}

export default HomePage;
