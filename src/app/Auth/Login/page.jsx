"use client";
import React, { useEffect, useState } from "react";
import i18n from "../../../language/i18n";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "@/redux/slice/Auth/AuthSlice";
import { useRouter } from "next/navigation";
function LoginPage() {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  //link api 
  const dispatch = useDispatch();
  const {user, isAuthenticated} = useSelector((state)=>state.auth)
  const router = useRouter();

  const [formData , setFormData] = useState({
    login:"",
    password:"",    
  })

  const handleChange =(e)=>{
    setFormData((prev)=>({
      ...prev , 
      [e.target.name]:e.target.value
    }))
  }
   const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginThunk(formData));
  };
  console.log(formData);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/"); // غيريها للمسار اللي انتي عايزاه
    }
  }, [isAuthenticated, router]);


  return (
    <>
      <div className="p-8 lg1:flex justify-between gap-8  ">
        <section className="w-full">

          {/* 📱Tablet screen only */}
          <div className="lg1:hidden flex justify-center gap-1 my-20">
            <img src="/images/LogoText.svg" alt="" />
            <img src="/images/Logo.svg" alt="" />
          </div>

          {/* title  */}
          <div className=" lg1:mt-50.5  lg1:mb-25 lg1:items-center mb-17.5  flex flex-col   rounded-[10px]">
            <p className="text-[#9E7A11] text-[32px] font-semibold mb-6">
              {t("Welcome back!")}
            </p>
            <p className="text-[#656565] text-2xl font-normal">
              {t("Log in to access your account.")}{" "}
            </p>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-6"
          >

            {/* email form */}
            <div className="flex flex-col gap-3">
              <label
                className="text-[#364152] fontSizeA font-normal"
                htmlFor="email"
              >
                {t("Email")}/{t("phone number")}
              </label>
              <input
                className="w-full h-15 p-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm"
                type="text"
                name="login"
                id="email"
                placeholder={t("Email")}
                value={formData.login}
                onChange={handleChange}
              />
            </div>

            {/* password form */}
            <div className="flex flex-col gap-3">
              <label
                className="text-[#364152] fontSizeA font-normal"
                htmlFor="password"
              >
                {t("password")}
              </label>

              <div className="relative">
                <input
                  className="w-full h-15 p-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder={t("password")}
                  value={formData.password}
                  onChange={handleChange}

                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ?
                    (
                      <img src="/images/icons/eyeClose.svg" alt="" />
                    )
                    :(
                      <img src="/images/icons/eyeOpen.svg" alt="" />
                    )
                  }
                </span>
              </div>

              {/* btn of forget password */}
              <Link
                href="/Auth/Login/ForgetPassword"
                className="flex justify-end text-[#9E7A11] fontSizeA font-normal"
              >
                {t("Forgot your password?")}
              </Link>

            </div>

            <button type="submit" className="w-full h-14 bg-[#DDA918] text-white text-base font-medium rounded-[3px] mt-4 mb-12">
              {t("Log in")}
            </button>
            
            {/*btn to open signup */}
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

        {/* 💻 desktop screen only */}
          <section className="w-full hidden lg1:block rounded-[10px]"
          style={{
            background:
              "linear-gradient(180deg, #DDA918 48.1%, #9D7810 99.85%)",
          }}
        >
          <p className="flex justify-end ml-4">
            <img src="/images/AuthLogUP.png" alt="" className='w-29 h-49' />
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

          <p className="  ">
            <img src="/images/AuthLogDown.svg" alt="" className='w-29 h-49' />
          </p>
        </section>


      </div>
    </>
  );
}

export default LoginPage;
