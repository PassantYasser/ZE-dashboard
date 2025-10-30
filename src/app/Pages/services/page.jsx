"use client";
import React, { useState, useEffect, use } from "react";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";
import MainLayout from "@/app/Components/MainLayout/MainLayout";
import AddBtn from "@/app/Components/Buttons/AddBtn";
import SearchForm from "@/app/Components/Forms/SearchForm";
import FilterBtn from "@/app/Components/Buttons/FilterBtn";
import ServiceCard from "@/app/Components/Cards/ServiceCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllServicesThunk } from "@/redux/slice/Services/ServicesSlice";
import Pagination from "./Pagination";


// dynamically import FiltersPage with no SSR
const FiltersPage = dynamic(() => import("./Filters/page"), { ssr: false });

function ServicesPage() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  // this ensures everything only renders on the client
  // const [isClient, setIsClient] = useState(false);
  // useEffect(() => setIsClient(true), []);
  // if (!isClient) return null;

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




  //link api data to cards
  const dispatch = useDispatch();
  const { services, loading, error } = useSelector((state) => state.services);
  useEffect(() => {
    dispatch(getAllServicesThunk());
  }, [dispatch]);

  return (
    <MainLayout>
      <section>
        {/* 📱 Mobile / Tablet Header */}
        <div className="lg1:hidden flex justify-between mb-8">
          <p className="text-[#000] text-2xl font-medium flex items-center">
            {t("Services")}
          </p>
          <AddBtn href="/Pages/services/Add" label="Add a sub-service" />
        </div>

        <div className="flex justify-between">
          <SearchForm placeholderKey="Search by worker name, job title, or phone number" />
          <div className="lg1:flex lg1:gap-4 gap-6">
            <FilterBtn onClick={handleClickOpen} />
            <AddBtn
              href="/Pages/services/Add"
              label="Add a sub-service"
              className="hidden lg1:flex"
            />
          </div>
        </div>
      </section>

      <section className="mt-10 mb-8 grid grid-cols-2 gap-4 lg1:grid-cols-3 lg1:gap-6">
        {/* <ServiceCard /> */}
        {!loading && !error && services?.length > 0 ? (
          services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))
        ) : (
          !loading && <p>No services found.</p>
        )}
      </section>
      
      <Pagination/>

      <FiltersPage open={open} handleClose={handleClose} />
    </MainLayout>
  );
}

export default ServicesPage;
