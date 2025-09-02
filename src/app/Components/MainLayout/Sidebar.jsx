
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from "../../../language/i18n";
import Logo from '../../../../public/images/icons/signout.svg'


function Sidebar() {
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();

    const [activeIndex, setActiveIndex] = useState(null); // track clicked li
  const [currentPath, setCurrentPath] = useState(""); // store path/name clicked

  const handleLangChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    document.documentElement.setAttribute("dir", newLang === "ar" ? "rtl" : "ltr");
  };

  return (
    <aside 
      className={`border-l border-[#E3E8EF] transition-all p-4 duration-300 h-screen relative 
        ${open ? "w-70" : "w-18"}`}
    >

      {/* Logo open and close */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-center mt-10 mb-14 "
      >
        {open ?(
          <div className='flex gap-2 items-center'>
            <img src='/images/LogoText.svg' alt="dd" />
            <img src='/images/Logo.svg' alt="dd" />
          </div>
        
        ):(
          <div className='flex items-center '>
            <img src='/images/Logo.svg' alt="dd" />
          </div>
        )}
      </button>

      {/* Navigation */}
      <nav className="">
        <ul>
          <li  className={`cursor-pointer py-4 px-2 rounded ${activeIndex === 0 ? "bg-red-500" : ""}`}
              onClick={() => { setActiveIndex(0); setCurrentPath('dashboard'); }}>
            {open?(
            //open 
              <div className='flex gap-4 items-center'>
                <img src="/images/icons/dashboard.svg" alt="" />
                <p>{t('dashboard')}</p>
              </div>
            ):(
              <div className='flex justify-center items-center'>
                <img src="/images/icons/dashboard.svg" alt="" />
              </div>
            )}
          </li>

          <li  className={`cursor-pointer py-4 px-2 rounded ${activeIndex === 1 ? "bg-red-500" : ""}`}
            onClick={() => { setActiveIndex(1); setCurrentPath('dashboard'); }}>
            {open?(
            //open 
              <div className='flex gap-4 items-center'>
                <img src="/images/icons/Requests.svg" alt="" />
                <p>{t('Requests')}</p>
              </div>
            ):(
              <div className='flex justify-center items-center'>
                <img src="/images/icons/Requests.svg" alt="" />
              </div>
            )}
          </li>

          <li  className={`cursor-pointer py-4 px-2 rounded ${activeIndex === 2 ? "bg-red-500" : ""}`}
            onClick={() => { setActiveIndex(2); setCurrentPath('dashboard'); }}>
            {open?(
            //open 
              <div className='flex gap-4 items-center'>
                <img src="/images/icons/workers.svg" alt="" />
                <p>{t('workers')}</p>
              </div>
            ):(
              <div className='flex justify-center items-center'>
                <img src="/images/icons/workers.svg" alt="" />
              </div>
            )}
          </li>

          <li  className={`cursor-pointer py-4 px-2 rounded ${activeIndex === 3 ? "bg-red-500" : ""}`}
            onClick={() => { setActiveIndex(3); setCurrentPath('dashboard'); }}>
            {open?(
            //open 
              <div className='flex gap-4 items-center'>
                <img src="/images/icons/Services.svg" alt="" />
                <p>{t('Services')}</p>
              </div>
            ):(
              <div className='flex justify-center items-center'>
                <img src="/images/icons/Services.svg" alt="" />
              </div>
            )}
          </li>

          <li  className={`cursor-pointer py-4 px-2 rounded ${activeIndex === 4 ? "bg-red-500" : ""}`}
            onClick={() => { setActiveIndex(4); setCurrentPath('dashboard'); }}>
            {open?(
            //open 
              <div className='flex gap-4 items-center'>
                <img src="/images/icons/conversations.svg" alt="" />
                <p>{t('conversations')}</p>
              </div>
            ):(
              <div className='flex justify-center items-center'>
                <img src="/images/icons/conversations.svg" alt="" />
              </div>
            )}
          </li>

          <li  className={`cursor-pointer py-4 px-2 rounded ${activeIndex === 5 ? "bg-red-500" : ""}`}
            onClick={() => { setActiveIndex(5); setCurrentPath('dashboard'); }}>
            {open?(
            //open 
              <div className='flex gap-4 items-center'>
                <img src="/images/icons/Finance.svg" alt="" />
                <p>{t('Finance')}</p>
              </div>
            ):(
              <div className='flex justify-center items-center'>
                <img src="/images/icons/Finance.svg" alt="" />
              </div>
            )}
          </li>

          <li className={`cursor-pointer py-4 px-2 rounded ${activeIndex === 6 ? "bg-red-500" : ""}`}
            onClick={() => { setActiveIndex(6); setCurrentPath('dashboard'); }}>
            {open?(
            //open 
              <div className='flex gap-4 items-center'>
                <img src="/images/icons/dashboard.svg" alt="" />
                <p>{t('technical support')}</p>
              </div>
            ):(
              <div className='flex justify-center items-center'>
                <img src="/images/icons/dashboard.svg" alt="" />
              </div>
            )}
          </li>

          <li  className={`cursor-pointer py-4 px-2 rounded ${activeIndex === 7 ? "bg-red-500" : ""}`}
            onClick={() => { setActiveIndex(7); setCurrentPath('dashboard'); }}>
            {open?(
            //open 
              <div className='flex gap-4 items-center'>
                <img src="/images/icons/settings.svg" alt="" />
                <p>{t('Settings')}</p>
              </div>
            ):(
              <div className='flex justify-center items-center'>
                <img src="/images/icons/settings.svg" alt="" />
              </div>
            )}
          </li>

          <li  className={`cursor-pointer py-4 px-2 rounded ${activeIndex === 8 ? "bg-red-500" : ""}`}
            onClick={() => { setActiveIndex(8); setCurrentPath('dashboard'); }}>
            {open?(
            //open 
              <div className='flex gap-4 items-center'>
                <img src="/images/icons/signout.svg" alt="" />
                <p className='text-[#D92D20]'>{t('Sign out')}</p>
              </div>
            ):(
              <div className='flex justify-center items-center'>
                <img src="/images/icons/signout.svg" alt="" />
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/* Language Selector مثبت في الأسفل */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
      <select
        onChange={handleLangChange}
        value={i18n.language}
        className={`bg-amber-300 h-10 text-center cursor-pointer rounded-2xl outline-none ${open ? "w-32" : "w-12"}`}
      >
        <option value="en">{open ? "English" : "En"}</option>
        <option value="ar">{open ? "العربية" : "ar"}</option>
      </select>
    </div>

    </aside>
  );
}

export default Sidebar;
