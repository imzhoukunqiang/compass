"use client";

import { UserNoPwd } from "@/_types/user";
import { User } from "@prisma/client";
import { useState } from "react";

interface MyComponentProps {
  onAddComplate?: (newUsers: UserNoPwd[]) => void;
}

const defaultUser: User = {
  name: "",
  email: "",
  password: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  id: 0,
};
const AddUserForm = ({ onAddComplate }: MyComponentProps) => {
  const [user, setUser] = useState<User>({ ...defaultUser });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const newUsers: UserNoPwd[] = await response.json();
    console.log(newUsers);
    setUser({ ...defaultUser });
    if(onAddComplate){
      onAddComplate(newUsers);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="name"
          name="name"
          value={user.name ?? ""}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserForm ;
