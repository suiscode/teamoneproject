"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Review } from "@/lib/interface";
import axios from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";

const Reviews = () => {
  const [review, setReview] = useState<Review[]>([]);
  const getPath = usePathname();
  const carId = getPath.split("/");
  const [loading, startTransition] = useTransition();

  const fetchReview = () => {
    startTransition(async () => {
      const res = await axios.get(`/api/review?carId=${carId[2]}`);
      setReview(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    fetchReview();
  }, []);
  return (
    <div className="bg-red-500">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        review.map((item: Review) => (
          <div className="bg-white" key={item.id}>
            <Avatar>
              <AvatarImage src={item.User.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <div>
                <h1>{item.User.email}</h1>
                <h1>{item.comment}</h1>
              </div>
              <div className="flex">
                <h1>{item.starRating}</h1>
                <h1>{item.createdAt.toString().split("T")[0]}</h1>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Reviews;
