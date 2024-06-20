import React from "react";
import CarCard from "../Home/CarCard";
import BookingForm from "./BookingForm";

function BookingModal({ car }: any) {
  return (
    <div>
      <div className="pb-2">
        <h3 className="text-[30px] font-light text-gray-400">
          Rent A Car Now!
        </h3>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="hidden md:flex items-center justify-center">
            <CarCard car={car}/>
          </div>
          <div className="">
            <BookingForm car={car}/>
          </div>
        </div>
    </div>
  );
}

export default BookingModal;
