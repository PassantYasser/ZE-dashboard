"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import HeaderOfTablePage from "./HeaderOfTable/page";
import Pagination from "./Pagination";

function createData(orderNumber, dateTime,status) {
  return { orderNumber, dateTime,status};
}

const rows = [
  createData("001", "15 أبريل 2023 : 10 ص" ,"completed" ),
  createData("002", "16 أبريل 2023 : 12 م", "pending"),
createData("003", "17 أبريل 2023 : 03 م", "rejected"),
createData("004", "18 أبريل 2023 : 09 ص", "completed"),
createData("005", "19 أبريل 2023 : 01 م", "pending"),
createData("006", "20 أبريل 2023 : 05 م", "completed"),
createData("007", "21 أبريل 2023 : 11 ص", "rejected"),
createData("008", "22 أبريل 2023 : 04 م", "completed"),
createData("009", "23 أبريل 2023 : 08 ص", "pending"),
createData("010", "24 أبريل 2023 : 02 م", "completed"),

];


export default function TableOfActivePage() {

  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const StatusRender = (Status) => {
      switch (Status) {
        case "completed": // مقبولة 
          return (
            <div className=' bg-[#DCFAE6] border border-[#067647] text-[#067647] w-fit  h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex items-center  gap-1'>
              <img src="/images/icons/Active Status.svg" alt="" className=' mt-1' />
              <span className=''>{t('Acceptable')}</span>
            </div>
          </div>
          );
        case "pending":// قيد المراجعة
          return (
            <div className=' bg-[#EFF4FF] border border-[#518BFF] text-[#004EEB] w-fit  h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex items-center gap-1'>
              <img src="/images/icons/Under review.svg" alt="" className=' mt-1' />
              <span className=''>{t('Under review')}</span>
            </div>
          </div>
          );
        case "rejected": // مرفوضة
          return (
            <div className=' bg-[#FEE4E2] border border-[#F97066] text-[#D92D20] w-fit h-9.5 rounded-3xl'>
              <div className='py-1.5 px-3 flex items-center gap-1'>
                <img src="/images/icons/refused Status.svg" alt="" className=' mt-1'/>
                <span className=''>{t('rejected')}</span>
              </div>
            </div>
          );
      }
    };

  return (
    <div className=" mt-8 mb-5">
      <HeaderOfTablePage />

      <div className=" rounded-[3px] border border-[#E3E8EF] overflow-x-auto">
        
        <table className="lg1:w-full border border-[#E3E8EF] text-sm text-right ">
          {/* Table Head */}
          <thead className="bg-[#F8FAFC] border-b border-[#E3E8EF] text-[#364152] sticky top-0 z-10">
            <tr>
              <th className="p-4 font-normal">{t("order number")}</th>
              <th className="py-4 font-normal">{t("the date")}/{t("the time")}</th>
              <th className="py-4 font-normal">{t("Status")}</th>
              <th className="py-4 font-normal flex justify-center ">{t('procedures')}</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.orderNumber}
                onClick={handleClickOpen}
                className="hover:bg-[#F9F5E8]  hover:border-0 hover:cursor-pointer  border-y border-[#E3E8EF] font-normal text-sm text-[#697586]"
              >
                <td className="p-4  w-[20%]">{row.orderNumber}</td>
                <td className="p-4  w-[30%]" >{row.dateTime}</td>
                <td className='py-4  w-[30%]'>
                  {StatusRender(row.status)}
                </td>
                <td className='py-4  w-[20%] ' >
                  <p className="flex justify-center">
                    <img src="/images/icons/delete-darkRed.svg" alt="" />
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>

      <Pagination/>

    </div>
  



  );
}

