"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import MapDialog from './MapDialog';

function JobDataPage() {
  const {t}= useTranslation();

    //job
    const [open1, setOpen1] = useState(false);
    const [selected1, setSelected1] = useState("");
    const [searchValue1, setSearchValue1] = useState("");
    const dropdownRef1 = useRef(null);
    const optionJob=[
      'qq',"ww","ss","rr"
    ];
  
    // Employee address
    const [open2, setOpen2] = useState(false);
    const [selected2, setSelected2] = useState("");
    const [searchValue2, setSearchValue2] = useState("");
    const dropdownRef2 = useRef(null);
    const optionEmployeeAddress =[
      'qq',"ww","ss","rr"
    ];
  

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) setOpen1(false);
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
  return (
    <>
    <form className='grid grid-cols-2 gap-6'>

      {/* job */}
      <div className="flex flex-col">
          <label className="text-[#364152] text-base font-normal mb-3">
            {t("job")}
          </label>
    
          <div className="relative w-full" ref={dropdownRef1}>
            <div
              className="relative flex items-center border border-[#C8C8C8] rounded-[3px] cursor-pointer"
              onClick={() => setOpen1(!open1)}
            >
              {/* Input */}
              <input
                type="text"
                placeholder={t("Choose the job")}
                value={searchValue1 || selected1}
                onChange={(e) => {
                  setSearchValue1(e.target.value);
                  setOpen1(true);
                  setSelected1(null);
                }}
                className="h-15 p-3 w-full text-[#364152] focus:outline-none"
              />
    
              {/* 🔽 Dropdown arrow */}
              <span className="absolute left-3 cursor-pointer">
                {open1 ? (
                  <img src="/images/icons/ArrowUp.svg" alt="up" />
                ) : (
                  <img src="/images/icons/ArrowDown.svg" alt="down" />
                )}
              </span>
            </div>
    
            {/* 🔽 Dropdown options */}
            {open1 && (
              <ul className="absolute left-0 right-0 border border-[#C8C8C8] bg-white rounded-[3px] shadow-md z-10 max-h-48 overflow-y-auto">
                {optionJob
                  .filter((option) =>
                    option
                      ?.toLowerCase()
                      .includes(searchValue1.toLowerCase())
                  )
                  .map((option, index) => (
                    <li
                      key={option}
                      onClick={() => {
                        setSelected1(option);
                        setSearchValue1("");
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

      {/* Employee address */}
      <div className="flex flex-col ">
          <label className="text-[#364152] text-base font-normal mb-3">
            {t("Employee address")}
          </label>
          <textarea
            readOnly
            placeholder={t('Enter the address')}
            onClick={handleClickOpen}
            className="h-15  p-3 border border-[#C8C8C8] outline-[#C69815] rounded-[3px] placeholder:text-[#9A9A9A]"
            >

          </textarea>
        
      </div>

      {/* workplace */}
      <div className="flex flex-col">
          <label className="text-[#364152] text-base font-normal mb-3">
            {t("workplace")}
          </label>
    
          <div className="relative w-full" ref={dropdownRef2}>
            <div
              className="relative flex items-center border border-[#C8C8C8] rounded-[3px] cursor-pointer"
              onClick={() => setOpen2(!open2)}
            >
              {/* Input */}
              <input
                type="text"
                placeholder={t("Identify the workplace")}
                value={searchValue2 || selected2}
                onChange={(e) => {
                  setSearchValue2(e.target.value);
                  setOpen2(true);
                  setSelected2(null);
                }}
                className="h-15 p-3 w-full text-[#364152] focus:outline-none"
              />
    
              {/* 🔽 Dropdown arrow */}
              <span className="absolute left-3 cursor-pointer">
                {open2 ? (
                  <img src="/images/icons/ArrowUp.svg" alt="up" />
                ) : (
                  <img src="/images/icons/ArrowDown.svg" alt="down" />
                )}
              </span>
            </div>
    
            {/* 🔽 Dropdown options */}
            {open2 && (
              <ul className="absolute left-0 right-0 border border-[#C8C8C8] bg-white rounded-[3px] shadow-md z-10 max-h-48 overflow-y-auto">
                {optionEmployeeAddress
                  .filter((option) =>
                    option
                      ?.toLowerCase()
                      .includes(searchValue2.toLowerCase())
                  )
                  .map((option, index) => (
                    <li
                      key={option}
                      onClick={() => {
                        setSelected2(option);
                        setSearchValue2("");
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




      
      

    </form>
    
{/* 🗺️ Map Dialog Component */}
      <MapDialog 
        open={open} 
        handleClose={handleClose} 
    
      />
    </>
  )
}

export default JobDataPage