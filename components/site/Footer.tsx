import Link from "next/link"
import { Linkedin, Twitter, Facebook } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0B2B43] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-[#7FC6A4] mb-4">Prayosha Impex</h3>
            <p className="text-gray-200 mb-4 max-w-md">
              Leading manufacturer and exporter of advanced technical textile solutions and high-performance coated
              fabrics, serving global markets with quality and innovation.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-[#7FC6A4] transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#7FC6A4] transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#7FC6A4] transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#7FC6A4]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-200 hover:text-[#7FC6A4] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-200 hover:text-[#7FC6A4] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/infrastructure" className="text-gray-200 hover:text-[#7FC6A4] transition-colors">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-[#7FC6A4] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#7FC6A4]">Contact Info</h4>
            <div className="space-y-2 text-gray-200">
              <p>E-36, LaxmiNarayan Industrial Soc. Udhna-Pandesara Road, Surat, Gujarat, India</p>
              <p>Email: Akshar@prayoshaimpex.com</p>
              <p>Phone: +91-9924094842</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#7FC6A4]/30 text-center text-gray-300">
          <p>&copy; {currentYear} Prayosha Impex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
