import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ReviewSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="space-y-2 flex justify-between items-center ">
        <Skeleton className="h-8 w-[250px] bg-gray-500" />
      </div>
      <div className="space-y-2 flex gap-2 items-center">
        <div className="rounded-full h-10 w-10 bg-gray-500"></div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-[240px] bg-gray-500" />
            <Skeleton className="h-4 w-[200px] bg-gray-500" />
          </div>
          <div>
            <Skeleton className="h-4 w-[200px] bg-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSkeleton;
