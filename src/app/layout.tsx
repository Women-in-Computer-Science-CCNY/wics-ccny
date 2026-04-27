import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WiCS @ CCNY — Women in Computer Science",
  description:
    "Building a supportive community for women in tech at The City College of New York. Mentorship, workshops, career resources, and inclusive spaces to grow.",
  keywords: [
    "WiCS",
    "Women in Computer Science",
    "CCNY",
    "City College of New York",
    "tech club",
    "women in tech",
  ],
  openGraph: {
    title: "WiCS @ CCNY — Women in Computer Science",
    description:
      "Building a supportive community for women in tech at The City College of New York.",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        {/* ── Page-wide fixed background ── */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 bg-gradient-to-br from-lavender-200 via-sky-100 to-blush-200"
        />
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {children}
      </body>
    </html>
  );
}
