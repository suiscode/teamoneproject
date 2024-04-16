import Image from "next/image";

// type OrderDetail = {};

export const OrderDetail = ({ data }: any) => {
  return (
    <div className="w-fit flex flex-col items-center gap-[20px] border b">
      <div className="w-fit py-5 flex flex-col justify-between">
        <div className="w-[784px] flex items-center justify-around border border-white bg-[] ">
          <Image alt="" src={data.img} width={480} height={122} />
          <div className="w-fit h-[48px] flex flex-col  justify-between">
            <strong className="text-[#1A202C] text-[24px]">{data.name}</strong>
            <p className="text-[#90A3BF] text-[12px]">{data.type}</p>
          </div>
          <div className="w-[108px] h-[48px] flex flex-col items-end justify-between">
            <p className="text-[#90A3BF] text-[12px]">#{data.id}</p>
          </div>
        </div>
        <div className="w-[524px] flex flex-col justify-between border border-white rounded-lg bg-white/30">
          <div className="flex gap-2">
            <p>Pick-Up</p>
          </div>
          <div className="w-[524px] h-[48px] flex items-center justify-between">
            <div className="w-fit h-[48px] flex flex-col  justify-between">
              <strong className="text-[#1A202C] text-[16px]">Location</strong>
              <p className="text-[#90A3BF] text-[12px]">
                {data.pickupLocation}
              </p>
            </div>
            <div className="w-fit h-[48px] flex flex-col  justify-between">
              <strong className="text-[#1A202C] text-[16px]">Date</strong>
              <p className="text-[#90A3BF] text-[12px]">{data.pickupDate}</p>
            </div>
            <div className="w-fit h-[48px] flex flex-col  justify-between">
              <strong className="text-[#1A202C] text-[16px]">Time</strong>
              <p className="text-[#90A3BF] text-[12px]">{data.pickupTime}</p>
            </div>
          </div>
        </div>
        <div className="w-[524px] flex flex-col justify-between  border border-white rounded-lg  bg-white/30">
          <div className="flex gap-2">
            <p>Drop-Off</p>
          </div>
          <div className="w-[524px] h-[48px] flex items-center justify-between">
            <div className="w-fit h-[48px] flex flex-col  justify-between">
              <strong className="text-[#1A202C] text-[16px]">Location</strong>
              <p className="text-[#90A3BF] text-[12px]">
                {data.dropoffLocation}
              </p>
            </div>
            <div className="w-fit h-[48px] flex flex-col  justify-between">
              <strong className="text-[#1A202C] text-[16px]">Date</strong>
              <p className="text-[#90A3BF] text-[12px]">{data.dropoffDate}</p>
            </div>
            <div className="w-fit h-[48px] flex flex-col  justify-between">
              <strong className="text-[#1A202C] text-[16px]">Time</strong>
              <p className="text-[#90A3BF] text-[12px]">{data.dropoffTime}</p>
            </div>
          </div>
        </div>
        <div className="w-[524px] h-[48px] flex items-center justify-between border border-white">
          <div className="w-fit h-[48px] flex flex-col  justify-between">
            <strong className="text-[#1A202C] text-[16px]">
              Total Rental Price
            </strong>
            <p className="text-[#90A3BF] text-[12px]">
              Overall price and includes rental discount
            </p>
          </div>
          <strong className="w-[128px] h-[48px] flex items-center justify-center text-[#1A202C] text-[32px]">
            ${data.price}
          </strong>
        </div>
      </div>
    </div>
  );
};
