"use client"

import React, { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ZoomIn } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Contemporary Bungalow / Luxury Villa",
    category: "3D Design",
    image: "/1111.png",
    description: "Single-storey design with a semi-circular façade and modern elevation features.",
  },
  {
    id: 2,
    title: "Commercial Office Complex",
    category: "Structural Design",
    image: "/office-building-structural-design-blueprint.jpg",
    description: "Multi-story office complex with innovative structural solutions and energy efficiency.",
  },
  {
    id: 3,
    title: "Luxury Home Interior",
    category: "2D Plans",
    image: "/luxury-home-floor-plan-architectural-drawing.jpg",
    description: "Detailed floor plans for a luxury residential project with custom interior layouts.",
  },
  {
    id: 4,
    title: "Residential Villa",
    category: "3D Design",
    image: "/wwwwwwwww.jpg",
    description: "Standalone, independent house with modern design, open spaces, and car parking.",
  },
  {
    id: 5,
    title: "Residential Renovation",
    category: "3D Design",
    image: "/CC.png",
    description: "Complete renovation of a traditional home with modern structural improvements.",
  },
  {
    id: 6,
    title: "Modern Duplex Villa",
    category: "3D Design",
    image: "/new.jpg",
    description: "Independent house with clean modern elevation, extended balconies, and landscaping.",
  },
  {
    id: 7,
    title: "Modern Duplex Residence",
    category: "3D Design",
    image: "/4K..HOUSEgg.jpg",
    description: "Two-storey independent house with open balcony, car parking, and modern façade features).",
  },
  {
    id: 8,
    title: "Compact Residential House Design",
    category: "Redesign",
    image: "/Untitled design.png",
    description: "Complete Floor Plan & 3D Visualization.",
  },
  {
    id: 9,
    title: "Modern Dual-Tone Villa",
    category: "3D Design",
    image: "/4k.jpg",
    description: "A contemporary two-story villa blending bold red accents with sleek blue-gray paneling.",
  },
]

const categories = ["All", "2D Plans", "3D Design", "Structural Design", "Redesign"]

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[0] | null>(null)

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return portfolioItems;
    return portfolioItems.filter((item) => {
      // Trim and normalize whitespace in category names for comparison
      const itemCategory = item.category.trim();
      const selectedCat = selectedCategory.trim();
      return itemCategory === selectedCat;
    });
  }, [selectedCategory, portfolioItems]);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">View my work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore my latest projects in structural design and architectural visualization
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedItem && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
              <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 z-10"
                    onClick={() => setSelectedItem(null)}
                  >
                    <X className="h-6 w-6" />
                  </Button>
                  <img
                    src={selectedItem.image || "/placeholder.svg"}
                    alt={selectedItem.title}
                    className="w-full h-auto"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-foreground">{selectedItem.title}</h3>
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {selectedItem.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{selectedItem.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
