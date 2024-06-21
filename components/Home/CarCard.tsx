import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { PiSteeringWheelFill } from "react-icons/pi";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { FaArrowRight, FaGasPump } from "react-icons/fa";
import { Button } from "../ui/button";

function CarCard(props: any) {
  const [Car, setCar] = useState<any>();

  useEffect(() => {
    if (props.car) {
      setCar(props.car);
    }
  }, [props.car]);
  return (
    Car && (
      <div>
        <Card className="group hover:border-blue-500 ease-linear duration-100">
          <CardHeader>
            <div className="flex items-start flex-col">
              <span className="text-lg md:text-2xl font-semibold">
                {Car.name}
              </span>
              <span className="text-base md:text-xl text-blue-500">
                ${Car.price}
                <span className="text-xs md:text-sm text mb-0.5 text-gray-500">
                  /day
                </span>
              </span>
            </div>
          </CardHeader>
          <CardContent className="items-center flex flex-col justify-center">
            <div className="h-[150px] md:h-[200px] w-full flex items-center justify-center">
              <Image
                src={Car.image?.url}
                alt={Car.name}
                width={220}
                height={200}
                className="w-auto h-auto"
              />
            </div>
            <div className="justify-around flex group-hover:hidden w-full">
              <div className="text-center text-gray-500">
                <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
                <h2 className=" line-clamp-5 text-[14px] font-light">
                  {Car.carType}
                </h2>
              </div>
              <div className="text-center text-gray-500">
                <MdAirlineSeatReclineNormal className="w-full text-[22px] mb-2" />
                <h2 className=" line-clamp-5 text-[14px] font-light">
                  {Car.seat} Seat
                </h2>
              </div>
              <div className="text-center text-gray-500">
                <FaGasPump className="w-full text-[22px] mb-2" />
                <h2 className=" line-clamp-5 text-[14px] font-light">
                  {Car.carAvg} MPG
                </h2>
              </div>
            </div>
            <Button className="hidden group-hover:flex py-[25.5px] w-full items-center justify-between bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 group-data-[button]:">
              <span>Rent Now</span>
              <span className="bg-blue-500 p-1 rounded-md">
                <FaArrowRight />
              </span>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  );
}

export default CarCard;
