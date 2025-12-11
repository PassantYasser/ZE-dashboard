import { getDesignationsThunk } from '@/redux/slice/Workers/WorkersSlice';
import { Dialog } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

function Job({openJob ,setOpenJob}) {
    const {t}= useTranslation();

      //api
      const dispatch = useDispatch()
      const{getDesignations} = useSelector(state=>state.workers)
      useEffect(()=>{
        dispatch(getDesignationsThunk())
      },[dispatch])


      //job
        const [open1, setOpen1] = useState(false);
        const [selected1, setSelected1] = useState("");
        const [searchValue1, setSearchValue1] = useState("");
        const dropdownRef1 = useRef(null);
        const optionJob=getDesignations || []
  
  return (
    <>
      <Dialog 
        open={openJob} 
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ className: "ServicePage-dialog" }}
      >
        <button className='pt-8 px-6 pb-2 cursor-pointer' onClick={()=>setOpenJob(false)}>
          <p className='border border-[#DDD] rounded-[100%] w-10 h-10 flex justify-center items-center  '>
            <img src="/images/icons/xx.svg" alt="" />
          </p>
        </button>

        <div className='flex flex-col gap-5 items-center justify-center mb-8'>
          {/* icon */}
          <div className='bg-[#EEF2F6] w-17.5 h-17.5 rounded-[100%] flex items-center justify-center '>
            <div className='bg-[#CDD5DF] w-12.5 h-12.5 rounded-[100%] flex items-center justify-center'>
              <img src="/images/icons/labor_black.svg" className="w-7.5 h-7.5"  />
            </div>
          </div>

          {/* title */}
          <p className='text-[var(--color-primary)] text-xl font-bold'>{t('job change')}</p>

        </div>


          {/* job */}
        <div className="flex flex-col p-6">
            <label className="text-[#364152] text-base font-normal mb-3">
              {t("job")}
            </label>
      
            <div className="relative w-full" ref={dropdownRef1}>
              <div
                className="relative flex items-center border border-[#C8C8C8] rounded-[3px] cursor-pointer"
                onClick={() => setOpen1(!open1)}
              >
                {/* Input */}
                <input
                  type="text"
                  placeholder={t("Choose the job")}
                  value={searchValue1 || selected1}
                  onChange={(e) => {
                    setSearchValue1(e.target.value);
                    setOpen1(true);
                    setSelected1(null);
                  }}
                  className="h-15 p-3 w-full text-[#364152] focus:outline-none"
                />
      
                {/* 🔽 Dropdown arrow */}
                <span className="absolute left-3 cursor-pointer">
                  {open1 ? (
                    <img src="/images/icons/ArrowUp.svg" alt="up" />
                  ) : (
                    <img src="/images/icons/ArrowDown.svg" alt="down" />
                  )}
                </span>
              </div>
      
              {/* 🔽 Dropdown options */}
              {open1 && (
                <ul className="absolute left-0 right-0 border border-[#C8C8C8] bg-white rounded-[3px] shadow-md z-10 max-h-48 overflow-y-auto">
                  {optionJob
                    .filter((option) =>
                      option?.name
                        ?.toLowerCase()
                        .includes(searchValue1.toLowerCase())
                    )
                    .map((option, index) => (
                      <li
                        key={option.id}
                        onClick={() => {
                          setSelected1(option?.name);
                          setSearchValue1("");
                          setOpen1(false);
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


          <div className='px-6 pb-6 flex gap-3'>
            <button className='w-full h-15 bg-[var(--color-primary)] text-[#fff] cursor-pointer rounded-[3px] flex justify-center items-center '>
              {t('save')}
            </button>
            <button className='w-full h-15 border border-[var(--color-primary)] text-[var(--color-primary)] cursor-pointer rounded-[3px] flex justify-center items-center '>
              {t('cancel')}
            </button>
          </div>

      </Dialog>
    </>
  )
}

export default Job