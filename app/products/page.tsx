"use client";

import Image from "next/image";
import { Section } from "@/components/site/Section";
import productsData from "@/data/products.json";

export const runtime = "edge";

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-lg md:text-xl text-gray-600">
            High-performance coated fabrics for demanding applications.
          </p>
        </div>
      </Section>

      {/* Products: alternate image/text per row */}
      <Section className="bg-white">
        <div className="space-y-12">
          {productsData.map((p, idx) => {
            const flip = idx % 2 === 1; // even index (2nd, 4th, ...) -> image right, text left
            return (
              <div
                key={p.slug}
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
                    src={p.image || "/placeholder.svg"}
                    alt={p.name}
                    fill
                    className="object-cover"
                    priority={false}
                  />
                </div>

                {/* Text */}
                <div className={flip ? "lg:order-1" : "lg:order-2"}>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {p.name}
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                    {p.summary}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
