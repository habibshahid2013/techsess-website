import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Hassan Shahid | Tech-sess - Empowering Diversity in Tech",
  description: "Join Hassan Shahid in reshaping the tech landscape through advocacy, education, and strategic partnerships for underrepresented communities.",
  keywords: "diversity in tech, tech education, underrepresented communities, tech consulting, career development, Hassan Shahid, Tech-sess",
  authors: [{ name: "Hassan Shahid" }],
  creator: "Hassan Shahid",
  openGraph: {
    title: "Hassan Shahid | Tech-sess",
    description: "Empowering diversity in tech through education and advocacy",
    url: "https://techsess.com",
    siteName: "Tech-sess",
    images: [
      {
        url: "https://techsess.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hassan Shahid - Tech-sess",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Shahid | Tech-sess",
    description: "Empowering diversity in tech",
    creator: "@techsess",
    images: ["https://techsess.com/twitter-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${inter.variable} antialiased font-body`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
