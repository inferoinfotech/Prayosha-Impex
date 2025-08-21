import { Section } from "@/components/site/Section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { generateSEOMetadata } from "@/lib/seo"
import { Award, Globe, Leaf, Microscope } from "lucide-react"

export const runtime = "edge"

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "About Us - Prayosha Impex | Leading Coated Fabric Manufacturer",
    description:
      "Learn about Prayosha Impex - ISO 9001:2015 certified manufacturer of advanced coated fabrics with global reach, sustainability focus, and in-house R&D.",
    path: "/about",
  })
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Prayosha Impex</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering advanced technical textile solutions with a commitment to quality, innovation, and sustainable
            manufacturing practices.
          </p>
        </div>
      </Section>

      {/* Company Story */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded with a vision to revolutionize the technical textile industry, Prayosha Impex has emerged as a
                leading manufacturer and exporter of advanced coated fabrics. Our journey began with a simple mission:
                to deliver high-performance textile solutions that exceed global standards.
              </p>
              <p>
                Today, we serve diverse industries across Asia, Europe, Americas, and Africa, providing innovative
                coated fabric solutions that meet the most demanding applications. Our commitment to quality, backed by
                ISO 9001:2015 certification, ensures that every product meets international standards.
              </p>
              <p>
                With state-of-the-art manufacturing facilities and a dedicated R&D team, we continue to push the
                boundaries of what's possible in technical textiles, creating solutions that drive progress across
                multiple industries.
              </p>
            </div>
          </div>
          <div className="relative h-96 bg-gray-200 rounded-lg">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              Company Image Placeholder
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                To be the global leader in advanced coated fabric manufacturing, delivering innovative, sustainable, and
                high-performance textile solutions that empower our customers to achieve excellence in their respective
                industries.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                To create a sustainable future through innovative textile technologies, fostering long-term partnerships
                with customers worldwide while maintaining our commitment to quality, environmental responsibility, and
                continuous improvement.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Core Values */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide our operations and define our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Quality Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                ISO 9001:2015 certified processes ensuring consistent quality and reliability in every product we
                manufacture.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Microscope className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Continuous research and development to create cutting-edge solutions that meet evolving market demands.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Leaf className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Sustainability</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Environmental responsibility through eco-friendly processes, waste reduction, and sustainable
                manufacturing practices.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Global Partnership</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Building lasting relationships with customers worldwide through reliable service and exceptional
                support.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </Section>



      {/* Global Reach */}
      <Section className="bg-blue-600 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Global Reach</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Serving customers across Asia, Europe, Americas, and Africa with reliable logistics and comprehensive
            after-sales support.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">6-12hrs</div>
              <div className="text-blue-100">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
