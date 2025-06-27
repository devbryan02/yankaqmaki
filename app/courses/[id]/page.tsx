"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  Play,
  Download,
  Share2,
  Heart,
  CheckCircle,
  Award,
  Globe,
  MessageCircle,
  Phone,
  BookOpen,
  Video,
  FileText,
  Gift,
  CreditCard,
  Shield,
  RotateCcw,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const [isEnrolled, setIsEnrolled] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [enrollmentStep, setEnrollmentStep] = useState(1)
  const [enrollmentData, setEnrollmentData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    expectations: "",
    agreeTerms: false,
    agreeMarketing: false,
  })

  // Mock course data - in real app, this would come from API
  const course = {
    id: 1,
    title: "Taller de Cerámica Tradicional Shipibo",
    subtitle: "Aprende las técnicas ancestrales de modelado y decoración",
    description:
      "Sumérgete en el fascinante mundo de la cerámica shipibo-konibo, una de las tradiciones artesanales más ricas del Perú. En este taller intensivo aprenderás desde las técnicas básicas de modelado hasta los complejos patrones decorativos que caracterizan esta ancestral forma de arte.",
    longDescription: `
      La cerámica shipibo es mucho más que una técnica artesanal; es una forma de conexión espiritual con la naturaleza y los ancestros. Durante este taller de 3 días, te guiaremos a través de un viaje completo desde la preparación del barro hasta la decoración final con los icónicos diseños geométricos.

      Trabajarás con arcilla local extraída de las riberas del río Ucayali, la misma que han usado los maestros ceramistas shipibo durante generaciones. Aprenderás a preparar la arcilla, a modelar piezas funcionales y decorativas, y a aplicar los patrones tradicionales que representan la cosmovisión de este pueblo amazónico.

      Este no es solo un taller técnico, sino una experiencia cultural inmersiva donde conocerás la historia, los mitos y las tradiciones que dan vida a cada pieza de cerámica shipibo.
    `,
    instructor: {
      id: 1,
      name: "Carlos Rengifo",
      title: "Maestro Ceramista Shipibo",
      bio: "Carlos es un maestro ceramista de tercera generación, nacido en la comunidad shipibo de San Francisco en Ucayali. Ha dedicado más de 20 años a perfeccionar las técnicas tradicionales de cerámica y ha enseñado a cientos de estudiantes tanto locales como internacionales. Su trabajo ha sido exhibido en museos de Lima, Madrid y Nueva York.",
      image: "/placeholder.svg?height=120&width=120",
      rating: 4.9,
      totalStudents: 847,
      totalCourses: 12,
      yearsExperience: 20,
      languages: ["Español", "Shipibo", "Inglés básico"],
      specialties: ["Cerámica tradicional", "Diseños shipibo", "Técnicas ancestrales"],
      achievements: [
        "Premio Nacional de Artesanía 2019",
        "Maestro Artesano certificado por CITE",
        "Exposición individual en Museo de Arte de Lima",
      ],
      socialMedia: {
        instagram: "@carlosrengifo_ceramica",
        facebook: "Carlos Rengifo Ceramista",
        whatsapp: "+51987654321",
      },
    },
    images: [
      "https://www.peru.travel/Contenido/Uploads/ceramicas-Shipibo-Konibo_637593508542935390.jpg",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    price: 120,
    originalPrice: 150,
    discount: 20,
    duration: "3 días",
    totalHours: 18,
    sessions: 6,
    date: "15-17 Marzo 2024",
    startDate: "2024-03-15T09:00:00Z",
    endDate: "2024-03-17T17:00:00Z",
    location: "Lima, Perú",
    address: "Taller de Cerámica Amazónica, Av. El Sol 123, Barranco",
    modality: "Presencial",
    participants: 12,
    maxParticipants: 15,
    minParticipants: 8,
    rating: 4.9,
    totalReviews: 18,
    ratingDistribution: {
      5: 14,
      4: 3,
      3: 1,
      2: 0,
      1: 0,
    },
    category: "Cerámica",
    level: "Principiante",
    language: "Español",
    materials: "Incluidos",
    certificate: true,
    featured: true,
    curriculum: [
      {
        day: 1,
        title: "Fundamentos y Preparación",
        duration: "6 horas",
        topics: [
          {
            title: "Historia de la cerámica shipibo",
            duration: "45 min",
            type: "theory",
            description: "Conoce los orígenes y evolución de esta tradición milenaria",
          },
          {
            title: "Preparación de la arcilla",
            duration: "90 min",
            type: "practice",
            description: "Aprende a preparar y acondicionar la arcilla local",
          },
          {
            title: "Técnicas básicas de modelado",
            duration: "120 min",
            type: "practice",
            description: "Domina las técnicas fundamentales para dar forma a la arcilla",
          },
          {
            title: "Creación de tu primera pieza",
            duration: "135 min",
            type: "practice",
            description: "Modela tu primera vasija siguiendo técnicas tradicionales",
          },
        ],
      },
      {
        day: 2,
        title: "Técnicas Avanzadas y Decoración",
        duration: "6 horas",
        topics: [
          {
            title: "Secado y preparación para decorar",
            duration: "60 min",
            type: "theory",
            description: "Aprende los tiempos y técnicas de secado adecuadas",
          },
          {
            title: "Patrones geométricos shipibo",
            duration: "90 min",
            type: "theory",
            description: "Comprende el significado y construcción de los diseños",
          },
          {
            title: "Técnicas de decoración",
            duration: "120 min",
            type: "practice",
            description: "Aplica los patrones tradicionales en tus piezas",
          },
          {
            title: "Decoración avanzada",
            duration: "90 min",
            type: "practice",
            description: "Perfecciona tu técnica con diseños más complejos",
          },
        ],
      },
      {
        day: 3,
        title: "Acabados y Presentación Final",
        duration: "6 horas",
        topics: [
          {
            title: "Técnicas de cocción tradicional",
            duration: "90 min",
            type: "theory",
            description: "Conoce los métodos ancestrales de cocción",
          },
          {
            title: "Proceso de cocción",
            duration: "180 min",
            type: "practice",
            description: "Participa en el proceso completo de cocción",
          },
          {
            title: "Acabados finales",
            duration: "60 min",
            type: "practice",
            description: "Aplica los toques finales a tus creaciones",
          },
          {
            title: "Presentación y evaluación",
            duration: "90 min",
            type: "presentation",
            description: "Presenta tu trabajo y recibe retroalimentación",
          },
        ],
      },
    ],
    included: [
      "Todos los materiales y herramientas",
      "Arcilla local de Ucayali",
      "Pigmentos naturales para decoración",
      "Manual digital del curso",
      "Certificado de participación",
      "Refrigerios durante los descansos",
      "Acceso a comunidad online de estudiantes",
      "1 sesión de seguimiento virtual",
    ],
    requirements: [
      "No se requiere experiencia previa",
      "Ropa cómoda que se pueda ensuciar",
      "Delantal o ropa de trabajo",
      "Ganas de aprender y experimentar",
      "Respeto por las tradiciones culturales",
    ],
    whatYouWillLearn: [
      "Técnicas tradicionales de preparación de arcilla",
      "Modelado básico y avanzado de cerámica",
      "Patrones geométricos shipibo y su significado",
      "Técnicas de decoración ancestrales",
      "Proceso completo de cocción tradicional",
      "Historia y cultura del pueblo shipibo",
      "Cuidado y conservación de piezas cerámicas",
    ],
    schedule: [
      {
        day: "Día 1",
        date: "15 Marzo",
        sessions: [
          { time: "09:00 - 10:30", activity: "Bienvenida e introducción histórica" },
          { time: "10:45 - 12:15", activity: "Preparación de arcilla" },
          { time: "13:15 - 15:00", activity: "Técnicas básicas de modelado" },
          { time: "15:15 - 17:00", activity: "Creación de primera pieza" },
        ],
      },
      {
        day: "Día 2",
        date: "16 Marzo",
        sessions: [
          { time: "09:00 - 10:00", activity: "Secado y preparación" },
          { time: "10:15 - 11:45", activity: "Patrones geométricos" },
          { time: "12:45 - 14:45", activity: "Técnicas de decoración" },
          { time: "15:00 - 16:30", activity: "Decoración avanzada" },
        ],
      },
      {
        day: "Día 3",
        date: "17 Marzo",
        sessions: [
          { time: "09:00 - 10:30", activity: "Técnicas de cocción" },
          { time: "10:45 - 13:45", activity: "Proceso de cocción" },
          { time: "14:45 - 15:45", activity: "Acabados finales" },
          { time: "16:00 - 17:30", activity: "Presentación final" },
        ],
      },
    ],
    faqs: [
      {
        question: "¿Necesito experiencia previa en cerámica?",
        answer:
          "No, este taller está diseñado para principiantes. Te enseñaremos desde los fundamentos básicos hasta técnicas más avanzadas.",
      },
      {
        question: "¿Qué debo traer al taller?",
        answer:
          "Solo necesitas traer ropa cómoda que se pueda ensuciar y un delantal. Todos los materiales y herramientas están incluidos.",
      },
      {
        question: "¿Puedo llevarme las piezas que haga?",
        answer:
          "¡Por supuesto! Todas las piezas que crees durante el taller son tuyas para llevar a casa una vez que estén completamente secas y cocidas.",
      },
      {
        question: "¿Hay descuentos para grupos?",
        answer:
          "Sí, ofrecemos descuentos del 15% para grupos de 3 o más personas. Contacta con nosotros para más información.",
      },
      {
        question: "¿Qué pasa si no puedo asistir?",
        answer:
          "Puedes cancelar hasta 48 horas antes del inicio del taller para un reembolso completo. También puedes transferir tu inscripción a otra fecha disponible.",
      },
    ],
    testimonials: [
      {
        id: 1,
        name: "Ana María González",
        avatar: "/placeholder.svg?height=50&width=50",
        rating: 5,
        date: "2024-01-20",
        comment:
          "Una experiencia increíble. Carlos es un maestro excepcional que no solo enseña técnica, sino que transmite la pasión y el respeto por esta tradición ancestral. Recomendado 100%.",
        course: "Taller anterior - Enero 2024",
      },
      {
        id: 2,
        name: "Roberto Silva",
        avatar: "/placeholder.svg?height=50&width=50",
        rating: 5,
        date: "2024-01-18",
        comment:
          "Nunca había trabajado con cerámica y salí del taller con 3 piezas hermosas y conocimientos que jamás olvidaré. El ambiente es muy acogedor y se aprende muchísimo.",
        course: "Taller anterior - Enero 2024",
      },
      {
        id: 3,
        name: "Carmen López",
        avatar: "/placeholder.svg?height=50&width=50",
        rating: 4,
        date: "2024-01-15",
        comment:
          "Excelente taller, muy bien organizado. Me encantó aprender sobre la cultura shipibo además de las técnicas. Carlos es muy paciente y conocedor.",
        course: "Taller anterior - Enero 2024",
      },
    ],
  }

  const relatedCourses = [
    {
      id: 2,
      title: "Tejido Andino con Telar",
      instructor: "María Quispe",
      price: 95,
      image: "/placeholder.svg?height=200&width=300",
      rating: 5.0,
      duration: "2 días",
      participants: 8,
      maxParticipants: 20,
    },
    {
      id: 3,
      title: "Tallado en Madera Huamanga",
      instructor: "Ana Flores",
      price: 180,
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      duration: "4 días",
      participants: 6,
      maxParticipants: 10,
    },
    {
      id: 4,
      title: "Joyería en Plata Filigrana",
      instructor: "Roberto Silva",
      price: 250,
      originalPrice: 300,
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      duration: "5 días",
      participants: 4,
      maxParticipants: 8,
    },
  ]

  const handleEnrollment = () => {
    if (enrollmentStep < 3) {
      setEnrollmentStep(enrollmentStep + 1)
    } else {
      setIsEnrolled(true)
      toast({
        title: "¡Inscripción exitosa!",
        description: "Te has inscrito correctamente al taller. Recibirás un email de confirmación.",
      })
    }
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast({
      title: isWishlisted ? "Eliminado de favoritos" : "Agregado a favoritos",
      description: isWishlisted
        ? "El curso ha sido eliminado de tu lista de favoritos."
        : "El curso ha sido agregado a tu lista de favoritos.",
    })
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-PE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "theory":
        return <BookOpen className="w-4 h-4 text-blue-500" />
      case "practice":
        return <Play className="w-4 h-4 text-green-500" />
      case "presentation":
        return <Video className="w-4 h-4 text-purple-500" />
      default:
        return <FileText className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-sand/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <Link href="/" className="hover:text-terracotta">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-terracotta">
              Talleres
            </Link>
            <span>/</span>
            <Link href={`/courses?category=${course.category.toLowerCase()}`} className="hover:text-terracotta">
              {course.category}
            </Link>
            <span>/</span>
            <span className="text-deep-brown font-medium">{course.title}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="space-y-6">
              {/* Image Gallery */}
              <div className="relative aspect-video bg-white rounded-2xl overflow-hidden shadow-lg">
                <Image src={course.images[0] || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {course.featured && <Badge className="bg-terracotta text-white">Destacado</Badge>}
                  <Badge className={`${course.modality === "Virtual" ? "bg-sage-green" : "bg-deep-brown"} text-white`}>
                    {course.modality}
                  </Badge>
                  <Badge variant="secondary" className="bg-white/90 text-deep-brown">
                    {course.level}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleWishlist}
                    className={`bg-white/90 hover:bg-white ${isWishlisted ? "text-red-500" : "text-gray-600"}`}
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
                  </Button>
                  <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white text-gray-600">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Course Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{course.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-gray-500">({course.totalReviews} reseñas)</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-deep-brown">{course.title}</h1>
                <p className="text-xl text-gray-600">{course.subtitle}</p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{course.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.totalHours} horas totales</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{course.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>
                      {course.participants}/{course.maxParticipants} inscritos
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Resumen</TabsTrigger>
                <TabsTrigger value="curriculum">Currículo</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reseñas</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="space-y-6">
                  {/* Description */}
                  <Card className="border-sand/20">
                    <CardHeader>
                      <CardTitle className="text-deep-brown">Descripción del Taller</CardTitle>
                    </CardHeader>
                    <CardContent className="prose max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-4">{course.description}</p>
                      <div className="whitespace-pre-line text-gray-700 leading-relaxed">{course.longDescription}</div>
                    </CardContent>
                  </Card>

                  {/* What You'll Learn */}
                  <Card className="border-sand/20">
                    <CardHeader>
                      <CardTitle className="text-deep-brown">¿Qué aprenderás?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {course.whatYouWillLearn.map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-sage-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Requirements */}
                  <Card className="border-sand/20">
                    <CardHeader>
                      <CardTitle className="text-deep-brown">Requisitos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {course.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-terracotta rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-700">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* What's Included */}
                  <Card className="border-sand/20">
                    <CardHeader>
                      <CardTitle className="text-deep-brown">¿Qué incluye?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {course.included.map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Gift className="w-5 h-5 text-sage-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="curriculum" className="mt-6">
                <div className="space-y-6">
                  {course.curriculum.map((day, dayIndex) => (
                    <Card key={dayIndex} className="border-sand/20">
                      <CardHeader>
                        <CardTitle className="text-deep-brown flex items-center justify-between">
                          <span>
                            Día {day.day}: {day.title}
                          </span>
                          <Badge variant="outline">{day.duration}</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {day.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-start gap-4 p-4 bg-sand/30 rounded-lg">
                              <div className="flex-shrink-0">{getTypeIcon(topic.type)}</div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-semibold text-deep-brown">{topic.title}</h4>
                                  <span className="text-sm text-gray-500">{topic.duration}</span>
                                </div>
                                <p className="text-gray-600 text-sm">{topic.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {/* Schedule */}
                  <Card className="border-sand/20">
                    <CardHeader>
                      <CardTitle className="text-deep-brown">Horario Detallado</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {course.schedule.map((day, index) => (
                          <div key={index}>
                            <h4 className="font-semibold text-deep-brown mb-3">
                              {day.day} - {day.date}
                            </h4>
                            <div className="space-y-2">
                              {day.sessions.map((session, sessionIndex) => (
                                <div
                                  key={sessionIndex}
                                  className="flex items-center justify-between p-3 bg-sand/30 rounded-lg"
                                >
                                  <span className="font-medium text-deep-brown">{session.time}</span>
                                  <span className="text-gray-600">{session.activity}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="instructor" className="mt-6">
                <Card className="border-sand/20">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <Avatar className="w-32 h-32">
                          <AvatarImage
                            src={course.instructor.image || "/placeholder.svg"}
                            alt={course.instructor.name}
                          />
                          <AvatarFallback className="text-2xl">{course.instructor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-deep-brown">{course.instructor.name}</h3>
                          <p className="text-lg text-terracotta">{course.instructor.title}</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-deep-brown">{course.instructor.rating}</div>
                            <div className="text-sm text-gray-600">Calificación</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-deep-brown">{course.instructor.totalStudents}</div>
                            <div className="text-sm text-gray-600">Estudiantes</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-deep-brown">{course.instructor.totalCourses}</div>
                            <div className="text-sm text-gray-600">Cursos</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-deep-brown">
                              {course.instructor.yearsExperience}
                            </div>
                            <div className="text-sm text-gray-600">Años exp.</div>
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed">{course.instructor.bio}</p>

                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-deep-brown mb-2">Especialidades</h4>
                            <div className="flex flex-wrap gap-2">
                              {course.instructor.specialties.map((specialty, index) => (
                                <Badge key={index} variant="secondary" className="bg-sand/50">
                                  {specialty}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-deep-brown mb-2">Idiomas</h4>
                            <div className="flex flex-wrap gap-2">
                              {course.instructor.languages.map((language, index) => (
                                <Badge key={index} variant="outline">
                                  <Globe className="w-3 h-3 mr-1" />
                                  {language}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-deep-brown mb-2">Logros y Reconocimientos</h4>
                            <ul className="space-y-1">
                              {course.instructor.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <Award className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-700 text-sm">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button
                            variant="outline"
                            className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white"
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Contactar
                          </Button>
                          <Button
                            variant="outline"
                            className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            WhatsApp
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {/* Reviews Summary */}
                  <Card className="border-sand/20">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-deep-brown mb-2">{course.rating}</div>
                          <div className="flex justify-center items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-5 h-5 ${
                                  i < Math.floor(course.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-600">Basado en {course.totalReviews} reseñas</p>
                        </div>
                        <div className="space-y-2">
                          {[5, 4, 3, 2, 1].map((rating) => (
                            <div key={rating} className="flex items-center gap-3">
                              <span className="text-sm text-gray-600 w-8">{rating}★</span>
                              <Progress
                                value={
                                  (course.ratingDistribution[rating as keyof typeof course.ratingDistribution] /
                                    course.totalReviews) *
                                  100
                                }
                                className="flex-1 h-2"
                              />
                              <span className="text-sm text-gray-600 w-8">
                                {course.ratingDistribution[rating as keyof typeof course.ratingDistribution]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Individual Reviews */}
                  <div className="space-y-4">
                    {course.testimonials.map((testimonial) => (
                      <Card key={testimonial.id} className="border-sand/20">
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            <Avatar className="w-12 h-12">
                              <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center justify-between">
                                <h4 className="font-semibold text-deep-brown">{testimonial.name}</h4>
                                <span className="text-sm text-gray-500">{formatDate(testimonial.date)}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">{testimonial.course}</span>
                              </div>
                              <p className="text-gray-700">{testimonial.comment}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="faq" className="mt-6">
                <div className="space-y-4">
                  {course.faqs.map((faq, index) => (
                    <Card key={index} className="border-sand/20">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-deep-brown mb-2">{faq.question}</h4>
                        <p className="text-gray-700">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enrollment Card */}
            <Card className="border-sand/20 sticky top-6">
              <CardContent className="p-6 space-y-4">
                {/* Price */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-3xl font-bold text-deep-brown">S/ {course.price}</span>
                    {course.originalPrice && (
                      <span className="text-xl text-gray-500 line-through">S/ {course.originalPrice}</span>
                    )}
                  </div>
                  {course.discount && (
                    <Badge className="bg-sage-green text-white">Ahorra S/ {course.originalPrice! - course.price}</Badge>
                  )}
                </div>

                {/* Course Details */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duración:</span>
                    <span className="font-medium text-deep-brown">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Modalidad:</span>
                    <span className="font-medium text-deep-brown">{course.modality}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nivel:</span>
                    <span className="font-medium text-deep-brown">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Idioma:</span>
                    <span className="font-medium text-deep-brown">{course.language}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certificado:</span>
                    <span className="font-medium text-deep-brown">
                      {course.certificate ? "Incluido" : "No incluido"}
                    </span>
                  </div>
                </div>

                <Separator />

                {/* Availability */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Disponibilidad:</span>
                    <span className="font-medium text-deep-brown">
                      {course.maxParticipants - course.participants} cupos disponibles
                    </span>
                  </div>
                  <Progress value={(course.participants / course.maxParticipants) * 100} className="h-2" />
                  <p className="text-xs text-gray-500 text-center">
                    {course.participants} de {course.maxParticipants} inscritos
                  </p>
                </div>

                {/* Enrollment Button */}
                {isEnrolled ? (
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sage-green">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">¡Ya estás inscrito!</span>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Descargar Materiales
                    </Button>
                  </div>
                ) : (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full bg-terracotta hover:bg-terracotta/90"
                        size="lg"
                        disabled={course.participants >= course.maxParticipants}
                      >
                        {course.participants >= course.maxParticipants ? "Taller Completo" : "Inscribirse Ahora"}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Inscripción al Taller</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        {enrollmentStep === 1 && (
                          <div className="space-y-4">
                            <h3 className="font-semibold text-deep-brown">Información Personal</h3>
                            <div className="space-y-3">
                              <Input
                                placeholder="Nombre completo"
                                value={enrollmentData.name}
                                onChange={(e) => setEnrollmentData({ ...enrollmentData, name: e.target.value })}
                              />
                              <Input
                                type="email"
                                placeholder="Email"
                                value={enrollmentData.email}
                                onChange={(e) => setEnrollmentData({ ...enrollmentData, email: e.target.value })}
                              />
                              <Input
                                placeholder="Teléfono"
                                value={enrollmentData.phone}
                                onChange={(e) => setEnrollmentData({ ...enrollmentData, phone: e.target.value })}
                              />
                            </div>
                          </div>
                        )}

                        {enrollmentStep === 2 && (
                          <div className="space-y-4">
                            <h3 className="font-semibold text-deep-brown">Información Adicional</h3>
                            <div className="space-y-3">
                              <Textarea
                                placeholder="¿Tienes experiencia previa en cerámica? (Opcional)"
                                value={enrollmentData.experience}
                                onChange={(e) => setEnrollmentData({ ...enrollmentData, experience: e.target.value })}
                                rows={3}
                              />
                              <Textarea
                                placeholder="¿Qué esperas aprender en este taller? (Opcional)"
                                value={enrollmentData.expectations}
                                onChange={(e) => setEnrollmentData({ ...enrollmentData, expectations: e.target.value })}
                                rows={3}
                              />
                            </div>
                          </div>
                        )}

                        {enrollmentStep === 3 && (
                          <div className="space-y-4">
                            <h3 className="font-semibold text-deep-brown">Confirmación y Pago</h3>
                            <div className="space-y-3">
                              <div className="p-4 bg-sand/30 rounded-lg">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="font-medium text-deep-brown">{course.title}</span>
                                  <span className="font-bold text-deep-brown">S/ {course.price}</span>
                                </div>
                                <div className="text-sm text-gray-600">
                                  {course.date} • {course.duration} • {course.location}
                                </div>
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                  <Checkbox
                                    id="terms"
                                    checked={enrollmentData.agreeTerms}
                                    onCheckedChange={(checked) =>
                                      setEnrollmentData({ ...enrollmentData, agreeTerms: checked as boolean })
                                    }
                                  />
                                  <label htmlFor="terms" className="text-sm text-gray-600">
                                    Acepto los{" "}
                                    <Link href="/terms" className="text-terracotta hover:underline">
                                      términos y condiciones
                                    </Link>
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Checkbox
                                    id="marketing"
                                    checked={enrollmentData.agreeMarketing}
                                    onCheckedChange={(checked) =>
                                      setEnrollmentData({ ...enrollmentData, agreeMarketing: checked as boolean })
                                    }
                                  />
                                  <label htmlFor="marketing" className="text-sm text-gray-600">
                                    Quiero recibir información sobre futuros talleres
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="flex justify-between">
                          {enrollmentStep > 1 && (
                            <Button variant="outline" onClick={() => setEnrollmentStep(enrollmentStep - 1)}>
                              Anterior
                            </Button>
                          )}
                          <Button
                            onClick={handleEnrollment}
                            className="bg-terracotta hover:bg-terracotta/90 ml-auto"
                            disabled={enrollmentStep === 3 && !enrollmentData.agreeTerms}
                          >
                            {enrollmentStep === 3 ? (
                              <>
                                <CreditCard className="w-4 h-4 mr-2" />
                                Pagar e Inscribirse
                              </>
                            ) : (
                              "Siguiente"
                            )}
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}

                <Separator />

                {/* Guarantees */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Shield className="w-4 h-4 text-sage-green" />
                    <span>Pago 100% seguro</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <RotateCcw className="w-4 h-4 text-sage-green" />
                    <span>Reembolso hasta 48h antes</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Award className="w-4 h-4 text-sage-green" />
                    <span>Certificado incluido</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instructor Quick Info */}
            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="text-deep-brown">Tu Instructor</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={course.instructor.image || "/placeholder.svg"} alt={course.instructor.name} />
                    <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-deep-brown">{course.instructor.name}</h4>
                    <p className="text-sm text-gray-600">{course.instructor.title}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="font-bold text-deep-brown">{course.instructor.rating}</div>
                    <div className="text-xs text-gray-600">Calificación</div>
                  </div>
                  <div>
                    <div className="font-bold text-deep-brown">{course.instructor.totalStudents}</div>
                    <div className="text-xs text-gray-600">Estudiantes</div>
                  </div>
                </div>
                <Button variant="outline" className="w-full" size="sm">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contactar Instructor
                </Button>
              </CardContent>
            </Card>

            {/* Course Location */}
            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="text-deep-brown">Ubicación</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-terracotta flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-deep-brown">{course.location}</p>
                    <p className="text-sm text-gray-600">{course.address}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full" size="sm">
                  Ver en Mapa
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Courses */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-deep-brown mb-6">Talleres Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCourses.map((relatedCourse) => (
              <Card key={relatedCourse.id} className="border-sand/20 hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={relatedCourse.image || "/placeholder.svg"}
                    alt={relatedCourse.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {relatedCourse.originalPrice && (
                    <Badge className="absolute top-3 right-3 bg-sage-green text-white">
                      -
                      {Math.round(
                        ((relatedCourse.originalPrice - relatedCourse.price) / relatedCourse.originalPrice) * 100,
                      )}
                      %
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-deep-brown mb-2 line-clamp-2">{relatedCourse.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">por {relatedCourse.instructor}</p>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{relatedCourse.rating}</span>
                    <span className="text-sm text-gray-500">• {relatedCourse.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-deep-brown">S/ {relatedCourse.price}</span>
                      {relatedCourse.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">S/ {relatedCourse.originalPrice}</span>
                      )}
                    </div>
                    <Button size="sm" className="bg-terracotta hover:bg-terracotta/90">
                      Ver Detalles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
