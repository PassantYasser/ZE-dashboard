"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';
import Switch from '@mui/material/Switch'
import { styled } from '@mui/material/styles'
import TableOfActivePage from './TableOfActive/page';
import CardOfActivePage from './CardOfActive/page';


function ActiveStatusPage({is_marketer , setIsMarketer}) {

  const {t} = useTranslation()
  // const has_subscription = true;
  
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
  
  return (
    <>
    <div className='flex justify-between items-center px-6 py-4 mb-8 border border-[#CDD5DF] rounded-[3px]'>
      <p className='text-[#4B5565] text-base font-normal '>{t('Activating the marketer dashboard')}</p>
      <GreenSwitch checked={is_marketer} onChange={handleToggle} />
    </div>

    <CardOfActivePage is_marketer={is_marketer}/>

    {is_marketer && <TableOfActivePage />}

    </>
  )
}

export default ActiveStatusPage