import "./globals.css";
// import { Inter } from "next/font/google";
import Navbar from "app/(shared)/Navbar";
import Footer from "app/(shared)/Footer";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dean Walton Portfolio",
  description: "Dean Walton, software engineering portfolio using Next JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={openSans.className} lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
