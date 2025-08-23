"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/site/Section"
import { Truck, Building, Fuel, Shield, Activity } from "lucide-react"
import productsData from "@/data/products.json"
import industriesData from "@/data/industries.json"
import { motion } from "framer-motion"

const MARQUEE_TOP: string[] = [
  "/images/slider/22.jpg",
  "/images/slider/air-mesh-fabric-500x500.webp",
  "/images/slider/awning-2.jpg",
  "/images/slider/awning.jpg",
  "/images/slider/bags_and_cases_series_big.jpg",
  "/images/slider/Cordura-Military-Header_1.jpg",
  "/images/slider/T2118E_039040_actionshot_1.avif",
]

const MARQUEE_BOTTOM: string[] = [
  "/images/slider/download.jpeg",
  "/images/slider/images-(1).jpeg",
  "/images/slider/lowsofdundee_lwtranslucentfr_1410625560A.avif",
  "/images/slider/lowsofdundee_translucentfr_1410624726pag.avif",
  "/images/slider/luggage-lining.jpg",
  "/images/slider/outdoor-clothing.jpg",
  "/images/slider/p2598974.avif",
]

const iconMap = {
  truck: Truck,
  building: Building,
  fuel: Fuel,
  shield: Shield,
  activity: Activity,
}

// Image marquee row (CSS-only seamless loop; uses .animate-marquee from globals.css)
function ImageMarqueeRow({
  images,
  reverse = false,
  speedSec = 36,
  itemClass = "w-108 md:w-116 h-80 md:h-96",
  gap = "gap-6",
  paddingY = "py-4",
}: {
  images: string[]
  reverse?: boolean
  speedSec?: number
  itemClass?: string
  gap?: string
  paddingY?: string
}) {
  const safeImages = images.length ? images : ["/placeholder.svg"]
  const loop = [...safeImages, ...safeImages]

  return (
    <div className={`overflow-hidden ${paddingY}`}>
      <div
        className={`flex ${gap} whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]`}
      >
        <ul
          className={`flex ${gap} animate-marquee ${reverse ? "animate-marquee-reverse" : ""}`}
          style={{ ["--marquee-duration" as any]: `${speedSec}s` }}
        >
          {loop.map((src, i) => (
            <li
              key={`${src}-${i}`}
              className={`relative ${itemClass} rounded-xl overflow-hidden shadow-sm border border-black/5 bg-white shrink-0`}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt="Marquee"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 384px, 512px"
                priority={i < 4}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function HomePageClient() {
  const productImages = productsData.map((p) => p.image || "/placeholder.svg")

  return (
    <>
      {/* 1) Full-bleed banner with background image + overlay text */}
      <section className="relative w-full h-[56vh] md:h-[68vh] lg:h-[78vh]">
        <Image
          src="/images/hero.jpg"
          alt="Prayosha Impex — Advanced Coated Fabrics"
          fill
          className="object-cover"
          priority
        />
        {/* gradient overlay (kept neutral) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="rounded-3xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.35)] p-6 md:p-10 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Advanced Coated Fabrics — Engineered for Global Performance
              </motion.h1>
              <motion.p
                className="mt-4 text-base md:text-lg lg:text-xl text-white/90"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Leading manufacturer and exporter of advanced technical textile solutions. Serving global markets with
                ISO 9001:2015 certified quality and innovation.
              </motion.p>
              <motion.div
                className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-white/80 to-white/30"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2) Full-bleed double image marquee (UNCHANGED) */}
      <section className="w-full bg-gray-50 border-y border-black/5">
        <div className="mx-auto max-w-none">
          <ImageMarqueeRow images={MARQUEE_TOP} reverse={false} speedSec={34} />
          <ImageMarqueeRow images={MARQUEE_BOTTOM} reverse={true} speedSec={34} />
        </div>
      </section>

      {/* 3) Industries We Serve */}
      <Section className="bg-white">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block rounded-full bg-[#7FC6A4]/20 text-[#0B2B43] text-xs font-semibold px-3 py-1 ring-1 ring-[#7FC6A4]/40">
            Our Expertise
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-[#0B2B43]">
            Industries We Serve
          </h2>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            Our advanced coated fabrics serve diverse industries with specialized requirements.
          </p>
        </motion.div>

        {/* Feature tiles with brand accents */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {industriesData.map((industry, idx) => {
            const Icon = iconMap[industry.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={industry.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="relative overflow-hidden rounded-2xl border border-black/5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  {/* Left accent bar */}
                  <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#7FC6A4] to-[#0B2B43]" />

                  {/* Subtle background shimmer in brand tone */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-tr from-[#7FC6A4]/10 to-transparent blur-2xl" />

                  <CardHeader className="pl-8 pr-6 pt-6">
                    {Icon && (
                      <div className="flex items-center gap-3">
                        <motion.span
                          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7FC6A4]/20 text-[#0B2B43] ring-1 ring-[#7FC6A4]/40"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon className="h-6 w-6" />
                        </motion.span>
                        <CardTitle className="text-lg md:text-xl tracking-tight text-[#0B2B43]">
                          {industry.name}
                        </CardTitle>
                      </div>
                    )}
                  </CardHeader>

                  <CardContent className="pl-8 pr-6 pb-6">
                    <CardDescription className="text-gray-700 leading-relaxed">{industry.description}</CardDescription>

                    {/* tiny underline accent */}
                    <motion.div
                      className="mt-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#0B2B43] to-[#7FC6A4]"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-xl border-2 hover:border-[#0B2B43] hover:text-[#0B2B43] transition-colors bg-transparent"
            >
              <Link href="/contact">Discuss Your Use Case</Link>
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </>
  )
}
