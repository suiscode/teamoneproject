"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

import React from "react";

export const UserProfile = () => {
  const session = useSession();
  console.log(session);

  const user = session.data?.user;

  return (
    <>
      <div
        id="profile"
        className="w-screen h-screen flex flex-col justify-center items-center  text-white"
      >
        <div className="backdrop-sepia bg-black border-2 w-[450px] h-[580px] ml-10 rounded-2xl flex flex-col items-center justify-between gap-5 p-10">
          <Avatar className="w-[90px] h-[90px]">
            <AvatarImage src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <h1 className="text-3xl font-bold text-white">{user?.name}</h1>
          <div className="flex justify-between flex-col w-[300px] p-2">
            <div className="flex  justify-between">
              <h1 className="text-xl font-bold">Email:</h1>
              <h1 className="text-xl">{user?.email}</h1>
            </div>
            <div className="flex  justify-between">
              <h1 className="text-xl font-bold">Phone:</h1>
              <h1 className="text-xl">96750533</h1>
            </div>
            <div className="flex  justify-between">
              <h1 className="text-xl font-bold">Address:</h1>
              <h1 className="text-xl">Sapporo</h1>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5"></div>
            </div>
          </div>

          <Button className="bg-black w-40 text-white " variant="outline">
            Button
          </Button>
        </div>
      </div>
    </>
  );
};
