import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Harbour Point Attendance",
    template: "%s · Harbour Point Attendance",
  },
  description:
    "Geo-fenced staff attendance for Harbour Point Club: clock in and out on the premises, shifts, emergency leave and attendance records.",
  applicationName: "Harbour Point Attendance",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Matches the canvas colour so mobile browser chrome blends with the app.
  themeColor: "#fafaf9",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body
        className={`${geistSans.className} min-h-full bg-canvas text-sm text-txt antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
