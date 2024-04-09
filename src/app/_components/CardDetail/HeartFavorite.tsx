"use client";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function HeartFavorite({ id, session }: any) {
  const pathname = usePathname();
  const { push } = useRouter();
  const [state, setState] = useState(false);
  const userId = session?.user?.id;

  useEffect(() => {
    const checkIsBookmarked = async () => {
      const res = await axios.get(`/api/bookmark?userId=${userId}&carId=${id}`);
      if (res.data) setState(true);
    };
    if (userId) {
      checkIsBookmarked();
    }
  }, []);

  const addToBookMark = async () => {
    if (!userId) {
      push("/auth/login");
    } else {
      setState(true);
      const res = await axios.post("/api/bookmark", {
        userId,
        carId: id,
      });
    }
  };

  const removeFromBookMark = async () => {
    setState(false);
    const res = await axios.put("/api/bookmark", {
      userId,
      carId: id,
    });
  };

  return (
    <div>
      {!state ? (
        <FaRegHeart
          className="w-8 h-8 cursor-pointer"
          onClick={() => addToBookMark()}
        />
      ) : (
        <FaHeart
          className="w-8 h-8 cursor-pointer text-red-500"
          onClick={() => removeFromBookMark()}
        />
      )}
    </div>
  );
}

export default HeartFavorite;
