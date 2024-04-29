import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { auth } from "../../../../auth";
import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "next-auth/react";

const UserShow = ({ setState, state }: any) => {
  const session = useSession();
  console.log(session);

  return (
    <div className="flex flex-col gap-4 text-white">
      <div className="flex flex-col">
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center justify-center gap-2 flex-col w-48 h-48">
            <Avatar className="w-32 h-32">
              {session.data?.user ? (
                <>
                  <AvatarImage src={session?.data?.user.image || undefined} />
                  <AvatarFallback className="text-black">
                    {session.data.user.name}
                  </AvatarFallback>
                </>
              ) : (
                <Skeleton className="w-full h-full rounded-full" />
              )}
            </Avatar>
          </div>
          <div className="flex flex-col p-4 justify-between items-center gap-4 w-96">
            <div className="flex flex-col gap-4 justify-between items-center w-full items">
              <div className="flex flex-col items-center">
                <h1 className="text-gray-400">First name</h1>
                {session?.data?.user ? (
                  <h1 className="text-2xl">{session?.data?.user.firstName}</h1>
                ) : (
                  <Skeleton className="w-36 h-6 bg-gray-400" />
                )}
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-gray-400">Last name</h1>
                {session?.data?.user ? (
                  <h1 className="text-2xl">{session?.data?.user.lastName}</h1>
                ) : (
                  <Skeleton className="w-36 h-6 bg-gray-400" />
                )}
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-gray-400">Phone</h1>
                {session?.data?.user ? (
                  <h1 className="text-2xl">
                    {session?.data?.user.phoneNumber}
                  </h1>
                ) : (
                  <Skeleton className="w-36 h-6 bg-gray-400" />
                )}
              </div>
            </div>
            <Button className="w-1/3" onClick={() => setState(!state)}>
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserShow;
