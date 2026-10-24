import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
const d = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz"],
});
const s = Inter({ subsets: ["latin"], variable: "--font-sans" });
export const metadata: Metadata = {
  title: "Kavya Naik — Full Stack Developer",
  description:
    "Full Stack Developer building AI-powered applications, backend systems and modern web experiences.",
  openGraph: {
    title: "Kavya Naik — Full Stack Developer",
    description:
      "AI-powered applications, backend development and modern web engineering.",
    type: "website",
  },
  icons: { icon: "/icon.svg" },
};
export default function L({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${d.variable} ${s.variable}`}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
