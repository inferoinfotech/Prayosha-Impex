import type { Metadata } from "next"

export function generateSEOMetadata({
  title,
  description,
  path = "",
  image = "/images/og-image.jpg",
}: {
  title: string
  description: string
  path?: string
  image?: string
}): Metadata {
  const url = `https://prayoshaimpex.com${path}`

  return {
    title,
    description,
    canonical: url,
    openGraph: {
      title,
      description,
      url,
      siteName: "Prayosha Impex",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Prayosha Impex",
  description:
    "Leading manufacturer and exporter of advanced technical textile solutions and high-performance coated fabrics.",
  url: "https://prayoshaimpex.com",
  logo: "https://prayoshaimpex.com/images/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-172-XXXXXXX",
    contactType: "customer service",
    email: "info@prayoshaimpex.com",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Industrial Area, Phase-II",
    addressLocality: "Chandigarh",
    addressCountry: "IN",
  },
  sameAs: ["https://linkedin.com/company/prayoshaimpex", "https://twitter.com/prayoshaimpex"],
}
