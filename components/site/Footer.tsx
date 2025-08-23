import Link from "next/link"
import { Linkedin, Twitter, Facebook } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0B2B43] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#7FC6A4] mb-3 sm:mb-4">Prayosha Impex</h3>
            <p className="text-gray-200 mb-4 max-w-md text-sm sm:text-base leading-relaxed">
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

          <div className="col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#7FC6A4]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-200 hover:text-[#7FC6A4] transition-colors text-sm sm:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-200 hover:text-[#7FC6A4] transition-colors text-sm sm:text-base"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/infrastructure"
                  className="text-gray-200 hover:text-[#7FC6A4] transition-colors text-sm sm:text-base"
                >
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-200 hover:text-[#7FC6A4] transition-colors text-sm sm:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#7FC6A4]">Contact Info</h4>
            <div className="space-y-2 text-gray-200 text-sm sm:text-base">
              <p className="leading-relaxed">
                E-36, LaxmiNarayan Industrial Soc.
                <br className="hidden sm:inline" />
                <span className="sm:hidden"> </span>
                Udhna-Pandesara Road,
                <br />
                Surat, Gujarat, India
              </p>
              <p className="break-all sm:break-normal">
                <span className="text-xs sm:text-sm lg:text-base">Email: </span>
                <span className="text-xs sm:text-sm lg:text-base">Akshar@prayoshaimpex.com</span>
              </p>
              <p>Phone: +91-9924094842</p>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#7FC6A4]/30 text-center text-gray-300">
          <p className="text-xs sm:text-sm">&copy; {currentYear} Prayosha Impex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
