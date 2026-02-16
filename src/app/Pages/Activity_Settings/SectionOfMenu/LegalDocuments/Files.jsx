'use client'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import AddFile from './Dialog/AddFile'

function Files() {
  const {t} = useTranslation()
  const [openAddFile , setOpenAddFile] = useState(false)
  return (
    <>
      <div className='px-6 mb-6'>
        
        <div className='flex justify-between border border-[#CDD5DF] rounded-[3px] p-4 w-full'>
          
          <div className='flex gap-3 w-[50%]'>

            <div className='flex justify-center'>         
              <img src="/images/uploadd.svg" alt="" />
            </div>

            <div>
              <p className='text-[#344054] text-sm font-medium'>رخصة قيادة</p>
              <p className='text-[#697586] text-xs font-normal'>{t('Add the file and expiry date')}</p>
            </div>
            
          </div>

          <div
            onClick={()=>setOpenAddFile(true)}
            className='w-[50%] flex justify-end items-center cursor-pointer'
          >
            <img src="/images/icons/checkmark-circle-false_yellow.svg" alt="" />
          </div>

        </div>

      </div>


      <AddFile open={openAddFile} setOpen={setOpenAddFile}/>
    </>
  )
}

export default Files