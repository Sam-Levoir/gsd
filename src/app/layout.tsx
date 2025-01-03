import type { Metadata } from "next";
import "./globals.css";

// Sets tab title in browser.
export const metadata: Metadata = {
  title: "Get Shit Done",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
