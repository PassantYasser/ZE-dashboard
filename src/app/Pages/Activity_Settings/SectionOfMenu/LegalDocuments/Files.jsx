'use client'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import AddFile from './Dialog/AddFile'

function Files() {
  const {t} = useTranslation()
  const [openAddFile , setOpenAddFile] = useState(false)

  const is_uploaded = true;
  const expiry_date ='15/8/2020';
  const status = 'rejected'    //pending //approved //rejected //expired

  const isExpired = (dateString) => {
    if (!dateString) return false;
    
    // Parse the date string
    const [day, month, year] = dateString.split('/').map(Number);
    const expiryDate = new Date(year, month - 1, day); 
    const currentDate = new Date();
    // Set time to midnight for accurate date comparison
    currentDate.setHours(0, 0, 0, 0);
    expiryDate.setHours(0, 0, 0, 0);  
    return expiryDate < currentDate;
  };

  const documentExpired = isExpired(expiry_date);


  let content;  
  {
    if(is_uploaded === false){
      content=(
        <p className='text-[#697586] text-xs font-normal'>{t('Add the file and expiry date')}</p>
      )
    }else if(is_uploaded === true && documentExpired === true &&   (status === 'pending' || status === 'approved')){
      content = (
        <p className='text-[#697586] text-xs font-normal'>{t('Expiry date')}{" "}{expiry_date} </p>
      )       
    }else if(is_uploaded === true && status === 'rejected'){
      content =(
        <p className='text-[#F04438] text-xs font-normal'>{t('The document was rejected. Please resubmit it.')}</p>
      ) 
    }else if(is_uploaded === true && documentExpired === false  && status === 'expired'){
      content =(
        <p className='text-[#F04438] text-xs font-normal'>{t('The document has expired; please add a newer copy.')}</p>
      )
    }
  }

  let imgLog;
  {
    if(is_uploaded === false){
      imgLog=(
        <>
          <img src="/images/uploadd.svg" className="w-8 h-10" />
        </>
      )
    }else if(is_uploaded === true && documentExpired === true &&   (status === 'pending' || status === 'approved')){
      imgLog = (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <img src="/images/filephoto.svg" className="w-8 h-10" />
          <span className="absolute bottom-1 right-2  text-white text-[10px] px-1 py-0.5 rounded-sm">
              pdf
          </span>
        </div>
      )       
    }else if(is_uploaded === true && status === 'rejected'){
      imgLog =(
        <div className="relative w-12 h-12 flex items-center justify-center">
          <img src="/images/filephoto.svg" className="w-8 h-10" />
          <span className="absolute bottom-1 right-2  text-white text-[10px] px-1 py-0.5 rounded-sm">
              pdf
          </span>
        </div>      ) 
    }else if(is_uploaded === true && documentExpired === false  && status === 'expired'){
      imgLog =(
        <div className="relative w-12 h-12 flex items-center justify-center">
          <img src="/images/filephoto.svg" className="w-8 h-10" />
          <span className="absolute bottom-1 right-2  text-white text-[10px] px-1 py-0.5 rounded-sm">
              pdf
          </span>
        </div>
      )
    }
  }


    let btn;  
  {
    if(is_uploaded === true && documentExpired === true &&   (status === 'pending' || status === 'approved')){
      btn=(
        <div
            className='w-[50%] flex justify-end items-center cursor-pointer'
          >
            <img src="/images/icons/true_green.svg" alt="" />
          </div>
      )
    }else (
      btn=(
          <div
            onClick={()=>setOpenAddFile(true)}
            className='w-[50%] flex justify-end items-center cursor-pointer'
          >
            <img src="/images/icons/checkmark-circle-false_yellow.svg" alt="" />
          </div>
      )
    )
  }

  return (
    <>
      <div className='px-6 mb-6'>
        
      
        <div className='flex justify-between border border-[#CDD5DF] rounded-[3px] p-4 w-full mb-4'>
          
          <div className='flex gap-3 w-[50%]'>

            <div>
              {imgLog}
            </div>

            <div>
              <p className='text-[#344054] text-sm font-medium'>رخصة قيادة</p>
              {content}
            </div>
            
          </div>


          {btn}

        </div>

      </div>


      <AddFile open={openAddFile} setOpen={setOpenAddFile}/>
    </>
  )
}

export default Files