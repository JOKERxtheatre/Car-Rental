"use client"
import CarsFilterOptions from "@/components/Home/CarsFilterOptions";
import CarsList from "@/components/Home/CarsList";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import History from "@/components/Home/History";
import SearchInput from "@/components/Home/SearchInput";
import { getCarList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsList, setCarsList] = useState<any[]>([]);
  const [carsOrgList, setCarsOrgList] = useState<any[]>([]);

  useEffect(() => {
    getCarList_();
  }, []);

  const getCarList_ = async () => {
    try {
      const result: any = await getCarList();
      setCarsList(result.carLists || []);
      setCarsOrgList(result.carLists || []);
    } catch (error) {
      console.error("Failed to fetch car list:", error);
      setCarsList([]);
    }
  };

  const filterCarList = (brand: string) => {
    const filterList = carsOrgList.filter((item: any) => item.carBrand === brand);
    setCarsList(filterList);
  };

  const orderCarList = (order: string) => {
    const sortedData = [...carsOrgList].sort((a, b) => order === "-1" ? a.price - b.price : b.price - a.price);
    setCarsList(sortedData);
  };

  useEffect(() => {
    {carsList}
  }, [carsList]);

  return (
    <div className="p-5 pt-0 md:pt-5 sm:px-10 md:px-20 container">
      <Hero />
      <SearchInput />
      <CarsFilterOptions carsList={carsList} setBrand={filterCarList} orderCarList={orderCarList} />
      <CarsList carsList={carsList} />
      <History/>
      <Footer />
    </div>
  );
}
