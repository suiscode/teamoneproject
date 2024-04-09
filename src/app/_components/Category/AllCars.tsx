import Router, { useRouter } from "next/navigation";
import CarCart from "../CardDetail/CarCart";
import { CarItem } from "@/lib/interface";

const AllCars = ({ data, session }: any) => {
  return (
    <div className="grid grid-cols-3 grid-flow-row auto-cols-max gap-8 ml-10  p-8 rounded-lg">
      {data.map((car: CarItem) => {
        return <CarCart key={car.id} car={car} session={session} />;
      })}
    </div>
  );
};

export default AllCars;
