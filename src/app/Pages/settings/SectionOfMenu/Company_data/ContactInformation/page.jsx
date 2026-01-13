
"use client";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";

function ContactInformationPage({userData, onUpdate}) {
  const { t } = useTranslation();

  const [contactData, setContactData] = useState({
    company_phone: userData?.company_phone || "",
    wts_number: userData?.wts_number || ""
  });

  React.useEffect(() => {
    if (userData) {
      setContactData({
        company_phone: userData.company_phone || "",
        wts_number: userData.wts_number || ""
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!onUpdate) return;
    
    const formData = new FormData();
    formData.append('company_phone', contactData.company_phone);
    formData.append('wts_number', contactData.wts_number);
    
    const success = await onUpdate(formData);
    if (success) {
      alert(t('Profile updated successfully!'));
      console.log('✅ Saved to database and localStorage');
    } else {
      alert(t('Failed to update profile'));
    }
  };

  return (
    <div className="border border-[#E3E8EF] mb-8">
      <Header />

      <section className="p-6">
        

        {/* Company number */}
        <div>
          <p className="text-[#4B5565] text-base font-normal  mb-1.5">{t('Company number')}</p>
          <input 
            type="text"
            name="company_phone"
            value={contactData.company_phone}
            onChange={handleChange}
            placeholder='0000000000000'            
            className="h-14 p-3 w-full rounded-[3px] border border-[#E3E8EF] shadow-xm outline-none placeholder:text-[#9A9A9A] placeholder:text-sm placeholder:font-normal" 
          />
        </div>

        {/* WhatsApp number */}
        <div className="mt-4"> 
          <p className="text-[#4B5565] text-base font-normal  mb-1.5">{t('WhatsApp number')}</p>
          <input 
            type="text"
            name="wts_number"
            value={contactData.wts_number}
            onChange={handleChange}
            placeholder='0000000000000'            
            className="h-14 p-3 w-full rounded-[3px] border border-[#E3E8EF] shadow-xm outline-none placeholder:text-[#9A9A9A] placeholder:text-sm placeholder:font-normal" 
          />
        </div>

        
      



        {/* btn */}
        <button 
          className="bg-[var(--color-primary)] h-15 w-62.5 text-[#fff] text-base font-medium rounded-[3px] mt-6 cursor-pointer"
          onClick={handleSave}
        >
          {t('Save changes')}
        </button>
      </section>

      
    </div>
  );
}

export default ContactInformationPage;
