"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Heart, ShoppingCart, Star, Filter, Search, Grid, List } from "lucide-react"

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 500])
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { id: "textiles", name: "Textiles", count: 45 },
    { id: "ceramica", name: "Cerámica", count: 32 },
    { id: "joyeria", name: "Joyería", count: 28 },
    { id: "madera", name: "Madera", count: 19 },
    { id: "instrumentos", name: "Instrumentos", count: 15 },
    { id: "decoracion", name: "Decoración", count: 38 },
  ]

  const regions = [
    { id: "cusco", name: "Cusco", count: 67 },
    { id: "lima", name: "Lima", count: 45 },
    { id: "arequipa", name: "Arequipa", count: 23 },
    { id: "ayacucho", name: "Ayacucho", count: 34 },
    { id: "puno", name: "Puno", count: 28 },
  ]

  const products = [
    {
      id: 1,
      name: "Manta Andina Tradicional Premium",
      description: "Hermosa manta tejida a mano con técnicas ancestrales, perfecta para decoración o uso personal.",
      price: 180,
      originalPrice: 220,
      image: "https://freight.cargo.site/t/original/i/bdb09ac6d431221deb5d72fa7911a62cb4debbfe3a333154f7fd46604ba9870e/_DSF2731-1.jpg",
      artisan: "María Quispe",
      location: "Cusco",
      rating: 4.9,
      reviews: 23,
      category: "Textiles",
      featured: true,
      inStock: true,
      discount: 18,
    },
    {
      id: 2,
      name: "Vasija de Cerámica Shipibo",
      description: "Auténtica vasija decorada con patrones tradicionales shipibo-konibo.",
      price: 95,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDP0pTJSumi8I8CnZK4GCKWbLEV8s01PJwfg&s",
      artisan: "Carlos Rengifo",
      location: "Ucayali",
      rating: 4.8,
      reviews: 15,
      category: "Cerámica",
      inStock: true,
    },
    {
      id: 3,
      name: "Tallado en Madera Huamanga",
      description: "Exquisita pieza tallada en madera de huamanga con motivos tradicionales.",
      price: 150,
      image: "https://museopedrodeosma.org/wp-content/uploads/2021/03/Lagar-mistico_Sala-Piedra-de-Huamanga_004.jpg",
      artisan: "Ana Flores",
      location: "Ayacucho",
      rating: 5.0,
      reviews: 8,
      category: "Madera",
      inStock: true,
    },
    {
      id: 4,
      name: "Joyería en Plata Filigrana",
      description: "Collar artesanal en plata 950 con técnica de filigrana tradicional.",
      price: 280,
      image: "https://i.pinimg.com/736x/1f/79/a9/1f79a94d32b77c76ee4878176e33ab52.jpg",
      artisan: "Roberto Silva",
      location: "Catacaos",
      rating: 4.9,
      reviews: 31,
      category: "Joyería",
      featured: true,
      inStock: true,
    },
    {
      id: 5,
      name: "Bolso Tejido a Mano",
      description: "Bolso funcional tejido con lana de alpaca y diseños geométricos andinos.",
      price: 65,
      image: "https://culli.pe/123-product_zoom/bolso-la-chuquina-grande-2-lana-culli-peru.jpg",
      artisan: "Elena Mamani",
      location: "Puno",
      rating: 4.7,
      reviews: 19,
      category: "Textiles",
      inStock: false,
    },
    {
      id: 6,
      name: "Máscara Ceremonial",
      description: "Máscara tradicional tallada en madera para ceremonias y decoración.",
      price: 320,
      image: "https://i.etsystatic.com/11551073/r/il/48c5cc/4547160572/il_570xN.4547160572_gmbo.jpg",
      artisan: "José Huamán",
      location: "Paucartambo",
      rating: 4.8,
      reviews: 12,
      category: "Arte",
      inStock: true,
    },
  ]

  const ProductCard = ({ product }: { product: (typeof products)[0] }) => (
    <Card className="group border-sand/20 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.featured && <Badge className="bg-terracotta text-white">Destacado</Badge>}
          {product.discount && <Badge className="bg-sage-green text-white">-{product.discount}%</Badge>}
          <Badge variant="secondary" className="bg-white/90 text-deep-brown">
            {product.category}
          </Badge>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="sm" variant="secondary" className="w-10 h-10 p-0 bg-white/90 hover:bg-white">
            <Heart className="w-4 h-4" />
          </Button>
          <Button size="sm" className="w-10 h-10 p-0 bg-terracotta hover:bg-terracotta/90" disabled={!product.inStock}>
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>

        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive" className="text-white">
              Agotado
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-deep-brown group-hover:text-terracotta transition-colors line-clamp-2">
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </h3>

          <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>

          <div className="flex items-center text-sm text-gray-600">
            <span>por {product.artisan}</span>
            <span className="mx-2">•</span>
            <span>{product.location}</span>
          </div>

          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-gray-500">({product.reviews})</span>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-deep-brown">S/ {product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">S/ {product.originalPrice}</span>
              )}
            </div>
            <Button size="sm" className="bg-terracotta hover:bg-terracotta/90" disabled={!product.inStock}>
              {product.inStock ? "Agregar" : "Agotado"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const ProductListItem = ({ product }: { product: (typeof products)[0] }) => (
    <Card className="border-sand/20 hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="relative flex-shrink-0">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={120}
              height={120}
              className="w-30 h-30 object-cover rounded-lg"
            />
            {product.featured && (
              <Badge className="absolute top-2 left-2 bg-terracotta text-white text-xs">Destacado</Badge>
            )}
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-deep-brown hover:text-terracotta transition-colors">
                <Link href={`/products/${product.id}`}>{product.name}</Link>
              </h3>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-red-500">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button size="sm" className="bg-terracotta hover:bg-terracotta/90" disabled={!product.inStock}>
                  <ShoppingCart className="w-4 h-4 mr-1" />
                  {product.inStock ? "Agregar" : "Agotado"}
                </Button>
              </div>
            </div>

            <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>por {product.artisan}</span>
              <span>•</span>
              <span>{product.location}</span>
              <span>•</span>
              <Badge variant="outline">{product.category}</Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-gray-500">({product.reviews} reseñas)</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-deep-brown">S/ {product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">S/ {product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-sand/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-deep-brown mb-2">Catálogo de Productos</h1>
          <p className="text-gray-600">Descubre auténticas artesanías peruanas hechas a mano</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <Card className="border-sand/20">
              <CardContent className="p-4">
                <h3 className="font-semibold text-deep-brown mb-4 flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtros
                </h3>

                {/* Search */}
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-deep-brown mb-2 block">Buscar</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Buscar productos..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 border-sand focus:border-terracotta"
                      />
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="text-sm font-medium text-deep-brown mb-2 block">
                      Rango de Precio: S/ {priceRange[0]} - S/ {priceRange[1]}
                    </label>
                    <Slider value={priceRange} onValueChange={setPriceRange} max={500} step={10} className="mt-2" />
                  </div>

                  {/* Categories */}
                  <div>
                    <label className="text-sm font-medium text-deep-brown mb-2 block">Categorías</label>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category.id} className="flex items-center space-x-2">
                          <Checkbox id={category.id} />
                          <label htmlFor={category.id} className="text-sm text-gray-600 flex-1">
                            {category.name}
                          </label>
                          <span className="text-xs text-gray-400">({category.count})</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Regions */}
                  <div>
                    <label className="text-sm font-medium text-deep-brown mb-2 block">Región</label>
                    <div className="space-y-2">
                      {regions.map((region) => (
                        <div key={region.id} className="flex items-center space-x-2">
                          <Checkbox id={region.id} />
                          <label htmlFor={region.id} className="text-sm text-gray-600 flex-1">
                            {region.name}
                          </label>
                          <span className="text-xs text-gray-400">({region.count})</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="text-sm font-medium text-deep-brown mb-2 block">Calificación</label>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center space-x-2">
                          <Checkbox id={`rating-${rating}`} />
                          <label htmlFor={`rating-${rating}`} className="flex items-center text-sm text-gray-600">
                            {[...Array(rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="ml-1">y más</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Mostrando {products.length} productos</span>
              </div>

              <div className="flex items-center gap-4">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-48 border-sand focus:border-terracotta">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Destacados</SelectItem>
                    <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                    <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                    <SelectItem value="rating">Mejor Calificados</SelectItem>
                    <SelectItem value="newest">Más Recientes</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border border-sand rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "bg-terracotta hover:bg-terracotta/90" : ""}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={viewMode === "list" ? "bg-terracotta hover:bg-terracotta/90" : ""}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {products.map((product) => (
                  <ProductListItem key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Anterior
                </Button>
                <Button variant="default" size="sm" className="bg-terracotta hover:bg-terracotta/90">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Siguiente
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
