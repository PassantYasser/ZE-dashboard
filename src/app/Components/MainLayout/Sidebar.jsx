"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Link from 'next/link';
import { usePathname } from 'next/navigation';



function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(null); // track clicked li

    const pathname = usePathname();



  return (
    
    // 1440px and above
    <aside
      className={`
        ${isSidebarOpen ? "block" : "hidden"}   /* ✅ في الموبايل/تابلت */
        lg1:flex flex-col h-screen border-x border-[#E3E8EF] transition-all p-4 duration-200
        ${open ? "w-70" : "w-18"}               /* ✅ ده بس للشاشات الكبيرة */
        bg-white fixed lg:static z-50 top-0 right-0
      `}
    >



      {/* Logo open and close */}
      <button
        // onClick={() => setOpen(!open)}
        onClick={() => {
            // ✅ يشتغل بس لو في لابتوب
            if (window.innerWidth >= 1340) { 
              setOpen(!open);
            }
          }}
        className="w-full flex justify-center mt-10 mb-14 cursor-pointer "
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
      <nav className="flex-1">
        <ul className='flex flex-col h-full'>

          <li className={`cursor-pointer py-4 px-2 rounded ${pathname === "/dashboard" ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/dashboard"  onClick={() => setIsSidebarOpen(false)} >
                {open?(
                //open 
                  <div  className='flex gap-4 items-center'>
                    <img src="/images/icons/dashboard.svg" alt="" className={pathname === "/dashboard" ? "invert" : ""}/>
                    <p className='text-base text-[#364152] font-normal'>{t('dashboard')}</p>
                  </div>
                ):(
                  <div className='flex justify-center items-center'>
                    <img src="/images/icons/dashboard.svg" alt="" className={pathname === "/dashboard" ? "invert" : ""}/>
                  </div>
                )}
            </Link>
          </li>

          <li  className={`cursor-pointer py-4 px-2 rounded ${pathname === "/requests" ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/requests" onClick={() => setIsSidebarOpen(false)}>
                {open?(
                //open 
                  <div  className='flex gap-4 items-center'>
                    <img src="/images/icons/Requests.svg" alt="" className={pathname === "/requests" ? "invert" : ""}/>
                    <p className='text-base text-[#364152] font-normal'>{t('Requests')}</p>
                  </div>
                ):(
                  <div className='flex justify-center items-center'>
                    <img src="/images/icons/Requests.svg" alt="" className={pathname === "/requests" ? "invert" : ""}/>
                  </div>
                )}
            </Link>
          </li>

          <li  className={`cursor-pointer py-4 px-2 rounded ${pathname === "/workers" ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/workers" onClick={() => setIsSidebarOpen(false)}>
              {open?(
              //open 
                <div className='flex gap-4 items-center'>
                  <img src="/images/icons/workers.svg" alt="" className={pathname === "/workers" ? "invert" : ""}/>
                  <p className='text-base text-[#364152] font-normal'>{t('workers')}</p>
                </div>
              ):(
                <div className='flex justify-center items-center'>
                  <img src="/images/icons/workers.svg" alt="" className={pathname === "/workers" ? "invert" : ""}/>
                </div>
              )}
            </Link>
          </li>

          <li  className={`cursor-pointer py-4 px-2 rounded ${pathname === "/services" ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/services" onClick={() => setIsSidebarOpen(false)}>
              {open?(
              //open 
                <div className='flex gap-4 items-center'>
                  <img src="/images/icons/Services.svg" alt="" className={pathname === "/services" ? "invert" : ""}/>
                  <p className='text-base text-[#364152] font-normal'>{t('Services')}</p>
                </div>
              ):(
                <div className='flex justify-center items-center'>
                  <img src="/images/icons/Services.svg" alt="" className={pathname === "/services" ? "invert" : ""}/>
                </div>
              )}
            </Link>
          </li>

          <li  className={`cursor-pointer py-4 px-2 rounded ${pathname === "/conversations" ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/conversations" onClick={() => setIsSidebarOpen(false)}>
              {open?(
              //open 
                <div className='flex gap-4 items-center'>
                  <img src="/images/icons/conversations.svg" alt="" className={pathname === "/conversations" ? "invert" : ""}/>
                  <p className='text-base text-[#364152] font-normal'>{t('conversations')}</p>
                </div>
              ):(
                <div className='flex justify-center items-center'>
                  <img src="/images/icons/conversations.svg" alt="" className={pathname === "/conversations"? "invert" : ""}/>
                </div>
              )}
            </Link>
          </li>

          <li  className={`cursor-pointer py-4 px-2 rounded ${pathname === "/finance" ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/finance" onClick={() => setIsSidebarOpen(false)}>
              {open?(
              //open 
                <div className='flex gap-4 items-center'>
                  <img src="/images/icons/Finance.svg" alt="" className={pathname === "/finance" ? "invert" : ""}/>
                  <p className='text-base text-[#364152] font-normal'>{t('Finance')}</p>
                </div>
              ):(
                <div className='flex justify-center items-center'>
                  <img src="/images/icons/Finance.svg" alt="" className={pathname === "/finance" ? "invert" : ""} />
                </div>
              )}
            </Link>
          </li>

          <li className={`cursor-pointer py-4 px-2 rounded ${pathname === "/technicalSupport" ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/technicalSupport" onClick={() => setIsSidebarOpen(false)}>
              {open?(
              //open 
                <div className='flex gap-4 items-center'>
                  <img src="/images/icons/dashboard.svg" alt="" className={pathname === "/technicalSupport" ? "invert" : ""} />
                  <p className='text-base text-[#364152] font-normal'>{t('technical support')}</p>
                </div>
              ):(
                <div className='flex justify-center items-center'>
                  <img src="/images/icons/dashboard.svg" alt="" className={pathname === "/technicalSupport" ? "invert" : ""}/>
                </div>
              )}
            </Link>
          </li>


      
            <li  className={`cursor-pointer py-4 px-2 rounded  mt-auto mb-2 ${pathname === "/settings" ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/settings" onClick={() => setIsSidebarOpen(false)}>
                {open?(
                //open 
                  <div className='flex gap-4 items-center'>
                    <img src="/images/icons/settings.svg" alt=""className={pathname === "/settings" ? "invert" : ""} />
                    <p className='text-base text-[#364152] font-normal'>{t('Settings')}</p>
                  </div>
                ):(
                  <div className='flex justify-center items-center'>
                    <img src="/images/icons/settings.svg" alt="" className={pathname === "/settings" ? "invert" : ""}/>
                  </div>
                )}
            </Link>
            </li>
          
            <li  className={`cursor-pointer py-4 px-2 rounded   mb-2  ${pathname === "/signout" ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/Auth/Login" onClick={() => setIsSidebarOpen(false)}>
                {open?(
                //open 
                  <div className='flex gap-4 items-center'>
                    <img src="/images/icons/signout.svg" alt="" />
                    <p className='text-[#D92D20] text-base font-normal'>{t('Sign out')}</p>
                  </div>
                ):(
                  <div className='flex justify-center items-center'>
                    <img src="/images/icons/signout.svg" alt="" />
                  </div>
              )}
            </Link>

            </li>
    

        </ul>
      </nav>

    

    </aside>
  );
  
}

export default Sidebar;


