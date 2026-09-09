import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

function ThirdSection() {
  const { t } = useTranslation()

  const [price, setPrice] = useState('')

  const prices = [25, 50, 75, 100]

  const handlePriceClick = (value) => {
    setPrice(String(value))
  }

  return (
    <>
    <div className="rounded-3px p-3 shadow-[0_0_4px_0_rgba(0,0,0,0.30)]">

      <p className="text-base font-medium text-[#364152]">
        {t('Submit a price quote')}
      </p>

      {/* Input */}
      <div className="mt-2">
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder={t('Enter your price')}
          className="h-14 w-full rounded-3px border border-[#C7C7C7] px-4 text-sm text-[#364152] outline-none transition-all duration-200 focus:border-[#D5A900] focus:ring-2 focus:ring-[#D5A900]/10"
        />
      </div>

      {/* Quick prices */}
      <div className="mt-4 grid w-full grid-cols-4 gap-4">

        {prices.map((value) => {
          const isSelected = price === String(value)

          return (
            <motion.button
              key={value}
              type="button"
              onClick={() => handlePriceClick(value)}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: isSelected ? 1.03 : 1,
              }}
              transition={{
                duration: 0.2,
              }}
              className={`h-12.5 w-full cursor-pointer rounded-3px border p-4 text-sm font-normal transition-colors duration-200
                          ${
                            isSelected
                              ? 'border-[#D5A900] bg-[#FFF8DC] text-[#D5A900]'
                              : 'border-[#C7C7C7] text-[#787878] hover:border-[#D5A900] hover:bg-[#FFFDF3]'
                          }
              `}
            >
              {value}
            </motion.button>
          )
        })}

      </div>
    </div>
      
    </>
  )
}

export default ThirdSection