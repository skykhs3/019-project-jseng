"use client";

import React from "react";
import { useInView } from "react-intersection-observer";

const MainBusiness: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.05,
  });

  const 업무내용 = [
    {
      title: "건설분쟁·하자소송 기술(송무)지원 업무",
      description:
        "건설 과정에서 발생하는 분쟁이나 하자 문제에 대해 전문적인 기술 지원을 제공하여 고객의 권익을 보호합니다.",
      icon: "📝",
    },
    {
      title: "준공도서 사전검토 용역 업무",
      description:
        "건설 프로젝트의 준공도서를 철저히 검토하여 하자 및 문제 발생을 사전에 예방합니다.",
      icon: "📋",
    },
    {
      title: "법원 하자 감정 분석 및 컨설팅 업무",
      description:
        "법원이 요구하는 하자 감정 및 분석을 통해 공정한 판결을 지원합니다.",
      icon: "⚖️",
    },
    {
      title: "하자조사 타당성 검토·분석 업무",
      description:
        "건축물의 하자조사 결과에 대한 타당성을 검토하고 분석하여 신뢰성 있는 보고서를 제공합니다.",
      icon: "🔍",
    },
    {
      title: "준공시 하자 민원에 대한 컨설팅",
      description:
        "준공 시 발생할 수 있는 하자 민원에 대해 전문가의 컨설팅을 통해 신속한 문제 해결을 지원합니다.",
      icon: "🏢",
    },
    {
      title: "공사비 분쟁사건 기술 지원 업무",
      description:
        "공사비 분쟁 사건에 대한 기술적인 지원을 제공하여 분쟁 해결을 돕습니다.",
      icon: "💰",
    },
    {
      title: "건설기술인 직무 교육(하자리스크 최소화)",
      description:
        "건설기술인을 대상으로 한 직무 교육을 통해 하자 리스크를 최소화하고, 품질 향상을 위한 지식을 전파합니다.",
      icon: "👨‍🏫",
    },
  ];

  return (
    <div className="container-custom" id="사업영역">
      <section
        className={`opacity-0 ${inView ? "animate-fadeInUp animate-delay-300ms" : ""}`}
        ref={ref}
      >
        <h2 className="heading-lg text-primary-800 dark:text-primary-400 mb-8">
          주요 수행 분야
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {업무내용.map((item, index) => (
            <div
              key={index}
              className={`border-secondary-200 dark:border-secondary-800 dark:bg-secondary-900 flex flex-col rounded-lg border bg-white p-6 shadow-md transition-all hover:shadow-lg dark:shadow-lg ${
                inView ? `animate-fadeInUp` : "opacity-0"
              }`}
            >
              <div className="mb-4 flex items-center">
                <span className="mr-3 text-3xl">{item.icon}</span>
                <h3 className="text-primary-700 dark:text-primary-400 text-xl font-bold">
                  {item.title}
                </h3>
              </div>
              <p className="text-secondary-600 dark:text-secondary-300 text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainBusiness;
