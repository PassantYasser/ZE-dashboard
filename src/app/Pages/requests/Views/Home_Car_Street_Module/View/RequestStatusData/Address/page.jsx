"use client";
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

function AddressPage({bookingDetails}) {
  const [open, setOpen] = useState(false);

  const {t}= useTranslation();
  const userData = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null
  const current_module_key = userData?.current_module_key
  const AddressDetails = bookingDetails?.user_address

  return (
    <>
    {/*   */}
    {/* {(AddressDetails || bookingDetails?.address)  && ( */}
      <div className="w-full p-3 shadow-[0_0_4px_0_rgba(0,0,0,0.3)] rounded-[3px] overflow-hidden bg-white select-none mt-6">
        {/* Header */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between   text-right"
        >
          <span className="text-[#0F022E] text-base font-normal flex items-center gap-2">
            <img src="/images/icons/location2.svg" alt="" />
            {t('Address details')}
          </span>

          <div
            className={`transition-transform duration-300 cursor-pointer ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            <img src="/images/icons/ArrowDown.svg" alt="" />
          </div>
        </button>

        {/* Content  (home& car) */}
        {open && (current_module_key === 'home_services' || current_module_key === 'car_services') && (
          <div className="px-3 mt-3  text-right ">

            {AddressDetails?.address_line && (
              <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] pt-2 pb-4">
                <span className="text-[#575757] text-sm font-normal flex gap-2"> 
                  <img src='/images/icons/google-map-icon.svg'/>
                  <span>{t('the address')} :</span>
                </span>
                <span className="text-[#0F022E] text-sm font-medium">{AddressDetails?.address_line}</span>
              </div>
            )}

            {AddressDetails?.apt_no && (
              <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
                <span className="text-[#575757]  font-normal">{t('Apartment number')}:</span>
                <span className="text-[#0F022E]  font-medium">{AddressDetails?.apt_no}</span>
              </div>
            )}

            {AddressDetails?.floor && (
              <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
                <span className="text-[#575757]  font-normal">{t('The role')} :</span>
                <span className="text-[#0F022E]  font-medium">{AddressDetails?.floor}</span>
              </div>
            )}

            {AddressDetails?.building_no && (
              <div className="flex gap-0.5 text-sm border-b border-[#E3E8EF] py-4">
                <span className="text-[#575757]  font-normal">{t('Building name')} :</span>
                <span className="text-[#0F022E]  font-medium"> {AddressDetails?.building_no}</span>
              </div>
            )}

            {AddressDetails?.street_name && (
              <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
                <span className="text-[#575757]  font-normal">{t('Street name')} :</span>
                <span className="text-[#0F022E]  font-medium">{AddressDetails?.street_name}</span>
              </div>
            )}

            {AddressDetails?.po_box && (
              <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
                <span className="text-[#575757]  font-normal">{t('P.O. Box number')} : </span>
                <span className="text-[#0F022E]  font-medium">{AddressDetails?.po_box}</span>
              </div>
            )}

            {AddressDetails?.nearest_sign && (
              <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
                <span className="text-[#575757]  font-normal">{t('Nearest landmark')} :</span>
                <span className="text-[#0F022E]  font-medium">{AddressDetails?.nearest_sign}</span>
              </div>
            )}

            {AddressDetails?.notes && (
              <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
                <span className="text-[#575757]  font-normal">{t('Additional instructions')}:</span>
                <span className="text-[#0F022E]  font-medium">{AddressDetails?.notes}</span>
              </div>
            )}

            {AddressDetails?.neighborhood && (
              <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
                <span className="text-[#575757]  font-normal"> {t('Neighborhood name')}:</span>
                <span className="text-[#0F022E]  font-medium">{AddressDetails?.neighborhood}</span>
              </div>
            )}

            {AddressDetails?.address_class && (
              <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
                <span className="text-[#575757]  font-normal">{t('Title classification')} :</span>
                <span className="text-[#0F022E]  font-medium">{AddressDetails?.address_class}</span>
              </div>
            )}

            {AddressDetails?.address_type && (
              <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
                <span className="text-[#575757]  font-normal">{t('Title type')} :</span>
                <span className="text-[#0F022E]  font-medium">{AddressDetails?.address_type}</span>
              </div>
            )}

            {AddressDetails?.city && (
              <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
                <span className="text-[#575757]  font-normal">{t('City')} :</span>
                <span className="text-[#0F022E]  font-medium">{AddressDetails?.city}</span>
              </div>
            )}

            {AddressDetails?.state && (
              <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
                <span className="text-[#575757]  font-normal">{t('area')} :</span>
                <span className="text-[#0F022E]  font-medium">{AddressDetails?.state}</span>
              </div>
            )}

            {AddressDetails?.country && (
              <div className="flex gap-0.5  text-sm pt-4">
                <span className="text-[#575757]  font-normal">{t('State')} :</span>
                <span className="text-[#0F022E]  font-medium">{AddressDetails?.country}</span>
              </div>
            )}
          </div>
        )}


        {/** content (street) */}
        {open && current_module_key === 'street_assistant' && (
          <div className="px-3 mt-3   ">

            <div className="flex flex-col items-start gap-1">
              <div className="text-[#575757] text-sm font-normal flex gap-2"> 
                <img src='/images/icons/google-map-icon.svg'/>
                <span className="text-[#0F022E] text-sm font-normal">{bookingDetails?.address}</span>
              </div>

              {/* Line + Arrow */}
              <div className="flex flex-col items-center w-[18px] ml-2">
                <div className="border-l-2 border-dashed border-[#8B8B8B] h-4 "></div>
                <img src="/images/icons/ArrowDown_gray.svg" alt="" />
              </div>

              <div className="text-[#575757] text-sm font-normal flex gap-2"> 
                <img src='/images/icons/google-map-icon_gray.svg'/>
                <span className="text-[#8B8B8B] text-sm font-normal">{bookingDetails?.desired_address}</span>
              </div>
            </div>

            <hr className="border border-[#E3E8EF] my-4  " />

            <div className= "grid grid-cols-2 gap-3 ">
              <div className='flex gap-1.5'>
                <img src="/images/icons/route.svg" alt="" />
                <p className='text-[#364152] text-sm font-normal'> 3 كم الي العميل</p>
              </div>

              <div className='flex gap-1.5'>
                <img src="/images/icons/clock-gray.svg" alt="" />
                <p className='text-[#364152] text-sm font-normal'>5 دقايق</p>
              </div>
            </div>

            <hr className="border border-[#E3E8EF] my-4  " />

            <div className= "grid grid-cols-2 gap-3">
              <div className='flex gap-1.5'>
                <img src="/images/icons/route.svg" alt="" />
                <p className='text-[#364152] text-sm font-normal'> 32 كم الي الوجهة</p>
              </div>

              <div className='flex  gap-1.5'>
                <img src="/images/icons/clock-gray.svg" alt="" />
                <p className='text-[#364152] text-sm font-normal'>الاجمالي 45 دقيقة</p>
              </div>
              
            </div>

          </div>

        )}

      </div>

    {/* )} */}

    


    </>
  )
}

export default AddressPage