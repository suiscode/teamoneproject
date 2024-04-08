"use client";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import React, { useState } from "react";

function HeartFavorite() {
  const [state, setState] = useState(false);
  return (
    <div>
      {!state ? (
        <FaRegHeart
          className="w-8 h-8 cursor-pointer"
          onClick={() => setState(true)}
        />
      ) : (
        <FaHeart
          className="w-8 h-8 cursor-pointer text-red-500"
          onClick={() => setState(false)}
        />
      )}
    </div>
  );
}

export default HeartFavorite;
