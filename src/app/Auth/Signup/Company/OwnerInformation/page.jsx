"use client";
import { checkEmailThunk, checkEnterPhoneThunk } from "@/redux/slice/Auth/AuthSlice";
import LoginBtn from "../../../../Components/Buttons/LoginBtn";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { useDispatch, useSelector } from "react-redux";


function OwnerInformationPage({ onNext, currentStep, steps ,formData ,handleChange , handleSubmit , setFormData }) {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { emailExists, loading, error , otpSent } = useSelector((state) => state.auth);


  console.log(formData);

  // if no data entered
  const [showErrors, setShowErrors] = useState(false);
  const isFormValid = () => {
    return (
      formData?.firstname.trim() !== "" &&
      formData?.middlename.trim() !== "" &&
      formData?.lastname.trim() !== "" &&
      formData?.email.trim() !== "" &&
      formData?.national_id.trim() !== "" &&
      formData?.phone.trim() !== "" &&
      formData?.country_code.trim() !== "" && 
      formData?.nationality.trim() !== "" &&  
      formData?.gender.trim() !== ""
    );
  };


const handleNextClick = async (e) => {
  e.preventDefault();

  if (!isFormValid()) {
    setShowErrors(true);
    return;
  }

  // ✅ Step 1: Check Email
  const emailResult = await dispatch(checkEmailThunk(formData.email));

  if (checkEmailThunk.fulfilled.match(emailResult)) {
    if (emailResult.payload.exists) {
      console.log("Email already exists");
      return;
    }
  } else {
    console.error(emailResult.payload);
    return;
  }

  // ✅ Step 2: Check Phone (Send OTP)
  const phoneResult = await dispatch(checkEnterPhoneThunk({ phone: formData?.phone }));

  if (checkEnterPhoneThunk.fulfilled.match(phoneResult)) {
    console.log("OTP sent to phone:", phoneResult.payload);
    onNext();
  } else {
    console.log('errror');
    return;
  }
};

useEffect(() => {
  const role = localStorage.getItem("role");
  if (role) {
    setFormData((prev) => ({
      ...prev,
      role,
    }));
  }
}, []);
  
  
    
    
  
    // Nationality 
    const [open1, setOpen1] = useState(false);
    const [selected1, setSelected1] = useState("");
    const dropdownRef1 = useRef(null);
    const NationalityOptions = [
    'مصري',
    'سعودي',
    'إماراتي',
    'كويتي',
    'قطري',
    'بحريني',
    'عُماني',
    'أردني',
    'فلسطيني',
    ]

    // Gender 
    const [open2, setOpen2] = useState(false);
    const [selected2, setSelected2] = useState("");
    const dropdownRef2 = useRef(null);
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) setOpen1(false);
        if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) setOpen2(false);
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const GenderOptions = [
      t('male'),
      t('female'),
      t('other')
    ]


  return (
    <>
      <form className=" ">
        {/* //role input */}
        <div>
          <input 
            type="hidden" 
            name="role"
            value={formData?.role || ""}
          />
        </div>
        

        <div className="flex gap-4.5 w-full">
          {/* first name input */}
          <div className="flex flex-col ">
            <label className="text-[#364152] text-base font-normal mb-3">
              {t("First Name")}
            </label>
            <input 
              type="text" 
              name="firstname"
              value={formData?.firstname}    
              onChange={handleChange}
              className=" h-15 p-3 w-full border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm focus:border-[#C69815] outline-none"
              placeholder={t('Enter first name')}
            />
            {showErrors && !formData?.firstname && (
              <span className="text-red-500 text-sm mt-1">{t("firstname is required")}</span>
            )}
          </div>

          {/* Second name input */}
          <div className="flex flex-col  ">
            <label className="text-[#364152] text-base font-normal mb-3">
              {t("Second name")}
            </label>
            <input 
              type="text" 
              name="middlename"
              value={formData?.middlename}    
              onChange={handleChange}
              className=" h-15 p-3 w-full border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm  focus:border-[#C69815] outline-none"
              placeholder={t('Enter Second name')}
            />
            {showErrors && !formData?.middlename && (
              <span className="text-red-500 text-sm mt-1">{t("Second name is required")}</span>
            )}
          </div>
          
          {/* last name input */}
          <div className="flex flex-col  ">
            <label className="text-[#364152] text-base font-normal mb-3">
              {t("Last Name")}/ {t("Family Name")}{" "}
            </label>
            <input 
              type="text"
              name="lastname"
              value={formData?.lastname}    
              onChange={handleChange} 
              className=" h-15 p-3 w-full  border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm focus:border-[#C69815] outline-none"
              placeholder={t('Enter last name/family name')}
            />
            {showErrors && !formData?.lastname && (
              <span className="text-red-500 text-sm mt-1">{t("lastname is required")}</span>
            )}
          </div>


        </div>

          <div className="flex gap-4.5  w-full mt-4">
            {/* Nationality */}
            <div className="flex flex-col w-full  mb-6">
            <label className="text-[#364152] text-base font-normal mb-3">
              {t("Nationality")}
            </label>
            <div className="relative w-full mb-1" ref={dropdownRef1}>
              <div
                onClick={() => setOpen1(!open1)}
                className="h-15 p-3 border border-[#C8C8C8] rounded-[3px] cursor-pointer flex items-center justify-between"
              >
                <span className={formData?.nationality ? "text-[#364152]" : "text-[#9A9A9A]"}>
                  {formData?.nationality  || t("Select the main category")}
                </span>
                <span className="ml-2">
                  {open1 ? (
                    <img src="/images/icons/ArrowUp.svg" alt="" />
                  ) : (
                    <img src="/images/icons/ArrowDown.svg" alt="" />
                  )}
                </span>
              </div>
              {open1 && (
                <ul className="absolute left-0 right-0 border border-[#C8C8C8] bg-white rounded-[3px] shadow-md z-10 max-h-48 overflow-y-auto">
                  {NationalityOptions.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelected1(option);
                        setOpen1(false);
                        setFormData((prev) => ({
                          ...prev,
                          nationality: option,  
                        }));
                      }}
                      
                      className="p-3 hover:bg-[#F5F5F5] cursor-pointer"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {showErrors && !formData?.nationality && (
              <span className="text-red-500 text-sm mt-1">{t("nationality is required")}</span>
            )}
            </div>

            {/* Gender */}
            <div className="flex flex-col w-full mb-6">
              <label className="text-[#364152] text-base font-normal mb-3">
                {t("Gender")}
              </label>
              <div className="relative w-full mb-1" ref={dropdownRef2}>
                <div
                  onClick={() => setOpen2(!open2)}
                  className="h-15 p-3 border border-[#C8C8C8] rounded-[3px] cursor-pointer flex items-center justify-between"
                >
                  <span className={formData?.gender ? "text-[#364152]" : "text-[#9A9A9A]"}>
                    {formData?.gender  || t("Select a subcategory")}
                  </span>
                  <span className="ml-2">
                    {open2 ? (
                      <img src="/images/icons/ArrowUp.svg" alt="" />
                    ) : (
                      <img src="/images/icons/ArrowDown.svg" alt="" />
                    )}
                  </span>
                </div>
                {open2 && (
                  <ul className="absolute left-0 right-0 border border-[#C8C8C8] bg-white rounded-[3px] shadow-md z-10 max-h-48 overflow-y-auto">
                    {GenderOptions.map((option, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSelected2(option);
                          setOpen2(false);
                          setFormData((prev) => ({
                            ...prev,
                            gender: option,   
                          }));
                        }}
                        className="p-3 hover:bg-[#F5F5F5] cursor-pointer"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {showErrors && !formData?.gender && (
                <span className="text-red-500 text-sm mt-1">{t("gender is required")}</span>
              )}
            </div>  
          </div>    

        

        {/* national id input */}
        <div className="flex flex-col  mb-4 ">
          <label className="text-[#364152] text-base font-normal mb-3">
            {t("National ID number")} 
          </label>
          <input 
            type="text" 
            name="national_id"   
            value={formData?.national_id}   
            onChange={handleChange}   
            className=" h-15 p-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm focus:border-[#C69815] outline-none"
            placeholder={t('Enter your national ID number')}
          />
          {showErrors && !formData?.national_id && (
            <span className="text-red-500 text-sm mt-1">{t("national_id is required")}</span>
          )}
        </div>

        {/* email input */}
        <div className="flex flex-col mb-4">
          <label className="text-[#364152] text-base font-normal mb-3">
            {t("Email")} 
          </label>
          <input 
            type="text"
            name="email"
            value={formData?.email}    
            onChange={handleChange} 
            className=" h-15 p-3  border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm focus:border-[#C69815] outline-none "
            placeholder={t('Enter your email')}
          />
          {showErrors && !formData?.email && (
            <span className="text-red-500 text-sm mt-1">{t("email is required")}</span>
          )}
          {emailExists === true && (
            <span className="text-red-500 text-sm mt-1">
              {t("This email is already registered")}
            </span>
          )}
        </div>

        {/* phone input */}
        <div className="flex flex-col col-span-2 lg1:col-span-1">
          <label className="text-[#364152] text-base font-normal mb-3 block">
            {t("Mobile number")}
          </label>
          <div className="relative">
          <PhoneInput
            country={'sa'} 
            placeholder="000000000"
            containerClass="!w-full"
            inputClass="!w-full !h-[60px] !border !border-[#C8C8C8] !rounded-[3px] !pl-24 !text-left !text-[#364152] placeholder-[#9A9A9A] focus:border-[#C69815] outline-none"
            buttonClass="!absolute !left-0 !top-0 !h-full !px-3 !flex !items-center !gap-2 !bg-transparent !border-r-0"
            dropdownClass="!absolute !left-0 !top-full !mt-1 !z-50 !bg-white !border !border-[#C8C8C8] !rounded-md !shadow-lg"
            value={formData?.phone}  
            onChange={(value, country, e, formattedValue) => {
              setFormData({
                ...formData,
                country_code: `+${country.dialCode}`, 
                phone: value.replace(`+${country.dialCode}`, ""), 
              });
            }}
          />
          {/* if no data enter */}
          {showErrors && !formData?.country_code && (
              <span className="text-red-500 text-sm">{t("country_code is required")}</span>
            )}
          
          </div>
        </div>
            

        
  </form>

      {/* btn */}
      <button
        onClick={handleNextClick}
        className="px-4 py-2.5 cursor-pointer bg-[#C69815] text-white text-base font-medium  w-full mt-8 mb-10 h-15 rounded-[3px]"
      >
        {currentStep === steps?.length ? "إنهاء" : t('the next')}
      </button>

      <div className="flex justify-center gap-1.5">
        <p className="text-[#697586] text-lg font-normal">{t('Already have an account?')} </p>
        <LoginBtn />
      </div>


    </>
  );
}

export default OwnerInformationPage;
