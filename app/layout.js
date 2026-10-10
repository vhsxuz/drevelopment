import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import StairEffect from "@/components/StairEffect";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-primary"
 });

export const metadata = {
  title: "Andreas Alexander",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.variable}>
        <Header />
        <StairEffect />
        <PageTransition>
          <main>
            {children}
          </main>
          <Footer />
        </PageTransition>
        </body>
    </html>
  );
}
