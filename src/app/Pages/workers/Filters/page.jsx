"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getAllAreasThunk } from "@/redux/slice/Services/ServicesSlice";

// Dynamically import Dialog to avoid SSR
const Dialog = dynamic(() => import("@mui/material/Dialog"), { ssr: false });

function FiltersPage({ open, handleClose , getDesignations  }) {
  const { t } = useTranslation();

  //api
    const dispatch = useDispatch()
    const {getAreas } = useSelector(state=>state.services)
    useEffect(() => {
      dispatch(getAllAreasThunk()); 
    }, [dispatch])


  
  // workplaces 
    const [open1, setOpen1] = useState(false);
    const [selected1, setSelected1] = useState("");
    const [searchValue1, setSearchValue1] = useState("");
    const dropdownRef1 = useRef(null);
    const optionWorkplaces=getAreas?.areas || [];
    
    //status
    const [open2, setOpen2] = useState(false);
    const [selected2, setSelected2] = useState("");
    const [searchValue2, setSearchValue2] = useState("");
    const dropdownRef2 = useRef(null);
    const optionStatus =[
      "نشط" , "غير نشط"
    ];

    //job
    const [open3, setOpen3] = useState(false);
    const [selected3, setSelected3] = useState("");
    const [searchValue3, setSearchValue3] = useState("");
    const dropdownRef3 = useRef(null);
    const optionJob = getDesignations || [];

      useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) setOpen1(false);
          if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) setOpen2(false);
          if (dropdownRef3.current && !dropdownRef3.current.contains(event.target)) setOpen3(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);
    
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{ className: "ServicePage-dialog" }}
    >
      <section className="flex justify-between px-6 mt-6">
        <button
          onClick={handleClose}
          className="border border-[#CDD5DF] w-12 h-12 rounded-[100px] flex justify-center items-center cursor-pointer"
        >
          <img src="/images/icons/xx.svg" alt="" className="w-6 h-6" />
        </button>
        <div className="w-14 h-14 bg-[#EEF2F6] rounded-[100px] flex justify-center items-center">
          <p className="bg-[#E3E8EF] flex items-center justify-center w-10 h-10 rounded-[100px]">
            <img src="/images/icons/FilterGreyicon.svg" alt="" className="w-6 h-6" />
          </p>
        </div>
      </section>

      <section className="mt-8 px-6">
        <p className="text-[#364152] text-xl font-medium mb-5">{t("Worker filtering")}</p>
        <p className="text-[#4B5565] text-sm font-normal mb-5">
          {t("Precise filtering of workers and orders to quickly find what you are looking for.")}
        </p>
      </section>
      <span className="border-[0.5px] border-[#E3E8EF]" />

      <section className="p-6">
        {/* workplaces */}
        <div className="flex flex-col">
          <label className="text-[#364152] text-base font-normal mb-3">
            {t("Workplaces")}
          </label>

          <div className="relative w-full" ref={dropdownRef1}>
            <div
              onClick={() => setOpen1(!open1)}
              className="p-2 min-h-15 border border-[#C8C8C8] rounded-[3px] cursor-pointer flex items-center flex-wrap gap-2"
            >
              {/* Selected tags / placeholder */}
              {selected1.length > 0 ? (
                selected1.map((item, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1.5 h-10 w-fit bg-[#EDE7FD] border border-[#E2E2E2] text-[#505050] text-sm px-3 py-1 rounded-full"
                  >
                    {item?.city}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected1(selected1.filter((_, i) => i !== index));
                      }}
                      className="text-[#364152]"
                    >
                      <img src="/images/icons/x.svg" alt="" className="w-3 h-3" />
                    </button>
                  </span>
                ))
              ) : (
                <span className="text-[#9A9A9A]">{t("Identify the workplaces")}</span>
              )}

              {/* Arrow icon on the right */}
              <span className="absolute left-3">
                {open1 ? (
                  <img src="/images/icons/ArrowUp.svg" alt="" />
                ) : (
                  <img src="/images/icons/ArrowDown.svg" alt="" />
                )}
              </span>
            </div>

            {/* Dropdown options */}
            {open1 && (
              <ul className="absolute left-0 right-0 border border-[#C8C8C8] bg-white rounded-[3px] shadow-md z-10 max-h-48 overflow-y-auto">
                {optionWorkplaces.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      if (!selected1.includes(option)) {
                        setSelected1([...selected1, option]);
                      }
                      setOpen1(false);
                    }}
                    className="p-3 hover:bg-[#F5F5F5] cursor-pointer"
                  >
                    {option.city}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* status */}
        <div className="flex flex-col mt-4">
          <label className="text-[#364152] text-base font-normal mb-3">
            {t("Status")}
          </label>

          <div className="relative w-full" ref={dropdownRef2}>
            <div
              className="relative flex items-center border border-[#C8C8C8] rounded-[3px] cursor-pointer"
              onClick={() => setOpen2(!open2)}
            >
              {/* Input */}
              <input
                type="text"
                placeholder={t("Select status")}
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
                {optionStatus
                  .filter((option) =>
                    option
                      ?.toLowerCase()
                      .includes(searchValue2.toLowerCase())
                  )
                  .map((option, index) => (
                    <li
                      key={option.id || index}
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

        {/* job */}
        <div className="flex flex-col mt-4">
          <label className="text-[#364152] text-base font-normal mb-3">
            {t("job")}
          </label>

          <div className="relative w-full" ref={dropdownRef3}>
            <div
              className="relative flex items-center border border-[#C8C8C8] rounded-[3px] cursor-pointer"
              onClick={() => setOpen3(!open3)}
            >
              {/* Input */}
              <input
                type="text"
                placeholder={t("Select job")}
                value={searchValue3 || selected3}
                onChange={(e) => {
                  setSearchValue3(e.target.value);
                  setOpen3(true);
                  setSelected3(null);
                
                }}
                className="h-15 p-3 w-full text-[#364152] focus:outline-none"
              />

              {/* 🔽 Dropdown arrow */}
              <span className="absolute left-3 cursor-pointer">
                {open3 ? (
                  <img src="/images/icons/ArrowUp.svg" alt="up" />
                ) : (
                  <img src="/images/icons/ArrowDown.svg" alt="down" />
                )}
              </span>
            </div>

            {/* 🔽 Dropdown options */}
            {open3 && (
              <ul className="absolute left-0 right-0 border border-[#C8C8C8] bg-white rounded-[3px] shadow-md z-10 max-h-48 overflow-y-auto">
                {optionJob
                  .filter((option) =>
                    option?.name
                      ?.toLowerCase()
                      .includes(searchValue3.toLowerCase())
                  )
                  .map((option, index) => (
                    <li
                      key={option.id || index}
                      onClick={() => {
                        setSelected3(option?.name);
                        setSearchValue3("");
                        setOpen3(false);
                      }}
                      className="p-3 hover:bg-[#F5F5F5] cursor-pointer"
                    >
                      {option.name}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </section>
      

      <div className="px-6 mt-4 mb-6 flex gap-4">
        <button className="bg-[#C69815] text-white px-4 py-2.5 w-42.5 h-13.5 rounded-[3px] cursor-pointer">
          {t("Show results")}
        </button>
        <button
          className="border border-[#C69815] text-[#C69815] px-4 py-2.5 w-32.5 h-13.5 rounded-[3px] cursor-pointer"
          
        >
          {t("Reset")}
        </button>
      </div>
    </Dialog>
  );
}

export default FiltersPage;
