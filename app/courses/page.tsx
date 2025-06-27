"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Clock, MapPin, Users, Star, Search, Filter } from "lucide-react"

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState({
    category: "",
    modality: "",
    level: "",
    price: "",
  })

  const categories = [
    { id: "ceramica", name: "Cerámica", count: 12 },
    { id: "textiles", name: "Textiles", count: 18 },
    { id: "madera", name: "Tallado en Madera", count: 8 },
    { id: "joyeria", name: "Joyería", count: 15 },
    { id: "instrumentos", name: "Instrumentos", count: 6 },
    { id: "pintura", name: "Pintura", count: 10 },
  ]

  const courses = [
    {
      id: 1,
      title: "Taller de Cerámica Tradicional Shipibo",
      description:
        "Aprende las técnicas ancestrales de modelado y decoración de cerámica con patrones tradicionales shipibo-konibo.",
      instructor: "Carlos Rengifo",
      instructorImage: "/placeholder.svg?height=50&width=50",
      instructorRating: 4.9,
      image: "https://curtidosmenacho.com/modules/ph_simpleblog/featured/53.jpg",
      price: 120,
      originalPrice: 150,
      duration: "3 días",
      totalHours: 18,
      date: "15-17 Marzo 2024",
      location: "Lima, Perú",
      modality: "Presencial",
      participants: 12,
      maxParticipants: 15,
      rating: 4.9,
      reviews: 18,
      category: "Cerámica",
      level: "Principiante",
      language: "Español",
      materials: "Incluidos",
      certificate: true,
      featured: true,
    },
    {
      id: 2,
      title: "Tejido Andino con Telar de Cintura",
      description: "Domina el arte del tejido tradicional andino usando telares de cintura y técnicas milenarias.",
      instructor: "María Quispe",
      instructorImage: "/placeholder.svg?height=50&width=50",
      instructorRating: 5.0,
      image: "https://curtidosmenacho.com/modules/ph_simpleblog/featured/53.jpg",
      price: 95,
      duration: "2 días",
      totalHours: 12,
      date: "22-23 Marzo 2024",
      location: "Virtual",
      modality: "Virtual",
      participants: 8,
      maxParticipants: 20,
      rating: 5.0,
      reviews: 12,
      category: "Textiles",
      level: "Intermedio",
      language: "Español/Quechua",
      materials: "Kit enviado",
      certificate: true,
    },
    {
      id: 3,
      title: "Tallado en Madera Huamanga",
      description: "Crea hermosas esculturas usando técnicas tradicionales de tallado en madera de huamanga.",
      instructor: "Ana Flores",
      instructorImage: "/placeholder.svg?height=50&width=50",
      instructorRating: 4.8,
      image: "https://curtidosmenacho.com/modules/ph_simpleblog/featured/53.jpg",
      price: 180,
      duration: "4 días",
      totalHours: 24,
      date: "5-8 Abril 2024",
      location: "Ayacucho, Perú",
      modality: "Presencial",
      participants: 6,
      maxParticipants: 10,
      rating: 4.8,
      reviews: 9,
      category: "Madera",
      level: "Avanzado",
      language: "Español",
      materials: "Incluidos",
      certificate: true,
    },
    {
      id: 4,
      title: "Joyería en Plata - Técnica Filigrana",
      description: "Aprende la delicada técnica de filigrana en plata, patrimonio cultural de Catacaos.",
      instructor: "Roberto Silva",
      instructorImage: "/placeholder.svg?height=50&width=50",
      instructorRating: 4.9,
      image: "https://curtidosmenacho.com/modules/ph_simpleblog/featured/53.jpg",
      price: 250,
      originalPrice: 300,
      duration: "5 días",
      totalHours: 30,
      date: "10-14 Abril 2024",
      location: "Catacaos, Piura",
      modality: "Presencial",
      participants: 4,
      maxParticipants: 8,
      rating: 4.9,
      reviews: 15,
      category: "Joyería",
      level: "Avanzado",
      language: "Español",
      materials: "Incluidos",
      certificate: true,
      featured: true,
    },
    {
      id: 5,
      title: "Instrumentos Andinos - Construcción de Quena",
      description: "Construye tu propia quena tradicional y aprende las técnicas básicas de interpretación.",
      instructor: "Miguel Condori",
      instructorImage: "/placeholder.svg?height=50&width=50",
      instructorRating: 4.7,
      image: "https://curtidosmenacho.com/modules/ph_simpleblog/featured/53.jpg",
      price: 85,
      duration: "1 día",
      totalHours: 8,
      date: "20 Abril 2024",
      location: "Virtual",
      modality: "Virtual",
      participants: 15,
      maxParticipants: 25,
      rating: 4.7,
      reviews: 22,
      category: "Instrumentos",
      level: "Principiante",
      language: "Español",
      materials: "Kit enviado",
      certificate: false,
    },
    {
      id: 6,
      title: "Pintura en Mate Burilado",
      description: "Técnica tradicional de decoración en mates con motivos costumbristas y geométricos.",
      instructor: "Carmen Vásquez",
      instructorImage: "/placeholder.svg?height=50&width=50",
      instructorRating: 4.8,
      image: "https://curtidosmenacho.com/modules/ph_simpleblog/featured/53.jpg",
      price: 110,
      duration: "2 días",
      totalHours: 14,
      date: "25-26 Abril 2024",
      location: "Huancayo, Perú",
      modality: "Presencial",
      participants: 8,
      maxParticipants: 12,
      rating: 4.8,
      reviews: 11,
      category: "Pintura",
      level: "Intermedio",
      language: "Español",
      materials: "Incluidos",
      certificate: true,
    },
  ]

  return (
    <div className="min-h-screen bg-sand/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-deep-brown mb-2">Talleres y Cursos</h1>
          <p className="text-gray-600">
            Aprende directamente de maestros artesanos peruanos en talleres presenciales y virtuales
          </p>
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

                <div className="space-y-4">
                  {/* Search */}
                  <div>
                    <label className="text-sm font-medium text-deep-brown mb-2 block">Buscar</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Buscar talleres..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 border-sand focus:border-terracotta"
                      />
                    </div>
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

                  {/* Modality */}
                  <div>
                    <label className="text-sm font-medium text-deep-brown mb-2 block">Modalidad</label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="presencial" />
                        <label htmlFor="presencial" className="text-sm text-gray-600">
                          Presencial
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="virtual" />
                        <label htmlFor="virtual" className="text-sm text-gray-600">
                          Virtual
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Level */}
                  <div>
                    <label className="text-sm font-medium text-deep-brown mb-2 block">Nivel</label>
                    <div className="space-y-2">
                      {["Principiante", "Intermedio", "Avanzado"].map((level) => (
                        <div key={level} className="flex items-center space-x-2">
                          <Checkbox id={level.toLowerCase()} />
                          <label htmlFor={level.toLowerCase()} className="text-sm text-gray-600">
                            {level}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="text-sm font-medium text-deep-brown mb-2 block">Precio</label>
                    <div className="space-y-2">
                      {[
                        { id: "free", label: "Gratis", count: 3 },
                        { id: "under-100", label: "Menos de S/ 100", count: 8 },
                        { id: "100-200", label: "S/ 100 - S/ 200", count: 12 },
                        { id: "over-200", label: "Más de S/ 200", count: 6 },
                      ].map((price) => (
                        <div key={price.id} className="flex items-center space-x-2">
                          <Checkbox id={price.id} />
                          <label htmlFor={price.id} className="text-sm text-gray-600 flex-1">
                            {price.label}
                          </label>
                          <span className="text-xs text-gray-400">({price.count})</span>
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
                <span className="text-sm text-gray-600">Mostrando {courses.length} talleres</span>
              </div>

              <Select defaultValue="featured">
                <SelectTrigger className="w-48 border-sand focus:border-terracotta">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Destacados</SelectItem>
                  <SelectItem value="date">Próximas fechas</SelectItem>
                  <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                  <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                  <SelectItem value="rating">Mejor Calificados</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {courses.map((course) => (
                <Card
                  key={course.id}
                  className="group border-sand/20 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {course.featured && <Badge className="bg-terracotta text-white">Destacado</Badge>}
                      <Badge
                        className={`${course.modality === "Virtual" ? "bg-sage-green" : "bg-deep-brown"} text-white`}
                      >
                        {course.modality}
                      </Badge>
                      <Badge variant="secondary" className="bg-white/90 text-deep-brown">
                        {course.level}
                      </Badge>
                    </div>

                    {/* Discount Badge */}
                    {course.originalPrice && (
                      <Badge className="absolute top-3 right-3 bg-sage-green text-white">
                        -{Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                      </Badge>
                    )}

                    {/* Availability */}
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {course.participants}/{course.maxParticipants} inscritos
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {course.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium">{course.rating}</span>
                        <span className="text-xs text-gray-500">({course.reviews})</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-terracotta transition-colors">
                      <Link href={`/courses/${course.id}`}>{course.title}</Link>
                    </CardTitle>
                    <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Instructor */}
                    <div className="flex items-center gap-3">
                      <Image
                        src={course.instructorImage || "/placeholder.svg"}
                        alt={course.instructor}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <span className="text-sm font-medium text-deep-brown">{course.instructor}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-gray-500">{course.instructorRating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Course Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{course.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{course.totalHours}h total</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{course.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>Máx {course.maxParticipants}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {course.materials && (
                        <Badge variant="outline" className="text-xs">
                          {course.materials}
                        </Badge>
                      )}
                      {course.certificate && (
                        <Badge variant="outline" className="text-xs">
                          Certificado
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        {course.language}
                      </Badge>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-sand/20">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-deep-brown">S/ {course.price}</span>
                        {course.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">S/ {course.originalPrice}</span>
                        )}
                      </div>
                      <Button
                        size="sm"
                        className="bg-terracotta hover:bg-terracotta/90"
                        disabled={course.participants >= course.maxParticipants}
                      >
                        {course.participants >= course.maxParticipants ? "Completo" : "Inscribirse"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center">
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
