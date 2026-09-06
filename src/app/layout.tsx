import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { event } from "@/data/event";
import SmoothScroll from "@/components/providers/SmoothScroll";
import LatticeCanvas from "@/components/three/LatticeCanvas";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";
import Preloader from "@/components/ui/Preloader";

/** IBM's own open-source family — on-brand by default. */
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const description = `${event.themeBlurb} ${event.name} hosted by ${event.hostLong} at the ${event.university} — workshops, talks and a hackathon. Free to attend.`;

export const metadata: Metadata = {
  title: {
    default: `${event.name} — ${event.host} @ ${event.universityShort}`,
    template: `%s — ${event.name}`,
  },
  description,
  keywords: [
    "Qiskit Fall Fest",
    "quantum computing",
    "IBM Quantum",
    "Qiskit",
    "German University in Cairo",
    "GUC",
    "hackathon",
    "Cairo",
  ],
  openGraph: {
    title: `${event.name} — ${event.host} @ ${event.universityShort}`,
    description,
    type: "website",
    locale: "en_US",
    siteName: event.name,
  },
  twitter: { card: "summary_large_image", title: event.name, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f0eee9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body>
        <Preloader />
        <LatticeCanvas />
        <SmoothScroll>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
