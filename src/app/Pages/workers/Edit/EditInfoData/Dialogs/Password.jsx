"use client"
import { Dialog } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

function Password({openPassword , setOpenPassword}) {
      const {t}= useTranslation();

        const [showPassword, setShowPassword] = useState(false);
        const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
        const [isFocused, setIsFocused] = useState(false);
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");
        const [rules, setRules] = useState({
          uppercase: false,
          symbol: false,
          number: false,
          length: false,
        });
      
        // ✅ Handle password input and update rules
        const handlePasswordChange = (e) => {
          const value = e.target.value;
          setPassword(value);
      
          setRules({
            uppercase: /[A-Z]/.test(value),
            symbol: /[!@#$%^&*(),.?":{}|<>]/.test(value),
            number: /[0-9]/.test(value),
            length: value.length >= 8,
          });
        };
      
        // ✅ Check if passwords match
        const passwordsMatch =
          confirmPassword.length > 0 && password === confirmPassword;
      
  return (
    <>
      <Dialog 
        open={openPassword} 
        onClose={() => setOpenPassword(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ className: "ServicePage-dialog" }}
      >
      <button className='pt-8 px-6 pb-2 cursor-pointer' onClick={()=>setOpenPassword(false)}>
        <p className='border border-[#DDD] rounded-[100%] w-10 h-10 flex justify-center items-center  '>
          <img src="/images/icons/xx.svg" alt="" />
        </p>
      </button>


      <div className='flex flex-col gap-5 items-center justify-center mb-8'>
        {/* icon */}
        <div className='bg-[#EEF2F6] w-17.5 h-17.5 rounded-[100%] flex items-center justify-center '>
          <div className='bg-[#CDD5DF] w-12.5 h-12.5 rounded-[100%] flex items-center justify-center'>
            <img src="/images/icons/emailotp.svg" className="w-7.5 h-7.5"  />
          </div>
        </div>

        {/* title */}
        <p className='text-[var(--color-primary)] text-xl font-bold'>{t('Change email')}</p>

      </div>
      
      <form action="" className=' px-6 '>
        {/* New Password */}
        <div className="flex flex-col mb-3">
          <label className="text-[#364152] text-base font-normal">
            {t("password")}
          </label>

          <div className="relative mt-3">
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? (
                <img src="/images/icons/eyeClose.svg" alt="Hide password" />
              ) : (
                <img src="/images/icons/eyeOpen.svg" alt="Show password" />
              )}
            </span>

            {/* Input field */}
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder={t("Enter your password")}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={handlePasswordChange}
              className="w-full h-15 p-3 pl-10 rounded-[3px] border border-[#C8C8C8] shadow-sm outline-none placeholder:text-[#9A9A9A] placeholder:text-sm placeholder:font-normal"
            />
          </div>

          {/* Show rules only when focused */}
          {isFocused && (
            <ul className="mt-3 mb-6 space-y-1 text-sm">
              <li
                className={
                  rules.uppercase
                    ? "text-green-600 list-none flex gap-2"
                    : "text-[#697586] list-disc mx-5"
                }
              >
                <span>
                  {rules.uppercase && <img src="/images/icons/true.svg" alt="" />}
                </span>
                <span>{t("Use at least one uppercase letter")}</span>
              </li>

              <li
                className={
                  rules.symbol
                    ? "text-green-600 list-none flex gap-2"
                    : "text-[#697586] list-disc mx-5"
                }
              >
                <span>
                  {rules.symbol && <img src="/images/icons/true.svg" alt="" />}
                </span>
                <span>{t("Use at least one symbol")}</span>
              </li>

              <li
                className={
                  rules.number
                    ? "text-green-600 list-none flex gap-2"
                    : "text-[#697586] list-disc mx-5"
                }
              >
                <span>
                  {rules.number && <img src="/images/icons/true.svg" alt="" />}
                </span>
                <span>{t("Use at least one number")}</span>
              </li>

              <li
                className={
                  rules.length
                    ? "text-green-600 list-none flex gap-2"
                    : "text-[#697586] list-disc mx-5"
                }
              >
                <span>
                  {rules.length && <img src="/images/icons/true.svg" alt="" />}
                </span>
                <span>{t("Your password must be at least 8 characters long")}</span>
              </li>
            </ul>
          )}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col ">
          <label className="text-[#364152] text-base font-normal">
            {t("Confirm password")}
          </label>

          <div className="relative mt-3">
            <span
              onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              {showPasswordConfirm ? (
                <img src="/images/icons/eyeClose.svg" alt="Hide password" />
              ) : (
                <img src="/images/icons/eyeOpen.svg" alt="Show password" />
              )}
            </span>

            <input
              type={showPasswordConfirm ? "text" : "password"}
              value={confirmPassword}
              placeholder={t("Re-enter your password")}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full h-15 p-3 pl-10 rounded-[3px] border shadow-sm outline-none placeholder:text-[#9A9A9A] placeholder:text-sm placeholder:font-normal ${
                confirmPassword
                  ? passwordsMatch
                    ? "border-green-500"
                    : "border-red-500"
                  : "border-[#C8C8C8]"
              }`}
            />
          </div>

          {confirmPassword.length > 0 && (
            <p
              className={`mt-2 text-sm ${
                passwordsMatch ? "text-green-600" : "text-red-500"
              }`}
            >
              {passwordsMatch
                ? t("Passwords match") 
                : t("Passwords do not match")}
            </p>
          )}
        </div>

        <div className='my-6 flex gap-3'>
          <button className='w-full h-15 bg-[var(--color-primary)] text-[#fff] cursor-pointer rounded-[3px] flex justify-center items-center '>
            {t('save')}
          </button>
          <button className='w-full h-15 border border-[var(--color-primary)] text-[var(--color-primary)] cursor-pointer rounded-[3px] flex justify-center items-center '>
            {t('cancel')}
          </button>
        </div>
      </form>
      
      </Dialog>
    </>
  )
}

export default Password