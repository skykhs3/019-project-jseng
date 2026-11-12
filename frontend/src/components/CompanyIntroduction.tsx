"use client";

import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const CompanyIntroduction: React.FC = () => {
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "0px 0px -50px 0px",
  });

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "0px 0px -50px 0px",
  });

  const stats = [
    {
      number: "50+",
      label: "프로젝트 완료",
      color: "bg-primary-100 dark:bg-primary-900",
    },
    {
      number: "5+",
      label: "전문 기술자",
      color: "bg-secondary-100 dark:bg-secondary-800",
    },
    {
      number: "50+",
      label: "법원 감정평가",
      color: "bg-accent-100 dark:bg-accent-900",
    },
    {
      number: "99%",
      label: "고객 만족도",
      color: "bg-primary-100 dark:bg-primary-900",
    },
  ];

  return (
    <div className="container-custom" id="회사개요">
      <div
        className={`grid grid-cols-1 gap-12 md:grid-cols-2 ${contentInView ? "animate-fadeInUp" : "opacity-0"}`}
        ref={contentRef}
      >
        {/* Company Introduction Content */}
        <div className="order-1">
          <h2 className="heading-lg text-primary-800 dark:text-primary-400 mb-6">
            회사 개요
          </h2>

          <div className="text-secondary-700 dark:text-secondary-300 space-y-6">
            <p className="text-lg leading-relaxed">
              <span className="text-primary-700 dark:text-primary-400 font-semibold">
                정석기술연구소
              </span>
              는 건설하자, 건설분쟁, 법원감정 대응을 전문으로 수행하는
              기술자문기관입니다.
            </p>

            <p className="text-lg leading-relaxed">
              당사는 건설시공기술사 및 건축설계시공기술사를 보유하고 있으며, 전
              직원이 건설현장 실무 경력을 갖춘 기술전문가로 구성되어 있습니다.
            </p>

            <p className="text-lg leading-relaxed">
              현장 경험과 기술사 자격을 기반으로{" "}
              <span className="text-primary-700 dark:text-primary-400 font-semibold">
                기술송무(Technical Litigation Support)
              </span>{" "}
              및 감정 대응 중심의 기술 분석을 수행합니다.
            </p>

            <p className="text-lg leading-relaxed">
              이론 중심 자문이 아닌,{" "}
              <span className="text-primary-700 dark:text-primary-400 font-semibold">
                설계·시공·감리·현장관리 실무 경험
              </span>
              에 기반한 실질적 기술검토를 제공합니다.
            </p>

            {/* <div className="mt-8 flex">
              <button className="btn-primary">더 알아보기</button>
            </div> */}
          </div>
        </div>

        {/* Company Image */}
        <div className="order-2 flex items-center justify-center md:justify-end">
          <div className="dark:shadow-secondary-900 relative h-[300px] w-full max-w-[500px] overflow-hidden rounded-xl shadow-xl md:h-[400px]">
            <Image
              src="/image_people.jpg"
              alt="정석기술연구소 이미지"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div
        className={`mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ${statsInView ? "animate-fadeInUp" : "opacity-0"}`}
        ref={statsRef}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center rounded-lg ${stat.color} dark:shadow-secondary-900 p-6 text-center shadow-md transition-transform hover:-translate-y-1`}
          >
            <span className="text-primary-700 dark:text-primary-400 text-4xl font-bold">
              {stat.number}
            </span>
            <span className="text-secondary-700 dark:text-secondary-300 mt-2 text-lg font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyIntroduction;
