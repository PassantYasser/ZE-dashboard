'use client'
import { Dialog } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

function AddFile({open , setOpen}) {
  const {t} = useTranslation()
  const [expiryDate, setExpiryDate] = React.useState(null);
  return (
  <Dialog
    open={open}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    PaperProps={{ className: "AddFuel-dialog" }}
  >
      <section className="px-6 mt-6">
        <button
          onClick={()=>setOpen(false)}
          className="border border-[#CDD5DF] w-12 h-12 rounded-[100px] flex justify-center items-center cursor-pointer"
        >
          <img src="/images/icons/xx.svg" alt="" className="w-6 h-6" />
        </button>
      </section>

      <section className="mt-1 px-6 flex flex-col items-center gap-2 mb-8">
        <p className="text-[var(--color-primary)] text-2xl font-medium ">{t("Add a new document")}</p>
        <p className="text-[#4B5565] text-base font-normal ">
          {t("Please upload the required document and specify its expiry date.")}
        </p>
      </section>

      <section className='p-6'>
        <div className='p-3 flex flex-col items-center gap-3 border-2 border-dashed border-[#CDD5DF] rounded-[3px]'>
          <img src="/images/uploadd.svg" alt="" />
          <p className='text-[#1F055C] text-base font-normal'>{t('Click to upload the file')}</p>
          <button className='w-[30%] h-14 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-[3px] px-4 cursor-pointer'>
            {t('Upload file')}
          </button>
        </div>        
      </section>

      <section className='px-4'>
        <p className='text-[#364152] text-sm font-medium mb-2'>{t('Specify the expiry date')}</p>
      <div className="relative w-full mb-4">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            format="DD/MM/YYYY"
            fieldDirection="rtl"
            value={expiryDate}
            onChange={(newValue) => setExpiryDate(newValue)}
            slotProps={{
              textField: {
                placeholder: "00/00/0000",
                fullWidth: true,
                sx: {
                  '& .MuiInputBase-input': {
                    paddingLeft: '12px', 
                    textAlign: 'right', 
                    fieldDirection: 'rtl',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '3px',
                  }
                }
              },
            }}
          />
        </LocalizationProvider>
      </div>

      </section>

      <section className='w-full flex gap-3 px-6 py-4'>
        <button className={`bg-[#E3E8EF] text-[#9AA4B2] w-full h-14`}>{t('save')}</button>
        <button
          onClick={()=>setOpen(false)}
          className='border border-[var(--color-primary)] text-[var(--color-primary)] w-full h-14 cursor-pointer '>{t('cancel')}</button>
      </section>

  </Dialog>
        
  )
}

export default AddFile