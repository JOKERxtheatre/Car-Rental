import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import BookingModal from "../CarBooking/BookingModal";
import SkeletonList from "./SkeletonList";
import { Skeleton } from "../ui/skeleton";

function CarsList(props: any) {
  const [selectedCar, setSelectedCar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (props.carsList) {
      setIsLoading(false);
    }
  }, [props.carsList]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5 md:gap-8">
      {isLoading
        ? [1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="">
              <Skeleton className="w-full h-full  p-6">
                <div className="flex flex-col gap-1">
                  <Skeleton className="w-[93px] h-[32px] bg-gray-300" />
                  <Skeleton className="w-[63px] h-[24px] bg-gray-300" />
                </div>
                <div className="mt-2">
                  <Skeleton className="h-[150px] md:h-[200px] bg-gray-300" />
                </div>
                <div className="justify-around flex group-hover:hidden w-full mt-4">
                  <Skeleton className="w-[51px] h-[51px] bg-gray-300" />
                  <Skeleton className="w-[51px] h-[51px] bg-gray-300" />
                  <Skeleton className="w-[51px] h-[51px] bg-gray-300" />
                </div>
              </Skeleton>
            </div>
          ))
        : props.carsList.map((car: any, index: number) => (
            <Dialog key={index}>
              <DialogTrigger onClick={() => setSelectedCar(car)}>
                <div>
                  <CarCard car={car} />
                </div>
              </DialogTrigger>
              <DialogContent className="lg:min-w-[1000px]">
                <BookingModal car={selectedCar} />
              </DialogContent>
            </Dialog>
          ))}
    </div>
  );
}

export default CarsList;
