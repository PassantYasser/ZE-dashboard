"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/slice/Auth/AuthSlice';



function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(null); // track clicked li

    const pathname = usePathname();

    //🟢logout
    const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());      
    setIsSidebarOpen(false);
    router.push("/Auth/Login"); 
  }


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
        onClick={() => {
            // ✅ Desktop
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

          <li className={`cursor-pointer  rounded ${pathname.startsWith("/dashboard") ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/dashboard"  onClick={() => setIsSidebarOpen(false)} >
                {open?(
                //open 
                  <div  className='flex gap-4 items-center py-4 px-2'>
                    <img src="/images/icons/dashboard.svg" alt="" className={pathname.startsWith("/dashboard") ? "invert" : ""}/>
                    <p className={`text-base font-normal${pathname.startsWith("/dashboard") ? "text-[#fff]" : "text-[#364152]"}`}>{t('dashboard')}</p>
                  </div>
                ):(
                  <div className='flex justify-center items-center py-2 px-2'>
                    <img src="/images/icons/dashboard.svg" alt="" className={pathname.startsWith("/dashboard")? "invert" : ""}/>
                  </div>
                )}
            </Link>
          </li>

          <li  className={`cursor-pointer  rounded ${pathname.startsWith("/requests") ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/requests" onClick={() => setIsSidebarOpen(false)}>
                {open?(
                //open 
                  <div  className='flex gap-4 items-center py-4 px-2'>
                    <img src="/images/icons/Requests.svg" alt="" className={pathname.startsWith("/requests") ? "invert" : ""}/>
                    <p className={`text-base font-normal${pathname.startsWith("/requests") ? "text-[#fff]" : "text-[#364152]"}`}>{t('Requests')}</p>
                  </div>
                ):(
                  <div className='flex justify-center items-center py-2 px-2'>
                    <img src="/images/icons/Requests.svg" alt="" className={pathname.startsWith("/requests") ? "invert" : ""}/>
                  </div>
                )}
            </Link>
          </li>

          <li  className={`cursor-pointer  rounded ${pathname.startsWith("/workers") ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/workers" onClick={() => setIsSidebarOpen(false)}>
              {open?(
              //open 
                <div className='flex gap-4 items-center py-4 px-2'>
                  <img src="/images/icons/workers.svg" alt="" className={pathname.startsWith("/workers") ? "invert" : ""}/>
                  <p className={`text-base font-normal${pathname.startsWith("/workers") ? "text-[#fff]" : "text-[#364152]"}`}>{t('workers')}</p>
                </div>
              ):(
                <div className='flex justify-center items-center py-4 px-2'>
                  <img src="/images/icons/workers.svg" alt="" className={pathname.startsWith("/workers") ? "invert" : ""}/>
                </div>
              )}
            </Link>
          </li>

          <li  className={`cursor-pointer  rounded ${pathname.startsWith("/services") ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/services" onClick={() => setIsSidebarOpen(false)}>
              {open?(
              //open 
                <div className='flex gap-4 items-center py-4 px-2'>
                  <img src="/images/icons/Services.svg" alt="" className={pathname.startsWith("/services") ? "invert" : ""}/>
                  <p className={`text-base font-normal${pathname.startsWith("/services") ? "text-[#fff]" : "text-[#364152]"}`}>{t('Services')}</p>
                </div>
              ):(
                <div className='flex justify-center items-center py-2 px-2'>
                  <img src="/images/icons/Services.svg" alt="" className={pathname.startsWith("/services") ? "invert" : ""}/>
                </div>
              )}
            </Link>
          </li>

          <li  className={`cursor-pointer rounded ${pathname.startsWith("/conversations") ? "bg-[#C69815] text-[#fff]" : ""}`}>
            {/* <Link href="/Auth/Signup/Company/CompanyInformation/FirstCompanyInformation" onClick={() => setIsSidebarOpen(false)}> */}
            <Link href="/conversations" onClick={() => setIsSidebarOpen(false)}>
              {open?(
              //open 
                <div className='flex gap-4 items-center py-4 px-2'>
                  <img src="/images/icons/conversations.svg" alt="" className={pathname.startsWith("/conversations") ? "invert" : ""}/>
                  <p className={`text-base font-normal${pathname.startsWith("/conversations") ? "text-[#fff]" : "text-[#364152]"}`}>{t('conversations')}</p>
                </div>
              ):(
                <div className='flex justify-center items-center py-2 px-2'>
                  <img src="/images/icons/conversations.svg" alt="" className={pathname.startsWith("/conversations") ? "invert" : ""}/>
                </div>
              )}
            </Link>
          </li>

          <li  className={`cursor-pointer  rounded ${pathname.startsWith("/finance") ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/finance" onClick={() => setIsSidebarOpen(false)}>
              {open?(
              //open 
                <div className='flex gap-4 items-center py-4 px-2'>
                  <img src="/images/icons/Finance.svg" alt="" className={pathname.startsWith("/finance") ? "invert" : ""}/>
                  <p className={`text-base font-normal${pathname.startsWith("/finance") ? "text-[#fff]" : "text-[#364152]"}`}>{t('Finance')}</p>
                </div>
              ):(
                <div className='flex justify-center items-center py-2 px-2'>
                  <img src="/images/icons/Finance.svg" alt="" className={pathname.startsWith("/finance") ? "invert" : ""} />
                </div>
              )}
            </Link>
          </li>

          <li className={`cursor-pointer  rounded ${pathname.startsWith("/technicalSupport") ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/technicalSupport" onClick={() => setIsSidebarOpen(false)}>
              {open?(
              //open 
                <div className='flex gap-4 items-center py-4 px-2'>
                  <img src="/images/icons/dashboard.svg" alt="" className={pathname.startsWith("/technicalSupport")  ? "invert" : ""} />
                  <p className={`text-base font-normal${pathname.startsWith("/technicalSupport") ? "text-[#fff]" : "text-[#364152]"}`}>{t('technical support')}</p>
                </div>
              ):(
                <div className='flex justify-center items-center py-2 px-2'>
                  <img src="/images/icons/dashboard.svg" alt="" className={pathname.startsWith("/technicalSupport")  ? "invert" : ""}/>
                </div>
              )}
            </Link>
          </li>


      
            <li  className={`cursor-pointer  rounded  mt-auto mb-2 ${pathname.startsWith("/settings") ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <Link href="/settings" onClick={() => setIsSidebarOpen(false)}>
                {open?(
                //open 
                  <div className='flex gap-4 items-center py-4 px-2'>
                    <img src="/images/icons/settings.svg" alt=""className={pathname.startsWith("/settings") ? "invert" : ""} />
                    <p className={`text-base font-normal${pathname.startsWith("/settings") ? "text-[#fff]" : "text-[#364152]"}`}>{t('Settings')}</p>
                  </div>
                ):(
                  <div className='flex justify-center items-center py-2 px-2'>
                    <img src="/images/icons/settings.svg" alt="" className={pathname.startsWith("/settings") ? "invert" : ""}/>
                  </div>
                )}
            </Link>
            </li>
          
            <li  className={`cursor-pointer py-2 px-2 rounded   ${pathname.startsWith("/signout") ? "bg-[#C69815] text-[#fff]" : ""}`}>
            <button  onClick={handleLogout}>
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
            </button>

            </li>
    

        </ul>
      </nav>

    

    </aside>
  );
  
}

export default Sidebar;


