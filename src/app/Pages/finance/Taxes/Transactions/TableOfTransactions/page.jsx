"use client"
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

function TableOfTransactionsPage() {
    const {t} = useTranslation()
    const [active, setActive] = useState("Collected");
    
    function createData( TransactionNumber, BookingNumber, dateTime, TaxDue, NetProfit,  Status ) {
      return { TransactionNumber, BookingNumber, dateTime, TaxDue,NetProfit,  Status };
    }

    const rows = [
      createData("12" , "6504" , "15 أبريل 2023 : 10 ص" , "40.00 جنية" , "50.00 جنية" , 'pending'),
      createData("13" , "6505", "16 أبريل 2023 : 11 ص", "55.00 جنية", "60.00 جنية", "pending"),
      createData("14" , "6506", "17 أبريل 2023 : 02 م", "30.00 جنية", "45.00 جنية", "exported"),
      createData("15" , "6507", "18 أبريل 2023 : 09 ص", "80.00 جنية", "90.00 جنية", "pending"),
      createData("16" , "6508", "19 أبريل 2023 : 01 م", "25.00 جنية", "35.00 جنية", "exported"),
      createData("17" , "6509", "20 أبريل 2023 : 04 م", "60.00 جنية", "75.00 جنية", "pending"),
      createData("18", "6510", "21 أبريل 2023 : 12 م", "45.00 جنية", "55.00 جنية", "exported"),

    ];

  
    const Status = (Status) => {
      switch (Status) {
        case "pending": // محصل  
          return (
            <div className=' bg-[#DCFAE6] border border-[#067647] text-[#067647] w-fit  h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex items-center  gap-1'>
              <img src="/images/icons/true_circle.svg" alt="" className=' w-4 h-4 mt-1' />
              <span className=''>{t('Collected')}</span>
            </div>
          </div>
          );
        case "exported": // غير محصل 
          return (
            <div className=' bg-[#FEE4E2] border border-[#F97066] text-[#F97066] w-fit  h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex items-center gap-1'>
              <img src="/images/icons/checkmark-circle-false.svg" alt="" className=' w-4 h-4 mt-1' />
              <span className=''>{t('Non-collected')}</span>
            </div>
          </div>
          );
  
      }
    };

  return (
    <>

      {/* title and filter */}
      <div className='flex justify-between'>
        <div className='flex items-center gap-2 '>
          <p className='w-12 h-12 flex justify-center items-center bg-[#EDE7FD] rounded-[3px]'>
            <img src="/images/icons/tax dueBlue.svg" alt="" className='w-6 h-6' />
          </p>
          <div>
            <p className='text-[#364152] text-xl font-medium'>{t('Estimated taxes on services')}</p>
          </div>

          
          
        </div>

        <div className="flex bg-[#EEF2F6] rounded-[3px] p-1.5 w-[361px] ">
            {/* Collected */}
            <button
              onClick={() => setActive("Collected")}
              className={`px-2 py-3 rounded-[3px] text-sm font-medium transition w-full cursor-pointer
                ${
                  active === "Collected"
                    ? "bg-[#D1AD44] text-white shadow"
                    : "text-[#364152]"
                }`}
            >
              {t('Collected')}
            </button>

            {/* Non-collected */}
            <button
              onClick={() => setActive("Non-collected")}
              className={`px-2 py-3 rounded-[3px] text-sm font-medium transition w-full cursor-pointer
                ${
                  active === "Non-collected"
                    ? "bg-[#D1AD44] text-white shadow"
                    : "text-[#364152]"
                }`}
            >
            {t('Non-collected')}
            </button>
        </div>

      </div>


      {/* table */}
      <div className="mt-8 mb-5 rounded-[3px] border border-[#E3E8EF] overflow-x-auto">
        <table className="min-w-[1000px] lg1:w-full border border-[#E3E8EF] text-sm text-right ">
          {/* Table Head */}
          <thead className="bg-[#F8FAFC] border-b border-[#E3E8EF] text-[#364152] sticky top-0 z-10">
            <tr>
              <th className="p-4 font-normal">{t("Transaction number")}</th>
              <th className="p-4 font-normal">{t("Booking number")}</th>
              <th className="p-4 font-normal">{t("the date")}/{t("the time")}</th>
              <th className="p-4 font-normal">{t("tax due")} 14%</th>
              <th className="p-4 font-normal">{t("Net Profit")}</th>
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
                <td className="p-4">{row.BookingNumber}#</td>
                <td className="p-4">{row.dateTime}</td>
                <td className="p-4">{row.TaxDue}</td>
                <td className="p-4">{row.NetProfit}</td>
                <td className="p-4">
                  {Status(row.Status)}
                </td>
            
              </tr>
            ))}
          </tbody>
        </table>


    
      </div>


    </>
  )
}

export default TableOfTransactionsPage