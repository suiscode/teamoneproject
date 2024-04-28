"use client";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/app/context/Context";
import { SessionInterface } from "@/lib/interface";
import { Session } from "next-auth";
import { toast } from "@/components/ui/use-toast";

const HeartFavorite: React.FC<{ id: string; session: Session }> = ({
  id,
  session,
}) => {
  const pathname = usePathname();
  const { push } = useRouter();
  const [state, setState] = useState(false);
  const userId = session?.user?.id;
  const { bookmarkCount, setBookmarkCount } = useGlobalContext();

  useEffect(() => {
    const checkIsBookmarked = async () => {
      const res = await axios.get(`/api/bookmark?userId=${userId}&carId=${id}`);
      if (res.data) setState(true);
    };
    if (userId) {
      checkIsBookmarked();
    }
  }, [userId, id]);

  const addToBookMark = async () => {
    if (!userId) {
      push("/auth/login");
      toast({
        variant: "default",
        title: "Log in to bookmark",
      });
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

    try {
      const res = await axios.put("/api/bookmark", {
        userId,
        carId: id,
      });
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      {!state ? (
        <FaRegHeart
          className="w-8 h-8 cursor-pointer"
          onClick={() => {
            addToBookMark();
            setBookmarkCount(bookmarkCount + 1);
          }}
        />
      ) : (
        <FaHeart
          className="w-8 h-8 cursor-pointer text-red-500"
          onClick={() => {
            removeFromBookMark();
            setBookmarkCount(bookmarkCount - 1);
          }}
        />
      )}
    </div>
  );
};

export default HeartFavorite;
