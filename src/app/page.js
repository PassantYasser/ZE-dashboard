"use client"; //  👈Client Component ده يخلي المكون 
import React, { useState } from 'react'
import MainLayout from './Components/MainLayout/MainLayout';
import { useTranslation } from 'react-i18next';
import i18n from "../language/i18n";

function Homepage({ children }) {
    const [open, setOpen] = useState(true);
  
      const { t } = useTranslation();
  
    // Language change handler
    const handleLangChange = (e) => {
      const newLang = e.target.value;
      i18n.changeLanguage(newLang);
      document.documentElement.setAttribute("dir", newLang === "ar" ? "rtl" : "ltr");
    };



  return (
    <>
    {/* with navbar and sidebar */}
      <MainLayout> 
        { children }
      </MainLayout>

      {/* without navbar and sidebar */}


      

    </>
  )
}

export default Homepage
