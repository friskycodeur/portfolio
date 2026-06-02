import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prateek Maheshwari | Backend Engineer",
  description:
    "Backend Engineer specializing in Java, Spring Boot, AWS, distributed workflows, and performance optimization.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
