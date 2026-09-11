import { Space_Mono, Geist, Geist_Mono } from "next/font/google";
export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
