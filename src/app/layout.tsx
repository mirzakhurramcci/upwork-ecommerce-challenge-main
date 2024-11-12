import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/_shared/header";
import pattern from "@/assets/images/pattern-1.png";
import { Providers } from "@/components/_shared/providers";

export const metadata: Metadata = {
  title: "Next js test",
  description: "sample ecommerce website built with Next js",
};
const poppins = Poppins({subsets:["latin","latin-ext"] ,weight: ["400", "500", "600", "700"],  variable: '--font-poppins',display:"swap" });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          style={
            {
              "--image-url": `url(${pattern.src})`,
            } as React.CSSProperties
          }
          className={`${poppins.variable} pt-20 md:pt-32 bg-bg before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-[image:var(--image-url)] before:bg-cover before:bg-center before:bg-no-repeat before:mix-blend-overlay before:-z-10`}
        >
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  );
}
