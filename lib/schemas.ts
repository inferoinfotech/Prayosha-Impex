import { z } from "zod"

export const ProductSchema = z.object({
  slug: z.string(),
  name: z.string(),
  category: z.enum(["PU", "PVC", "Silicone"]),
  summary: z.string(),
  applications: z.array(z.string()),
  specs: z.record(z.any()),
  brochureUrl: z.string(),
  image: z.string(),
})

export const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name is required"),
  country: z.string().min(2, "Country is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type Product = z.infer<typeof ProductSchema>
export type ContactFormData = z.infer<typeof ContactFormSchema>
