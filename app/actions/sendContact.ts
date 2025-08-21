"use server"

import { ContactFormSchema } from "@/lib/schemas"

export async function sendContactForm(formData: FormData) {
  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      country: formData.get("country") as string,
      message: formData.get("message") as string,
    }

    // Validate the form data
    const validatedData = ContactFormSchema.parse(data)

    // Log the contact form submission (in a real app, you'd send an email or save to database)
    console.log("Contact form submission:", {
      ...validatedData,
      timestamp: new Date().toISOString(),
    })

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      error: "Failed to send message. Please try again.",
    }
  }
}
