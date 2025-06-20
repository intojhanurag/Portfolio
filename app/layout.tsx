import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script";

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anurag Ojha",
  description:
    "Portfolio website of Anurag Ojha, a Full Stack Developer specializing in React, Node.js, and modern web technologies.",
    generator: 'anurag ojha'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          defer
          data-website-id="68559d4c748b8b0ceae0bee2"
          data-domain="anuragworks.xyz"
          src="https://datafa.st/js/script.js">
        </script>
        <meta name="darkreader" content="NO-DARKREADER" />
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider  attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
          <Analytics/>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'