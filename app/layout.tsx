import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import { Header } from "@/components/site/Header"
import { Footer } from "@/components/site/Footer"
import { organizationSchema } from "@/lib/seo"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Prayosha Impex - Advanced Coated Fabrics",
    template: "%s | Prayosha Impex",
  },
  description:
    "Leading manufacturer and exporter of advanced technical textile solutions and high-performance coated fabrics.",
  keywords: [
    "coated fabrics",
    "technical textiles",
    "PU coating",
    "PVC coating",
    "silicone coating",
    "export",
    "manufacturer",
  ],
  authors: [{ name: "Prayosha Impex" }],
  creator: "Prayosha Impex",
  metadataBase: new URL("https://prayoshaimpex.com"),
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
