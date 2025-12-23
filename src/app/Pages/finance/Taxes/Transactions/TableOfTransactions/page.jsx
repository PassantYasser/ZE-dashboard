"use client"
import { CircularProgress } from '@mui/material';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

function TableOfTransactionsPage({TaxesTransactionsData , loading}) {
    const {t} = useTranslation()
    const [active, setActive] = useState("Collected");


  
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
            {loading?(
                <tr>
                  <td colSpan={7} className="text-center py-10">
                    <CircularProgress size="3rem" color="warning" />
                  </td>
                </tr>
            ):TaxesTransactionsData.length > 0 ?(
              TaxesTransactionsData.map((finance) => (
                <tr
                  key={finance?.service_payment_id}
                  className="hover:bg-[#F9F5E8]  hover:border-0 hover:cursor-pointer  border-y border-[#E3E8EF] font-normal text-sm text-[#697586]"
                >
                
                  <td className="p-4">{finance?.service_payment_id}</td>
                  <td className="p-4">{finance?.booking_id}#</td>
                  <td className="p-4">{finance?.created_at}</td>
                  <td className="p-4">{finance?.total_tax}</td>
                  <td className="p-4">{finance?.amount}</td>
                  <td className="p-4">
                    {Status(finance?.status)}
                  </td>
              
                </tr>
              ))
            ):(
              <tr>
                <td colSpan={7} className="text-center py-10">
                  <CircularProgress size="3rem" color="warning" />
                </td>
              </tr>
            )}
          
          </tbody>
        </table>


    
      </div>


    </>
  )
}

export default TableOfTransactionsPage