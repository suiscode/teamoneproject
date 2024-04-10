import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

function SeachResults({ data, setShow }: any) {
  const { push } = useRouter();
  const handleClick = (id: string) => {
    push(`/cars/${id}`);
    setShow(false);
  };

  return (
    <div className="absolute bg-white w-full top-[35px] text-black rounded-lg text-sm">
      {data.length === 0 ? (
        <h1>No result fount</h1>
      ) : (
        <div className="">
          {data.map((item: any) => (
            <div
              onClick={() => handleClick(item.id)}
              key={item.id}
              className="flex justify-between p-3 hover:bg-black/30 cursor-pointer"
            >
              <h1 className="font-semibold">{item.name}</h1>
              <h1>{item.type}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SeachResults;
