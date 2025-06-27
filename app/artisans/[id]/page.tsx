"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Star,
  MapPin,
  Calendar,
  Users,
  Award,
  Heart,
  Share2,
  MessageCircle,
  Phone,
  Mail,
  Globe,
  Instagram,
  Facebook,
  ChevronLeft,
  ExternalLink,
  Languages,
  Clock,
  CheckCircle,
  Camera,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

// Mock data for artisan profile
const artisan = {
  id: 1,
  name: "María Elena Quispe",
  specialty: "Textiles Tradicionales",
  location: "Cusco, Perú",
  rating: 4.9,
  reviewCount: 127,
  studentCount: 89,
  experience: "15 años",
  joinDate: "2018",
  image: "https://i0.wp.com/cojolya.org.gt/wp-content/uploads/2024/06/Proceso-del-tejido-en-Brocado-tradicional-en-Cojolya-scaled.jpg?resize=845%2C684&ssl=1",
  coverImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyQT6nQbfqOCrWIuhoCQMktexNQEytzTKM-ov1Q5U8IBNS1pW4bCysSC9iB1-c5UoS7QlNuQQbf7tnJDEFDSP4LOHf9MkHKMkFs8rzSbhkfPwh_fh5Wb8V2KRb7KPdcwtELsxqAkEvwdQ3/w1200-h630-p-k-no-nu/161209-sineace-artesanos-seran-certificados-como-evaluadores-talento-textil-peru.jpg",
  verified: true,
  featured: true,
  languages: ["Español", "Quechua", "Inglés básico"],
  specialties: ["Tejido Tradicional", "Teñido Natural", "Bordado Quechua"],
  achievements: [
    "Maestro Artesano Nacional 2020",
    "Premio UNESCO Patrimonio Cultural 2019",
    "Mejor Artesana de Cusco 2018",
    "Certificación en Técnicas Ancestrales",
  ],
  bio: `María Elena es una maestra tejedora con más de 15 años de experiencia en técnicas ancestrales quechuas. 
        Nacida en una familia de artesanos en Cusco, aprendió el arte del tejido desde muy pequeña de su abuela. 
        Ha dedicado su vida a preservar y enseñar las técnicas tradicionales de tejido, teñido natural y bordado 
        que han sido transmitidas de generación en generación en su comunidad.
        
        Su trabajo se caracteriza por el uso de fibras naturales como alpaca, llama y algodón nativo, así como 
        tintes extraídos de plantas y minerales de la región andina. María Elena ha participado en exposiciones 
        internacionales y sus obras forman parte de colecciones privadas en varios países.`,

  contact: {
    phone: "+51 984 123 456",
    whatsapp: "+51 984 123 456",
    email: "maria.quispe@artesanos.pe",
    website: "www.mariaquispe-textiles.com",
    instagram: "@mariaquispe_textiles",
    facebook: "Maria Elena Quispe Textiles",
  },

  portfolio: [
    {
      id: 1,
      title: "Manta Ceremonial Inca",
      image: "/placeholder.svg?height=300&width=300",
      description: "Manta tejida con técnicas ancestrales, diseños geométricos incas",
      price: "S/ 450",
      category: "Textiles",
    },
    {
      id: 2,
      title: "Chullo Tradicional",
      image: "/placeholder.svg?height=300&width=300",
      description: "Gorro andino con diseños tradicionales de la región",
      price: "S/ 85",
      category: "Accesorios",
    },
    {
      id: 3,
      title: "Tapiz Decorativo",
      image: "/placeholder.svg?height=300&width=300",
      description: "Tapiz con motivos de la cosmovisión andina",
      price: "S/ 320",
      category: "Decoración",
    },
    {
      id: 4,
      title: "Bolso Artesanal",
      image: "/placeholder.svg?height=300&width=300",
      description: "Bolso tejido con fibra de alpaca y diseños contemporáneos",
      price: "S/ 180",
      category: "Accesorios",
    },
    {
      id: 5,
      title: "Chalina de Alpaca",
      image: "/placeholder.svg?height=300&width=300",
      description: "Chalina suave tejida con fibra de alpaca baby",
      price: "S/ 120",
      category: "Accesorios",
    },
    {
      id: 6,
      title: "Mural Textil",
      image: "/placeholder.svg?height=300&width=300",
      description: "Obra de arte textil representando paisajes andinos",
      price: "S/ 680",
      category: "Arte",
    },
  ],

  courses: [
    {
      id: 1,
      title: "Tejido Tradicional Quechua",
      duration: "3 días",
      price: "S/ 280",
      students: 45,
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Teñido Natural con Plantas Andinas",
      duration: "2 días",
      price: "S/ 180",
      students: 32,
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Bordado Ceremonial Inca",
      duration: "4 días",
      price: "S/ 350",
      students: 28,
      rating: 5.0,
      image: "/placeholder.svg?height=200&width=300",
    },
  ],

  reviews: [
    {
      id: 1,
      name: "Ana Sofía Mendoza",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 5,
      date: "Hace 2 semanas",
      comment:
        "María Elena es una maestra excepcional. Su conocimiento de las técnicas ancestrales es impresionante y su paciencia para enseñar es admirable. Aprendí mucho en su curso de tejido tradicional.",
      course: "Tejido Tradicional Quechua",
    },
    {
      id: 2,
      name: "Carlos Ruiz",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 5,
      date: "Hace 1 mes",
      comment:
        "Una experiencia única. No solo aprendes técnicas, sino que te conectas con la cultura andina de una manera profunda. Los materiales son de excelente calidad.",
      course: "Teñido Natural con Plantas Andinas",
    },
    {
      id: 3,
      name: "Isabella Torres",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 4,
      date: "Hace 1 mes",
      comment:
        "Excelente artesana y profesora. El taller fue muy completo y bien organizado. Recomiendo totalmente sus cursos para quien quiera aprender técnicas auténticas.",
      course: "Bordado Ceremonial Inca",
    },
    {
      id: 4,
      name: "Miguel Ángel Vargas",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 5,
      date: "Hace 2 meses",
      comment:
        "María Elena transmite no solo conocimiento técnico, sino también el amor por la tradición. Sus explicaciones sobre el significado cultural de cada diseño son fascinantes.",
      course: "Tejido Tradicional Quechua",
    },
  ],
}

const ratingDistribution = [
  { stars: 5, count: 89, percentage: 70 },
  { stars: 4, count: 28, percentage: 22 },
  { stars: 3, count: 7, percentage: 6 },
  { stars: 2, count: 2, percentage: 1 },
  { stars: 1, count: 1, percentage: 1 },
]

export default function ArtisanProfilePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [isFollowing, setIsFollowing] = useState(false)

  const portfolioCategories = ["Todos", ...Array.from(new Set(artisan.portfolio.map((item) => item.category)))]

  const filteredPortfolio =
    selectedCategory === "Todos"
      ? artisan.portfolio
      : artisan.portfolio.filter((item) => item.category === selectedCategory)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredPortfolio.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredPortfolio.length) % filteredPortfolio.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image */}
      <div className="relative h-80 bg-gradient-to-r from-orange-400 to-red-500">
        <Image
          src={artisan.coverImage || "/placeholder.svg"}
          alt={`Trabajo de ${artisan.name}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Navigation */}
        <div className="absolute top-6 left-6">
          <Link href="/artisans">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Volver a Artesanos
            </Button>
          </Link>
        </div>

        {/* Actions */}
        <div className="absolute top-6 right-6 flex gap-2">
          <Button variant="ghost" className="text-white hover:bg-white/20">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/20" onClick={() => setIsFollowing(!isFollowing)}>
            <Heart className={`h-4 w-4 ${isFollowing ? "fill-current text-red-500" : ""}`} />
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="relative -mt-20 mb-8">
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="relative">
                  <Image
                    src={artisan.image || "/placeholder.svg"}
                    alt={artisan.name}
                    width={150}
                    height={150}
                    className="rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  {artisan.verified && (
                    <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-3xl font-bold text-gray-900">{artisan.name}</h1>
                      {artisan.featured && <Badge className="bg-yellow-500">Destacado</Badge>}
                    </div>
                    <p className="text-xl text-gray-600 mb-2">{artisan.specialty}</p>
                    <div className="flex items-center gap-4 text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {artisan.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Desde {artisan.joinDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {artisan.experience} de experiencia
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contactar
                    </Button>
                    <Button variant="outline" size="lg">
                      <Phone className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      <span className="text-2xl font-bold">{artisan.rating}</span>
                    </div>
                    <p className="text-sm text-gray-500">{artisan.reviewCount} reseñas</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Users className="h-5 w-5 text-blue-500" />
                      <span className="text-2xl font-bold">{artisan.studentCount}</span>
                    </div>
                    <p className="text-sm text-gray-500">Estudiantes</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Award className="h-5 w-5 text-purple-500" />
                      <span className="text-2xl font-bold">{artisan.courses.length}</span>
                    </div>
                    <p className="text-sm text-gray-500">Cursos</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Camera className="h-5 w-5 text-green-500" />
                      <span className="text-2xl font-bold">{artisan.portfolio.length}</span>
                    </div>
                    <p className="text-sm text-gray-500">Obras</p>
                  </div>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {artisan.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">Acerca de</TabsTrigger>
                <TabsTrigger value="portfolio">Portafolio</TabsTrigger>
                <TabsTrigger value="courses">Cursos</TabsTrigger>
                <TabsTrigger value="reviews">Reseñas</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Biografía</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      {artisan.bio.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                          {paragraph.trim()}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Logros y Reconocimientos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {artisan.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-yellow-500" />
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Idiomas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {artisan.languages.map((language) => (
                        <div key={language} className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
                          <Languages className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">{language}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="portfolio" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Portafolio de Obras</CardTitle>
                      <div className="flex gap-2">
                        {portfolioCategories.map((category) => (
                          <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedCategory(category)}
                          >
                            {category}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredPortfolio.map((item) => (
                        <div key={item.id} className="group cursor-pointer">
                          <div className="relative overflow-hidden rounded-lg mb-3">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              width={300}
                              height={300}
                              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button size="sm" variant="secondary">
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline">{item.category}</Badge>
                            <span className="font-semibold text-orange-600">{item.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="courses" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Cursos Disponibles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {artisan.courses.map((course) => (
                        <div
                          key={course.id}
                          className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
                        >
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            width={120}
                            height={80}
                            className="rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {course.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {course.students} estudiantes
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                {course.rating}
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xl font-bold text-orange-600">{course.price}</span>
                              <Link href={`/courses/${course.id}`}>
                                <Button>Ver Curso</Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Reseñas y Valoraciones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Rating Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">{artisan.rating}</div>
                        <div className="flex justify-center mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-5 w-5 ${
                                star <= Math.floor(artisan.rating) ? "text-yellow-500 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600">{artisan.reviewCount} reseñas</p>
                      </div>

                      <div className="space-y-2">
                        {ratingDistribution.map((rating) => (
                          <div key={rating.stars} className="flex items-center gap-3">
                            <span className="text-sm w-8">{rating.stars}★</span>
                            <Progress value={rating.percentage} className="flex-1" />
                            <span className="text-sm text-gray-600 w-8">{rating.count}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator className="my-6" />

                    {/* Individual Reviews */}
                    <div className="space-y-6">
                      {artisan.reviews.map((review) => (
                        <div key={review.id} className="border-b pb-6 last:border-b-0">
                          <div className="flex items-start gap-4">
                            <Avatar>
                              <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                              <AvatarFallback>
                                {review.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <h4 className="font-semibold">{review.name}</h4>
                                  <p className="text-sm text-gray-600">{review.date}</p>
                                </div>
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                      key={star}
                                      className={`h-4 w-4 ${
                                        star <= review.rating ? "text-yellow-500 fill-current" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="text-gray-700 mb-2">{review.comment}</p>
                              <Badge variant="outline" className="text-xs">
                                {review.course}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Contact & Info */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{artisan.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{artisan.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{artisan.contact.website}</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-medium">Redes Sociales</h4>
                  <div className="flex items-center gap-3">
                    <Instagram className="h-4 w-4 text-pink-500" />
                    <span className="text-sm">{artisan.contact.instagram}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Facebook className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">{artisan.contact.facebook}</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Enviar Email
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Estadísticas Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Tiempo de respuesta</span>
                  <span className="text-sm font-medium">&lt; 2 horas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Tasa de respuesta</span>
                  <span className="text-sm font-medium">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Última conexión</span>
                  <span className="text-sm font-medium">Hace 2 horas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Idiomas</span>
                  <span className="text-sm font-medium">{artisan.languages.length}</span>
                </div>
              </CardContent>
            </Card>

            {/* Featured Course */}
            <Card>
              <CardHeader>
                <CardTitle>Curso Destacado</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Image
                    src={artisan.courses[0].image || "/placeholder.svg"}
                    alt={artisan.courses[0].title}
                    width={300}
                    height={150}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <h4 className="font-semibold">{artisan.courses[0].title}</h4>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{artisan.courses[0].duration}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span>{artisan.courses[0].rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-orange-600">{artisan.courses[0].price}</span>
                    <Link href={`/courses/${artisan.courses[0].id}`}>
                      <Button size="sm">Ver Curso</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
