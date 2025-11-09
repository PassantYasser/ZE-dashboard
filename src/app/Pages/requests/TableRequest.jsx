
"use client";
import { fontWeight } from "@mui/system";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function createData(orderNumber, customerName, service, dateTime, worker, workerImg, status, price) {
  return { orderNumber, customerName, service, dateTime, worker, workerImg, status, price };
}

const rows = [
  createData("#001", "Aly Salem", "AC Repair", "2025-10-12 / 10:30 AM", "Omar Khaled", "https://randomuser.me/api/portraits/men/32.jpg", "Complete", "$5000"),
  createData("#002", "Mona Yasser", "Plumbing", "2025-10-13 / 02:15 PM", "Sara Adel", "https://randomuser.me/api/portraits/women/45.jpg", "Pending", "$30"),
  createData("#003", "Khaled Mahmoud", "Electric Fix", "2025-10-13 / 05:00 PM", "Ali Hassan", "https://randomuser.me/api/portraits/men/15.jpg", "in_progress", "$40"),
  createData("#004", "Fatma Hassan", "Cleaning", "2025-10-14 / 09:00 AM", "Noor Samir", "https://randomuser.me/api/portraits/women/22.jpg", "rejected", "$20"),
    createData("#0011", "Aly Salem", "AC Repair", "2025-10-12 / 10:30 AM", "Omar Khaled", "https://randomuser.me/api/portraits/men/32.jpg", "Complete", "$5000"),
  createData("#0021", "Mona Yasser", "Plumbing", "2025-10-13 / 02:15 PM", "Sara Adel", "https://randomuser.me/api/portraits/women/45.jpg", "Pending", "$30"),
  createData("#0031", "Khaled Mahmoud", "Electric Fix", "2025-10-13 / 05:00 PM", "Ali Hassan", "https://randomuser.me/api/portraits/men/15.jpg", "in_progress", "$40"),
  createData("#0041", "Fatma Hassan", "Cleaning", "2025-10-14 / 09:00 AM", "Noor Samir", "https://randomuser.me/api/portraits/women/22.jpg", "rejected", "$20"),

];


export default function TableRequest() {
  const { t } = useTranslation();

  
    const StatusRender = (status) => {
      switch (status) {
        case "Complete":
          return (
            <div className=' bg-[#DCFAE6] border border-[#067647] text-[#067647] w-fit  h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/Active Status.svg" alt="" className=' mt-1' />
              <span className=''>{t('Complete')}</span>
            </div>
          </div>
          );
  
        case "Pending":
          return (
            <div className=' bg-[#FFFAEB] border  border-[#F79009] text-[#DC6803] w-fit h-9.5 rounded-3xl'>
              <div className='py-1.5 px-3 flex gap-1'>
                <img src="/images/icons/pending Status.svg" alt=""className=' mt-1' />
                <span className=''>{t('pending')}</span>
              </div>
            </div>
          );
  
          case "in_progress":
          return (
            <div className=' bg-[#EFF4FF] border border-[#518BFF] text-[#004EEB] w-fit  h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/inactive Status.svg" alt="" className=' mt-1' />
              <span className=''>{t('in_progress')}</span>
            </div>
          </div>
          );
  
          case "stopped":
          return (
            <div className=' bg-[#FEE4E2] border border-[#F97066] text-[#D92D20] w-fit h-9.5 rounded-3xl'>
              <div className='py-1.5 px-3 flex gap-1'>
                <img src="/images/icons/stopped Status.svg" alt="" className=' mt-1' />
                <span className=''>{t('stopped')}</span>
              </div>
            </div>
          );
  
          case "rejected":
          return (
            <div className=' bg-[#FEE4E2] border border-[#F97066] text-[#D92D20] w-fit h-9.5 rounded-3xl'>
              <div className='py-1.5 px-3 flex gap-1'>
                <img src="/images/icons/refused Status.svg" alt="" className=' mt-1'/>
                <span className=''>{t('rejected')}</span>
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
            <th className="p-4 font-normal">{t("order number")}</th>
            <th className="p-4 font-normal">{t("Customer name")}</th>
            <th className="p-4 font-normal">{t("Service")}</th>
            <th className="p-4 font-normal">{t("the date")}/{t("the time")}</th>
            <th className="p-4 font-normal">{t("The worker")}</th>
            <th className="p-4 font-normal">{t("Status")}</th>
            <th className="p-4 font-normal">{t("the price")}</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.orderNumber}
              className="hover:bg-[#F9F5E8]  hover:border-0 hover:cursor-pointer  border-y border-[#E3E8EF] font-normal text-sm text-[#697586]"
            >
            
              <td className="p-4  ">{row.orderNumber}</td>
              <td className="p-4  ">{row.customerName}</td>
              <td className="p-4   ">{row.service}</td>
              <td className="p-4   ">{row.dateTime}</td>
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
              <td className='p-4   '>
                {StatusRender(row.status)}
              </td>
              <td className="p-4 ">{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

