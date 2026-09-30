import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solid Walnut Motorized Desk",
  description: "Nordic minimalism meets ergonomic engineering. Walnut veneer with dual-motor standing desk, 22–48 inches adjustable....",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-light text-dark">{children}</body>
    </html>
  );
}
