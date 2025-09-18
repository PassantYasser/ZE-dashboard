"use client";

import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';

function PricingPage() {
  const{t} = useTranslation()
  const [openRate, setOpenRate] = useState(false);


  // Pricing Type
    const options = [
      t("Design"),
      t("Development"),
      t("Marketing"),
      t("Consulting"),
    ];
    const [open1, setOpen1] = useState(false);
    const [selected1, setSelected1] = useState("");
    const dropdownRef1 = useRef(null);

    //
    const [open2, setOpen2] = useState(false);
    const [selected2, setSelected2] = useState("");
    const dropdownRef2 = useRef(null);
    const optionRates = [
      t("Rate"),
    
    ];

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) setOpen1(false);
        if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) setOpen2(false);
        
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  return (
    <>
      <form action="" className='flex flex-col gap-8'>
      <div className='flex gap-6'>
          <div className='flex flex-col gap-4 w-full '>
            <div className='flex justify-between'>
              <label className='text-[#364152]'> {t('Service Price')}</label>
              <div className='flex gap-1'>
                <input 
                  type="checkbox"
                  className='w-6 h-6 rounded-[3px] border border-[#CDD5DF]'/>
                <p className='text-[#4B5565]'>{t('Price upon inspection')}</p>
              </div>
            </div>
            <input 
              type="text" 
              className='border h-13.5 p-3 border-[#C8C8C8] rounded-[3px]'
              placeholder={t('Enter the service price')} />
          </div>

          <div className='flex flex-col gap-4 w-full '>
            <label className='text-[#364152]'>{t('Pricing Type')}</label>        
          
            <div className="relative w-full mb-6" ref={dropdownRef1}>
            <div
              onClick={() => setOpen1(!open1)}
              className=" h-13.5 p-3 border border-[#C8C8C8] rounded-[3px] cursor-pointer flex items-center justify-between"
            >
              <span className={selected1 ? "text-[#364152]" : "text-[#9A9A9A]"}>
                {selected1 || t("Choose the pricing type")}
              </span>
              <span className="ml-2">
                {open1 ? (
                  <img src="/images/icons/ArrowUp.svg" alt="" />
                ) : (
                  <img src="/images/icons/ArrowDown.svg" alt="" />
                )}
              </span>
            </div>
            {open1 && (
              <ul className="absolute left-0 right-0 border border-[#C8C8C8] bg-white rounded-[3px] shadow-md z-10">
                {options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSelected1(option);
                      setOpen1(false);
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

      </div>

    <div className="flex flex-col gap-2 ">
      <label className="text-[#364152]">{t("Discount")}</label>

      <div className="flex w-full ">
      
        {/* Input field */}
        <input
          type="text"
          placeholder={t("Enter the discount price")}
          className=" h-13.5 w-[85%] px-3 border border-[#C8C8C8]  rounded-[3px] focus:outline-none"
        />

          {/* Dropdown */}
        <div className="relative  w-[15%] " ref={dropdownRef2}>
          <div
            onClick={() => setOpen2(!open2)}
            className=" bg-[#EEF2F6]  p-3 h-13.5 border border-[#C8C8C8]  rounded-[3px] cursor-pointer flex items-center justify-between"
          >
            <span className={selected2 ? "text-[#4B5565]" : "text-[#4B5565]"} >
              {selected2 || t("Rate")}
            </span>
            <span className="">
              {open2 ? (
                <img src="/images/icons/ArrowUp.svg" alt="" />
              ) : (
                <img src="/images/icons/ArrowDown.svg" alt="" />
              )}
            </span>
          </div>

          {open2 && (
            <ul className=" border border-[#4B5565] bg-white rounded-[3px] shadow-md z-10">
              {optionRates.map((option, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelected2(option);
                    setOpen2(false);
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
    </div>



      </form>
    </>
  )
}

export default PricingPage