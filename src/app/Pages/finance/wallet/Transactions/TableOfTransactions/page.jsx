"use client"
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Pagination from './Pagination';
import DeleteDialogPage from './DeleteDialog/page';
import { CircularProgress } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteTransactionThunk } from '@/redux/slice/Finance/FinanceSlice';

function TableOfTransactionsPage({WalletTransactionsData ,loading ,error, currentPage, totalPages, handlePageChange, activeTab, setActiveTab }) {
      const {t , i18n } = useTranslation()
    
    // Using passed activeTab state instead of local state active
    const active = activeTab;
    const setActive = setActiveTab;

    // Filter transactions: Using pre-filtered data from server
    const filteredTransactions = WalletTransactionsData;

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

    const dispatch = useDispatch();
    const [open , setOpen] = useState(false)
    const [selectedTransactionId, setSelectedTransactionId] = useState(null)

    const handleDelete = (transactionId) => {
      dispatch(deleteTransactionThunk(transactionId))
    }

    const formatDateTimeByLang = (dateString, lang) => {
      if (!dateString) return "";

      const date = new Date(dateString);
      const isArabic = lang === "ar";
      const datePart = new Intl.DateTimeFormat(
        isArabic ? "ar-EG" : "en-US",
        {
          day: "numeric",
          month: isArabic ? "long" : "short",
          year: "numeric",
        }
      ).format(date);
      const timePart = new Intl.DateTimeFormat(
        isArabic ? "ar-EG" : "en-US",
        {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }
      ).format(date);
      return isArabic
        ? `${datePart} : ${timePart}`
        : `${datePart} - ${timePart}`;
    };


  return (
    <>
    {/* title and filter */}
    <div className='flex justify-between'>
      <div className='flex items-center gap-2 '>
        <p className='w-12 h-12 flex justify-center items-center bg-[#EDE7FD] rounded-[3px]'>
          <img src="/images/icons/Transactions.svg" alt="" className='w-6 h-6' />
        </p>
        <div>
          <p className='text-[#364152] text-xl font-medium'>{t('Withdrawal transactions')}</p>
          <p className='text-[#697586] text-base font-light'>{t('Track withdrawals and easily check their status.')}</p>
        </div>

        
        
      </div>

      <div className="flex bg-[#EEF2F6] rounded-[3px] p-1.5 w-[361px] ">
          {/* مكتملة */}
          <button
            onClick={() => setActive("completed")}
            className={`px-2 py-3 rounded-[3px] text-sm font-medium transition w-full cursor-pointer
              ${
                active === "completed"
                  ? "bg-[#D1AD44] text-white shadow"
                  : "text-[#364152]"
              }`}
          >
            {t('Complete')}
          </button>

          {/* قيد المراجعة */}
          <button
            onClick={() => setActive("review")}
            className={`px-2 py-3 rounded-[3px] text-sm font-medium transition w-full cursor-pointer
              ${
                active === "review"
                  ? "bg-[#D1AD44] text-white shadow"
                  : "text-[#364152]"
              }`}
          >
          {t('Under review')}
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
            <th className="p-4 font-normal">{t("the date")}/{t("the time")}</th>
            <th className="p-4 font-normal">{t("Amount paid")}</th>
            <th className="p-4 font-normal">{t("Status")}</th>
            {active === "review" && <th className="p-4 font-normal ">{t("procedures")}</th>}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {loading?(
              <tr>
                <td colSpan={active === "review" ? 5 : 4} className="text-center py-10">
                  <CircularProgress size="3rem" color="warning" />
                </td>
              </tr>
          ):filteredTransactions?.length >0 ?(
            filteredTransactions.map((finance) => (
              <tr
                key={finance?.id}
                className="hover:bg-[#F9F5E8]  hover:border-0 hover:cursor-pointer  border-y border-[#E3E8EF] font-normal text-sm text-[#697586]"
              >
                <td className="p-4">{finance?.id}</td>
                <td className="p-4">{formatDateTimeByLang(finance?.created_at, i18n.language)}</td>
                <td className="p-4">{finance?.amount}</td>
                <td className='p-4'>
                  {StatusRender(finance?.status)}
                </td>
                {active === "review" && (
                  <td className='py-4 '>
                    <div onClick={()=>{
                      setSelectedTransactionId(finance?.id)
                      setOpen(true)
                    }}>
                      <img src="/images/icons/delete-darkRed.svg" alt="" />
                    </div>
                  </td>
                )}
              </tr>
          ))
          ):(
            <tr>
              <td colSpan={active === "review" ? 5 : 4} className="text-center py-10 text-[#697586]">
                {t('No transactions found for the selected status')}
              </td>
            </tr>
          )}

        </tbody>
      </table>


  
    </div>


    <Pagination 
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />

  
  <DeleteDialogPage 
    open={open}
    setOpen={setOpen}
    transactionId={selectedTransactionId}
    onDelete={handleDelete}
  />

    </>
  )
}

export default TableOfTransactionsPage