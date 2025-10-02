"use client";
import LoginBtn from '@/app/Components/Buttons/LoginBtn';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

function EmailOtpPage({ onNext, onPrev , formData , handleChange , handleSubmit}) {
    const { t } = useTranslation();
    
      const handleChangee = (e, index) => {
        if (e.target.value.length === 1) {
          const nextInput = document.getElementById(`otp-${index + 1}`);
          if (nextInput) {
            nextInput.focus(); 
          }
        }
      };
      const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !e.target.value) {
          const prevInput = document.getElementById(`otp-${index - 1}`);
          if (prevInput) {
            prevInput.focus(); 
          }
        }
      };
    
      //timer
      const [timeLeft, setTimeLeft] = useState(30);
      const [canResend, setCanResend] = useState(false);
    
      useEffect(() => {
        if (!canResend && timeLeft > 0) {
          const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
          }, 1000);
          return () => clearInterval(timer);
        } else if (timeLeft === 0) {
          setCanResend(true);
        }
      }, [timeLeft, canResend]);
    
      const handleResend = () => {
        setTimeLeft(10); // reset timer
        setCanResend(false); // hide resend link
        console.log("📩 Resend code request sent!");
      };
  return (
    <>
              {/* logo */}
          <div className='WHLogA bg-[#EEF2F6] rounded-[100px] flex justify-center items-center mx-auto mb-5'>
            <p className='WHLogB bg-[#CDD5DF] rounded-[100px] flex justify-center items-center '>
            <img src="/images/icons/emailotp.svg" className='WHLogC' alt="" />
            </p>
          </div>
          
          <div className='flex flex-col items-center '>
            <p className='text-[#C69815] text-xl font-bold'>{t('Email verification')}</p>
            <p className="text-center text-lg text-[#656565] mt-4 w-[550px]">
            {t("Please enter the code we sent to your number.")} 
              <span className="font-semibold text-[#C69815]">Exmple@gmail.comل</span> 
            {t("To verify the code")}
            </p>
          </div>

          <div className='my-10  '>
            <p className='text-[#4D4D4D] text-base font-medium mb-3 flex justify-center'>{t('verification code')}</p>
            <form className="flex gap-4 justify-center"dir="ltr">
              {[0, 1, 2, 3].map((i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  type="text"
                  maxLength="1"
                  onChange={(e) => handleChangee(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className="border border-[#C7C7C7] bg-[#fff] w-25 h-20 rounded-[3px] text-center text-lg"
                />
              ))}
            </form>
              <div className="mt-6">
                {!canResend ? (
                  <div className='flex justify-center items-center gap-2 '>
                    <span className="text-[#4D4D4D] text-base font-normal">
                      {t("Resend after")}
                    </span>
                    <span className="text-[#C69815] text-base font-bold">
                      00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
                    </span>
                  </div>
                ) : (
                  <div className='flex justify-center '>
                    <button
                      onClick={handleResend}
                      className="text-[#C69815] text-base font-bold   "
                    >
                      {t("Resend")}
                    </button>
                  </div>  
                )}
              </div>
          </div>

          <div className='flex gap-6 justify-center mb-12'>
            
            <button
              onClick={onPrev}
              className="px-4 py-2 w-64 border border-[#C69815] text-[#C69815] rounded"
            >
              {t('the previous')}
            </button>
            <button
              onClick={onNext}
              className="px-4 py-2 w-64 h-15 bg-[#C69815] text-white rounded"
            >
              {t('the next')}
            </button>
          </div>
          
          
          <div className="flex justify-center gap-1.5">
            <p className="text-[#697586] text-lg font-normal">{t('Already have an account?')} </p>
            <LoginBtn />
          </div>


    </>
  )
}

export default EmailOtpPage