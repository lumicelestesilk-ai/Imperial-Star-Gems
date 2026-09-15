import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Imperial Star Gems",
  description: "White-luxury diamond storefront for natural and lab-grown loose stones.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <div className="page-shell">
          <header className="site-header">
            <Link href="/" className="brand-mark">
              Imperial Star Gems
            </Link>
            <nav className="site-nav" aria-label="Main navigation">
              <Link href="/natural-diamonds">Natural</Link>
              <Link href="/lab-grown-diamonds">Lab-grown</Link>
              <Link href="/shapes">Shapes</Link>
              <Link href="/craftsmanship">Craftsmanship</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <Link href="/contact" className="button button--primary nav-cta">
              Enquire
            </Link>
          </header>

          <main>{children}</main>

          <footer className="site-footer">
            <p>Imperial Star Gems</p>
            <div>
              <span>GIA / IGI grading</span>
              <span>Trade enquiries welcome</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
