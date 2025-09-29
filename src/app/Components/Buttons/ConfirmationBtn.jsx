
// // import Link from "next/link";
// // import React from "react";
// // import { useTranslation } from "react-i18next";

// // function ConfirmationBtn({ onClick, path, className }) {
// //   const { t } = useTranslation();

// //   return (
// //     // <Link href={path}>
// //       <button
// //         onClick={onClick}
// //         className={`
// //           h-15 px-4 py-2.5 
// //           bg-[#C69815] text-[#fff] 
// //           text-base font-medium
// //           rounded-[3px] 
// //           ${className}   // هنا أي ستايل تبعتيه من برة
// //         `}
// //       >
// //         {t("confirmation")}
// //       </button>
// //     // </Link>
// //   );
// // }

// // export default ConfirmationBtn;

"use client";

import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

function ConfirmationBtn({ onClick, path, className }) {
  const { t } = useTranslation();

  // لو عندي onClick هستخدم زرار، لو عندي path بس هستخدم Link
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`
          h-15 px-4 py-2.5 
          bg-[#C69815] text-white
          text-base font-medium
          rounded-[3px] 
          ${className}
        `}
      >
        {t("confirmation")}
      </button>
    );
  }

  if (path) {
    return (
      <Link
        href={path}
        className={`
          h-15 px-4 py-2.5 
          bg-[#C69815] text-white
          text-base font-medium
          rounded-[3px] 
          flex items-center justify-center
          ${className}
        `}
      >
        {t("confirmation")}
      </Link>
    );
  }

  return null; // fallback
}

export default ConfirmationBtn;

