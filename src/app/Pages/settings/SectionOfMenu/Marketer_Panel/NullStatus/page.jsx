"use client"
import React from 'react'
import InformationDataPage from './InformationData/page'
import { useTranslation } from 'react-i18next'

import { useState } from 'react'
import Switch from '@mui/material/Switch'
import { styled } from '@mui/material/styles'





function NullStatusPage({is_marketer, setIsMarketer}) {
  const {t}=useTranslation()
  

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
    setIsMarketer(event.target.checked)
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

  const handleDeleteImage = () => {
    setSelectedImage(null);
  }

  return (
    <>
      <div className='border border-[#E3E8EF] p-6'>

        <div className='flex justify-between items-center px-6 py-4 mb-8 border border-[#CDD5DF] rounded-[3px]'>
          <p className='text-[#4B5565] text-base font-normal '>{t('Activating the marketer dashboard')}</p>
          <GreenSwitch checked={is_marketer} onChange={handleToggle} />
        </div>

        <InformationDataPage/>
        
        <div>
          <p className='text-[#364152] text-lg font-normal'>{t('Bank account details')}</p>

          <div className='mt-4'>
            <p className=' text-[#364152] text-sm font-normal mb-1.5'>{t('IBAN number')}</p>
            <input 
              type="text" 
              className={`w-full h-14 p-3 border border-[#CDD5DF] text-[#9A9A9A] rounded-[3px] outline-none placeholder:text-sm 
                          ${!is_marketer ? 'bg-[#EEF2F6] placeholder:text-[#9A9A9A]' : 'bg-white placeholder:text-[#9A9A9A]'}
                        `} 
              placeholder={t('Enter your IBAN number')}
              disabled={!is_marketer? true : false}
            />

            {/* Image Upload Input */}
            <div className='mt-4'>
              <div className={`relative w-full rounded-[3px]  overflow-hidden border border-[#CDD5DF]`}>
                {selectedImage ? (
                  <div className="relative w-full h-full  "> 
                    <img src={selectedImage} alt="Selected" className="w-full h-40 object-cover  " />
                    <button 
                      onClick={handleDeleteImage}
                      className="absolute top-2 left-2 w-7 h-7 p-1.5 border border-[#F04438] bg-[#FEE4E2] rounded-[3px] flex items-center justify-center cursor-pointer "
                    >
                      <img src="/images/icons/delete-darkRed.svg" alt="Delete" className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-center gap-1.5 px-3 h-14 pointer-events-none">
                      <span className='text-[#364152] text-sm font-normal'>{t('Upload a picture')}</span>
                      <img src="/images/icons/camera.svg" alt="" />
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      disabled={!is_marketer}
                      onChange={handleImageChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                    />
                  </>
                )}
              </div>

              <p className='border border-[#FEF0C7] bg-[#FFFAEB] p-2 mt-2 text-[#775B0D] text-base font-normal'>
                {t('The image must be an official document showing the IBAN number and the marketer name.')}
              </p>
            </div>
          </div> 
        </div>

      </div>

      

    </>
  )
}

export default NullStatusPage