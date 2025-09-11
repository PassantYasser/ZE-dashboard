"use client";
import React, { useState } from 'react'
import FilesUploadOnePage from './FilesUploadOne/page';
import FilesUploadTwoPage from './FilesUploadTwo/page';
import ConfirmationDonePage from './ConfirmationDone/page';
import FirstCompanyInformationPage from './FirstCompanyInformation/page';

function CompanyInformationPage({ onNext, onPrev ,currentStep , steps }) {
  const [subStep, setSubStep] = useState(1);

  const nextSub = () => {
    if (subStep < 3) setSubStep((prev) => prev + 1);
  };

  const prevSub = () => {
    if (subStep > 1) setSubStep((prev) => prev - 1);
  };

  const renderSubStep = () => {
    switch (subStep) {
      case 1:
        return <FirstCompanyInformationPage/>
      case 2:
        return <FilesUploadOnePage />;
      case 3:
        return <FilesUploadTwoPage />;
      case 4 :
        return <ConfirmationDonePage/>
      default:
        return null;
    }
  };
  return (
    <>
    <div className="border p-4 rounded">
      <h2 className="font-bold text-lg mb-4">بيانات الشركة</h2>

      {/* عرض الـ sub-step */}
      {renderSubStep()}

      {/* أزرار التنقل */}
      <div className="flex justify-between mt-4">
        <button
          onClick={prevSub}
          disabled={subStep === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          رجوع
        </button>
        <button
          onClick={nextSub}
          disabled={subStep === 3}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          {subStep === 3 ? "تم" : "التالي"}
        </button>
      </div>
    </div>

{/*  */}
      <button
        onClick={onNext}
        disabled={currentStep === steps.length}
        className="px-4 py-2 bg-yellow-600 text-white rounded"
      >
        {currentStep === steps.length ? "إنهاء" : "التالي"}
      </button>

    </>
  )
}

export default CompanyInformationPage