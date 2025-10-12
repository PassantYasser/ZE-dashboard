import React from 'react'
import { useTranslation } from 'react-i18next'

function ExtractBtn() {
  const {t}=useTranslation()
  return (
    <button className=' h-14 w-42 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-[3px] '>
      {t('Extract')}
    </button>
  )
}

export default ExtractBtn