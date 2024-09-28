"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  function handleClick() {
    console.log("clicked");
    setLikes(likes + Math.floor(Math.random() * 5) + 1);
  }

  return (
    <button
      onClick={handleClick}
      className="bg-white-500 hover:bg-white-700  py-2 px-4 rounded text-black border-2 border-black "
    >
      Like ({likes})
    </button>
  );
}
