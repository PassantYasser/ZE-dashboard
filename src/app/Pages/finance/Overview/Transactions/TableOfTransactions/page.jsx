
"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function createData( TransactionNumber, ServiceName, NameOfTheWorker, CustomerName, dateTime, AmountPaid, paymentMethod, Status ) {
  return { TransactionNumber, ServiceName, NameOfTheWorker, CustomerName, dateTime, AmountPaid, paymentMethod, Status };
}

const rows = [
  createData("11", "سباكة تأسيس", "عبدلله السعيد", "ناصر ماهر", "15 أبريل 2023 : 10 ص", "40.00 جنية", "card", "pending"),
  createData("12", "كهرباء منزلية", "أحمد علي", "محمد فتحي", "20 أبريل 2023 : 12 م", "75.00 جنية", "cash", "paid"),
  createData("13", "تنظيف تكييف", "محمود رأفت", "علي صبري", "1 مايو 2023 : 08 ص", "120.00 جنية", "card", "refunded"),
  createData("14", "نجارة أبواب", "أيمن عادل", "سيد يوسف", "10 مايو 2023 : 04 م", "200.00 جنية", "cash", "pending"),
  createData("15", "دهانات غرفة", "حسن سامي", "طارق عبدالمجيد", "12 مايو 2023 : 11 ص", "350.00 جنية", "card", "refunded"),

];


export default function TableOfTransactionsPage() {

  const { t } = useTranslation();



  const StatusRender = (Status) => {
    switch (Status) {
      case "paid": // محصل 
        return (
          <div className=' bg-[#DCFAE6] border border-[#067647] text-[#067647] w-fit  h-9.5 rounded-3xl'>
          <div className='py-1.5 px-3 flex items-center  gap-1'>
            <img src="/images/icons/Active Status.svg" alt="" className=' mt-1' />
            <span className=''>{t('paid')}</span>
          </div>
        </div>
        );
      case "refunded":// مسترد
        return (
          <div className=' bg-[#EDE7FD] border border-[#713DEC] text-[#713DEC] w-fit  h-9.5 rounded-3xl'>
          <div className='py-1.5 px-3 flex items-center gap-1'>
            <img src="/images/icons/refunded.svg" alt="" className=' mt-1' />
            <span className=''>{t('refunded')}</span>
          </div>
        </div>
        );

      case "pending": // مغلق
        return (
          <div className=' bg-[#FEE4E2] border border-[#F97066] text-[#D92D20] w-fit h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex items-center gap-1'>
              <img src="/images/icons/refused Status.svg" alt="" className=' mt-1'/>
              <span className=''>{t('pending_finance')}</span>
            </div>
          </div>
        );
    }
  };

  const paymentMethod = (paymentMethod) => {
    switch (paymentMethod) {
      case "cash": // نقدي  
        return (
          <div className=' bg-[#F9F5E8] border border-[var(--color-primary)] text-[var(--color-primary)] w-fit  h-9.5 rounded-3xl'>
          <div className='py-1.5 px-3 flex items-center  gap-1'>
            <img src="/images/icons/cash_yellow.svg" alt="" className=' mt-1' />
            <span className=''>{t('cash_')}</span>
          </div>
        </div>
        );
      case "card": // بطاقة 
        return (
          <div className=' bg-[#F8FAFC] border border-[#697586] text-[#697586] w-fit  h-9.5 rounded-3xl'>
          <div className='py-1.5 px-3 flex items-center gap-1'>
            <img src="/images/icons/credit-card.svg" alt="" className=' mt-1' />
            <span className=''>{t('card')}</span>
          </div>
        </div>
        );

    }
  };

  return (
    <div className="mt-8 mb-5 rounded-[3px] border border-[#E3E8EF] overflow-x-auto">
      <table className="min-w-[1000px] lg1:w-full border border-[#E3E8EF] text-sm text-right ">
        {/* Table Head */}
        <thead className="bg-[#F8FAFC] border-b border-[#E3E8EF] text-[#364152] sticky top-0 z-10">
          <tr>
            <th className="p-4 font-normal">{t("Transaction number")}</th>
            <th className="p-4 font-normal">{t("Service name")}</th>
            <th className="p-4 font-normal">{t("Name of the worker")}</th>
            <th className="p-4 font-normal">{t("Customer name")}</th>
            <th className="p-4 font-normal">{t("the date")}/{t("the time")}</th>
            <th className="p-4 font-normal">{t("Amount paid")}</th>
            <th className="p-4 font-normal">{t("payment method")}</th>
            <th className="p-4 font-normal">{t("Status")}</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.TransactionNumber}
            
              className="hover:bg-[#F9F5E8]  hover:border-0 hover:cursor-pointer  border-y border-[#E3E8EF] font-normal text-sm text-[#697586]"
            >
            
              <td className="p-4">{row.TransactionNumber}</td>
              <td className="p-4">{row.ServiceName}</td>
              <td className="p-4">{row.NameOfTheWorker}</td>
              <td className="p-4">{row.CustomerName}</td>
              <td className="p-4">{row.dateTime}</td>
              <td className="p-4">{row.AmountPaid}</td>
              <td className="p-4">
                {paymentMethod(row.paymentMethod)}
              </td>
              <td className='p-4'>
                {StatusRender(row.Status)}
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>


      
    </div>



  );
}

