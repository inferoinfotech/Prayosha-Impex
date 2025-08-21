"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import type { Product } from "@/lib/schemas"

interface ProductFiltersProps {
  products: Product[]
  onFilter: (filtered: Product[]) => void
}

export function ProductFilters({ products, onFilter }: ProductFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = ["all", "PU", "PVC", "Silicone"]

  const handleFilter = () => {
    let filtered = products

    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.applications.some((app) => app.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    onFilter(filtered)
  }

  // Filter on every change
  useState(() => {
    handleFilter()
  })

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setTimeout(handleFilter, 100)
            }}
            className="pl-10"
          />
        </div>

        <div className="flex gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setSelectedCategory(category)
                setTimeout(handleFilter, 100)
              }}
              className="capitalize"
            >
              {category === "all" ? "All Products" : category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
