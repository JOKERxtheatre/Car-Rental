import React from "react";

function History() {
  return (
    <div className="w-full flex items-center justify-center flex-col mt-14" id="History">
      <h1 className="text-3xl font-semibold text-blue-500 mb-5">History</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex flex-col items-start justify-start  bg-blue-200 p-2 rounded-lg">
          <h1 className="text-xl text-blue-900">Origins and Vision</h1>
          <p>
            Premium Car Rental was born out of a simple vision: to redefine the
            car rental experience by offering luxury and convenience to
            everyone. In 2010, our founder, John Davidson, saw a gap in the
            market. While there were many car rental services, none focused on
            providing a premium experience. John believed that renting a car
            should be as enjoyable as driving one, and thus, Premium Car Rental
            was established.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start bg-blue-200 p-2 rounded-lg">
          <h1 className="text-xl text-blue-900">Early Days</h1>
          <p>
            The early days were humble. With a small fleet of luxury cars and a
            dedicated team of car enthusiasts, Premium Car Rental started its
            operations in a single location. The focus was on providing
            top-notch customer service and meticulously maintained vehicles.
            Word of mouth spread quickly, and soon, our reputation for
            excellence attracted a growing number of clients.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start  bg-blue-200 p-2 rounded-lg">
          <h1 className="text-xl text-blue-900">Technological Advancements</h1>
          <p>
            In 2018, we embraced the digital age. We launched our
            state-of-the-art online booking system, allowing customers to book
            their desired vehicles effortlessly. This innovation was a
            game-changer, enabling clients to explore our fleet, check
            availability, and make reservations from the comfort of their homes.
            Our "Pay for driving only" policy was introduced, ensuring that
            customers only paid for the time they actually used the vehicle.
          </p>
        </div>
      </div>
    </div>
  );
}

export default History;
