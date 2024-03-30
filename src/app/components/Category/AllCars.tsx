import Image from "next/image";
import React from "react";

export const AllCars = () => {
  const carData = [
    {
      name: "Toyota Camry",
      description: "haha",
      type: "Sedan",
      img: "",
      price: "23",
      salePrice: "11",
      gasoline: "90L",
      steering: "Manual",
      capacity: "2 people",
    },
    {
      name: "Hyundai Elantra N",
      description: "verryyy guuud",
      type: "Sedan",
      img: "https://www.thedrive.com/uploads/2023/04/14/ElantraN-42-scaled.jpg?auto=webp&crop=16%3A9&auto=webp&optimize=high&quality=70&width=1440",
      price: "23",
      salePrice: "11",
      gasoline: "90L",
      steering: "Manual",
      capacity: "2 people",
    },
    {
      name: "Prius 60",
      description: "verryyy guuud",
      type: "Sedan",
      img: "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2022/11/16093041/20221116_01_03.jpg",
      price: "23",
      salePrice: "11",
      gasoline: "90L",
      steering: "Manual",
      capacity: "2 people",
    },
  ];
  return (
    <div>
      {carData.map((car, index) => {
        return (
          <div key={index}>
            <p>{car.name}</p>
            <p>{car.description}</p>
            <p>{car.type}</p>
            <p>{car.img}</p>
            <p>{car.price}</p>
            <p>{car.salePrice}</p>
          </div>
        );
      })}
    </div>
  );
};
