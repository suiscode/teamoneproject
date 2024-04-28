"use client";
import { useGlobalContext } from "@/app/context/Context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Review } from "@/lib/interface";
import axios from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";
import { Rating } from "react-simple-star-rating";
import ReviewSkeleton from "./ReviewSkeleton";

const Reviews = () => {
  const [review, setReview] = useState<Review[]>([]);
  const getPath = usePathname();
  const carId = getPath.split("/");
  const { refresh, setRefresh } = useGlobalContext();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchReview = async () => {
    try {
      const res = await axios.get(`/api/review?carId=${carId[2]}`);
      setReview(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchReview();
  }, [refresh]);

  if (loading) return <ReviewSkeleton />;

  if (!loading)
    return (
      <div className="border-l rounded-sm text-white">
        <div className="flex items-center">
          <h1 className="text-start px-2 text-2xl font-bold">Reviews</h1>
          <h1 className="text-xl">({review.length})</h1>
          {review.length !== 0 && (
            <Rating
              className="mt-[-5px]"
              readonly
              initialValue={
                review
                  .map((item) => item.starRating)
                  .reduce((a, b) => a + b, 0) / review.length
              }
              size={20}
              allowFraction
              allowHover={false}
              SVGstyle={{ display: "inline-block" }}
            />
          )}
        </div>
        {review.map((item: Review) => (
          <div className=" gap-2 flex w-full p-2 rounded-sm" key={item.id}>
            <Avatar>
              <AvatarImage src={item.User.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col w-full">
              <div className="flex justify-between w-full items-center">
                <h1 className=" text-lg">{item.User.email}</h1>
                <div
                  className="flex gap-2 items-start justify-center
                "
                >
                  <Rating
                    className="mt-[-5px]"
                    readonly
                    initialValue={item.starRating}
                    size={20}
                    allowHover={false}
                    SVGstyle={{ display: "inline-block" }}
                  />
                  <h1>{item.createdAt.toString().split("T")[0]}</h1>
                </div>
              </div>
              <div className="flex">
                <h1 className="text-[#596780]">{item.comment}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Reviews;
