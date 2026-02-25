import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solo Leveling | Arise",
  description:
    "An immersive Solo Leveling fan experience inspired by the System UI, Gates, and Hunters."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}

