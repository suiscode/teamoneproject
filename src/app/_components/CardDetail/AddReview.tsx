"use client";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const AddReview = () => {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
  };
  const onPointerLeave = () => console.log(rating);

  return (
    <div className="border">
      <Rating
        onClick={handleRating}
        onPointerLeave={onPointerLeave}
        SVGstyle={{ display: "inline-block" }}
        initialValue={2.5}
        transition
      />
    </div>
  );
};

export default AddReview;
