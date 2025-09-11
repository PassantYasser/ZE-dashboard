import React from 'react'

function VerificationPage({ onNext, onPrev ,currentStep , steps }) {
  return (
    <>
      <div>VerificationPage</div>
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

export default VerificationPage