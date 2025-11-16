"use client"
import { Dialog } from '@mui/material';
import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import PhoneNumeber from './Dialogs/PhoneNumeber';

function EditInfoDataPage() {
  const { t } = useTranslation();

  // images
    const fileInputRef = useRef(null);
    const [imagePreview, setImagePreview] = useState(`/images/Avatar Image.svg`);
  
    const handleFileSelect = () => {
      fileInputRef.current?.click();
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const allowedTypes = ["image/webp", "image/png", "image/svg+xml", "image/jpeg"];
      if (!allowedTypes.includes(file.type)) {
        alert(t("Please select a valid image file (WEBP, PNG, SVG, JPG)"));
        return;
      }
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        alert(t("File size should not exceed 5MB"));
        return;
      }
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    };
  
    const handleDeleteFile = () => {
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    };
  
    //
    const [open, setOpen] = useState(false);

  return (
    <>
      {/* image */}
      <div className="  w-full p-8 mb-8 flex justify-center border border-[#CDD5DF] rounded-[3px]">
        <div className="py-4 px-6  w-[35%]">
          <div className="flex flex-col items-center w-full">
              <img
                src={imagePreview}
                alt="Company Logo"
                className="w-37.5 h-37.5 object-cover border border-[#EEF2F6] p-1 rounded-full"
              />

              <p className='mt-3 text-[#364152] text-xl font-medium'>أمير هارون </p>
              <div className='flex gap-2 mt-3.5 mb-6'>
                <span className='text-[#4B5565] text-lg font-normal'> (نجار) </span>
                <p className='flex gap-1'>
                  <span className=' flex items-center'>  
                    <img src="/images/icons/star.svg" className='w-4 h-4' alt="" />
                  </span>
                  <span className='text-[#FDB022] text-sm font-medium flex items-center'>4.5</span>
                </p>
              </div>

              <button
                type="button"
                className="w-full flex  justify-center gap-2 border text-[var(--color-primary)] font-medium py-2.5 px-4 rounded-[3px] cursor-pointer"
                onClick={handleFileSelect}
              >
                <span>{t("Image selection")}</span>  
                <span><img src="/images/upload.svg" alt="" /></span>
              </button>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".webp,.png,.svg,.jpg,.jpeg,image/webp,image/png,image/svg+xml"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>
      
      <section className='grid grid-cols-2 gap-6 '>
        
        {/* Mobile number */}
        <div className='border border-[#CDD5DF] flex justify-between py-3 px-4'>
          <div>
            <p className='text-[#697586] text-base font-normal mb-2'>{t('Mobile number')}</p>
            <p className='text-[#364152] text-base font-normal '>01255248459</p>
          </div>
          <div className='flex justify-center items-center'>
            <button onClick={() => setOpen(true)} className=' w-10 h-10 flex items-center justify-center border border-[var(--color-primary)] rounded-[3px] cursor-pointer'>
              <img src="/images/icons/EditYellow.svg"  alt="" />
            </button>
          </div>
        </div>

        {/* Email */}
        <div className='border border-[#CDD5DF] flex justify-between py-3 px-4'>
          <div>
            <p className='text-[#697586] text-base font-normal mb-2'>{t('Email')}</p>
            <p className='text-[#364152] text-base font-normal '>Exmple@gmail.com</p>
          </div>
          <div className='flex justify-center items-center'>
            <button className=' w-10 h-10 flex items-center justify-center border border-[var(--color-primary)] rounded-[3px] cursor-pointer'>
              <img src="/images/icons/EditYellow.svg" alt="" />
            </button>
          </div>
        </div>

        {/* password */}
        <div className='border border-[#CDD5DF] flex justify-between py-3 px-4'>
          <div>
            <p className='text-[#697586] text-base font-normal mb-2'>{t('password')}</p>
            <p className='text-[#364152] text-base font-normal '>************</p>
          </div>
          <div className='flex justify-center items-center'>
            <button className=' w-10 h-10 flex items-center justify-center border border-[var(--color-primary)] rounded-[3px] cursor-pointer'>
              <img src="/images/icons/EditYellow.svg" alt="" />
            </button>
          </div>
        </div>

        {/* Working hours */}
        <div className='border border-[#CDD5DF] flex justify-between py-3 px-4'>
          <div>
            <p className='text-[#697586] text-base font-normal mb-2'>{t('Working hours')}</p>
            <p className='text-[#364152] text-base font-normal '>03:00م  - 04:00ص</p>
          </div>
          <div className='flex justify-center items-center'>
            <button className=' w-10 h-10 flex items-center justify-center border border-[var(--color-primary)] rounded-[3px] cursor-pointer'>
              <img src="/images/icons/EditYellow.svg" alt="" />
            </button>
          </div>
        </div>

        {/* the address */}
        <div className='border border-[#CDD5DF] flex justify-between py-3 px-4'>
          <div>
            <p className='text-[#697586] text-base font-normal mb-2'>{t('the address')}</p>
            <p className='text-[#364152] text-base font-normal '>مصر الجديدة</p>
          </div>
          <div className='flex justify-center items-center'>
            <button className=' w-10 h-10 flex items-center justify-center border border-[var(--color-primary)] rounded-[3px] cursor-pointer'>
              <img src="/images/icons/location.svg" alt="" />
            </button>
          </div>
        </div>

        {/* Work areas */}
        <div className='border border-[#CDD5DF] flex justify-between py-3 px-4'>
          <div>
            <p className='text-[#697586] text-base font-normal mb-2'>{t('Work areas')}</p>
            <p className='text-[#364152] text-base font-normal '>مصر الجديدة - مدينة نصر</p>
          </div>
          <div className='flex justify-center items-center'>
            <button className=' w-10 h-10 flex items-center justify-center border border-[var(--color-primary)] rounded-[3px] cursor-pointer'>
              <img src="/images/icons/EditYellow.svg" alt="" />
            </button>
          </div>
        </div>

        {/* National Identity Information */}
        <div className='border border-[#CDD5DF] flex justify-between py-3 px-4'>
          <div>
            <p className='text-[#364152] text-base font-normal mb-2'>{t('National Identity Information')}</p>
          </div>
          <div className='flex justify-center items-center'>
              <button className=' w-10 h-10 flex items-center justify-center border border-[var(--color-primary)]  rounded-[3px] cursor-pointer'>
            <img src="/images/icons/arrowyellowOnly.svg" alt="" />
          </button>
          </div>
        
        </div>


      </section>



      <PhoneNumeber open={open} setOpen={setOpen}/>

    </>
  )
}

export default EditInfoDataPage