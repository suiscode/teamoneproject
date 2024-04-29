import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const AddReviewSkeleton = () => {
  return (
    <div className="mt-[90px]">
      <Skeleton className="w-1/2 h-4 mb-4 bg-gray-500" />
      <Skeleton className="w-full h-16 mb-4 bg-gray-500" />
      <Skeleton className="w-1/3 h-8 mb-4 bg-gray-500" />
    </div>
  );
};

export default AddReviewSkeleton;
