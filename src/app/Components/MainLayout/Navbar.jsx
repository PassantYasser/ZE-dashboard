"use client";

import React, { useState } from 'react'
import i18n from "../../../language/i18n";


function Navbar() {
    const [open, setOpen] = useState(true);
  
    const handleLangChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    document.documentElement.setAttribute("dir", newLang === "ar" ? "rtl" : "ltr");
  };
  return (
    <>
    <header className="h-14 bg-green-600 text-white flex items-center justify-between px-4">
      <h1 className="text-lg font-bold">Zetime</h1>

        {/* Language Selector مثبت في الأسفل */}
    <div className="">
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