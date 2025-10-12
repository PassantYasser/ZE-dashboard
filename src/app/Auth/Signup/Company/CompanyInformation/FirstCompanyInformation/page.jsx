"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Dialog from "@mui/material/Dialog";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useMapEvents } from "react-leaflet";
import MapDialog from "./MapDialog";

function FirstCompanyInformationPage({nextSub , formData , setFormData,handleChange,handleSubmit}) {
  const { t } = useTranslation();
  // const [open, setOpen] = useState(false);
  const [openn, setOpenn] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef(null);
  const options = [
    t("Design"),
    t("Development"),
    t("Marketing"),
    t("Consulting"),
  ];
  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenn(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const [open, setOpen] =useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



    console.log(formData);
  

  return (
    <>
      <div className="mt-14 lg1:mt-8">
        <form className="grid grid-cols-2 gap-6 lg1:grid-cols-1 lg1:gap-0">      

          <div className="flex flex-col">
            <label className="text-[#364152] text-base font-normal mb-3">
              {t("Company Name")}
            </label>
            <input
              type="text"
              name="company_name"
              value={formData?.company_name}
              onChange={handleChange}
              className=" h-15 p-3 mb-6 border border-[#C8C8C8] outline-[#C69815] rounded-[3px] placeholder:text-[#9A9A9A]"
              placeholder={t('Enter company name')}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#364152] text-base font-normal mb-3">
              {t("Number of employees")}
            </label>
            <input
              type="text"
              name="workers_count"
              value={formData?.workers_count}
              onChange={handleChange}
              className="h-15 p-3 mb-6 border border-[#C8C8C8] outline-[#C69815] rounded-[3px] placeholder:text-[#9A9A9A]"
              placeholder={t('Enter the number of employees')}
            />
          </div>


          <div className="flex flex-col">
            <label className="text-[#364152] text-base font-normal mb-3">
              {t("Select service activity")}
            </label>
            <div className="relative w-full mb-6" ref={dropdownRef}>
            <div
              onClick={() => setOpenn(!openn)}
              className="h-15 p-3 border border-[#C8C8C8] rounded-[3px] cursor-pointer flex items-center justify-between"
            >
              <span className={selected ? "text-[#364152]" : "text-[#9A9A9A]"}>
                {selected || t("Select service activity")}
              </span>
            
              <span className="ml-2">
                {openn ? (
                  <img src="/images/icons/ArrowUp.svg" alt="" />
                ) : (
                  <img src="/images/icons/ArrowDown.svg" alt="" />
                )}
              </span>
            </div>
            
              {openn && (
                <ul className="absolute left-0 right-0 border border-[#C8C8C8] bg-white rounded-[3px] shadow-md z-10">
                  {options.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelected(option);
                        setOpenn(false);
                      }}
                      className="p-3 hover:bg-[#F5F5F5] cursor-pointer"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-[#364152] text-base font-normal mb-3">
              {t("Years of experience")}
            </label>
            <input
              type="text"
              name="yearsofexperience"
              value={formData?.yearsofexperience}
              onChange={handleChange}
              className="h-15 p-3 mb-6 border border-[#C8C8C8] outline-[#C69815] rounded-[3px] placeholder:text-[#9A9A9A]"
              placeholder={t('Enter the number of years of experience')} 
            />
          </div>

        <div className="flex flex-col col-span-2 lg1:col-span-1 ">
            <label className="text-[#364152] text-base font-normal mb-3">
              {t("Company address")}
            </label>
            
            {/* <input
              type="text"
              // value={FormData?.address} 
              value={formData?.address || ""}
              readOnly
              onClick={handleClickOpen}
              className="h-15  p-3 mb-6 border border-[#C8C8C8] outline-[#C69815] rounded-[3px] placeholder:text-[#9A9A9A]"
              placeholder={t('Enter company address')}
            /> */}
            <textarea
              value={formData?.address || ""}
              readOnly
              onClick={handleClickOpen}
              className="h-15  p-3 mb-6 border border-[#C8C8C8] outline-[#C69815] rounded-[3px] placeholder:text-[#9A9A9A]"
              >

            </textarea>
          
        </div>
      

        </form>

        <button         
          className="px-4 py-2.5 bg-[#C69815] text-white text-base font-medium  w-full mt-8 mb-10 h-15 rounded-[3px]"
          onClick={nextSub}
        >
          {t('the next')}
        </button>

        <p className='flex justify-center gap-1.5'>
        <span className='text-[#697586] text-lg font-normal'>{t('Dont have an account?')}</span>
        <Link href='/Auth/Signup' className="text-[#9E7A11] text-lg font-medium">
          {t("Create an account")}
        </Link>
      </p>

      </div>
      

    
      {/* 🗺️ Map Dialog Component */}
      <MapDialog 
        open={open} 
        handleClose={handleClose} 
        formData={formData} 
        setFormData={setFormData} 
      />

    </> 
  );
}

export default FirstCompanyInformationPage;
