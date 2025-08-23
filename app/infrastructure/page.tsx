"use client"

import Image from "next/image"
import { Section } from "@/components/site/Section"
import ContainerScroll from "@/components/ui/container-scroll-animation"
import { motion } from "framer-motion"

type Unit = {
  key: string
  title: string
  description: string
  image?: string
}

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
]

const FACILITY_IMAGES: { src: string; alt: string }[] = [
  { src: "/images/Facility/IMG_7947.jpg", alt: "Weaving floor with high-speed looms" },
  { src: "/images/Facility/kusumgar-production-capabilities.jpg", alt: "Coating line in operation" },
  { src: "/images/Facility/Picture-2.png", alt: "Calendering rollers for finishing" },
  { src: "/images/Facility/Picture-4.png", alt: "Lamination unit for composites" },
  { src: "/images/Facility/Picture-8.png", alt: "Quality control lab testing setup" },
  { src: "/images/Facility/Picture-10.png", alt: "Finished goods warehouse" },
]

export default function InfrastructureClientPage() {
  return (
    <>
      <Section className="bg-white py-16">
        <div className="space-y-24">
          {UNITS.map((u, idx) => {
            const flip = idx % 2 === 1
            return (
              <motion.div
                key={u.key}
                className="flex flex-col overflow-hidden"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                <ContainerScroll
                  titleComponent={
                    <motion.div
                      className={["max-w-4xl mx-auto px-4 sm:px-6", flip ? "lg:text-right" : "lg:text-left"].join(" ")}
                      initial={{ opacity: 0, x: flip ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <h2 className="text-3xl md:text-5xl font-bold text-[#0B2B43] tracking-tight">{u.title}</h2>
                      <p className="mt-4 mb-3 text-lg md:text-xl text-gray-700 leading-relaxed">{u.description}</p>

                      <motion.div
                        className={[
                          "mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#0B2B43] to-[#7FC6A4]",
                          flip ? "ml-auto" : "mr-auto",
                        ].join(" ")}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      />
                    </motion.div>
                  }
                >
                  <Image
                    src={u.image || "/placeholder.svg"}
                    alt={u.title}
                    width={1000}
                    height={520}
                    priority={idx === 0}
                    draggable={false}
                    className={[
                      "mx-auto rounded-2xl object-cover h-full",
                      flip ? "object-right-top" : "object-left-top",
                      "shadow-2xl ring-1 ring-[#7FC6A4]/30",
                    ].join(" ")}
                  />
                </ContainerScroll>
              </motion.div>
            )
          })}
        </div>
      </Section>

      <Section className="bg-[#7FC6A4]/10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#0B2B43] mb-4">Facility Gallery</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Take a virtual tour of our manufacturing facilities and quality control laboratories.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
          {FACILITY_IMAGES.map((img, i) => (
            <motion.figure
              key={i}
              className="group"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-[#0B2B43]/10">
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  priority={i < 2}
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </Section>
    </>
  )
}
