import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CarsFilterOptionsProps {
  carsList: any;
  setBrand: (brand: string) => void;
  orderCarList: (order: string) => void;
}

function CarsFilterOptions({ carsList, setBrand, orderCarList }: CarsFilterOptionsProps) {
  const [brandList, setBrandList] = useState<string[]>([]);
  const BrandSet = new Set<string>();

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList]);

  const filterCarList = () => {
    carsList.forEach((element: any) => {
      BrandSet.add(element.carBrand);
    });
    setBrandList(Array.from(BrandSet));
  };

  return (
    <div className="mt-10 md:flex items-center justify-between mb-2" id="Cars">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h3>Explore our cars you might like</h3>
      </div>
      <div className="flex items-center md:gap-5 gap-2 mt-3 md:mt-0">
        <Select onValueChange={(value) => orderCarList(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Max to Min</SelectItem>
            <SelectItem value="-1">Min to Max</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setBrand(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Manufactural" />
          </SelectTrigger>
          <SelectContent>
            {brandList.map((brand: string, index: number) => (
              <SelectItem value={brand} key={index}>{brand}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default CarsFilterOptions;
