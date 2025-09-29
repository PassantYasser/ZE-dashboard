"use client";
import SecondSection from "@/app/Components/login/SecondSection";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

function ForgetPasswordpage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="p-8 lg1:flex justify-between gap-8  ">
        <section className="w-full">
          <div className="lg1:mt-40.5 mt-25 flex flex-col items-center">
            <p className="mb-6 text-[#C69815] text-2xl font-semibold">
              {t("Forgot your password?")}
            </p>
            <p className="text-[#656565] text-lg font-normal max-w-[500px] text-center">
              {t(
                "Enter the phone number or email address of the account for which you want to change the password."
              )}
            </p>
            <img className="my-17.5" src="/images/lockLogIcon.svg" alt="" />
          </div>

          <form className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                className="text-[#364152] fontSizeA font-normal"
                htmlFor="email"
              >
                {t("Email")}/{t("phone number")}
              </label>
              <input
                className="w-full h-15 p-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm"
                type="email"
                name="email"
                id="email"
                placeholder={t("Email")}
              />
            </div>
            <Link
              href="../Login/VerifyNumber"
              className="w-full h-14 bg-[#DDA918] text-white text-base font-medium rounded-[3px] mt-8 mb-12 flex justify-center items-center "
            >
              {t("send")}
            </Link>
            <p className="flex justify-center gap-1.5">
              <span className="text-[#697586] text-lg font-normal">
                {t("Dont have an account?")}
              </span>
              <Link href='/Auth/Signup' className="text-[#9E7A11] text-lg font-medium">
                {t("Create an account")}
              </Link>
            </p>
          </form>
        </section>

        {/* second section */}
      <SecondSection />
      </div>
    </>
  );
}

export default ForgetPasswordpage;
