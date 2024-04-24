import React from "react";
import CarImage from "./CarImage";
import { CarItem } from "@/lib/interface";
import CardInfo from "./CardInfo";
import AddReview from "./AddReview";

const CardDetail: React.FC<{ data: CarItem }> = ({ data }) => {
  return (
    <div className="justify-between border bg-black flex p-8  gap-8 rounded-md">
      <div>
        <CarImage data={data} />
      </div>
      <div className="flex flex-col">
        <CardInfo data={data} />
        <AddReview />
      </div>
    </div>
  );
};

export default CardDetail;
