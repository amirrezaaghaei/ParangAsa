"use client";

import { FormEvent, useState } from "react";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [notification, setNotification] = useState({
    message: "",
    type: "",
    visible: false,
  });

  const defaultOptions = {
    loop: false, // Don't loop the animation
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const showNotification = (message: string, type: string) => {
    setNotification({ message, type, visible: true });
    setTimeout(
      () => setNotification({ message: "", type: "", visible: false }),
      3000
    );
  };

  const handleInput = (e: { target: { value: string } }) => {
    const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    const inputValue = e.target.value.replace(
      /\d/g,
      (digit: string) => persianNumbers[parseInt(digit, 10)]
    );
    setPhone(inputValue);
    setPhoneError(false); // Reset error state on input
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Validate inputs
    if (name === "") setNameError(true);
    if (phone === "") setPhoneError(true);

    // Prevent form submission if there are errors
    if (name === "" || phone === "") return;

    setIsLoading(true);

    let form = {
      name,
      phone,
    };

    try {
      const rawResponse = await fetch("/api/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (rawResponse.ok) {
        const content = await rawResponse.json();
        showNotification("اطلاعات شما با موفقیت ارسال شد", "success");
        setSubmitted(true);

        // Reset form fields
        setPhone("");
        setName("");
      } else {
        showNotification(
          "There was an issue sending your data please try again",
          "error"
        );
      }
    } catch (error) {
      showNotification(
        "There was an issue sending your data please try again",
        "error"
      );
    } finally {
      setIsLoading(false);
    }

    // Hide animation after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <AnimatePresence>
        {notification.visible && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-20 right-4 z-50 bg-zinc-900 border border-zinc-600 p-5 rounded-lg shadow-lg text-zinc-50 ${
              notification.type === "success"
                ? "text-sm font-medium text-right"
                : "text-sm font-medium text-right"
            }`}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div
        id="contact"
        className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            دریافت مشاوره
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
        </div>
        <form
          action="#"
          method="POST"
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm/6 font-semibold text-gray-900 text-right"
              >
                نام و نام خانوادگی
              </label>
              <div className="mt-2.5">
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameError(false);
                  }}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="نام و نام خانوادگی شما"
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                    nameError ? "ring-red-500" : "ring-gray-300"
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                    nameError ? "focus:ring-red-500" : "focus:ring-indigo-600"
                  } sm:text-sm/6 text-right`}
                  dir="rtl"
                />
                {nameError && (
                  <p className="mt-1 text-sm text-red-500 text-right">
                    لطفاً نام خود را وارد کنید
                  </p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="number"
                className="block text-sm/6 font-semibold text-gray-900 text-right"
              >
                شماره تماس
              </label>
              <div className="mt-2.5">
                <input
                  value={phone}
                  onChange={handleInput}
                  type="text"
                  id="farsi-number"
                  name="farsi-number"
                  placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                    phoneError ? "ring-red-500" : "ring-gray-300"
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                    phoneError ? "focus:ring-red-500" : "focus:ring-indigo-600"
                  } sm:text-sm/6 text-right`}
                />
                {phoneError && (
                  <p className="mt-1 text-sm text-red-500 text-right">
                    لطفاً شماره تماس خود را وارد کنید
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-10 relative">
            {submitted && (
              <div className="absolute inset-0 m-auto w-10/12 h-1/2 flex items-center justify-center">
                <Lottie options={defaultOptions} height={800} width={800} />
              </div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="block w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 mx-auto text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12C20.9999 13.9005 20.3981 15.7523 19.2809 17.2899C18.1637 18.8274 16.5885 19.9719 14.7809 20.5591C12.9733 21.1464 11.0262 21.1463 9.21864 20.559C7.41109 19.9716 5.83588 18.8271 4.71876 17.2895C3.60165 15.7518 2.99999 13.9 3 11.9994C3.00001 10.0989 3.60171 8.24706 4.71884 6.70945C5.83598 5.17184 7.4112 4.02736 9.21877 3.44003C11.0263 2.8527 12.9734 2.85267 14.781 3.43995"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                "ارسال"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
