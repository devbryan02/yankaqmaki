"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, MapPin, Star, Grid, List, Users, Award, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const artisans = [
  {
    id: 1,
    name: "María Elena Quispe",
    specialty: "Textiles Tradicionales",
    location: "Cusco, Perú",
    rating: 4.9,
    reviewCount: 127,
    studentCount: 89,
    experience: "15 años",
    image: "https://cdn-icons-png.flaticon.com/512/5541/5541150.png",
    coverImage: "https://www.conartesanos.com/wp-content/uploads/2020/05/telar_andes_930_415.jpg",
    description: "Maestra tejedora especializada en técnicas ancestrales quechuas",
    price: "Desde S/ 45",
    verified: true,
    featured: true,
    tags: ["Textiles", "Quechua", "Tradicional"],
    languages: ["Español", "Quechua"],
    achievements: ["Maestro Artesano", "Premio Nacional"],
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    specialty: "Cerámica Shipibo",
    location: "Pucallpa, Perú",
    rating: 4.8,
    reviewCount: 94,
    studentCount: 67,
    experience: "12 años",
    image: "https://cdn-icons-png.flaticon.com/512/5541/5541150.png",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_EW1t3EO_MmCloa9Pn4tDWEIvjUSPO87wg&s",
    description: "Artista ceramista con técnicas tradicionales shipibo-konibo",
    price: "Desde S/ 60",
    verified: true,
    featured: false,
    tags: ["Cerámica", "Shipibo", "Amazónico"],
    languages: ["Español", "Shipibo"],
    achievements: ["Artista Reconocido"],
  },
  {
    id: 3,
    name: "Ana Lucia Vargas",
    specialty: "Joyería en Plata",
    location: "Lima, Perú",
    rating: 4.7,
    reviewCount: 156,
    studentCount: 134,
    experience: "8 años",
    image: "https://cdn-icons-png.flaticon.com/512/5541/5541150.png",
    coverImage: "https://www.limawalkingtour.com/wp-content/uploads/2024/08/plata.jpg",
    description: "Diseñadora de joyas contemporáneas con técnicas tradicionales",
    price: "Desde S/ 80",
    verified: true,
    featured: true,
    tags: ["Joyería", "Plata", "Contemporáneo"],
    languages: ["Español", "Inglés"],
    achievements: ["Diseñadora del Año"],
  },
  {
    id: 4,
    name: "Roberto Huamán",
    specialty: "Tallado en Madera",
    location: "Ayacucho, Perú",
    rating: 4.9,
    reviewCount: 89,
    studentCount: 45,
    experience: "20 años",
    image: "https://cdn-icons-png.flaticon.com/512/5541/5541150.png",
    coverImage: "https://woodiswood.net/uploads/images/7ef29fa81dad47faab0808a85eb8235a.webp",
    description: "Maestro tallador especializado en retablos ayacuchanos",
    price: "Desde S/ 55",
    verified: true,
    featured: false,
    tags: ["Tallado", "Madera", "Retablos"],
    languages: ["Español"],
    achievements: ["Maestro Artesano", "Patrimonio Cultural"],
  },
]

const specialties = [
  "Todos",
  "Textiles Tradicionales",
  "Cerámica",
  "Joyería",
  "Tallado en Madera",
  "Pintura",
  "Escultura",
]

const locations = ["Todas las ubicaciones", "Lima", "Cusco", "Arequipa", "Pucallpa", "Ayacucho", "Huancayo"]

export default function ArtisansPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("Todos")
  const [selectedLocation, setSelectedLocation] = useState("Todas las ubicaciones")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")

  const filteredArtisans = artisans.filter((artisan) => {
    const matchesSearch =
      artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = selectedSpecialty === "Todos" || artisan.specialty === selectedSpecialty
    const matchesLocation = selectedLocation === "Todas las ubicaciones" || artisan.location.includes(selectedLocation)

    return matchesSearch && matchesSpecialty && matchesLocation
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Conoce a Nuestros Artesanos</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre maestros artesanos peruanos que preservan tradiciones ancestrales y crean obras únicas llenas de
              historia y cultura.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar artesanos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                <SelectTrigger>
                  <SelectValue placeholder="Especialidad" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty} value={specialty}>
                      {specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Ubicación" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Destacados</SelectItem>
                  <SelectItem value="rating">Mejor valorados</SelectItem>
                  <SelectItem value="experience">Más experiencia</SelectItem>
                  <SelectItem value="students">Más estudiantes</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">{filteredArtisans.length} artesanos encontrados</p>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Artisans Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtisans.map((artisan) => (
              <Card key={artisan.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={artisan.coverImage || "/placeholder.svg"}
                    alt={`Trabajo de ${artisan.name}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  {artisan.featured && <Badge className="absolute top-3 left-3 bg-yellow-500">Destacado</Badge>}
                  <Button variant="ghost" size="sm" className="absolute top-3 right-3 bg-white/80 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Image
                      src={artisan.image || "/placeholder.svg"}
                      alt={artisan.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{artisan.name}</h3>
                        {artisan.verified && (
                          <Badge variant="secondary" className="text-xs">
                            Verificado
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{artisan.specialty}</p>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="h-3 w-3" />
                        {artisan.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{artisan.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {artisan.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{artisan.rating}</span>
                      <span className="text-gray-500">({artisan.reviewCount})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span>{artisan.studentCount} estudiantes</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Desde</p>
                      <p className="font-semibold text-lg">{artisan.price}</p>
                    </div>
                    <Link href={`/artisans/${artisan.id}`}>
                      <Button>Ver Perfil</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredArtisans.map((artisan) => (
              <Card key={artisan.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <Image
                      src={artisan.image || "/placeholder.svg"}
                      alt={artisan.name}
                      width={100}
                      height={100}
                      className="rounded-lg object-cover"
                    />

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-xl">{artisan.name}</h3>
                            {artisan.verified && <Badge variant="secondary">Verificado</Badge>}
                            {artisan.featured && <Badge className="bg-yellow-500">Destacado</Badge>}
                          </div>
                          <p className="text-gray-600 mb-1">{artisan.specialty}</p>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <MapPin className="h-3 w-3" />
                            {artisan.location}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>

                      <p className="text-gray-600 mb-4">{artisan.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {artisan.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="font-medium">{artisan.rating}</span>
                            <span className="text-gray-500">({artisan.reviewCount})</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-gray-400" />
                            <span>{artisan.studentCount} estudiantes</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="h-4 w-4 text-gray-400" />
                            <span>{artisan.experience}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-sm text-gray-500">Desde</p>
                            <p className="font-semibold text-lg">{artisan.price}</p>
                          </div>
                          <Link href={`/artisans/${artisan.id}`}>
                            <Button>Ver Perfil</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
