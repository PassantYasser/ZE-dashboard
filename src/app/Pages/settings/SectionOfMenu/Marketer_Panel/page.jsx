"use client"
import React from 'react'
import NullStatusPage from './NullStatus/page';
import PendingStatusPage from './PendingStatus/page';
import RejectedStatusPage from './RejectedStatus/page';
import ActiveTrueStatusPage from './ActiveTrueStatus/page';
import ActiveFalseStatusPage from './ActiveFalseStatus/page';
import { useTranslation } from 'react-i18next';

function Marketer_PanelPage() {
    const {t}=useTranslation()
  
  const is_marketer = true ;
  const marketer = { status: null }; //pending , active , rejected , null 
  return (
    <>
    <div className='border border-[#E3E8EF]' >

      {/* // Header */}
      <div className=' px-6 py-4  flex gap-2 '>
          <p className='w-10 h-10 bg-[#EDE7FD] flex justify-center items-center rounded-[3px]'>
          <img src="/images/icons/user-searchBlue.svg" alt=""  className='w-5 h-5 '/>
        </p>
        <p className='flex items-center text-[#364152] text-base font-normal'>{t('Marketer Panel')}</p>
      </div>
      <hr className='border-0.5 border-[#E4E6EF]'/>

      {/* // Content */}
      <div className='p-6'>
        {
          (()=>{
            if(marketer?.status === null){                                             //marketer?.status=== null && is_marketer===false || marketer?.status=== null && is_marketer===true
              return <NullStatusPage is_marketer={is_marketer}/>
            }else if(marketer?.status=== 'pending'  && is_marketer===true ){
              return <PendingStatusPage/>
            }else if(marketer?.status=== 'rejected'  && is_marketer===true ){
              return <RejectedStatusPage/>
            }else if(marketer?.status=== 'active'  && is_marketer===true ){
              return <ActiveTrueStatusPage/>
            }else if(marketer?.status=== 'active'  && is_marketer===false ){
              return <ActiveFalseStatusPage/>
            }
          })  ()
        }
      </div>
    
    </div>
  
    </>
  )
}

export default Marketer_PanelPage