

"use client"
import { Dialog } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Map from './Map';

function Location({openLocation , setOpenLocation}) {
    const {t}= useTranslation();

      //Map
    const [openMap , setOpenMap] = useState(false);
      const [address, setAddress] = useState("");
      const handleClickOpen = () => setOpenMap(true);
      const handleClose = () => setOpenMap(false);
      const handleLocationSelect = async (lat, lng) => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
          );
          const data = await response.json();
          const formattedAddress = data.display_name || "Unknown address";
          setAddress(formattedAddress);
          setOpenMap(false);
        } catch (error) {
          console.error("Error fetching address:", error);
          setAddress(`Latitude: ${lat}, Longitude: ${lng}`); // fallback لو حصل خطأ
        }
      };
    
    
  
  return (
    <>
      <Dialog 
          open={openLocation} 
          onClose={() => setOpenLocation(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{ className: "ServicePage-dialog" }}
        >
        <button className='pt-8 px-6 pb-2 cursor-pointer' onClick={()=>setOpenLocation(false)}>
          <p className='border border-[#DDD] rounded-[100%] w-10 h-10 flex justify-center items-center  '>
            <img src="/images/icons/xx.svg" alt="" />
          </p>
        </button>


        <div className='flex flex-col gap-5 items-center justify-center mb-8'>
          {/* icon */}
          <div className='bg-[#EEF2F6] w-17.5 h-17.5 rounded-[100%] flex items-center justify-center '>
            <div className='bg-[#CDD5DF] w-12.5 h-12.5 rounded-[100%] flex items-center justify-center'>
              <img src="/images/icons/LocationBlack.svg" className="w-7.5 h-7.5"  />
            </div>
          </div>

          {/* title */}
          <p className='text-[var(--color-primary)] text-xl font-bold'>{t('Change address')}</p>

        </div>
        
          <form action="" className=' px-6 '>
            {/* Email */}
        <div className="flex flex-col relative">
  <label className="text-[#364152] text-base font-normal mb-3">
    {t("Address")}
  </label>

  <input
    readOnly
    placeholder={t("Choose the title")}
    value={address}
    
    className="h-15 p-3 pl-10 border border-[#C8C8C8] outline-[#C69815] rounded-[3px] placeholder:text-[#9A9A9A]"
  />

  {/* Icon inside textarea - left side */}
  <img
    src="/images/icons/location.svg"
    alt=""
    onClick={handleClickOpen}
    className="w-6 h-6 absolute left-3 top-[55px] cursor-pointer" 
  />
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

        <Map
        openMap={openMap}
        handleClose={handleClose}
        onSelectLocation={handleLocationSelect} 
      />
    </>
  )
}

export default Location
