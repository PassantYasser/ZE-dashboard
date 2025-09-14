"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

function FirstSetPasswordPage({  onPrev  , nextSub ,prevSub  }) {
  const { t } = useTranslation();
      const [showPassword, setShowPassword] = useState(false);
      const [showNewPassword , setShowNewPassword]=useState(false);
      const [password, setPassword] = useState("");
      const [isFocused, setIsFocused] = useState(false); 
      const [confirmPassword, setConfirmPassword] = useState("");
      const [error, setError] = useState("");
  
  
      // Validation rules
      const rules = {
        uppercase: /[A-Z]/.test(password),
        symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        number: /[0-9]/.test(password),
        length: password.length >= 8,
      };
  
      useEffect(() => {
      if (confirmPassword && password !== confirmPassword) {
        setError(t("Password does not match"));
      } else {
        setError("");
      }
    }, [password, confirmPassword, t]);
  
  return (
    <>
    

    <form>
      <label className="text-[#364152] fontSizeA font-normal">
        {t("New Password")}
      </label>

      <div className="relative mt-3 mb-3">
        <input
          className="w-full h-15 p-3  border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm"
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          placeholder={t("Enter the new password")}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setIsFocused(true)}   
          onBlur={() => setIsFocused(false)}            
        />

        {/* Icon */}
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#9A9A9A] text-xl"
        >
          {showPassword ?
            (
              <img src="/images/icons/eyeClose.svg" alt="" />
            )
            :(
              <img src="/images/icons/eyeOpen.svg" alt="" />
            )
          }
        </span>
      </div>
      {isFocused && (
        <ul className="mb-6 space-y-1 text-sm">
          <li className={rules.uppercase ? "text-green-600" : "text-[#697586]"}>
            {t("Use at least one uppercase letter")}
          </li>
          <li className={rules.symbol ? "text-green-600" : "text-[#697586]"}>
            {t("Use at least one symbol")}
          </li>
          <li className={rules.number ? "text-green-600" : "text-[#697586]"}>
            {t("Use at least one number")}
          </li>
          <li className={rules.length ? "text-green-600" : "text-[#697586]"}>
            {t("Your password must be at least 8 characters long")}
          </li>
        </ul>
      )}
      <label className="text-[#364152] fontSizeA font-normal">
        {t("Confirm password")}
      </label>
      <div className="relative mt-3">
        <input
          className={`w-full h-15 p-3  border rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm ${
            error ? "border-red-500" : "border-[#C8C8C8]"
          }`}
          type={showNewPassword ? "text" : "password"}
          name="confirmPassword"
          id="confirmPassword"
          placeholder={t("Re-enter the new password")}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* Icon */}
        <span
          onClick={() => setShowNewPassword(!showNewPassword)}
          className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#9A9A9A] text-xl"
        >
          {showNewPassword ?
            (
              <img src="/images/icons/eyeClose.svg" alt="" />
            )
            :(
              <img src="/images/icons/eyeOpen.svg" alt="" />
            )
          }
        </span>
      </div>


  {/* Error Message */}
  {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      
    </form>

    <div className='flex gap-6 justify-center mb-12 mt-10'>

      <button
        onClick={onPrev}
        className="px-4 py-2 w-64  bg-yellow-600 text-white rounded"
      >
        السابق
      </button>
      <button
        onClick={nextSub}
        className="px-4 py-2 w-64 h-15 bg-yellow-600 text-white rounded"
      >
        التالي
      </button>
    </div>

    <p className='flex justify-center gap-1.5'>
      <span className='text-[#697586] text-lg font-normal'>{t('Dont have an account?')}</span>
      <Link href='/Auth/Signup' className="text-[#9E7A11] text-lg font-medium">
        {t("Create an account")}
      </Link>
    </p>


    </>
  )
}

export default FirstSetPasswordPage