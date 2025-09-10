"use client";
import React from 'react'
import { useTranslation } from 'react-i18next'

function SignuPage() {
  const {t}= useTranslation()
  return (
    <>
      <div className="p-8 lg1:flex justify-between gap-8 h-screen ">
        <section className="w-full">
        SignuPage
        </section>

        <section className="w-full hidden lg1:block rounded-[10px]"
          style={{
            background:
              "linear-gradient(180deg, #DDA918 48.1%, #9D7810 99.85%)",
          }}
        >
          <p className="flex justify-end ml-4">
            <img src="/images/AuthLogUP.png" alt="" />
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

          <p className="fixed bottom-8 mr-4 ">
            <img src="/images/AuthLogDown.svg" alt="" />
          </p>
        </section>
      </div>

    </>
  )
}

export default SignuPage