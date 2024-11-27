import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

// Supports weights 100-900
import "@fontsource-variable/onest";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NxGo",
  description: "Created by: yxsif.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="max-w-5xl px-4 mx-auto my-0">{children}</main>
      </body>
    </html>
  );
}
