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
  title: "(주)정석기술연구소",
  description:
    "건설분쟁·하자소송 기술(송무)지원 업무, 준공도서 사전검토, 법원 공사비 감정·분석",
  openGraph: {
    title: "(주)정석기술연구소",
    description:
      "건설분쟁·하자소송 기술(송무)지원 업무, 준공도서 사전검토, 법원 공사비 감정·분석",
    url: "https://jseng.fly.dev/",
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

        <meta
          name="naver-site-verification"
          content="87f8d9d318bd413e98fb8045f87e63b644cdeffb"
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
