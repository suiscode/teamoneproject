import React from "react";
import { auth, signOut } from "../../../auth";

async function page() {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session)}

      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button type="submit">sign out</button>
      </form>
    </div>
  );
}

export default page;
