import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata, Viewport } from "next"

// Define metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://wing2wingprotocol.com"),
  title: {
    default: "Wing2Wing Protocol | Timeless Communication",
    template: "%s | Wing2Wing Protocol",
  },
  description:
    "Wing2Wing Protocol is the world's first pigeon-powered messaging system. Choose your pigeon, send your message, and embrace the journey.",
  keywords: [
    "Wing2Wing Protocol",
    "digital pigeon",
    "messaging protocol",
    "unique messaging",
    "nostalgic communication",
    "pigeon messaging",
  ],
  authors: [{ name: "Wing2Wing Protocol Team" }],
  creator: "Wing2Wing Protocol",
  publisher: "Wing2Wing Protocol",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wing2wingprotocol.com",
    title: "Wing2Wing Protocol | Timeless Communication",
    description: "Messages delivered with character. The world's first pigeon-powered messaging protocol.",
    siteName: "Wing2Wing Protocol",
    images: [
      {
        url: "https://wing2wingprotocol.com/w2wdemoimg.png",
        width: 1200,
        height: 630,
        alt: "Wing2Wing Protocol - Pigeon-powered messaging",
      },
    ],
  },
  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: "Wing2Wing Protocol | Timeless Communication",
    description: "Messages delivered with character. The world's first pigeon-powered messaging protocol.",
    images: ["https://wing2wingprotocol.com/twitter-image.jpg"],
    creator: "@wing2wingprotocol",
  },
  // Canonical URL
  alternates: {
    canonical: "https://wing2wingprotocol.com",
  },
}

// Define viewport settings
export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preconnect to domains for performance */}
        <link rel="preconnect" href="https://wing2wingprotocol.com" />

        {/* Favicon tags */}
        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
