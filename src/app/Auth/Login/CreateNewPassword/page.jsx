"use client";
import ConfirmationBtn from "@/app/Components/Buttons/ConfirmationBtn";
import PreviousBtn from "@/app/Components/Buttons/PreviousBtn";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function CreateNewPasswordpage() {
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
      <div className="p-8 lg1:flex justify-between gap-8  ">
        <section className="w-full mt-15">
          <div className="flex flex-col items-center">
            <p className="mb-6 text-[#C69815] text-2xl font-semibold">
              {t("Create a new password")}
            </p>
            <p className="text-[#656565] text-lg font-normal max-w-[500px] text-center">
              {t("Your phone number has been verified and you can create a new password.")}
            </p>
            <img className="my-12 lg1:my-17.5" src="/images/lockLogIcon.svg" alt="" />
          </div>

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
            <PreviousBtn path='../Login/VerifyNumber' className='w-78' />
            <ConfirmationBtn path='../Login/ConfirmationDone' className='w-78' />
          </div>

          <p className='flex justify-center gap-1.5'>
            <span className='text-[#697586] text-lg font-normal'>{t('Dont have an account?')}</span>
            <Link href='/Auth/Signup' className="text-[#9E7A11] text-lg font-medium">
              {t("Create an account")}
            </Link>
          </p>

        </section>

      <section className="w-full hidden lg1:block rounded-[10px]"
          style={{
            background:
              "linear-gradient(180deg, #DDA918 48.1%, #9D7810 99.85%)",
          }}
        >
          <p className="flex justify-end ml-4">
            <img src="/images/AuthLogUP.png" alt="" className='w-29 h-49' />
          </p>

          <div className="mt-4.5 w-[70%] mx-auto flex flex-col gap-4 text-center text-white ">
            <p className="text-3xl font-bold">
              {t("Join the ZETIME Partner Network")}
            </p>
            <p className="text-lg font-normal leading-9">
              {t(
                "Register now and get the tools you need to reach a wider customer base and achieve your goals efficiently."
              )}
            </p>
            <p className="mt-20">
              <img src="/images/AuthLogMiddle.svg" alt="" />
            </p>
          </div>

          <p className="  ">
            <img src="/images/AuthLogDown.svg" alt="" className='w-29 h-49' />
          </p>
        </section>
            

      </div>
    </>
  );
}

export default CreateNewPasswordpage;
