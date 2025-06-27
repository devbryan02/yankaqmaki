import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Star } from "lucide-react"

export function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: "Taller de Cerámica Tradicional",
      description: "Aprende las técnicas ancestrales de modelado y decoración de cerámica peruana.",
      instructor: "Carlos Rengifo",
      instructorImage: "/placeholder.svg?height=50&width=50",
      image: "/placeholder.svg?height=250&width=400",
      price: 120,
      originalPrice: 150,
      duration: "3 días",
      date: "15-17 Marzo",
      location: "Lima",
      modality: "Presencial",
      participants: 12,
      maxParticipants: 15,
      rating: 4.9,
      reviews: 18,
      category: "Cerámica",
      level: "Principiante",
    },
    {
      id: 2,
      title: "Tejido Andino con Telar",
      description: "Domina el arte del tejido tradicional andino usando telares de cintura.",
      instructor: "María Quispe",
      instructorImage: "/placeholder.svg?height=50&width=50",
      image: "/placeholder.svg?height=250&width=400",
      price: 95,
      duration: "2 días",
      date: "22-23 Marzo",
      location: "Virtual",
      modality: "Virtual",
      participants: 8,
      maxParticipants: 20,
      rating: 5.0,
      reviews: 12,
      category: "Textiles",
      level: "Intermedio",
    },
    {
      id: 3,
      title: "Tallado en Madera Huamanga",
      description: "Crea hermosas esculturas usando técnicas tradicionales de tallado en madera.",
      instructor: "Ana Flores",
      instructorImage: "/placeholder.svg?height=50&width=50",
      image: "/placeholder.svg?height=250&width=400",
      price: 180,
      duration: "4 días",
      date: "5-8 Abril",
      location: "Ayacucho",
      modality: "Presencial",
      participants: 6,
      maxParticipants: 10,
      rating: 4.8,
      reviews: 9,
      category: "Madera",
      level: "Avanzado",
    },
  ]

  return (
    <section className="py-20 bg-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-4">Talleres y Cursos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aprende directamente de maestros artesanos en talleres presenciales y virtuales diseñados para todos los
            niveles.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
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
                  <Badge className={`${course.modality === "Virtual" ? "bg-sage-green" : "bg-terracotta"} text-white`}>
                    {course.modality}
                  </Badge>
                  <Badge variant="secondary" className="bg-white/90 text-deep-brown">
                    {course.level}
                  </Badge>
                </div>

                {/* Discount Badge */}
                {course.originalPrice && (
                  <Badge className="absolute top-3 right-3 bg-deep-brown text-white">
                    -{Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                  </Badge>
                )}
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {course.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{course.rating}</span>
                    <span className="text-xs text-gray-500">({course.reviews})</span>
                  </div>
                </div>
                <h3 className="font-semibold text-deep-brown group-hover:text-terracotta transition-colors">
                  <Link href={`/courses/${course.id}`}>{course.title}</Link>
                </h3>
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
                  <span className="text-sm font-medium text-deep-brown">{course.instructor}</span>
                </div>

                {/* Course Details */}
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{course.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{course.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>
                      {course.participants}/{course.maxParticipants} participantes
                    </span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-sand/20">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-deep-brown">S/ {course.price}</span>
                    {course.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">S/ {course.originalPrice}</span>
                    )}
                  </div>
                  <Button size="sm" className="bg-terracotta hover:bg-terracotta/90">
                    Inscribirse
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white"
          >
            <Link href="/courses">Ver Todos los Talleres</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
