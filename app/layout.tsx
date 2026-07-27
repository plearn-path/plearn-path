import type { Metadata } from "next";
import "./globals.css";
import { PwaRegister } from "../components/ui/pwa-register";

export const metadata: Metadata = {
  title: "Plearn Path | Learn your way",
  description: "Adaptive learning for every Thai learner."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className="dark" suppressHydrationWarning>
      <body><PwaRegister />{children}</body>
    </html>
  );
}
