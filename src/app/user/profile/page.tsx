"use client";
import React, { useState } from "react";
import UserShow from "./UserShow";
import UserEdit from "./UserEdit";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const [state, setState] = useState(false);

  return (
    <div className="w-full rounded-lg">
      {!state ? (
        <UserShow state={state} setState={setState} />
      ) : (
        <UserEdit state={state} setState={setState} />
      )}
    </div>
  );
};

export default ProfilePage;
