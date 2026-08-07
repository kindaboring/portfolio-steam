import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyle Cummings — Senior Cloud Infrastructure Engineer",
  description:
    "Senior cloud infrastructure engineer with 9+ years building and automating cloud systems across AWS, Azure, and GCP.",
  openGraph: {
    title: "Kyle Cummings — Senior Cloud Infrastructure Engineer",
    description:
      "Senior cloud infrastructure engineer with 9+ years building and automating cloud systems.",
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
