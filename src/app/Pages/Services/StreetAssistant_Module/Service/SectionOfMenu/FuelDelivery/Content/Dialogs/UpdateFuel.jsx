'use client'
import { Dialog } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Switch from '@mui/material/Switch'
import { styled } from '@mui/material/styles'
import DeleteDialog from './DeleteDialog'



function UpdateFuel({open , setOpen, fuelData}) {
  
  const {t}= useTranslation();
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

  // Form state
  const [isActive, setIsActive] = useState(false)
  const [fuelPrice, setFuelPrice] = useState('')

  
  
  // type of fuel (1)
  // =========================
  const [open1, setOpen1] = useState(false);
  const [selected1, setSelected1] = useState(null);
  const [searchValue1, setSearchValue1] = useState("");
  const dropdownRef1 = useRef(null);
  const optionFuel = ['gg','hhhh','iiii','jjjj','kkkk','llll','mmmm','nnnn','oooo','pppp'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) setOpen1(false);        };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Populate form when fuelData changes
  useEffect(() => {
    if (fuelData) {
      setIsActive(fuelData?.is_active || false)
      setSelected1(fuelData?.type_name || null)
      setFuelPrice(fuelData?.price || '')
    }
  }, [fuelData])

  const [openDelete , setOpenDelete] = useState(false)

  const handleOpenDelete = ()=>{
    setOpen(false)
    setOpenDelete(true)
  }
  return (
    <>
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{ className: "AddFuel-dialog" }}
    >
      <section className="px-6 mt-6">
        <button
          onClick={() => setOpen(false)}
          className="border border-[#CDD5DF] w-12 h-12 rounded-[100px] flex justify-center items-center cursor-pointer"
        >
          <img src="/images/icons/xx.svg" alt="" className="w-6 h-6" />
        </button>
    
      </section>

      <p className='flex justify-center text-[#0F022E] text-2xl font-medium mb-6'>{t('Fuel type modification')}</p>

      <section className='p-6'>
        {/*  */}
        <div className='flex justify-between items-center px-4 py-3 mb-3 border border-[#CDD5DF] rounded-[3px]'>
          <p className='text-[#4B5565] text-base font-normal '>{t('Fuel activation')}</p>
          <GreenSwitch 
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          />
        </div>

          {/* ==========type of fuel  ========== */}
          <div className="flex flex-col">
            <label className="text-[#364152] text-base font-normal mb-3">
              {t("Fuel type")}
            </label>

            <div className="relative w-full">
              <input
                type="text"
                placeholder={t("Choose fuel type")}
                value={selected1 || ''}
                disabled
                className="h-14 p-3 w-full text-[#364152] bg-gray-100 border border-[#C8C8C8] rounded-[3px] cursor-not-allowed opacity-75"
              />
            </div>
          </div>

          {/* ========== price  ========== */}    
          <div className='flex flex-col gap-1.5 my-4'>
            <label className="text-[#364152] text-sm font-normal">{t('the price')}({t('pound')})</label>
            <input 
              type="text"
              placeholder={t('Enter the price')}
              value={fuelPrice}
              onChange={(e) => setFuelPrice(e.target.value)}
              className='border border-[#C8C8C8] text-[#364152] w-full h-14 px-3 outline-none'
              />
          </div>

          {/* note */}
          <ul className='bg-[#EEF2F6] p-3 mb-4'>
            <li className='text-[#775B0D] text-sm font-normal'>{t('The price must match the official prices to avoid account suspension.')}</li>
          </ul>

          {/* btn */}
          <div className='flex gap-3 w-full'>
            <button className='w-full h-14 bg-[var(--color-primary)] text-white cursor-pointer  '>
              {t('Save changes')}
            </button>
            <button onClick={handleOpenDelete} className='w-full h-14 border border-[#D92D20] text-[#D92D20] cursor-pointer  '>
              {t('delete')}
            </button>
          </div>
          

      </section>
    </Dialog>

    <DeleteDialog open={openDelete} setOpen={setOpenDelete} />
    </>
  )
}

export default UpdateFuel