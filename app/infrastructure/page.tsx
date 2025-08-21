import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { generateSEOMetadata } from "@/lib/seo";

export const runtime = "edge";

export async function generateMetadata() {
  return generateSEOMetadata({
    title: "Infrastructure - Weaving, Coating, Finishing & Lamination",
    description:
      "Overview of our core manufacturing units: Weaving, Coating, Finishing, and Lamination.",
    path: "/infrastructure",
  });
}

type Unit = {
  key: string;
  title: string;
  description: string;
  image?: string;
};

const UNITS: Unit[] = [
  {
    key: "weaving",
    title: "Weaving Unit",
    description:
      "Our state-of-the-art waterjet weaving unit is equipped with high-speed looms to produce premium-quality woven fabrics with exceptional precision and efficiency. We specialize in polyester and nylon base fabrics for technical applications. Installed weaving capacity: ~300,000 m/month.",
    image: "/images/infrastructure/Waterjet-WEaving.jpg",
  },
  {
    key: "coating",
    title: "Coating Unit",
    description:
      "Our coating unit uses advanced knife-over-roll and transfer processes to deliver PU (polyurethane), PVC (polyvinyl chloride), and silicone-coated fabrics. Precision-controlled lines ensure uniform coating thickness, excellent adhesion, and high-performance finishes that meet international standards. Coating enhances durability, flexibility, water resistance, UV stability, and flame-retardant properties—ideal for awnings, tents, umbrellas, rainwear, luggage, and military-grade textiles.",
    image: "/images/infrastructure/Coating-Unit.png",
  },
  {
    key: "finishing",
    title: "Finishing Unit",
    description:
      "Our calendering & finishing unit uses heated rollers under controlled pressure to achieve the desired finish, thickness, and surface properties. This process improves smoothness, gloss, and coating adhesion. We also provide embossing, slitting, and precise rewinding to deliver ready-to-use rolls for PU-, PVC-, and silicone-coated fabrics.",
    image: "/images/infrastructure/Calendering-Process.jpg",
  },
  {
    key: "lamination",
    title: "Lamination Unit",
    description:
      "Our lamination unit supports adhesive and flame lamination for multi-layer technical textiles. With tightly controlled temperature, pressure, and speed, we produce consistent composites with high strength, barrier performance, and durability. Typical applications include awnings, umbrellas, rainwear, military gear, luggage, and industrial textiles—validated through stringent quality checks to meet international standards.",
    image: "/images/infrastructure/lamination.jpg",
  },
];

const FACILITY_IMAGES: { src: string; alt: string }[] = [
  { src: "/images/facility/IMG_7947.jpg", alt: "Weaving floor with high-speed looms" },
  { src: "/images/facility/kusumgar-production-capabilities.jpg", alt: "Coating line in operation" },
  { src: "/images/facility/Picture-2.png", alt: "Calendering rollers for finishing" },
  { src: "/images/facility/Picture-4.png", alt: "Lamination unit for composites" },
  { src: "/images/facility/Picture-8.png", alt: "Quality control lab testing setup" },
  { src: "/images/facility/Picture-10.png", alt: "Finished goods warehouse" },
];

export default function InfrastructurePage() {
  return (
    <>
      {/* Four Units (alternate image/text per row) */}
      <Section className="bg-white py-16">
        <div className="space-y-12">
          {UNITS.map((u, idx) => {
            const flip = idx % 2 === 1; // alternate rows on lg+
            return (
              <div
                key={u.key}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                {/* Image */}
                <div
                  className={
                    "relative h-64 md:h-80 lg:h-[360px] rounded-2xl overflow-hidden shadow-lg " +
                    (flip ? "lg:order-2" : "lg:order-1")
                  }
                >
                  <Image
                    src={u.image || "/placeholder.svg"}
                    alt={u.title}
                    fill
                    className="object-cover"
                    priority={false}
                  />
                </div>

                {/* Details */}
                <div className={flip ? "lg:order-1" : "lg:order-2"}>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {u.title}
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                    {u.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Facility Gallery */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Facility Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a virtual tour of our manufacturing facilities and quality control laboratories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITY_IMAGES.map((img, i) => (
            <div key={i} className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                priority={i < 2}
              />
            </div>
          ))}
        </div>
      </Section>

    </>
  );
}
