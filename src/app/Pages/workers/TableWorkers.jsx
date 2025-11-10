"use client";
import { fontWeight } from "@mui/system";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function createData(UserCode, worker, workerImg,job, WorkingHours, phoneNumber , status) {
  return { UserCode, worker, workerImg, job, WorkingHours, phoneNumber, status};
}

const rows = [
createData("#001", "عصام محمد", "https://randomuser.me/api/portraits/men/32.jpg", "سباك", "9ص إلى 5م", "0115588996655", "active"),
createData("#002", "أحمد علي", "https://randomuser.me/api/portraits/men/45.jpg", "كهربائي", "10ص إلى 6م", "01022446688", "inactive"),
createData("#003", "محمود عبد الله", "https://randomuser.me/api/portraits/men/12.jpg", "نجّار", "8ص إلى 4م", "01233445566", "active"),
createData("#004", "حسن إبراهيم", "https://randomuser.me/api/portraits/men/65.jpg", "فني تكييف", "11ص إلى 7م", "01577889900", "inactive"),
createData("#005", "ياسر جمال", "https://randomuser.me/api/portraits/men/23.jpg", "حداد", "9ص إلى 5م", "01099887766", "active"),
createData("#006", "علي عبد الرحمن", "https://randomuser.me/api/portraits/men/56.jpg", "نقاش", "8ص إلى 4م", "01111222333", "inactive"),
createData("#007", "عمرو محمود", "https://randomuser.me/api/portraits/men/38.jpg", "فني صيانة", "10ص إلى 6م", "01277889900", "active"),
createData("#008", "إبراهيم سعيد", "https://randomuser.me/api/portraits/men/29.jpg", "عامل نظافة", "7ص إلى 3م", "01044556677", "inactive"),
createData("#009", "محمد طارق", "https://randomuser.me/api/portraits/men/47.jpg", "عامل دهانات", "9ص إلى 5م", "01122334455", "active"),
createData("#010", "عبد العزيز حسن", "https://randomuser.me/api/portraits/men/51.jpg", "فني ميكانيكا", "8ص إلى 4م", "01566778899", "inactive"),

];


export default function TableWorkers() {
  const { t } = useTranslation();

  
    const StatusRender = (status) => {
      switch (status) {
        case "active":
          return (
            <div className=' bg-[#DCFAE6] border border-[#067647] text-[#067647] w-fit  h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/Active Status.svg" alt="" className=' mt-1' />
              <span className=''>{t('active')}</span>
            </div>
          </div>
          );
  
          case "inactive":
          return (
            <div className=' bg-[#FEE4E2] border border-[#F97066] text-[#D92D20] w-fit h-9.5 rounded-3xl'>
              <div className='py-1.5 px-3 flex gap-1'>
                <img src="/images/icons/refused Status.svg" alt="" className=' mt-1'/>
                <span className=''>{t('inactive')}</span>
              </div>
            </div>
          );
      
      }
    };

  return (
    <div className="overflow-x-auto mt-8 rounded-[3px] mb-5">
      <table className="min-w-full border border-[#E3E8EF] text-sm text-right ">
        {/* Table Head */}
        <thead className="bg-[#F8FAFC] border-b border-[#E3E8EF] text-[#364152] ">
          <tr>
            <th className="p-4 font-normal">{t("User code")}</th>
            <th className="p-4 font-normal">{t("Name of the worker")}</th>
            <th className="p-4 font-normal">{t("job")}</th>
            <th className="p-4 font-normal">{t("Working hours")}</th>
            <th className="p-4 font-normal">{t("phone number")}</th>
            <th className="p-4 font-normal">{t("Status")}</th>
            <th className="p-4 font-normal">{t("procedures")}</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.UserCode}
              className="hover:bg-[#F9F5E8]  hover:border-0 hover:cursor-pointer  border-y border-[#E3E8EF] font-normal text-sm text-[#697586]"
            >
            
              <td className="p-4  ">{row.UserCode}</td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <img
                    src={row.workerImg}
                    alt={row.worker}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{row.worker}</span>
                </div>
              </td>
              <td className="p-4  ">{row.job}</td>
              <td className="p-4   ">{row.WorkingHours}</td>
              <td className="p-4   ">{row.phoneNumber}</td>
            
              <td className='p-4   '>
                {StatusRender(row.status)}
              </td>
              <td className=" flex justify-center p-4"> 
              <Link href='/Pages/workers/Edit'>
                  <img src="/images/icons/EditBlack.svg" alt="" />
              </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

