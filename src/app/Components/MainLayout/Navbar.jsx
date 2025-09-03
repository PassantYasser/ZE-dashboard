"use client";
import React, { use, useState } from 'react'
import i18n from "../../../language/i18n";
import { useTranslation } from 'react-i18next';


function Navbar() {
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
    <header className="h-20 bg-[#fff] border-b border-[#E3E8EF] flex items-center justify-between px-4">
      <div>
        <p>{t('Welcome back!')} </p>
        <p>{t('Lets check your update today')}</p>
      </div>
    <div className="">

      {/* Language Selector */}
      <select
        onChange={handleLangChange}
        value={i18n.language}
        className={`bg-amber-300 h-10 text-center cursor-pointer rounded-2xl outline-none ${open ? "w-32" : "w-12"}`}
      >
        <option value="en">{open ? "English" : "En"}</option>
        <option value="ar">{open ? "العربية" : "ar"}</option>
      </select>

    </div>
    </header>
    </>
  )
}

export default Navbar