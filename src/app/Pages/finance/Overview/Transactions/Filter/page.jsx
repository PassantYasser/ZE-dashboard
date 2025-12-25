"use client"
import { Dialog } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { ar } from 'date-fns/locale'; // Arabic locale

function FilterPage({open , setOpen}) {
    const { t } = useTranslation();

      // ===== Payment status 1 =====
      const [open1, setOpen1] = useState(false);
      const [selected1, setSelected1] = useState(null);
      const [searchValue1, setSearchValue1] = useState("");
      const dropdownRef1 = useRef(null);
      const optionPaymentStatus = ['gg','hhhh','iiii','jjjj','kkkk','llll','mmmm','nnnn','oooo','pppp'];
    
      // ===== payment method 2 =====
      const [open2, setOpen2] = useState(false);
      const [selected2, setSelected2] = useState(null);
      const [searchValue2, setSearchValue2] = useState("");
      const dropdownRef2 = useRef(null);
      const optionPaymentMethod = ['gg','hhhh','iiii','jjjj','kkkk','llll','mmmm','nnnn','oooo','pppp'];

      // ===== worker 3 =====
      const [open3, setOpen3] = useState(false);
      const [selected3, setSelected3] = useState(null);
      const [searchValue3, setSearchValue3] = useState("");
      const dropdownRef3 = useRef(null);
      const optionWorker = ['gg','hhhh','iiii','jjjj','kkkk','llll','mmmm','nnnn','oooo','pppp'];

      // ===== Service 4 =====
      const [open4, setOpen4] = useState(false);
      const [selected4, setSelected4] = useState(null);
      const [searchValue4, setSearchValue4] = useState("");
      const dropdownRef4 = useRef(null);
      const optionService = ['gg','hhhh','iiii','jjjj','kkkk','llll','mmmm','nnnn','oooo','pppp'];

        /*  ========== calender ========== */
        const [open5, setOpen5] = useState(false);
        const dropdownRef5 = useRef(null);
      
        const [state, setState] = useState([
          {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
          }
        ]);
      

      useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) setOpen1(false);
          if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) setOpen2(false);
          if (dropdownRef3.current && !dropdownRef3.current.contains(event.target)) setOpen3(false);
          if (dropdownRef4.current && !dropdownRef4.current.contains(event.target)) setOpen4(false);
          if (dropdownRef5.current && !dropdownRef5.current.contains(event.target)) setOpen5(false);

        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);

  return (
    <>
    <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{
            className: "overviewPage-dialog",
          }}
        >
          <section className="flex justify-between px-6 mt-6">
            <button
              onClick={()=>setOpen(false)}
              className="border border-[#CDD5DF] w-12 h-12 rounded-[100px] flex justify-center items-center"
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
            <p className="text-[#364152] text-xl font-medium mb-5">{t("Transaction settlement")}</p>
            <p className="text-[#4B5565] text-sm font-normal mb-5">
              {t("Precise transaction filtering to quickly find what you are looking for.")}
            </p>
          </section>
          <span className="border-[0.5px] border-[#E3E8EF]" />

          <section className='p-6 '>
            <div className='grid grid-cols-2 gap-4'>
              {/* Payment status */}
              <div className="flex flex-col">
                <label className="text-[#364152] text-base font-normal mb-3">
                  {t("Payment status")}
                </label>

                <div className="relative w-full" ref={dropdownRef1}>
                  <div
                    className="relative flex items-center border border-[#C8C8C8] rounded-[3px] cursor-pointer"
                    onClick={() => setOpen1(!open1)}
                  >
                    <input
                      type="text"
                      placeholder={t("Select payment status")}
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
                      {optionPaymentStatus
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

              {/* payment method */}
              <div className="flex flex-col">
                <label className="text-[#364152] text-base font-normal mb-3">
                  {t("payment method")}
                </label>

                <div className="relative w-full" ref={dropdownRef2}>
                  <div
                    className="relative flex items-center border border-[#C8C8C8] rounded-[3px] cursor-pointer"
                    onClick={() => setOpen2(!open2)}
                  >
                    <input
                      type="text"
                      placeholder={t("Select payment status")}
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
                      {optionPaymentMethod
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


              {/* worker */}
              <div className="flex flex-col">
                <label className="text-[#364152] text-base font-normal mb-3">
                  {t("worker")}
                </label>

                <div className="relative w-full" ref={dropdownRef3}>
                  <div
                    className="relative flex items-center border border-[#C8C8C8] rounded-[3px] cursor-pointer"
                    onClick={() => setOpen3(!open3)}
                  >
                    <input
                      type="text"
                      placeholder={t("Choose a woker")}
                      value={selected3 || searchValue3}   
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
                      {optionWorker
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
                            {opt}
                          </li>
                        ))}
                    </ul>
                  )}

                </div>
              </div>

              {/* Service */}
              <div className="flex flex-col">
                <label className="text-[#364152] text-base font-normal mb-3">
                  {t("Service")}
                </label>

                <div className="relative w-full" ref={dropdownRef4}>
                  <div
                    className="relative flex items-center border border-[#C8C8C8] rounded-[3px] cursor-pointer"
                    onClick={() => setOpen4(!open4)}
                  >
                    <input
                      type="text"
                      placeholder={t("Choose the service")}
                      value={selected4 || searchValue4}   
                      onChange={(e) => {
                        setSearchValue4(e.target.value);
                        setOpen4(true);
                        setSelected4(null);
                      }}
                      className="h-15 p-3 w-full text-[#364152] focus:outline-none"
                    />

                    <span className="absolute left-3 pointer-events-none">
                      {open4 ? (
                        <img src="/images/icons/ArrowUp.svg" alt="up" />
                      ) : (
                        <img src="/images/icons/ArrowDown.svg" alt="down" />
                      )}
                    </span>
                  </div>

                  {open4 && (
                    <ul className="absolute left-0 right-0 border border-[#C8C8C8] bg-white rounded-[3px] shadow-md z-10 max-h-48 overflow-y-auto">
                      {optionService
                        .filter((opt) =>
                          opt.toLowerCase().includes(searchValue4.toLowerCase())
                        )
                        .map((opt) => (
                          <li
                            key={opt}
                            onClick={() => {
                              setSelected4(opt);
                              setOpen4(false);
                              setSearchValue4("");
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
            
            {/* <div className="flex flex-col mt-6">
              <label className="text-[#364152] text-base font-normal mb-3">
                {t("Payment status")}
              </label>
              <div className="relative w-full">
            <div
              className="relative flex items-center border border-[#C8C8C8] rounded-[3px] cursor-pointer"
              // onClick={() => setOpen4(true)}
            >
              <input
                type="text"
                // placeholder={t("Select date range")}
                readOnly
                className="h-15 p-3 w-full text-[#364152] focus:outline-none cursor-pointer"
              />

              <span className="absolute left-4 pointer-events-none">
                <img src="/images/icons/calender.svg" alt="calendar" />
              </span>
            </div>
          </div>
            </div> */}
            <div className="flex flex-col mt-6">
              <label className="text-[#364152] text-base font-normal mb-3">
                {t("Service history")}
              </label>
    
              <div className="relative w-full">
                <div
                  className="relative flex items-center border border-[#C8C8C8] rounded-[3px] cursor-pointer"
                  onClick={() => setOpen5(true)}
                >
                  <input
                    type="text"
                    placeholder={t("Select date range")}
                    value={
                      state[0].startDate && state[0].endDate
                        ? `${state[0].startDate.toLocaleDateString()} - ${state[0].endDate.toLocaleDateString()}`
                        : ""
                    }
                    readOnly
                    className="h-15 p-3 w-full text-[#364152] focus:outline-none cursor-pointer"
                  />
    
                  <span className="absolute left-4 pointer-events-none">
                    <img src="/images/icons/calender.svg" alt="calendar" />
                  </span>
                </div>
              </div>
    
    
              {/* Date Range Picker Modal */}
              <Dialog
                open={open5}
                aria-labelledby="date-picker-dialog"
                PaperProps={{ className: "rerquest-dialog", dir: "rtl" }}
              >
                {/* title of calender */}
                <section className="flex justify-between px-6 mt-6 ">
                  <button
                    onClick={() => setOpen5(false)}
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
    

    
                <span className="border-[0.5px] border-[#E3E8EF] my-2" />
    
                <section className="p-6 flex items-center justify-center ">
                  <div dir="ltr" className="inline-block ">
                    <div className="  ">
                        <DateRangePicker
                          onChange={item => setState([item.selection])}
                          showSelectionPreview={true}
                          moveRangeOnFirstSelection={false}
                          months={2}
                          ranges={state}
                          direction="horizontal"
                          preventSnapRefocus={true}
                          calendarFocus="backwards"
                          locale={ar}
                          staticRanges={[]}
                          inputRanges={[]}
                          rangeColors={["var(--color-primary)"]}
                          
                        />
                    </div>
                  
                  </div>
                </section>
    
                {/* btns of calender */}
                <section className="p-6 flex gap-4 ">
                  <button 
                  onClick={() => setOpen5(false)}
                  className="w-23 h-13.5 bg-[var(--color-primary)] cursor-pointer  text-[#fff] rounded-[3px] text-base font-medium">
                    {t('apply')}
                  </button>
    
                  <button 
                  onClick={() => setOpen5(false)}
                  className="w-15 h-13.5 border border-[var(--color-primary)] cursor-pointer  text-[var(--color-primary)] rounded-[3px] text-base font-medium">
                    {t('cancel')}
                  </button>
                </section>
    
    
    
    
              </Dialog>
            </div>  
          </section>
          
          {/* btn */}
          <section className="p-6 flex gap-4 ">
            <button className="w-42.5 h-13.5 bg-[var(--color-primary)] cursor-pointer  text-[#fff] rounded-[3px] text-base font-medium">
              {t('Show results')}
            </button>

            <button className="w-35 h-13.5 border border-[var(--color-primary)] cursor-pointer  text-[var(--color-primary)] rounded-[3px] text-base font-medium">
              {t('Reset')}
            </button>
          </section>


        </Dialog>

    </>
  )
}

export default FilterPage