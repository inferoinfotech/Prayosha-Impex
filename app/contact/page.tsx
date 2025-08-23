"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Section } from "@/components/site/Section"
import { MapPin, Phone, Mail, Clock, Send, Globe } from "lucide-react"
import { sendContactForm } from "@/app/actions/sendContact"
import companyData from "@/data/company.json"
import { motion } from "framer-motion"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(formData: FormData) {
    if (formData.get("company_website_trap")) {
      return
    }

    setIsSubmitting(true)
    try {
      const result = await sendContactForm(formData)

      if (result?.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your inquiry. We will respond within 24-48 hours.",
        })
        const form = document.getElementById("contact-form") as HTMLFormElement | null
        form?.reset()
      } else {
        toast({
          title: "Error",
          description: result?.error || "There was an error sending your message. Please try again.",
          variant: "destructive",
        })
      }
    } catch {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  type AddressObject = {
    street?: string
    city?: string
    state?: string
    country?: string
    pincode?: string
  }

  const address = companyData?.contact?.address
  const isAddressObject = typeof address === "object"

  const street = isAddressObject ? ((address as AddressObject).street ?? "") : ((address as string) ?? "")
  const city = isAddressObject ? ((address as AddressObject).city ?? "") : ""
  const state = isAddressObject ? ((address as AddressObject).state ?? "") : ""
  const country = isAddressObject ? ((address as AddressObject).country ?? "") : ""
  const pincode = isAddressObject ? ((address as AddressObject).pincode ?? "") : ""

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Prayosha Impex",
    description: "Get in touch with Prayosha Impex for technical textiles and coated fabric solutions.",
    mainEntity: {
      "@type": "Organization",
      name: "Prayosha Impex",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: companyData?.contact?.phone || "",
        email: companyData?.contact?.email || "",
        contactType: "customer service",
      },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* Hero */}
      <Section className="py-16 md:py-24 bg-gradient-to-br from-[#7FC6A4]/10 via-[#7FC6A4]/5 to-transparent">
        <motion.div
          className="text-center space-y-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge className="bg-[#7FC6A4] text-[#0B2B43] ring-1 ring-[#0B2B43]/20">
              Global Support • 24–48 Hour Response Time
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B2B43]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Get in{" "}
            <span className="bg-gradient-to-r from-[#0B2B43] to-[#7FC6A4] bg-clip-text text-transparent">Touch</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to discuss your technical textile requirements? Our expert team provides customized solutions and
            comprehensive support worldwide.
          </motion.p>
        </motion.div>
      </Section>

      {/* Form + Info */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-border/50 shadow-md">
              <CardHeader>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tight text-[#0B2B43]">Send us a Message</h2>
                  <p className="text-gray-600">
                    Fill out the form below and our team will get back to you within 24–48 hours.
                  </p>
                </div>
              </CardHeader>

              <CardContent>
                <form
                  id="contact-form"
                  action={handleSubmit}
                  className="space-y-6"
                  aria-describedby="contact-help"
                  noValidate
                >
                  {/* Honeypot (hidden field) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="company_website_trap">Company Website</label>
                    <input id="company_website_trap" name="company_website_trap" type="text" />
                  </div>

                  <div id="contact-help" className="sr-only">
                    Required fields are marked with an asterisk.
                  </div>

                  <motion.div
                    className="grid md:grid-cols-2 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                  >
                    <motion.div
                      className="space-y-2"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <label htmlFor="name" className="text-sm font-medium text-[#0B2B43]">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        required
                        autoComplete="name"
                        maxLength={120}
                      />
                    </motion.div>

                    <motion.div
                      className="space-y-2"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <label htmlFor="email" className="text-sm font-medium text-[#0B2B43]">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@company.com"
                        required
                        autoComplete="email"
                        inputMode="email"
                        maxLength={140}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="grid md:grid-cols-2 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                  >
                    <motion.div
                      className="space-y-2"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <label htmlFor="phone" className="text-sm font-medium text-[#0B2B43]">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        autoComplete="tel"
                        inputMode="tel"
                        maxLength={32}
                      />
                    </motion.div>

                    <motion.div
                      className="space-y-2"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <label htmlFor="company" className="text-sm font-medium text-[#0B2B43]">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your company name"
                        autoComplete="organization"
                        maxLength={120}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <label htmlFor="country" className="text-sm font-medium text-[#0B2B43]">
                      Country
                    </label>
                    <Input
                      id="country"
                      name="country"
                      type="text"
                      placeholder="Your country"
                      autoComplete="country-name"
                      maxLength={80}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <label htmlFor="message" className="text-sm font-medium text-[#0B2B43]">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project requirements, technical specifications, or any questions you have..."
                      rows={6}
                      required
                      maxLength={4000}
                    />
                    <p className="text-xs text-gray-500">
                      Please include fabric type, application, expected quantities, and timelines if available.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                      className="w-full gap-2 text-white bg-gradient-to-r from-[#0B2B43] to-[#0B2B43]/80 hover:from-[#7FC6A4] hover:to-[#7FC6A4]/80 hover:text-[#0B2B43]"
                    >
                      <Send className="w-5 h-5" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl tracking-tight text-[#0B2B43]">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#7FC6A4] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1 text-[#0B2B43]">Address</h4>
                      {isAddressObject ? (
                        <p className="text-sm text-gray-600">
                          {street}
                          <br />
                          {city}
                          {city && state ? ", " : ""}
                          {state}
                          <br />
                          {country}
                          {pincode ? ` — ${pincode}` : ""}
                        </p>
                      ) : (
                        <p className="text-sm text-gray-600">{street || "—"}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#7FC6A4] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1 text-[#0B2B43]">Phone</h4>
                      <p className="text-sm text-gray-600">{companyData?.contact?.phone || "—"}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#7FC6A4] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1 text-[#0B2B43]">Email</h4>
                      <p className="text-sm text-gray-600">{companyData?.contact?.email || "—"}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#7FC6A4] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1 text-[#0B2B43]">Website</h4>
                      <p className="text-sm text-gray-600">{companyData?.contact?.website || "—"}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl tracking-tight text-[#0B2B43]">Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#7FC6A4]" />
                    <div>
                      <p className="font-medium text-[#0B2B43]">Monday – Saturday</p>
                      <p className="text-sm text-gray-600">9:00 AM – 8:00 PM IST</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-500">Sunday</p>
                      <p className="text-sm text-gray-600">Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
