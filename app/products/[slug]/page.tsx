import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/site/Section"
import { generateSEOMetadata } from "@/lib/seo"
import { Download, ArrowLeft } from "lucide-react"
import productsData from "@/data/products.json"

export const runtime = "edge"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = productsData.find((p) => p.slug === params.slug)

  if (!product) {
    return {}
  }

  return generateSEOMetadata({
    title: `${product.name} - High-Performance Coated Fabric`,
    description: product.summary,
    path: `/products/${product.slug}`,
  })
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = productsData.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    category: product.category,
    manufacturer: {
      "@type": "Organization",
      name: "Prayosha Impex",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Prayosha Impex",
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      <Section className="bg-white py-8">
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link href="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative h-96 lg:h-[500px] bg-gray-200 rounded-lg overflow-hidden">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <Badge variant="secondary">{product.category}</Badge>
              </div>
              <p className="text-lg text-gray-600">{product.summary}</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Key Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1").trim()}:</span>
                      <span className="text-gray-600">
                        {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Typical Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((application) => (
                    <Badge key={application} variant="outline">
                      {application}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href={product.brochureUrl}>
                  <Download className="h-4 w-4 mr-2" />
                  Download Brochure
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Products */}
      <Section className="bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Products</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productsData
            .filter((p) => p.slug !== product.slug && p.category === product.category)
            .slice(0, 2)
            .map((relatedProduct) => (
              <Card key={relatedProduct.slug}>
                <div className="relative h-48 w-full">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{relatedProduct.name}</CardTitle>
                  <CardDescription>{relatedProduct.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={`/products/${relatedProduct.slug}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </Section>
    </>
  )
}
