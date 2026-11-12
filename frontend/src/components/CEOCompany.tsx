"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import type { CustomArrowProps, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    imageUrl: "/image_horizontal1.jpeg",
    description: "(주)KCC건설 소장 및 팀장 대상 하자분쟁 대응 방안 교육 연사",
    image_position: "object-center",
  },
  {
    imageUrl: "/image_horizontal2.jpeg",
    description: "(주)KCC건설 소장 및 팀장 대상 하자분쟁 대응 방안 교육 연사",
    image_position: "object-center",
  },
  {
    imageUrl: "/image_horizontal4.png",
    description:
      "LH 한국토지주택공사 주택 품질·분쟁 관리 전문가 초청 강연 연사",
    image_position: "object-right",
  },
  {
    imageUrl: "/image_horizontal3.png",
    description:
      "LH 한국토지주택공사 주택 품질·분쟁 관리 전문가 초청 강연 연사",
    image_position: "object-bottom",
  },
  {
    imageUrl: "/image_horizontal6.jpeg",
    description: "1군 건설사 CS협의체 하자 소송 대응 방안 강연 연사",
    image_position: "object-[center_right]",
  },
  {
    imageUrl: "/image_horizontal7.jpeg",
    description: "호반그룹 건설 분쟁 대응 방안 강연",
    image_position: "object-[center_right]",
  },
  {
    imageUrl: "/image_horizontal8.jpeg",
    description: "LH 하자 보수 강연",
    image_position: "object-center",
  },
  {
    imageUrl: "/image_horizontal9.jpeg",
    description: "금성백조건설 현장 직원 하자 방지 교육",
    image_position: "object-center",
  },
  {
    imageUrl: "/image_horizontal10.jpeg",
    description: "건설사협의체 하자 소송 대응 방안 강연",
    image_position: "object-center",
  },
  {
    imageUrl: "/image_horizontal11.jpeg",
    description: "반도건설 건축직 하자대응방안 강연",
    image_position: "object-center",
  },
];

const CustomPrevArrow = ({ onClick }: CustomArrowProps) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="이전 회사 소식"
    className="dark:bg-secondary-800/80 dark:text-secondary-200 absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-md"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
);

const CustomNextArrow = ({ onClick }: CustomArrowProps) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="다음 회사 소식"
    className="dark:bg-secondary-800/80 dark:text-secondary-200 absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-md"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
);

const CEOCompany: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="container-custom pb-12" id="회사소식">
      <h2 className="heading-lg text-primary-800 dark:text-primary-400 mb-6">
        회사 소식
      </h2>
      <Slider {...settings} className="ceo-slider">
        {images.map((image, index) => (
          <div key={index} className="px-4">
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[400px] lg:h-[500px]">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className={`object-cover ${image.image_position}`}
              />
            </div>
            <p className="text-secondary-700 dark:text-secondary-300 mt-4 text-center text-sm md:text-base">
              {image.description}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CEOCompany;
