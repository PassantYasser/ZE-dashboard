"use client";

import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

function ConfirmationBtn({ onClick, path, className }) {
  const { t } = useTranslation();

  return (
    <Link href={path}>
      <button
        onClick={onClick}
        className={`
          h-15 px-4 py-2.5 
          bg-[#C69815] text-[#fff] 
          text-base font-medium
          rounded-[3px] 
          ${className}   // هنا أي ستايل تبعتيه من برة
        `}
      >
        {t("confirmation")}
      </button>
    </Link>
  );
}

export default ConfirmationBtn;
