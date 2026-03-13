import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyle Cummings — Cloud Engineer / DevOps",
  description:
    "Infrastructure & DevOps engineer with 8+ years building and automating cloud systems across AWS, Azure, and GCP.",
  openGraph: {
    title: "Kyle Cummings — Cloud Engineer / DevOps",
    description:
      "Infrastructure & DevOps engineer with 8+ years building and automating cloud systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
