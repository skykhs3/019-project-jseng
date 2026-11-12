"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

const Banner: React.FC = () => {
  const bannerVideo1Ref = useRef<HTMLVideoElement | null>(null);
  const bannerVideo2Ref = useRef<HTMLVideoElement | null>(null);
  const [isVideo1Visible, setIsVideo1Visible] = React.useState(true);
  const [isText1Animated, setIsText1Animated] = React.useState(false);
  const [isText2Animated, setIsText2Animated] = React.useState(false);

  const initBannerTextAnimation = () => {
    const timer = setTimeout(() => {
      setIsText1Animated(true);
    }, 2000);
    const timer2 = setTimeout(() => {
      setIsText2Animated(true);
    }, 3000);
    return [timer, timer2];
  };

  useEffect(() => {
    const initBannerImageAnimation = () => {
      const interval = setInterval(() => {
        if (isVideo1Visible && bannerVideo2Ref.current) {
          bannerVideo2Ref.current.currentTime = 0;
        } else if (!isVideo1Visible && bannerVideo1Ref.current) {
          bannerVideo1Ref.current.currentTime = 0;
        }
        setIsVideo1Visible(!isVideo1Visible);
      }, 10000);
      return interval;
    };

    const timers = [...initBannerTextAnimation()];
    const interval = initBannerImageAnimation();

    return () => {
      timers.forEach((time) => clearTimeout(time));
      clearInterval(interval);
    };
  }, [isVideo1Visible]);

  const textShadowStyle = {
    textShadow: "3px 3px 8px rgba(0, 0, 0, 1), 0px 0px 15px rgba(0, 0, 0, 0.8)",
  };

  return (
    <section className="relative h-svh">
      {/* 동영상 배경 */}
      <div className="relative flex h-full w-full justify-center">
        {/* 어두운 오버레이 */}

        <video
          ref={bannerVideo1Ref}
          autoPlay={true}
          playsInline={true}
          muted={true}
          loop={true}
          preload="auto"
          poster="/image_banner1_poster.webp"
          className={`animate-withBannerWidthExpand absolute z-0 h-full w-full translate-z-0 object-cover transition-opacity duration-[2000ms] ease-in ${isVideo1Visible ? "opacity-100" : "opacity-0"}`}
        >
          <source src="/video_banner1_tiny.mp4" type="video/mp4" />
        </video>
        <video
          ref={bannerVideo2Ref}
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
          preload="auto"
          poster="/image_banner2_poster.webp"
          className={`absolute z-0 h-full w-full translate-z-0 object-cover transition-opacity duration-[2000ms] ease-in ${isVideo1Visible ? "opacity-0" : "opacity-100"}`}
          style={{ transform: "translateZ(0)" }}
        >
          <source src="/video_banner2_tiny.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 텍스트 컨텐츠 */}
      <div className="absolute inset-0 z-[2] flex flex-col justify-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl p-10 md:p-16">
            <p
              className={`text-center text-2xl font-bold text-white md:text-3xl lg:text-4xl ${isText1Animated ? "animate-fadeInUp" : "collapse"}`}
              style={textShadowStyle}
            >
              건설분쟁 기술자문
              <br />
              (주)정석기술연구소
            </p>
            <div className="h-6 md:h-7 lg:h-8"></div>
            <p
              className={`text-center text-3xl leading-tight font-bold break-keep text-white md:text-[50px] lg:text-6xl ${isText2Animated ? "animate-fadeInUp" : "collapse"}`}
              style={textShadowStyle}
            >
              최고의 <span className="text-primary-300">건축시공기술사</span>와{" "}
              <span className="text-primary-300">건축사</span>가 해결해드립니다
            </p>
          </div>
        </div>
      </div>

      {/* 스크롤 다운 버튼 */}
      <div className="absolute bottom-0 z-[2] flex w-full justify-center">
        <button
          className="animate-withArrowSlideUpDown absolute bottom-10 z-10 mx-auto"
          onClick={() => {
            const element = document.getElementById("회사개요");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <Image
            src="/icon_down_arrow.png"
            alt="아래 방향 화살표"
            width={40}
            height={40}
            className="drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]"
          />
        </button>
      </div>
    </section>
  );
};

export default Banner;
