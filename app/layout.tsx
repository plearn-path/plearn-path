import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plearn Path | Learn your way",
  description: "Adaptive mathematics practice for Thai upper-secondary learners."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
