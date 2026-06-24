'use client'
import React from 'react'
import NoClassification from './NoClassification'
import { useTranslation } from 'react-i18next'

function ClassificationPage() {
  const {t} = useTranslation()
  return (
    <div>
      <NoClassification/>
    </div>
  )
}

export default ClassificationPage