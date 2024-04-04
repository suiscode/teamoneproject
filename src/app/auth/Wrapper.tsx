import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Wrapper({ children, label, backbutton, backurl }: any) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-md w-[400px] py-4 rounded-sm flex justify-center">
      <div className="flex flex-col justify-center items-center gap-5 w-full text-white">
        <h1 className="text-2xl">{label}</h1>
        {children}
        <Button variant="link" className="w-full text-white" type="submit">
          <Link href={backurl}>{backbutton}</Link>
        </Button>
      </div>
    </div>
  );
}

export default Wrapper;
