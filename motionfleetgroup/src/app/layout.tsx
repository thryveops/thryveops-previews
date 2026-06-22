import type { Metadata } from "next";
import { Archivo, DM_Sans } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/brand";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AutoDealerJsonLd } from "@/components/structured-data";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: `${brand.displayName} — Used Cars in Clearwater & Largo, FL`,
    template: `%s · ${brand.displayName}`,
  },
  description:
    "Independent used-car dealership serving Clearwater, Largo, and greater Tampa Bay. Buy, sell, and trade with no-pressure help and financing for all credit types.",
  applicationName: brand.displayName,
  keywords: [
    "used cars Clearwater FL",
    "used cars Largo FL",
    "used car dealer Tampa Bay",
    "bad credit car loans Clearwater",
    "buy sell trade cars Tampa Bay",
  ],
  authors: [{ name: brand.legalName }],
  openGraph: {
    type: "website",
    siteName: brand.displayName,
    title: `${brand.displayName} — Buy • Sell • Trade in Tampa Bay`,
    description:
      "Used cars in Clearwater & Largo, FL. Straightforward buying, financing for all credit types, and fair trade values.",
    url: brand.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.displayName} — Used Cars in Tampa Bay`,
    description:
      "Buy, sell, and trade with no pressure. Financing for all credit types in Clearwater & Largo, FL.",
  },
  // Preview deployment: keep the client mockup out of search indexes while it
  // lives on the agency domain. Remove (or set index:true) at real launch.
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <AutoDealerJsonLd />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
