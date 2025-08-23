"use client"

import Image from "next/image"
import Link from "next/link"
import { Section } from "@/components/site/Section"
import productsData from "@/data/products.json"
import { motion } from "framer-motion"

export const runtime = "edge"

type Product = {
  slug?: string
  name: string
  summary: string
  image?: string
}

const toSlug = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-[#7FC6A4]/20 via-[#7FC6A4]/10 to-white">
        {/* soft background glow */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#7FC6A4]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#0B2B43]/20 blur-3xl" />

        <motion.div
          className="relative mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[#0B2B43] ring-1 ring-black/10 backdrop-blur"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Coated Fabrics
          </motion.span>

          <motion.h1
            className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B2B43]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our Products
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            High-performance coated fabrics for demanding applications.
          </motion.p>

          {/* accent underline */}
          <motion.div
            className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#0B2B43] to-[#7FC6A4]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>
      </Section>

      {/* Products: alternate image/text per row */}
      <Section className="bg-white py-20">
        <div className="space-y-28">
          {productsData.map((p, idx) => {
            const flip = idx % 2 === 1

            return (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                {/* Soft background band */}
                <div className="absolute inset-0 -z-10">
                  <div className="h-40 md:h-48 w-full bg-gradient-to-r from-[#7FC6A4]/10 to-white rounded-3xl" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14">
                  {/* Image (floating) */}
                  <motion.div
                    className={[flip ? "lg:order-2" : "lg:order-1", "relative"].join(" ")}
                    initial={{ opacity: 0, x: flip ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative mx-auto h-72 md:h-96 lg:h-[420px] w-full overflow-hidden rounded-3xl">
                      <Image
                        src={p.image || "/placeholder.svg"}
                        alt={p.name}
                        fill
                        sizes="(min-width:1024px) 50vw, 100vw"
                        priority={idx === 0}
                        className="object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    className={[flip ? "lg:order-1" : "lg:order-2", "w-full"].join(" ")}
                    initial={{ opacity: 0, x: flip ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <div className="rounded-3xl bg-white ring-1 ring-[#7FC6A4]/30 p-6 md:p-8 shadow-sm">
                      <motion.h2
                        className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0B2B43]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        {p.name}
                      </motion.h2>
                      <motion.div
                        className="mt-3 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#0B2B43] to-[#7FC6A4]"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                      />
                      <motion.p
                        className="mt-6 text-lg leading-relaxed text-gray-700"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        {p.summary}
                      </motion.p>

                      {/* Optional CTA if you have p.slug */}
                      {/* {p.slug && (
                        <motion.div
                          className="mt-7"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.9 }}
                        >
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                              href={`/products/${p.slug}`}
                              className="inline-flex items-center gap-2 rounded-xl border border-[#7FC6A4] px-4 py-2 text-sm font-medium text-[#0B2B43] hover:bg-[#7FC6A4] hover:text-white transition-colors"
                            >
                              Learn More
                              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path
                                  fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l5 5a.997.997 0 01.083.094l.007.01a1.003 1.003 0 01.203.597v.012a1.003 1.003 0 01-.203.597l-.007.01a.997.997 0 01-.083.094l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </Link>
                          </motion.div>
                        </motion.div>
                      )} */}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Section>
    </>
  )
}
