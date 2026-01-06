"use client"
import React from 'react'
import InformationDataPage from './InformationData/page'
import { useTranslation } from 'react-i18next'

import { useState } from 'react'
import Switch from '@mui/material/Switch'
import { styled } from '@mui/material/styles'





function NullStatusPage({is_marketer}) {
  const {t}=useTranslation()
  
  const [isActive, setIsActive] = useState(is_marketer || false)
  const GreenSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
      width: 53,
      height: 24,
      padding: 0,
      '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 3,
        transitionDuration: '500ms',
        '&.Mui-checked': {
          transform: 'translateX(31px)', 
          color: '#fff',
          '& + .MuiSwitch-track': {
            backgroundColor: '#10B981',
            opacity: 1,
            border: 0,
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5,
          },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
          color: '#33cf4d',
          border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
          color: theme.palette.grey[100],
        },
      },
      '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 18,
        height: 18,
      },
      '& .MuiSwitch-track': {
        borderRadius: 24 / 2,
        backgroundColor: '#E9E9EA',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
          duration: 500,
        }),
      },
  }));
  
  const handleToggle = (event) => {
    setIsActive(event.target.checked)
  }


  //upload image
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  return (
    <>
      <div className='border border-[#E3E8EF] p-6'>

        <div className='flex justify-between items-center px-6 py-4 mb-8 border border-[#CDD5DF] rounded-[3px]'>
          <p className='text-[#4B5565] text-base font-normal '>{t('Activating the marketer dashboard')}</p>
          <GreenSwitch checked={isActive} onChange={handleToggle} />
        </div>

        <InformationDataPage/>
        
        <div>
          <p className='text-[#364152] text-lg font-normal'>{t('Bank account details')}</p>

          <div className='mt-4'>
            <p className=' text-[#364152] text-sm font-normal mb-1.5'>{t('IBAN number')}</p>
            <input 
              type="text" 
              className={`w-full h-14 p-3 border border-[#CDD5DF] text-[#9A9A9A] rounded-[3px] outline-none placeholder:text-sm 
                          ${!isActive ? 'bg-[#EEF2F6]' : 'bg-white'}
                        `} 
              placeholder={t('Enter your IBAN number')}
              disabled={!isActive? true : false}
            />

            {/* Image Upload Input */}
            <div className='mt-4'>
              <div className={`relative w-full h-14 rounded-[3px] border border-[#CDD5DF] overflow-hidden ${!isActive ? 'bg-[#EEF2F6]' : 'bg-white'}`}>
                {selectedImage ? (
                  <img src={selectedImage} alt="Selected" className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center gap-1.5 px-3 h-full ">
                    <span className='text-[#364152] text-sm font-normal'>{t('Upload a picture')}</span>
                    <img src="/images/icons/camera.svg" alt="" />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  disabled={!isActive}
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                />
              </div>
            </div>
          </div> 
        </div>

      </div>

      

    </>
  )
}

export default NullStatusPage