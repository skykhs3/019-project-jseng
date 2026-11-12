import localFont from "next/font/local";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

// Load the font
const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

export const metadata = {
  title: "(주)정석기술연구소 | 건설분쟁·하자소송 기술지원 전문",
  description:
    "건설분쟁·하자소송 기술(송무)지원 전문 기업. 건축시공기술사와 건축사가 직접 수행하는 준공도서 사전검토, 법원 공사비 감정·분석, 하자감정 타당성 검토, 건설소송 기술자문 서비스를 제공합니다.",
  keywords:
    "건설분쟁, 하자소송, 건설소송, 공사비감정, 준공도서검토, 하자감정, 건축시공기술사, 기술송무지원, 건설분쟁컨설팅, 법원감정",
  metadataBase: new URL("https://jseng.fly.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "(주)정석기술연구소 | 건설분쟁·하자소송 기술지원 전문",
    description:
      "건설분쟁·하자소송 기술(송무)지원 전문 기업. 건축시공기술사와 건축사가 직접 수행하는 준공도서 사전검토, 법원 공사비 감정·분석, 하자감정 타당성 검토, 건설소송 기술자문 서비스를 제공합니다.",
    url: "https://jseng.fly.dev/",
    siteName: "(주)정석기술연구소",
    images: [
      {
        url: "https://jseng.fly.dev/icon_logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "(주)정석기술연구소 | 건설분쟁·하자소송 기술지원 전문",
    description:
      "건설분쟁·하자소송 기술(송무)지원 전문 기업. 건축시공기술사와 건축사가 직접 수행하는 준공도서 사전검토, 법원 공사비 감정·분석, 하자감정 타당성 검토, 건설소송 기술자문 서비스를 제공합니다.",
    images: ["https://jseng.fly.dev/icon_logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=1"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=1"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=1"
        />
        <link rel="manifest" href="/site.webmanifest?v=1" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg?v=1"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon.ico?v=1" />

        <meta name="apple-mobile-web-app-title" content="(주)정석기술연구소" />
        <meta name="application-name" content="(주)정석기술연구소" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "(주)정석기술연구소",
              description:
                "건설분쟁·하자소송 기술(송무)지원 전문 기업. 건축시공기술사와 건축사가 직접 수행하는 준공도서 사전검토, 법원 공사비 감정·분석, 하자감정 타당성 검토, 건설소송 기술자문 서비스를 제공합니다.",
              url: "https://jseng.fly.dev",
              logo: "https://jseng.fly.dev/icon_logo.png",
              image: "https://jseng.fly.dev/icon_logo.png",
              telephone: "02-533-7753",
              faxNumber: "02-533-7752",
              email: "jseng@jseng.co.kr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "서초중앙로24길 11, 요셉빌딩 7F",
                addressLocality: "서초구",
                addressRegion: "서울특별시",
                postalCode: "06604",
                addressCountry: "KR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 37.494894,
                longitude: 127.014925,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              serviceType: [
                "건설분쟁 기술지원",
                "하자소송 기술송무지원",
                "준공도서 사전검토",
                "법원 공사비 감정·분석",
                "하자감정 타당성 검토",
                "건설소송 기술자문",
              ],
              areaServed: {
                "@type": "Country",
                name: "대한민국",
              },
            }),
          }}
        />
      </head>
      <body
        className={`text-secondary-900 dark:bg-secondary-950 dark:text-secondary-100 bg-white font-sans`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
