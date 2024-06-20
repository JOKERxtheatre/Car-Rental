import React, { useState } from "react";
import CarCard from "./CarCard";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import BookingModal from "../CarBooking/BookingModal";

function CarsList(props: any) {
  const [selectedCar, setSelectedCar] = useState(null);



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5 md:gap-8">
      <Dialog>
        {props.carsList.map((car: any, index: number) => (
            <DialogTrigger onClick={() => setSelectedCar(car)}>
              <div>
                <CarCard car={car} key={index} />
              </div>
            </DialogTrigger>
          ))}
        <DialogContent className="lg:min-w-[1000px]">
          <BookingModal car={selectedCar} />
        </DialogContent>
      </Dialog>
    </div>
  );
}


export default CarsList;
