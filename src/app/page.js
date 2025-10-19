"use client"; //  👈Client Component ده يخلي المكون 
import React, { useEffect, useState } from 'react'
import MainLayout from './Components/MainLayout/MainLayout';
import { useTranslation } from 'react-i18next';
import i18n from "../language/i18n";
import { usePathname, useRouter } from 'next/navigation';

function Homepage({ children }) {
    const [open, setOpen] = useState(true);
  
      const { t } = useTranslation();
  
    // Language change handler
    const handleLangChange = (e) => {
      const newLang = e.target.value;
      i18n.changeLanguage(newLang);
      document.documentElement.setAttribute("dir", newLang === "ar" ? "rtl" : "ltr");
    };

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && !pathname.startsWith("/Auth")) {
      router.push("/Auth/Login");
    }
    if (token && pathname.startsWith("/Auth")) {
      router.push("/");
    }
  }, [pathname, router]);

  // لو في صفحة Auth متعرضش الـ Layout
  if (pathname.startsWith("/Auth")) {
    return <>{children}</>;
  }

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
