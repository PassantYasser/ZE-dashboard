import { Dialog } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'


function Concurrent_Orders_Limit({open , setOpen , getShowSetting}) {
  const {t} = useTranslation()
  const [selected, setSelected] = useState(null)

  const data = [
    {id:10 , name:t('Up to 10 deliveries')},
    {id:20 , name:t('Up to 20 deliveries')},
    {id:30 , name:t('Up to 30 deliveries')},
    {id:50 , name:t('Up to 50 deliveries')},
    {id:80 , name:t('Up to 80 deliveries')},
  ]

  useEffect(()=>{
    if(getShowSetting?.max_concurrent_orders !== undefined){
      setSelected(getShowSetting?.max_concurrent_orders)
    }
  },[getShowSetting])

  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ className: "rerquest-dialog" }}
      >
        {/* Header */}
        <div className="flex justify-end px-6 mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={()=>setOpen(false)}
            className="border border-[#CDD5DF] w-12 h-12 cursor-pointer rounded-[100px] flex justify-center items-center hover:bg-gray-50 hover:border-[#9AA4B2] transition-colors duration-150"
          >
            <img src="/images/icons/xx.svg" alt="" className="w-6 h-6" />
          </motion.button>
        </div>

        <div>
          <p className='px-6 text-[#364152] text-xl font-semibold'>{t('Limit on simultaneous orders')}</p>
          <div className='border border-[#666B6D1F] h-[0.5px] my-4'></div>

          <div className='px-6 flex flex-col gap-2 pb-6'>
            {data.map((item, index) => {
              const isSelected = selected === item?.id
              return (
                <motion.button
                  key={item?.id}
                  onClick={() => setSelected(item?.id)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className={`w-full flex items-center justify-between px-4 py-4 rounded-3px  cursor-pointer text-right transition-all duration-200
                    ${
                      isSelected
                        ? 'bg-[#FDF7E8] rounded-3px '
                        : 'bg-white hover:bg-[#FAFAFA]'
                    }`}
                >
                  <span
                    className={`text-xl font-normal transition-colors duration-200 ${
                      isSelected ? 'text-primary' : 'text-[#364152]'
                    }`}
                  >
                    {item?.name}
                  </span>

                  <AnimatePresence>
                    {isSelected && (
                      <motion.span
                        key="check"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                        className="flex items-center justify-center "
                      >
                        <img src="/images/icons/tick-yellow.svg" className="w-5 h-5" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              )
            })}
          </div>
          
        </div>
    </Dialog>
      

    </>
  )
}

export default Concurrent_Orders_Limit