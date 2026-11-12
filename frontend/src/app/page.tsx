"use client";

import React, { useCallback, useState, useEffect } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import CompanyIntroduction from "../components/CompanyIntroduction";
import MainBusiness from "../components/MainBusiness";
import CEOCompany from "../components/CEOCompany";
import EmployeeStatus from "../components/EmployeeStatus";
import Location from "../components/Location";
import Footer from "../components/Footer";
import Divider from "../components/Divider";

export default function Home() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolling(scrollPosition > 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <Banner />

        {/* Company Introduction */}
        <section className="section-padding dark:bg-secondary-950 relative bg-white">
          <div id="회사소개" className="absolute -top-[70px]" />
          <CompanyIntroduction />
        </section>

        <Divider />

        {/* Main Business */}
        <section className="section-padding bg-secondary-50 dark:bg-secondary-900 relative">
          <div id="주요수행분야" className="absolute -top-[70px]" />
          <MainBusiness />
        </section>

        <Divider />

        {/* CEO Message */}
        <section className="section-padding dark:bg-secondary-950 relative bg-white">
          <div id="회사소식" className="absolute -top-[70px]" />
          <CEOCompany />
        </section>

        <Divider />

        {/* Employee Status */}
        <section className="section-padding bg-secondary-50 dark:bg-secondary-900 relative">
          <div id="조직도" className="absolute -top-[70px]" />
          <EmployeeStatus />
        </section>

        <Divider />

        {/* Location */}
        <section className="section-padding dark:bg-secondary-950 relative bg-white">
          <div id="찾아오시는길" className="absolute -top-[70px]" />
          <Location />
        </section>

        {/* Scroll to top button */}
        {isScrolling && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 fixed right-8 bottom-8 z-40 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all hover:shadow-xl"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
      </main>

      <Footer />
    </div>
  );
}
