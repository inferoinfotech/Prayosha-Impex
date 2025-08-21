"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {Section} from "@/components/site/Section"; // default import to match the target UI
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Globe,
  MessageSquare,
  Users,
  Headphones,
} from "lucide-react";
import { sendContactForm } from "@/app/actions/sendContact";
import companyData from "@/data/company.json";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    try {
      const result = await sendContactForm(formData);

      if (result?.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your inquiry. We will respond within 24-48 hours.",
        });
        const form = document.getElementById("contact-form") as HTMLFormElement | null;
        form?.reset();
      } else {
        toast({
          title: "Error",
          description: result?.error || "There was an error sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Support both address object and string
  const address = companyData?.contact?.address;
  const isAddressObject = address && typeof address === "object";
  const street = isAddressObject ? address.street : address;
  const city = isAddressObject ? address.city : "";
  const state = isAddressObject ? address.state : "";
  const country = isAddressObject ? address.country : "";
  const pincode = isAddressObject ? address.pincode : "";

  const coords = companyData?.contact?.coordinates || { lat: "—", lng: "—" };

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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Hero Section */}
      <Section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/0">
        <div className="text-center space-y-6">
          <Badge className="bg-secondary text-secondary-foreground">
            Global Support • 24-48 Hour Response Time
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Get in{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to discuss your technical textile requirements? Our expert team is here to provide
            customized solutions and comprehensive support for your projects worldwide.
          </p>
        </div>
      </Section>

      {/* Contact Form & Info */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 shadow-md">
              <CardHeader>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Send us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and our team will get back to you within 24-48 hours.
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <form id="contact-form" action={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <Input id="name" name="name" type="text" placeholder="Your full name" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="country" className="text-sm font-medium">
                      Country
                    </label>
                    <Input id="country" name="country" type="text" placeholder="Your country" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project requirements, technical specifications, or any questions you have..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-primary/70"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    {isAddressObject ? (
                      <p className="text-sm text-muted-foreground">
                        {street}
                        <br />
                        {city}{city && state ? ", " : ""}{state}
                        <br />
                        {country}{pincode ? ` - ${pincode}` : ""}
                      </p>
                    ) : (
                      <p className="text-sm text-muted-foreground">{street || "—"}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-sm text-muted-foreground">
                      {companyData?.contact?.phone || "—"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-sm text-muted-foreground">
                      {companyData?.contact?.email || "—"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Website</h4>
                    <p className="text-sm text-muted-foreground">
                      {companyData?.contact?.website || "—"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Business Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Monday - Saturday</p>
                    <p className="text-sm text-muted-foreground">9:00 AM - 8:00 PM IST</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-muted-foreground">Sunday</p>
                    <p className="text-sm text-muted-foreground">Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>


    </>
  );
}
