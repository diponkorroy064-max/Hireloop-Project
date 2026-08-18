import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import ThemeProvider from "@/providers/ThemeProvider";
import { ToastContainer } from "react-toastify";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HireLoop | Find Your Dream Job",
  description:
    "HireLoop is a modern job platform connecting talented job seekers with top companies and recruiters. Discover jobs, apply for opportunities, and build your career.",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // data-theme="light"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* <ThemeProvider>{children}</ThemeProvider> */}
        {children}
        <ToastContainer/>
      </body>
    </html>
  );
}

