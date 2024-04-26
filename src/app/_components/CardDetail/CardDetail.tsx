import React from "react";
import CarImage from "./CarImage";
import { CarItem } from "@/lib/interface";
import CardInfo from "./CardInfo";
import AddReview from "./AddReview";
import Reviews from "./Reviews";

const CardDetail: React.FC<{ data: CarItem }> = ({ data }) => {
  return (
    <div className="w-[48%] flex flex-col py-5 gap-8 rounded-md">
      <CarImage data={data} />
      <Reviews />
    </div>
  );
};

export default CardDetail;
