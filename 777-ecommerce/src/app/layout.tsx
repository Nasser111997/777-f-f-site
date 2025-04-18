import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Import Header component
import Footer from "@/components/Footer"; // Import Footer component
import { ThemeProvider } from "@/lib/ThemeContext"; // Import ThemeProvider
import StickyRoiCalculator from "@/components/StickyRoiCalculator"; // Import StickyRoiCalculator
import SignupPopup from "@/components/SignupPopup"; // Import SignupPopup component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "777 F&F Ltd | Buy. Earn. Win.",
  description: "777 F&F Ltd is a smart, profit-sharing distribution company that allows customers to benefit from both direct margins and business growth. With up to 40% profit earned directly from the product margin and an additional 30% from the company’s overall performance and business rewards, our clients enjoy returns that can reach up to 77% per purchase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" /* Add 'dark' class here for dark mode */>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider> {/* Wrap content with ThemeProvider */}
          <Header /> {/* Use Header component */}
          <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
          <Footer /> {/* Use Footer component */}
        </ThemeProvider>
        <StickyRoiCalculator /> {/* Add the sticky ROI calculator */}
        <SignupPopup /> {/* Add the signup popup */}
      </body>
    </html>
  );
}
