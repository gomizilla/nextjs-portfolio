import "./globals.css";
import Navbar from "app/(shared)/Navbar";
import Footer from "app/(shared)/Footer";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Dean Walton",
  description: "Dean Walton, software engineering portfolio. ",
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
