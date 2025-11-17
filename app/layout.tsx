import type { Metadata } from "next";
import { Figtree } from 'next/font/google';

import "./globals.css";

const figtree = Figtree({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-figtree',
});



export const metadata: Metadata = {
  title: "Worked Hours",
  description: "Created by Camelia Strango",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${figtree.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
