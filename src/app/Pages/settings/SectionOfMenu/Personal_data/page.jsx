import React, { use, useState } from 'react'
import Header from './Header'
import { useTranslation } from 'react-i18next'
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import EmailDialogPage from './Dialogs/EmailDialog/page';
import PhoneDialogPage from './Dialogs/PhoneDialog/page';
import OtpPhonePage from './Dialogs/OtpPhone/page';
import OtpEmailPage from './Dialogs/OtpEmail/page';


function Personal_dataPage({ userData }) {
  const {t} = useTranslation()

  const [openEmail , setOpenEmail] = useState(false);
  const [openPhone , setOpenPhone] = useState(false);
  const [openOtpPhone , setOpenOtpPhone] = useState(false);
  const [openOtpEmail , setOpenOtpEmail] = useState(false);
  
  if(!userData) return <div>Loading...</div>


  return (  
    <>
    <div className="border border-[#E3E8EF] mb-8">
      <Header/>
      <div className='p-6'>
          <div className='grid grid-cols-3 gap-3 border border-[#E3E8EF] p-4'>
          <div>
            <p className='text-[#697586] text-base font-normal mb-1'>{t('First Name')}</p>
            <p className='text-[#364152] text-sm font-normal'>{userData?.firstname}</p>
          </div>

          <div>
            <p className='text-[#697586] text-base font-normal mb-1'>{t('Last Name')}/{t('Family Name')}</p>
            <p className='text-[#364152] text-sm font-normal'>{userData?.lastname}</p>
          </div>

          

          <div>
            <p className='text-[#697586] text-base font-normal mb-1'>{t('National ID number')}</p>
            <p className='text-[#364152] text-sm font-normal'>{userData?.national_id}</p>
          </div>

          <div>
            <p className='text-[#697586] text-base font-normal mb-1'>{t('Gender')}</p>
            <p className='text-[#364152] text-sm font-normal'>{userData?.gender}</p>
          </div>

          <div>
            <p className='text-[#697586] text-base font-normal mb-1'>{t('Nationality')}</p>
            <p className='text-[#364152] text-sm font-normal'>{userData?.nationality}</p>
          </div>
        </div>
      </div>
    

      {/* email */}
      <div className='px-6 '>
        <p className='text-[#697586] text-base font-normal mb-1.5'>{t('Email')}</p>
        <div className='flex justify-between '>
          <input 
            type="text" 
            value={userData?.email}
            className='border border-[#E3E8EF] w-[90%] h-14 outline-none shadow-sm py-2.5 px-3 text-[#364152]'
            readOnly 
          />
          <div className='flex items-center'  >
            <button 
              onClick={()=>setOpenEmail(true)} 
              className=' w-14.5 h-14 flex items-center justify-center border border-[var(--color-primary)] rounded-[3px] cursor-pointer'
            >
              <img src="/images/icons/EditYellow.svg"  alt="" />
            </button>
          </div>
          
        </div>
        
      </div>


      {/* phone number */}
      <div className='p-6'>
        <p className='text-[#697586] text-base font-normal mb-1.5'>{t('phone number')}</p>
        <div className='flex justify-between '>
          <PhoneInput
            value={`${userData?.country_code}${userData?.phone}`}
            placeholder="000000000"
            containerClass="!w-[90%]"
            inputClass="!w-full !h-14 !border !border-[#E3E8EF] !rounded-[3px] !pl-24 !text-left !shadow-sm !text-[#364152] placeholder-[#9A9A9A] focus:border-[#C69815] outline-none"
            buttonClass="!absolute !left-0 !top-0 !h-full !px-3 !flex !items-center !gap-2 !bg-transparent !border-r-0"
            dropdownClass="!absolute !left-0 !top-full !mt-1 !z-50  !border !border-[#E3E8EF] !rounded-md !shadow-sm"    
          />
          <div className='flex items-center'  >
            <button 
              onClick={()=>setOpenPhone(true)}
              className=' w-14.5 h-14 flex items-center justify-center border border-[var(--color-primary)] rounded-[3px] cursor-pointer'
            >
              <img src="/images/icons/EditYellow.svg"  alt="" />
            </button>
          </div>
          
        </div>
        
      </div>
      
      {/* btn
      <div className='px-6 mb-6'>
        <button className="bg-[var(--color-primary)] h-15 w-62.5 text-[#fff] text-base font-medium rounded-[3px]">
          {t('Save changes')}
        </button>
      </div> */}
        
      </div>

    <EmailDialogPage openEmail={openEmail}  setOpenEmail={setOpenEmail} setOpenOtpEmail={setOpenOtpEmail}/>
    <PhoneDialogPage openPhone={openPhone}  setOpenPhone={setOpenPhone} setOpenOtpPhone={setOpenOtpPhone}/>
    <OtpPhonePage openOtpPhone={openOtpPhone} setOpenOtpPhone={setOpenOtpPhone}/>
    <OtpEmailPage openOtpEmail={openOtpEmail} setOpenOtpEmail={setOpenOtpEmail} setOpenEmail={setOpenEmail}/>


    </>
  )
}

export default Personal_dataPage