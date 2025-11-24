"use client"
import { Dialog } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import dayjs from "dayjs";

function NationalIdentityInformation({openNationalIdentityInformation , setOpenNationalIdentityInformation}) {
    const {t}= useTranslation();
  
  // التاريخ النهائي
  const id_end_date = '2025/11/24';

  const checkEndDate = (date) => {
    const today = dayjs();
    const endDate = dayjs(date);
    const diffInDays = endDate.diff(today, "day");   //   [تاريخ الانتهاء-تاريخ اليوم] 

    if(diffInDays <= 0) {
      return {status: "expired" , message: "يجب تحديث هذا الملف بشكل فوري لتجنب ايقاف الحساب", color: "#F04438", icon:"/images/icons/red warning.svg" };
    } else if (diffInDays < 30) {
      return {status: "warning" , message:"يلزم تحديث صورة البطاقة قبل موعد انتهائه", color:"#DC6803", icon:'/images/icons/orange warning.svg' , datee:date };
    }else if(id_end_date === null){
      return {status: "waiting" , message: "لم يتم مراجعة هذا الملف بعد", color: "#697586" };
    }else{
      return {status: "done" , message:""};
    }


  };

  const { message, color , icon  ,datee ,status} = checkEndDate(id_end_date);
const renderButton = (status) => {
  switch(status) {
    case "expired":
      return (
        <button className="p-2" onClick={() => frontInputRef.current.click()}>
          <img src="/images/icons/EditYellow.svg" />
        </button>
      );

    case "warning":
      return (
        <button className="p-2" onClick={() => frontInputRef.current.click()}>
          <img src="/images/icons/EditYellow.svg" />
        </button>
      );

    case "expiredToday":
      return (
        <button className="p-2" onClick={() => frontInputRef.current.click()}>
          <img src="/images/icons/EditYellow.svg" />
        </button>
      );

    case "waiting":
      return (
        <img src='/images/icons/remove-circle.svg' />
        
      );

    case "done":
      return (
        
          <img src="/images/icons/_Checkbox base.svg" />
      );
  }
};


  // خلي كل واحدة قائمة بدل object واحد
  const [frontFiles, setFrontFiles] = useState([
    { name: "بطاقة الشخصية الأمامية JPG", size: "200 كيلوبايت - 100% تم الرفع", type: "PNG" }
  ]);
  const [backFiles, setBackFiles] = useState([
    { name: "بطاقة الشخصية خلفية JPG", size: "200 كيلوبايت - 100% تم الرفع", type: "PNG" }
  ]);

  const frontInputRef = useRef(null);
  const backInputRef = useRef(null);

  const handleFileChange = (e, setFiles) => {
    const file = e.target.files[0];
    if (file) {
      const extension = file.name.split('.').pop().toUpperCase();
      const sizeKB = Math.round(file.size / 1024);
      // ضيف الملف الجديد للملفات القديمة
      setFiles(prev => [
        ...prev,
        { name: file.name, size: `${sizeKB} كيلوبايت`, type: extension }
      ]);
    }
  };


  return (
    <>
      <Dialog 
          open={openNationalIdentityInformation} 
          onClose={() => setOpenNationalIdentityInformation(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{ className: "ServicePage-dialog" }}
        >
        {/* close btn */}
        <button className='pt-8 px-6 pb-2 cursor-pointer' onClick={()=>setOpenNationalIdentityInformation(false)}>
          <p className='border border-[#DDD] rounded-[100%] w-10 h-10 flex justify-center items-center  '>
            <img src="/images/icons/xx.svg" alt="" />
          </p>
        </button>

        {/* head */}
        <div className='flex flex-col gap-5 items-center justify-center mb-8'>
          {/* icon */}
          <div className='bg-[#EEF2F6] w-17.5 h-17.5 rounded-[100%] flex items-center justify-center '>
            <div className='bg-[#CDD5DF] w-12.5 h-12.5 rounded-[100%] flex items-center justify-center'>
              <img src="/images/icons/National Identity Information.svg" className="w-7.5 h-7.5"  />
            </div>
          </div>

          {/* title */}
          <p className='text-[var(--color-primary)] text-xl font-bold'>{t('National Identity Information')}</p>

        </div>
        
        <form action="" className=' px-6 '>
          {/* National Identity Information */}
          <div className="flex flex-col w-full mb-6">
            <label className="text-[#364152] text-base font-normal">{t('National ID number')}</label>
            <input 
              type="text" 
              placeholder={t('Enter your national ID number')}
              className="h-15 p-3 rounded-[3px] border border-[#C8C8C8] shadow-sm outline-none mt-3 placeholder:text-[#9A9A9A] placeholder:text-sm placeholder:font-normal" />
          </div>
          
          {/* Front & Back  national ID card photo */}
          <div className="flex flex-col w-full gap-2">
            <label className="text-[#364152] text-base font-normal">{t('Personal card')}</label>

              <div className="space-y-4">
                  {/* Front */}
                  {frontFiles.map((file, index) => (
                    <div key={index} className="flex items-center p-4 border border-[#CDD5DF] rounded-[3px] gap-4 bg-white shadow-sm">
                      {/* <div className="flex-shrink-0">
                        <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-md">
                          <span className="text-purple-600 font-bold">{file.type}</span>
                        </div>
                      </div> */}
                      <div className="relative w-12 h-12 flex items-center justify-center">
                        <img src="/images/filephoto.svg" className="w-12 h-12" />
                        <span className="absolute bottom-0 right-2  text-white text-[10px] px-1 py-0.5 rounded-sm">
                          PNG
                        </span>
                      </div>

                      <div className="flex-1">
                        <p className="text-gray-800 font-semibold">{file.name}</p>
                        <p className="text-gray-500 text-sm">{file.size}</p>
                      </div>
                      {/* <button className="p-2 cursor-pointer" onClick={() => frontInputRef.current.click()}>
                        <img src="/images/icons/EditYellow.svg" alt="" />
                      </button> */}
                      {renderButton(status)}

                    </div>
                  ))}

                  <input
                    type="file"
                    ref={frontInputRef}
                    className="hidden"
                    onChange={(e) => handleFileChange(e, setFrontFiles)}
                  />

                  {/* Back */}
                  {backFiles.map((file, index) => (
                    <div key={index} className="flex items-center p-4 border border-[#CDD5DF] rounded-[3px] gap-4 bg-white shadow-sm">
                      <div className="relative w-12 h-12 flex items-center justify-center">
                        <img src="/images/filephoto.svg" className="w-12 h-12" />
                        <span className="absolute bottom-0 right-2  text-white text-[10px] px-1 py-0.5 rounded-sm">
                          PNG
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-semibold">{file.name}</p>
                        <p className="text-gray-500 text-sm">{file.size}</p>
                      </div>
                      {renderButton(status)}
                    </div>
                  ))}

                  <input
                    type="file"
                    ref={backInputRef}
                    className="hidden"
                    onChange={(e) => handleFileChange(e, setBackFiles)}
                  />

                  </div>


              {/* //id_end_date */}
              <div style={{ color }} className=" flex gap-2">
                <img src={icon} alt="" />
                <p className='text-sm font-normal'>{message}  {datee ? `(${dayjs(datee).format("YYYY-MM-DD")})` : ""}</p>
              </div>

            </div>





          <div className='my-6 flex gap-3'>
            <button className='w-full h-15 bg-[var(--color-primary)] text-[#fff] cursor-pointer rounded-[3px] flex justify-center items-center '>
              {t('save')}
            </button>
            <button className='w-full h-15 border border-[var(--color-primary)] text-[var(--color-primary)] cursor-pointer rounded-[3px] flex justify-center items-center '>
              {t('cancel')}
            </button>
          </div>
        </form>
        
        </Dialog>

    </>
  )
}

export default NationalIdentityInformation
