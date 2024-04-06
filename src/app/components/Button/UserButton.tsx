import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { FaUser } from "react-icons/fa";
import { LogoutButton } from "./LogOutButton";
import { auth } from "../../../../auth";
import Link from "next/link";

async function UserButton() {
  const { user } = await auth();
  console.log(user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user.image} />
          <AvatarFallback>
            <FaUser className="text-black" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link href="/profile">
          <DropdownMenuItem className="hover:bg-black/10 cursor-pointer">
            Profile
          </DropdownMenuItem>
        </Link>
        <Link href="/user">
          <DropdownMenuItem className="hover:bg-black/10 cursor-pointer">
            Orders
          </DropdownMenuItem>
        </Link>

        <LogoutButton>
          <DropdownMenuItem className="hover:bg-black/10 cursor-pointer">
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserButton;
