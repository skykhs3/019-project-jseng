"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  const [headerStyle, setHeaderStyle] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#회사소개", label: "회사 소개" },
    { href: "#주요업무", label: "주요 업무" },
    { href: "#회사소식", label: "회사 소식" },
    { href: "#조직도", label: "조직도" },
    { href: "#찾아오시는길", label: "찾아오시는 길" },
  ];

  const handleScroll = useCallback(() => {
    const secondPage = document.getElementById("회사소개");
    if (secondPage) {
      const isScrollPositionReachSecondPageTop =
        0 >= secondPage.getBoundingClientRect().top;
      if (isScrollPositionReachSecondPageTop) {
        setHeaderStyle(
          "bg-white bg-opacity-95 webkit-backdrop-blur-16px shadow-md",
        );
      } else {
        setHeaderStyle("bg-black bg-opacity-30 webkit-backdrop-blur-16px");
      }
    }
  }, []);

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      handleScroll();
    }
    if (isMobileMenuOpen) {
      const secondPage = document.getElementById("회사소개");
      if (secondPage) {
        const isScrollPositionTop = window.scrollY === 0;
        if (isScrollPositionTop) {
          setHeaderStyle("");
        }
      }
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 스크롤 위치에 따라 다른 텍스트 스타일 적용
  const logoTextClass = headerStyle.includes("bg-white")
    ? "text-primary-800"
    : "text-white";

  const subtitleClass = headerStyle.includes("bg-white")
    ? "text-secondary-600"
    : "text-white text-opacity-90";

  const navLinkClass = headerStyle.includes("bg-white")
    ? "text-secondary-700 hover:text-primary-600"
    : "text-white hover:text-primary-200";

  const logoTextShadow = headerStyle.includes("bg-white")
    ? { textShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)" }
    : { textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)" };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${headerStyle} dark:bg-secondary-900 dark:bg-opacity-95`}
    >
      <div className="container-custom">
        <div className="flex h-[70px] items-center justify-between py-2 lg:h-[90px]">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              width={42}
              height={42}
              src="/icon_logo.png"
              alt="로고"
              className="lg:h-[50px] lg:w-[50px]"
            />
            <div>
              <h1
                className={`${logoTextClass} text-xl leading-tight font-bold tracking-wider lg:text-2xl dark:text-white`}
                style={logoTextShadow}
              >
                (주)정석기술연구소
              </h1>
              <p
                className={`${subtitleClass} dark:text-secondary-300 text-xs font-medium lg:text-sm`}
              >
                Construction technology support
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 lg:flex">
            <nav>
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`${navLinkClass} dark:text-secondary-200 dark:hover:text-primary-300 font-medium transition`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(
                          link.href.substring(1),
                        );
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeToggle
              textStyle={`
                ${headerStyle.includes("bg-white") ? "text-secondary-800" : "text-white"}
                dark:text-secondary-200`}
            />
          </div>

          {/* Mobile menu button and theme toggle on mobile */}
          <div className="flex items-center space-x-2 lg:hidden">
            <ThemeToggle
              textStyle={`
                ${headerStyle.includes("bg-white") ? "text-secondary-800" : "text-white"}
                dark:text-secondary-200`}
            />
            <button
              className={` ${headerStyle.includes("bg-white") ? "text-secondary-800" : "text-white"} dark:text-secondary-200`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`rounded-b-lg bg-transparent lg:hidden`}>
            <nav className="pb-4">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`block px-4 py-2 font-medium transition ${
                        headerStyle.includes("bg-white")
                          ? "text-secondary-700 hover:bg-secondary-50 hover:text-primary-600"
                          : "hover:bg-opacity-50 hover:text-primary-300 text-white hover:bg-black"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        const element = document.getElementById(
                          link.href.substring(1),
                        );
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
