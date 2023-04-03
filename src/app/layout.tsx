import "./globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Sidebar from "#/components/sidebar";
import React from "react";
import Loading from "#/components/loading";

export const metadata: Metadata = {
  title: {
    default: "Elbegsaikhan Amgalan",
    template: "%s | Elbegsaikhan Amgalan",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Elbegsaikhan Amgalan",
    description: "Developer, writer, and creator.",
    url: "https://elbegsaikhan.software",
    siteName: "Elbegsaikhan Amgalan",
    images: [
      {
        url: "https://elbegsaikhan.software/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Elbegsaikhan Amgalan",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  // verification: {
  //   google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
  //   yandex: "14d2e73487fa6c71",
  // },
};

const kaisei = localFont({
  src: "../../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
  weight: "700",
  variable: "--font-kaisei",
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-[#111010] ",
        kaisei.variable
      )}
    >
      <body>
        <Loading>
          <div className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
            <Sidebar />
            <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
              {children}
            </main>
          </div>
        </Loading>
      </body>
    </html>
  );
}
