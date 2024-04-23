import { Skeleton } from "@/components/ui/skeleton";
export default function SkeletonTotalSkeleton() {
  return (
    <div className="w-[36%] p-4 h-[380px] border-2 border-red-500 rounded-[10px] bg-[#FFFFFF] flex flex-col gap-[30px]">
      <div className="w-[214px] flex flex-col gap-[6px] mt-[26px] ml-[26px]">
        <div className="text-xl font-bold text-[#1A202C]">Rental Summary</div>
        <div className="text-[#90A3BF] text-[14px] font-medium w-[400px]">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </div>
      </div>
      <div className="w-[400px] h-[120px] ml-[26px] flex items-center gap-[16px]">
        <div className="w-[132px] h-[108px] border-2  flex "></div>
        <div className="w-[220px] h-[72px]  flex flex-col">
          <Skeleton className="w-[220px] h-[40px] font-bold leading-[48px] text-[32px]"></Skeleton>
          <div className="w-[220px] h-[32px]"></div>
        </div>
      </div>
      <div className="w-[444px] bg-[#C3D4E966] border-[1px] flex ml-[26px]"></div>
      <div className="w-[444px] flex ml-[26px] justify-between">
        <h1>Subtotal</h1>
        <h2></h2>
      </div>
      <div className="w-[444px] flex ml-[26px] justify-between">
        <h1>Tax</h1>
        <h2></h2>
      </div>
      {/* CAN ADD PROMO CODE
      <div className="w-[444px] h-[56px] bg-[#f6f7f9] flex ml-[26px] rounded-[10px] items-center justify-center">
        <div className="w-[400px] h-[24px]  flex items-center justify-between">
          <h1>Apply promo code</h1>
          <h2>Apply now</h2>
        </div>
      </div> */}
      <div className="w-[444px] h-[48px]  ml-[26px] flex gap-[32px]">
        <div className="w-[284px] h-[48px] flex flex-col gap-[4px]">
          <div className="w-[200px] h-[24px]">Total Rental Price</div>
          <div className="w-[304px]  h-[20px] text-[14px] font-medium leading-[21px]">
            Overall price and includes rental discount
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

{
  /* <div className="w-[30%] h-[500px] rounded-[10px] bg-[#FFFFFF] mt-[30px] flex flex-col gap-[30px]">
  <div className="w-[214px] flex flex-col gap-[6px] mt-[26px] ml-[26px]">
    <div className="text-xl font-bold text-[#1A202C]">Rental Summary</div>
    <div className="text-[#90A3BF] text-[14px] font-medium w-[400px]">
      Prices may change depending on the length of the rental and the price of
      your rental car.
    </div>
  </div>
  <div className="w-[400px] h-[120px] ml-[26px] flex items-center gap-[16px]">
    <div className="w-[132px] h-[108px] border-2  flex "></div>
    <div className="w-[220px] h-[72px]  flex flex-col">
      <div className="w-[220px] h-[40px] font-bold leading-[48px] text-[32px]">
        {carData.name}
      </div>
      <div className="w-[220px] h-[32px]"></div>
    </div>
  </div>
  <div className="w-[444px] bg-[#C3D4E966] border-[1px] flex ml-[26px]"></div>
  <div className="w-[444px] flex ml-[26px] justify-between">
    <h1>Subtotal</h1>
    <h2></h2>
  </div>
  <div className="w-[444px] flex ml-[26px] justify-between">
    <h1>Tax</h1>
    <h2></h2>
  </div>

  
CAN ADD PROMO CODE
<div className="w-[444px] h-[56px] bg-[#f6f7f9] flex ml-[26px] rounded-[10px] items-center justify-center">
  <div className="w-[400px] h-[24px]  flex items-center justify-between">
    <h1>Apply promo code</h1>
    <h2>Apply now</h2>
  </div>
</div>
  <div className="w-[444px] h-[48px]  ml-[26px] flex gap-[32px]">
    <div className="w-[284px] h-[48px] flex flex-col gap-[4px]">
      <div className="w-[200px] h-[24px]">Total Rental Price</div>
      <div className="w-[304px]  h-[20px] text-[14px] font-medium leading-[21px]">
        Overall price and includes rental discount
      </div>
    </div>
    <div className=""></div>
  </div>
</div>; */
}
