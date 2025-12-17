"use client"
import { Dialog } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateWorkerThunk } from '@/redux/slice/Workers/WorkersSlice';

function Email({openEmail , setOpenEmail ,worker}) {
    const {t}= useTranslation();
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.workers);
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('id', worker?.id);
      formData.append('email', email);
      
      const result = await dispatch(UpdateWorkerThunk(formData));
      if (UpdateWorkerThunk.fulfilled.match(result)) {
        setOpenEmail(false);
      }
    };

  useEffect(() => {
  if (worker?.email) {
    setEmail(worker.email);
  }
}, [worker]);


  return (
    <>
      <Dialog 
          open={openEmail} 
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{ className: "ServicePage-dialog" }}
        >
        <button className='pt-8 px-6 pb-2 cursor-pointer' onClick={()=>setOpenEmail(false)}>
          <p className='border border-[#DDD] rounded-[100%] w-10 h-10 flex justify-center items-center  '>
            <img src="/images/icons/xx.svg" alt="" />
          </p>
        </button>


        <div className='flex flex-col gap-5 items-center justify-center mb-8'>
          {/* icon */}
          <div className='bg-[#EEF2F6] w-17.5 h-17.5 rounded-[100%] flex items-center justify-center '>
            <div className='bg-[#CDD5DF] w-12.5 h-12.5 rounded-[100%] flex items-center justify-center'>
              <img src="/images/icons/emailotp.svg" className="w-7.5 h-7.5"  />
            </div>
          </div>

          {/* title */}
          <p className='text-[var(--color-primary)] text-xl font-bold'>{t('Change email')}</p>

        </div>
        
          <div className=' px-6 '>
            {/* Email */}
            <div className="flex flex-col">
              <label className="text-[#364152] text-base font-normal">{t('New email')}</label>
              <input 
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('Enter your new email address')}
                className="h-15 p-3 rounded-[3px] border border-[#C8C8C8] shadow-sm outline-none mt-3 placeholder:text-[#9A9A9A] placeholder:text-sm placeholder:font-normal" />
            </div>

            <div className='my-6 flex gap-3'>
              <button 
                onClick={handleSubmit}
                disabled={loading}
                className='w-full h-15 bg-[var(--color-primary)] text-[#fff] cursor-pointer rounded-[3px] flex justify-center items-center disabled:opacity-50'>
                {loading ? t('loading...') : t('save')}
              </button>
              <button  onClick={()=>{setOpenEmail(false)}}  className='w-full h-15 border border-[var(--color-primary)] text-[var(--color-primary)] cursor-pointer rounded-[3px] flex justify-center items-center '>
                {t('cancel')}
              </button>
            </div>
          </div>
        
        </Dialog>

    </>
  )
}

export default Email
