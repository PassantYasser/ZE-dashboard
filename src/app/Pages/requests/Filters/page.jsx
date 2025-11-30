"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import {DateRangePicker} from "@heroui/react";


// Dynamically import Dialog to avoid SSR
const Dialog = dynamic(() => import("@mui/material/Dialog"), { ssr: false });

function FiltersPage({ open, handleClose }) {
  const { t } = useTranslation();
  const [selected, setSelected] = useState([]);
  const options = [t("active"), t("pending"), t("refused"), t("stopped"), t("inactive")];

  const handleChange = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };



    
    // City (1)
    // =========================
    const [open1, setOpen1] = useState(false);
    const [selected1, setSelected1] = useState(null);
    const [searchValue1, setSearchValue1] = useState("");
    const dropdownRef1 = useRef(null);
    const optionCity = ['gg','hhhh','iiii','jjjj','kkkk','llll','mmmm','nnnn','oooo','pppp'];
  

    //service (2)
    // =========================
    const [open2, setOpen2] = useState(false);
    const [selected2, setSelected2] = useState(null);
    const [searchValue2, setSearchValue2] = useState("");
    const dropdownRef2 = useRef(null);
    const optionservice = ['gg','hhhh','iiii','jjjj','kkkk','llll','mmmm','nnnn','oooo','pppp'];

    // Status (3)
    // =========================
    const [open3, setOpen3] = useState(false);
    const [selected3, setSelected3] = useState(null);
    const [searchValue3, setSearchValue3] = useState("");
    const dropdownRef3 = useRef(null);
    const optionStatus = [
    "accepted",
    "completed",
    "pending_approval",
    "in_progress",
    "on_going",
    "rejected"
  ];

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
      PaperProps={{ className: "rerquest-dialog" }}
    >
      <section className="flex justify-between px-6 mt-6">
        <button
          onClick={handleClose}
          className="border border-[#CDD5DF] w-12 h-12 cursor-pointer rounded-[100px] flex justify-center items-center"
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
        <p className="text-[#364152] text-xl font-medium mb-5">{t("Filter items")}</p>
        <p className="text-[#4B5565] text-sm font-normal mb-5">
          {t("Filter results to facilitate access to the required service")}
        </p>
      </section>
      <span className="border-[0.5px] border-[#E3E8EF]" />

      <section className="p-6">
        <div className=" grid grid-cols-2 gap-4 mb-4">
          {/* ==========City ========== */}
          <div className="flex flex-col">
            <label className="text-[#364152] text-base font-normal mb-3">
              {t("City")}
            </label>

            <div className="relative w-full" ref={dropdownRef1}>
              <div
                className="relative flex items-center border border-[#C8C8C8] rounded-[3px] cursor-pointer"
                onClick={() => setOpen1(!open1)}
              >
                <input
                  type="text"
                  placeholder={t("Select City")}
                  value={selected1 || searchValue1}   
                  onChange={(e) => {
                    setSearchValue1(e.target.value);
                    setOpen1(true);
                    setSelected1(null);
                  }}
                  className="h-15 p-3 w-full text-[#364152] focus:outline-none"
                />

                <span className="absolute left-3 pointer-events-none">
                  {open1 ? (
                    <img src="/images/icons/ArrowUp.svg" alt="up" />
                  ) : (
                    <img src="/images/icons/ArrowDown.svg" alt="down" />
                  )}
                </span>
              </div>

              {open1 && (
                <ul className="absolute left-0 right-0 border border-[#C8C8C8] bg-white rounded-[3px] shadow-md z-10 max-h-48 overflow-y-auto">
                  {optionCity
                    .filter((opt) =>
                      opt.toLowerCase().includes(searchValue1.toLowerCase())
                    )
                    .map((opt) => (
                      <li
                        key={opt}
                        onClick={() => {
                          setSelected1(opt);
                          setOpen1(false);
                          setSearchValue1("");
                        }}
                        className="p-3 hover:bg-[#F5F5F5] cursor-pointer"
                      >
                        {opt}
                      </li>
                    ))}
                </ul>
              )}

            </div>
          </div>


          {/* ==========service ========== */}
          <div className="flex flex-col">
            <label className="text-[#364152] text-base font-normal mb-3">
              {t("Service")}
            </label>

            <div className="relative w-full" ref={dropdownRef2}>
              <div
                className="relative flex items-center border border-[#C8C8C8] rounded-[3px] cursor-pointer"
                onClick={() => setOpen2(!open2)}
              >
                <input
                  type="text"
                  placeholder={t("Choose the service")}
                  value={selected2 || searchValue2}   
                  onChange={(e) => {
                    setSearchValue2(e.target.value);
                    setOpen2(true);
                    setSelected2(null);
                  }}
                  className="h-15 p-3 w-full text-[#364152] focus:outline-none"
                />

                <span className="absolute left-3 pointer-events-none">
                  {open2 ? (
                    <img src="/images/icons/ArrowUp.svg" alt="up" />
                  ) : (
                    <img src="/images/icons/ArrowDown.svg" alt="down" />
                  )}
                </span>
              </div>

              {open2 && (
                <ul className="absolute left-0 right-0 border border-[#C8C8C8] bg-white rounded-[3px] shadow-md z-10 max-h-48 overflow-y-auto">
                  {optionservice
                    .filter((opt) =>
                      opt.toLowerCase().includes(searchValue2.toLowerCase())
                    )
                    .map((opt) => (
                      <li
                        key={opt}
                        onClick={() => {
                          setSelected2(opt);
                          setOpen2(false);
                          setSearchValue2("");
                        }}
                        className="p-3 hover:bg-[#F5F5F5] cursor-pointer"
                      >
                        {opt}
                      </li>
                    ))}
                </ul>
              )}

            </div>
          </div>          
        </div>
      
        {/* ========== status ========== */}
        <div className="flex flex-col">
          <label className="text-[#364152] text-base font-normal mb-3">
            {t("Status")}
          </label>

          <div className="relative w-full" ref={dropdownRef3}>
            <div
              className="relative flex items-center border border-[#C8C8C8] rounded-[3px] cursor-pointer"
              onClick={() => setOpen3(!open3)}
            >
              <input
                type="text"
                placeholder={t("Select status")}
                value={t(selected3) || searchValue3}
                onChange={(e) => {
                  setSearchValue3(e.target.value);
                  setOpen3(true);
                  setSelected3(null);
                }}
                className="h-15 p-3 w-full text-[#364152] focus:outline-none"
              />

              <span className="absolute left-3 pointer-events-none">
                {open3 ? (
                  <img src="/images/icons/ArrowUp.svg" alt="up" />
                ) : (
                  <img src="/images/icons/ArrowDown.svg" alt="down" />
                )}
              </span>
            </div>

            {open3 && (
              <ul className="absolute left-0 right-0 border border-[#C8C8C8] bg-white rounded-[3px] shadow-md z-10 max-h-48 overflow-y-auto">
                {optionStatus
                  .filter((opt) =>
                    opt.toLowerCase().includes(searchValue3.toLowerCase())
                  )
                  .map((opt) => (
                    <li
                      key={opt}
                      onClick={() => {
                        setSelected3(opt);
                        setOpen3(false);
                        setSearchValue3("");
                      }}
                      className="p-3 hover:bg-[#F5F5F5] cursor-pointer"
                    >
                      {t(opt)}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
  <div className="flex w-full flex-wrap md:flex-nowrap gap-4" >
    <DateRangePicker
      label="Stay duration"
      visibleMonths={2}
      classNames={{
        calendar: "bg-white , border",          // main calendar background
        content: "bg-red-500",           // popover body background
        base: "bg-green-50",                // input background
      }}
    />
    
  </div>


      </section>

      
      <section className="p-6 flex gap-4 ">
        <button className="w-42.5 h-13.5 bg-[var(--color-primary)] cursor-pointer  text-[#fff] rounded-[3px] text-base font-medium">
          {t('Show results')}
        </button>

        <button className="w-35 h-13.5 border border-[var(--color-primary)] cursor-pointer  text-[var(--color-primary)] rounded-[3px] text-base font-medium">
          {t('Reset')}
        </button>
      </section>

      
    </Dialog>
  );
}

export default FiltersPage;
