"use client";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import MapDialog from "./MapDialog";

function CompanyAddressPage({userData}) {
  const { t } = useTranslation();

  console.log(userData);
    //map
      const [address, setAddress] = useState(userData?.address);
      const [open, setOpen] = useState(false);

      const handleConfirm = (newAddress) => {
        setAddress(newAddress);
      };
    
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


  return (
    <div className="border border-[#E3E8EF] mb-8">
      <Header />

      <section className="p-6">
      {/*  Location  */}
        <div className="flex flex-col mb-4">
          <label className="text-[#4B5565] text-base font-normal mb-1.5">
            {t("Location")}
          </label>
          <div className="relative">
            <div
              onClick={handleClickOpen}
              className="h-14 p-3 w-full rounded-[3px] border border-[#E3E8EF] shadow-xm outline-none placeholder:text-[#9A9A9A] placeholder:text-sm placeholder:font-normal" 
            >
              <span
                className={`text-sm ${
                  address ? "text-black" : "text-[#9A9A9A]"
                }`}
              >
                {address || t("Enter the address")}
              </span>
            </div>
            <img
              src="/images/icons/locationDarkBlack.svg"
              alt="location"
              className="absolute left-3 top-4 pointer-events-none"
            />
          </div>
        </div>

        {/*street */}
        <div>
          <p className="text-[#4B5565] text-base font-normal  mb-1.5">{t('street')}</p>
          <input 
            type="text"
            value={userData?.street}
            readOnly
            className="h-14 p-3 w-full rounded-[3px] border border-[#E3E8EF] shadow-xm outline-none placeholder:text-[#9A9A9A] placeholder:text-sm placeholder:font-normal" 
          />
        </div>
        
        {/*famous sign */}
        <div className="mt-4">
          <p className="text-[#4B5565] text-base font-normal  mb-1.5">{t('famous sign')}</p>
          <input 
            type="text"
            value={userData?.famous_sign}
            readOnly
            className="h-14 p-3 w-full rounded-[3px] border border-[#E3E8EF] shadow-xm outline-none placeholder:text-[#9A9A9A] placeholder:text-sm placeholder:font-normal" 
          />
        </div>

        <div className="flex gap-4 mt-4  w-full">
          {/* Property number */}
          <div className="w-full">
            <p className="text-[#4B5565] text-base font-normal  mb-1.5">{t('Property number')}</p>
            <input 
              type="text"
              value={userData?.block_no}
              readOnly
              className="h-14 p-3 w-full rounded-[3px] border border-[#E3E8EF] shadow-xm outline-none placeholder:text-[#9A9A9A] placeholder:text-sm placeholder:font-normal" 
            />
          </div>

          {/*Apartment number */}
          <div className="w-full">
            <p className="text-[#4B5565] text-base font-normal  mb-1.5">{t('Apartment number')}</p>
            <input 
              type="text"
              value={userData?.apt_no}
              readOnly
              className="h-14 p-3 w-full rounded-[3px] border border-[#E3E8EF] shadow-xm outline-none placeholder:text-[#9A9A9A] placeholder:text-sm placeholder:font-normal" 
            />
          </div>
        </div>


        {/* btn */}
        <button className="bg-[var(--color-primary)] h-15 w-62.5 mt-6 text-[#fff] text-base font-medium rounded-[3px]">
          {t('Save changes')}
        </button>
      </section>

      


      {/* 🗺️ Map Dialog Component */}
            <MapDialog
              open={open}
              handleClose={handleClose}
              onConfirm={handleConfirm}
            />
    </div>
    
  );
}

export default CompanyAddressPage;
