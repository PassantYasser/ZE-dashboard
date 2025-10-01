"use client";
import React, { useState } from 'react'
import FirstSetPasswordPage from './FirstSetPassword/page';
import ConfirmationDonePage from './ConfirmationDone/page';

function SetPasswordPage({ onNext, onPrev ,formData ,handleChange , handleSubmit  }) {
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
        return <FirstSetPasswordPage prevSub={prevSub} nextSub={nextSub} onPrev={onPrev}/>
      case 2:
        return <ConfirmationDonePage onNext={onNext} />;
      default:
        return null;
    }
  };
  return (
    <>
    <div>

      {/* display sub-step */}
      {renderSubStep()}
    </div>


    </>
  )
}

export default  SetPasswordPage