"use client"; //  👈Client Component ده يخلي المكون 
import React from 'react'
import MainLayout from './Components/MainLayout/MainLayout';
import { useTranslation } from 'react-i18next';

function Homepage() {
  const {t}= useTranslation();


  return (
    <>
    {/* with navbar and sidebar */}
      <MainLayout> 
        <h2>Home Page</h2>
        <p>{t('welcome')}</p>
      </MainLayout>

      {/* without navbar and sidebar */}
      

    </>
  )
}

export default Homepage
