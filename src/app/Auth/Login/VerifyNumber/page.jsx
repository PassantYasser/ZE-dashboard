"use client";
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import ConfirmationBtn from '../../../Components/Buttons/ConfirmationBtn';
import PreviousBtn from '../../../Components/Buttons/PreviousBtn';


function VerifyNumberpage() {
  const { t } = useTranslation();

  const handleChange = (e, index) => {
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

      <div className='p-8 flex justify-between gap-8 h-screen '>
        <section className='w-full mt-50.5'>
          {/* logo */}
          <div className='w-27.5 h-27.5 bg-[#EEF2F6] rounded-[100px] flex justify-center items-center mx-auto mb-5'>
            <p className='w-22.5 h-22.5 bg-[#CDD5DF] rounded-[100px] flex justify-center items-center '>
            <img src="/images/icons/call-received.svg" className='p-2.5' alt="" />
            </p>
          </div>
          
          <div className='flex flex-col items-center '>
            <p>{t('Verify number')}</p>
            {/* <p>{t('Please enter the code we sent to your number.')} <span>*******15</span> {t('To verify the code')}</p> */}
            <p className="text-center text-lg text-[#656565] mt-4 w-[400px]">
            {t("Please enter the code we sent to your number.")} 
              <span className="font-semibold text-[#C69815]"> *******15 </span> 
            {t("To verify the code")}
            </p>
          </div>

          <div className='my-10 flex flex-col justify-center items-center '>
            <p className='text-[#4D4D4D] text-base font-medium mb-3 '>{t('verification code')}</p>
            <form className="flex gap-4 justify-center"dir="ltr">
              {[0, 1, 2, 3].map((i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  type="text"
                  maxLength="1"
                  onChange={(e) => handleChange(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className="border border-[#C7C7C7] bg-[#fff] w-25 h-20 rounded-[3px] text-center text-lg"
                />
              ))}
            </form>
            {/* <p className='flex gap-2 mt-6'>
              <span className='text-[#4D4D4D] text-base font-normal'>{t('Resend after')}</span>
              <span className='text-[#C69815] text-base font-bold'>00:30</span>
            </p> */}
              <div className="flex gap-2 mt-6">
                {!canResend ? (
                  <>
                    <span className="text-[#4D4D4D] text-base font-normal">
                      {t("Resend after")}
                    </span>
                    <span className="text-[#C69815] text-base font-bold">
                      00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
                    </span>
                  </>
                ) : (
                  <button
                    onClick={handleResend}
                    className="text-[#C69815] text-base font-bold  "
                  >
                    {t("Resend")}
                  </button>
                )}
              </div>
          </div>

          <div className='flex gap-6 justify-center mb-12'>
            <ConfirmationBtn />
            <PreviousBtn />
          </div>
          <p className='flex justify-center gap-1.5'>
              <span className='text-[#697586] text-lg font-normal'>{t('Dont have an account?')}</span>
              <span className='text-[#9E7A11] text-lg font-medium'>{t('Create an account')}</span>
            </p>
        </section>
      

  
        
        <section className='w-full  rounded-[10px]'
          style={{ background: "linear-gradient(180deg, #DDA918 48.1%, #9D7810 99.85%)" }}
        >
          <p className='flex justify-end ml-4'>
            <img src="/images/AuthLogUP.png" alt="" />
          </p>
        
          <div className="mt-4.5 w-[70%] mx-auto flex flex-col gap-4 text-center text-white ">
            <p className="text-3xl font-bold">
              {t("Join the ZETIME Partner Network")}
            </p>
            <p className="text-lg font-normal leading-9">
              {t("Register now and get the tools you need to reach a wider customer base and achieve your goals efficiently.")}
            </p>
            <p className='mt-20'>
              <img src="/images/AuthLogMiddle.svg" alt="" />
            </p>
          </div>
  
          <p className='fixed bottom-8 mr-4 '>
            <img src="/images/AuthLogDown.svg" alt="" />
          </p>
    
        </section>
  
      </div>

    </>  
    )
}

export default VerifyNumberpage