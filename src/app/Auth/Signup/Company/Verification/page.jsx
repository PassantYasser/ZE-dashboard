"use client";
import ConfirmationBtn from '@/app/Components/Buttons/ConfirmationBtn';
import LoginBtn from '@/app/Components/Buttons/LoginBtn';
import PreviousBtn from '@/app/Components/Buttons/PreviousBtn';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import PhoneOtpPage from './PhoneOtp/page';
import EmailOtpPage from './EmailOtp/page';

function VerificationPage({ onNext, onPrev }) {
  const { t } = useTranslation();
  const [subStep, setSubStep] = useState(1);

  const nextSub = () => {
    if (subStep < 2) setSubStep((prev) => prev + 1);
  };

  const prevSub = () => {
    if (subStep > 1) setSubStep((prev) => prev - 1);
  };

  const renderSubStep = () => {
    switch (subStep) {
      case 1:
        return <PhoneOtpPage prevSub={prevSub} nextSub={nextSub} onPrev={onPrev}/>
      case 2:
        return <EmailOtpPage onNext={onNext} onPrev={onPrev}  />;
      default:
        return null;
    }
  };

  return (
    <>

      <div>

      {/*  display sub-step */}
      {renderSubStep()}

      
      </div>


    </>
  )
}

export default VerificationPage