import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/site/Section";
import { generateSEOMetadata } from "@/lib/seo";
import { Truck, Building, Fuel, Shield, Activity } from "lucide-react";
import productsData from "@/data/products.json";
import industriesData from "@/data/industries.json";

export const runtime = "edge";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Prayosha Impex - Advanced Coated Fabrics | Global Textile Solutions",
    description:
      "Leading manufacturer and exporter of PU, PVC, and Silicone coated fabrics. ISO 9001:2015 certified with global delivery and custom solutions.",
    path: "/",
  });
}

const iconMap = {
  truck: Truck,
  building: Building,
  fuel: Fuel,
  shield: Shield,
  activity: Activity,
};

// Image marquee row (CSS-only seamless loop; uses .animate-marquee from globals.css)
function ImageMarqueeRow({
  images,
  reverse = false,
  speedSec = 36,
}: {
  images: string[];
  reverse?: boolean;
  speedSec?: number;
}) {
  const safeImages = images.length ? images : ["/placeholder.svg"];
  const loop = [...safeImages, ...safeImages]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden py-4">
      <div className="flex gap-6 whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul
          className={`flex gap-6 animate-marquee ${reverse ? "animate-marquee-reverse" : ""}`}
          style={{ ["--marquee-duration" as any]: `${speedSec}s` }}
        >
          {loop.map((src, i) => (
            <li key={`${src}-${i}`} className="relative w-56 md:w-64 h-28 md:h-36 rounded-xl overflow-hidden shadow-sm border border-black/5 bg-white">
              <Image
                src={src || "/placeholder.svg"}
                alt="Marquee"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 224px, 256px"
                priority={i < 4}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function HomePage() {
  // Build arrays of product images for the marquees
  const productImages = productsData.map((p) => p.image || "/placeholder.svg");

  return (
    <>
      {/* 1) Full-bleed banner with background image + overlay text */}
      <section className="relative w-full h-[56vh] md:h-[68vh] lg:h-[78vh]">
        <Image
          src="/images/hero.jpg" // <-- replace with your actual banner
          alt="Prayosha Impex — Advanced Coated Fabrics"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Advanced Coated Fabrics — Engineered for Global Performance
            </h1>
            <p className="mt-4 text-base md:text-lg lg:text-xl text-white/90">
              Leading manufacturer and exporter of advanced technical textile solutions. Serving global markets with ISO
              9001:2015 certified quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* 2) Full-bleed double image marquee (outside container) */}
      <section className="w-full bg-gray-50 border-y border-black/5">
        <div className="mx-auto max-w-none">  
          <ImageMarqueeRow images={productImages} reverse={false} speedSec={34} />
          <ImageMarqueeRow images={productImages} reverse={true} speedSec={34} />
        </div>
      </section>

      {/* 3) Industries We Serve */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our advanced coated fabrics serve diverse industries with specialized requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((industry) => {
            const Icon = iconMap[industry.icon as keyof typeof iconMap];
            return (
              <Card key={industry.name}>
                <CardHeader>
                  {Icon && <Icon className="h-8 w-8 text-blue-600 mb-2" />}
                  <CardTitle>{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{industry.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Discuss Your Use Case</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
