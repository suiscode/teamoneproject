import React from "react";

const PaymentTotal = async () => {
  return (
    <div className="w-[512px] h-[580px] rounded-[10px] bg-[#FFFFFF] mt-[30px] flex flex-col gap-[30px]">
      <div className="w-[214px] flex flex-col gap-[6px] mt-[26px] ml-[26px]">
        <div className="text-xl font-bold text-[#1A202C]">Rental Summary</div>
        <div className="text-[#90A3BF] text-[14px] font-medium w-[400px]">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </div>
      </div>
      <div className="w-[400px] h-[120px] border-red-600 border-2 ml-[26px] flex items-center gap-[16px]">
        <div className="w-[132px] h-[108px] border-2 flex "></div>
        <div className="w-[220px] h-[72px] border-2 flex flex-col">
          <div className="w-[220px] h-[40px] font-bold leading-[48px] text-[32px]">
            Nissan GT-R
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
      <div className="w-[444px] h-[56px] bg-[#f6f7f9] flex ml-[26px] rounded-[10px] items-center justify-center">
        <div className="w-[400px] h-[24px] border-2 border-red-600 flex items-center justify-between">
          <h1>Apply promo code</h1>
          <h2>Apply now</h2>
        </div>
      </div>
      <div className="w-[444px] h-[48px] border-2 ml-[26px] flex gap-[32px]">
        <div className="w-[284px] h-[48px] flex flex-col gap-[4px]">
          <div className="w-[200px] h-[24px]">Total Rental Price</div>
          <div className="w-[304px] border-2 h-[20px] text-[14px] font-medium leading-[21px]">
            Overall price and includes rental discount
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default PaymentTotal;
