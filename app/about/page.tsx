"use client"

import { Section } from "@/components/site/Section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Globe, Leaf, Microscope } from "lucide-react"
import { motion } from "framer-motion"

export const runtime = "edge"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-[#7FC6A4] via-[#7FC6A4]/30 to-white py-20">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block rounded-3xl bg-white/50 backdrop-blur-md px-6 py-3 ring-1 ring-black/10 shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs font-semibold tracking-wide text-[#0B2B43]">About Us</span>
          </motion.div>
          <motion.h1
            className="mt-6 text-4xl md:text-5xl font-extrabold text-[#0B2B43] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            About Prayosha Impex
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Pioneering advanced technical textile solutions with a commitment to quality, innovation, and sustainable
            manufacturing practices.
          </motion.p>
          <motion.div
            className="mt-8 mx-auto h-1 w-28 rounded-full bg-gradient-to-r from-[#0B2B43] to-[#7FC6A4]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>
      </Section>

      {/* Company Story */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#0B2B43] mb-6 tracking-tight">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Founded with a vision to revolutionize the technical textile industry in 2017, Prayosha Impex has
                emerged as a leading manufacturer and exporter of advanced coated fabrics. Our journey began with a
                simple mission: to deliver high-performance textile solutions that exceed global standards.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Today, we serve diverse industries across Asia, Europe, Americas, and Africa, providing innovative
                coated fabric solutions that meet the most demanding applications. Our commitment to quality ensures
                that every product meets international standards.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                With state-of-the-art manufacturing facilities and a dedicated R&D team, we continue to push the
                boundaries of what's possible in technical textiles, creating solutions that drive progress across
                multiple industries.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-2xl bg-gradient-to-br from-[#7FC6A4]/20 via-gray-50 to-white ring-1 ring-black/10 shadow-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 rounded-2xl">
              <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#7FC6A4]/20 to-[#0B2B43]/20 blur-2xl" />
            </div>
            <div className="relative z-10 h-full flex items-center justify-center text-gray-500 font-medium">
              Company Image Placeholder
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-gray-50">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -5 }}
          >
            <Card className="relative overflow-hidden rounded-2xl border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
              <div className="absolute inset-y-0 left-0 w-1.5 bg-[#7FC6A4]" />
              <CardHeader className="pl-8">
                <CardTitle className="text-2xl tracking-tight text-[#0B2B43]">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="pl-8">
                <CardDescription className="text-base leading-relaxed text-gray-700">
                  To be the global leader in advanced coated fabric manufacturing, delivering innovative, sustainable,
                  and high-performance textile solutions that empower our customers to achieve excellence in their
                  respective industries.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -5 }}
          >
            <Card className="relative overflow-hidden rounded-2xl border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
              <div className="absolute inset-y-0 left-0 w-1.5 bg-[#0B2B43]" />
              <CardHeader className="pl-8">
                <CardTitle className="text-2xl tracking-tight text-[#0B2B43]">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="pl-8">
                <CardDescription className="text-base leading-relaxed text-gray-700">
                  To create a sustainable future through innovative textile technologies, fostering long-term
                  partnerships with customers worldwide while maintaining our commitment to quality, environmental
                  responsibility, and continuous improvement.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      {/* Core Values */}
      <Section className="bg-white">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#0B2B43] mb-4 tracking-tight">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide our operations and define our commitment to excellence.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
          {[
            {
              icon: Award,
              title: "Quality Excellence",
              description:
                "Advanced manufacturing processes ensuring consistent quality and reliability in every product we manufacture.",
            },
            {
              icon: Microscope,
              title: "Innovation",
              description:
                "Continuous research and development to create cutting-edge solutions that meet evolving market demands.",
            },
            {
              icon: Leaf,
              title: "Sustainability",
              description:
                "Environmental responsibility through eco-friendly processes, waste reduction, and sustainable manufacturing practices.",
            },
            {
              icon: Globe,
              title: "Global Partnership",
              description:
                "Building lasting relationships with customers worldwide through reliable service and exceptional support.",
            },
          ].map((value, idx) => (
            <motion.div
              key={value.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="group relative overflow-hidden rounded-2xl border border-black/5 shadow-sm hover:-translate-y-1 hover:shadow-2xl transition-all">
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#7FC6A4]/20 via-transparent to-[#0B2B43]/20" />
                <CardHeader className="text-center">
                  <motion.span
                    className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7FC6A4]/20 text-[#0B2B43] ring-1 ring-[#7FC6A4]/40"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <value.icon className="h-7 w-7" />
                  </motion.span>
                  <CardTitle className="tracking-tight text-[#0B2B43]">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700">{value.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Global Reach */}
      <Section className="py-16">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold tracking-tight mb-6 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Global Reach
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-10 text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Serving customers across Asia, Europe, Americas, and Africa with reliable logistics and comprehensive
            after-sales support.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {[
              { number: "10+", label: "Countries Served" },
              { number: "6–12 Hours", label: "Response Time" },
              { number: "8+", label: "Years Experience" },
              { number: "95%", label: "Customer Satisfaction" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6 transition-all duration-300 hover:bg-gray-50 hover:shadow-lg"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-extrabold mb-2 text-[#0B2B43]">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

    </>
  )
}
