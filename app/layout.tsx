import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GDG Portfolio",
  description: "Welcome to GDG On Campus LU! This portfolio workshop is brought to you by the Web Development Team, Khaled and Majed.",
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "og:url": "khaledfrayji.com", //main url
    "og:image": "/seo.png", //when u share the link on apps the img would be displayed
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
