
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Link from 'next/link';


function Sidebar() {
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(null); // track clicked li
  const [currentPath, setCurrentPath] = useState(""); // store path/name clicked



  return (
    <aside 
      className={`border-x border-[#E3E8EF] transition-all p-4 duration-200 h-screen relative 
        ${open ? "w-70" : "w-18"}`}
    >

      {/* Logo open and close */}
      <button
        onClick={() => setOpen(!open)}
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
      <nav className="">
        <ul className=''>
          <li className={`cursor-pointer py-4 px-2 rounded ${activeIndex === 0 ? "bg-[#C69815] text-[#fff] " : ""}`}
              onClick={() => { setActiveIndex(0); setCurrentPath('dashboard'); }}>
            {open?(
            //open 
              <div className='flex gap-4 items-center'>
                <img src="/images/icons/dashboard.svg" alt="" className={activeIndex === 0 ? "invert" : ""}/>
                <p>{t('dashboard')}</p>
              </div>
            ):(
              <div className='flex justify-center items-center'>
                <img src="/images/icons/dashboard.svg" alt="" className={activeIndex === 0 ? "invert" : ""}/>
              </div>
            )}
          </li>

          <li  className={`cursor-pointer py-4 px-2 rounded ${activeIndex === 1 ? "bg-[#C69815] text-[#fff]" : ""}`}
            onClick={() => { setActiveIndex(1); setCurrentPath('dashboard'); }}>
            {open?(
            //open 
              <Link href={`/login`} className='flex gap-4 items-center'>
                <img src="/images/icons/Requests.svg" alt="" className={activeIndex === 1 ? "invert" : ""}/>
                <p>{t('Requests')}</p>
              </Link>
            ):(
              <div className='flex justify-center items-center'>
                <img src="/images/icons/Requests.svg" alt="" className={activeIndex === 1 ? "invert" : ""}/>
              </div>
            )}
          </li>

          <li  className={`cursor-pointer py-4 px-2 rounded ${activeIndex === 2 ? "bg-[#C69815] text-[#fff]" : ""}`}
            onClick={() => { setActiveIndex(2); setCurrentPath('dashboard'); }}>
            {open?(
            //open 
              <div className='flex gap-4 items-center'>
                <img src="/images/icons/workers.svg" alt="" className={activeIndex === 2 ? "invert" : ""}/>
                <p>{t('workers')}</p>
              </div>
            ):(
              <div className='flex justify-center items-center'>
                <img src="/images/icons/workers.svg" alt="" className={activeIndex === 2 ? "invert" : ""}/>
              </div>
            )}
          </li>

          <li  className={`cursor-pointer py-4 px-2 rounded ${activeIndex === 3 ? "bg-[#C69815] text-[#fff]" : ""}`}
            onClick={() => { setActiveIndex(3); setCurrentPath('dashboard'); }}>
            {open?(
            //open 
              <div className='flex gap-4 items-center'>
                <img src="/images/icons/Services.svg" alt="" className={activeIndex === 3 ? "invert" : ""}/>
                <p>{t('Services')}</p>
              </div>
            ):(
              <div className='flex justify-center items-center'>
                <img src="/images/icons/Services.svg" alt="" className={activeIndex === 3 ? "invert" : ""}/>
              </div>
            )}
          </li>

          <li  className={`cursor-pointer py-4 px-2 rounded ${activeIndex === 4 ? "bg-[#C69815] text-[#fff]" : ""}`}
            onClick={() => { setActiveIndex(4); setCurrentPath('dashboard'); }}>
            {open?(
            //open 
              <div className='flex gap-4 items-center'>
                <img src="/images/icons/conversations.svg" alt="" className={activeIndex === 4 ? "invert" : ""}/>
                <p>{t('conversations')}</p>
              </div>
            ):(
              <div className='flex justify-center items-center'>
                <img src="/images/icons/conversations.svg" alt="" className={activeIndex === 4 ? "invert" : ""}/>
              </div>
            )}
          </li>

          <li  className={`cursor-pointer py-4 px-2 rounded ${activeIndex === 5 ? "bg-[#C69815] text-[#fff]" : ""}`}
            onClick={() => { setActiveIndex(5); setCurrentPath('dashboard'); }}>
            {open?(
            //open 
              <div className='flex gap-4 items-center'>
                <img src="/images/icons/Finance.svg" alt="" className={activeIndex === 5 ? "invert" : ""}/>
                <p>{t('Finance')}</p>
              </div>
            ):(
              <div className='flex justify-center items-center'>
                <img src="/images/icons/Finance.svg" alt="" className={activeIndex === 5 ? "invert" : ""} />
              </div>
            )}
          </li>

          <li className={`cursor-pointer py-4 px-2 rounded ${activeIndex === 6 ? "bg-[#C69815] text-[#fff]" : ""}`}
            onClick={() => { setActiveIndex(6); setCurrentPath('dashboard'); }}>
            {open?(
            //open 
              <div className='flex gap-4 items-center'>
                <img src="/images/icons/dashboard.svg" alt="" className={activeIndex === 6 ? "invert" : ""} />
                <p>{t('technical support')}</p>
              </div>
            ):(
              <div className='flex justify-center items-center'>
                <img src="/images/icons/dashboard.svg" alt="" className={activeIndex === 6 ? "invert" : ""}/>
              </div>
            )}
          </li>


        <div  >
            <li  className={`cursor-pointer py-4 px-2 rounded  mt-auto mb-2  ${activeIndex === 7 ? "bg-[#C69815] text-[#fff]" : ""}`}
              onClick={() => { setActiveIndex(7); setCurrentPath('dashboard'); }}>
              {open?(
              //open 
                <div className='flex gap-4 items-center'>
                  <img src="/images/icons/settings.svg" alt=""className={activeIndex === 7 ? "invert" : ""} />
                  <p>{t('Settings')}</p>
                </div>
              ):(
                <div className='flex justify-center items-center'>
                  <img src="/images/icons/settings.svg" alt="" className={activeIndex === 7 ? "invert" : ""}/>
                </div>
              )}
            </li>
          
            <li  className={`cursor-pointer py-4 px-2 rounded  mt-auto mb-2  ${activeIndex === 8 ? "bg-[#C69815] text-[#fff]" : ""}`}
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
        </div>

        </ul>
      </nav>

    

    </aside>
  );
}

export default Sidebar;
