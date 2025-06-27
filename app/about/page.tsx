import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Heart,
  Users,
  Globe,
  Award,
  Target,
  Lightbulb,
  Handshake,
  TrendingUp,
  Calendar,
  CheckCircle,
} from "lucide-react"

export default function AboutPage() {
  const stats = [
    { label: "Artesanos Registrados", value: "2,500+", icon: Users },
    { label: "Productos Únicos", value: "15,000+", icon: Award },
    { label: "Países Alcanzados", value: "45+", icon: Globe },
    { label: "Comunidades Apoyadas", value: "180+", icon: Heart },
  ]

  const timeline = [
    {
      year: "2019",
      title: "Fundación",
      description: "Nace la idea de conectar artesanos peruanos con el mundo digital",
    },
    {
      year: "2020",
      title: "Primeros Artesanos",
      description: "100 artesanos se unen a nuestra plataforma durante la pandemia",
    },
    {
      year: "2021",
      title: "Expansión Nacional",
      description: "Llegamos a las 24 regiones del Perú, incluyendo comunidades remotas",
    },
    {
      year: "2022",
      title: "Mercado Internacional",
      description: "Comenzamos exportaciones a Estados Unidos y Europa",
    },
    {
      year: "2023",
      title: "Cursos Virtuales",
      description: "Lanzamos nuestra plataforma de educación artesanal online",
    },
    {
      year: "2024",
      title: "Impacto Global",
      description: "Más de 2,500 artesanos y presencia en 45 países",
    },
  ]

  const team = [
    {
      name: "Pilar Mitma",
      role: "Fundadora & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Artesana cusqueña con 20 años de experiencia en textiles andinos. Visionaria del comercio justo digital.",
    },
    {
      name: "Percy Conde",
      role: "Director de Tecnología",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Ingeniero de sistemas especializado en e-commerce y plataformas digitales para el desarrollo social.",
    },
    {
      name: "Mavel Trejo",
      role: "Directora de Artesanos",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Antropóloga cultural experta en tradiciones artesanales peruanas y desarrollo comunitario.",
    },
    {
      name: "Brandy Lopez",
      role: "Director Comercial",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Especialista en comercio internacional con 15 años de experiencia en exportación de productos artesanales.",
    },
    {
      name: "Brayan Cardenas",
      role: "Arquitecta de software",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Experta en marketing digital y branding, apasionada por promover la cultura peruana a nivel global.",
    }
  ]

  const values = [
    {
      icon: Heart,
      title: "Autenticidad",
      description:
        "Cada producto refleja la verdadera esencia de las tradiciones peruanas, manteniendo técnicas ancestrales.",
    },
    {
      icon: Handshake,
      title: "Comercio Justo",
      description: "Garantizamos precios justos para los artesanos, promoviendo el desarrollo económico sostenible.",
    },
    {
      icon: Globe,
      title: "Impacto Global",
      description: "Llevamos la cultura peruana al mundo mientras fortalecemos las comunidades locales.",
    },
    {
      icon: TrendingUp,
      title: "Innovación",
      description: "Combinamos tradición con tecnología moderna para crear nuevas oportunidades.",
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Construimos una red global de artesanos, clientes y colaboradores comprometidos.",
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Mantenemos los más altos estándares de calidad en productos y servicios.",
    },
  ]

  const achievements = [
    "Premio Nacional de Innovación Social 2023",
    "Reconocimiento UNESCO por Preservación Cultural",
    "Certificación B-Corp por Impacto Social",
    "Premio Exportador del Año - MINCETUR",
    "Mejor Plataforma E-commerce Social - LATAM",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-terracotta via-deep-brown to-sage-green text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30">Desde 2019 Conectando Tradiciones</Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Preservando el
                  <span className="block text-sand"> Arte Peruano</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Somos el puente entre las tradiciones ancestrales del Perú y el mundo moderno, creando oportunidades
                  económicas sostenibles para nuestros artesanos.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-deep-brown hover:bg-sand">
                  Conoce Nuestros Artesanos
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-deep-brown"
                >
                  Ver Impacto
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://previews.123rf.com/images/dmitriimusku/dmitriimusku2103/dmitriimusku210300324/166798990-about-us-page-concept-flat-illustration-corporate-profile-and-team-information-company-employees.jpg"
                alt="Artesanos peruanos trabajando"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-terracotta" />
                  </div>
                  <div>
                    <p className="font-semibold text-deep-brown">2,500+ Artesanos</p>
                    <p className="text-sm text-gray-600">Confiando en nosotros</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-terracotta/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-terracotta" />
                </div>
                <div className="text-3xl font-bold text-deep-brown mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-sand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Card className="border-sand/20 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-terracotta/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-terracotta" />
                </div>
                <h3 className="text-2xl font-bold text-deep-brown mb-4">Nuestra Misión</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Preservar y promover las tradiciones artesanales del Perú, conectando a maestros artesanos con
                  mercados globales y creando oportunidades económicas sostenibles que fortalezcan las comunidades
                  rurales y urbanas.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-sage-green" />
                    <span className="text-gray-700">Comercio justo y transparente</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-sage-green" />
                    <span className="text-gray-700">Preservación cultural</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-sage-green" />
                    <span className="text-gray-700">Desarrollo comunitario</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-sand/20 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-sage-green/10 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-sage-green" />
                </div>
                <h3 className="text-2xl font-bold text-deep-brown mb-4">Nuestra Visión</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Ser la plataforma líder mundial en comercio de artesanías auténticas, reconocida por su impacto social
                  positivo y por mantener vivas las tradiciones culturales para las futuras generaciones.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-sage-green" />
                    <span className="text-gray-700">Liderazgo global en artesanías</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-sage-green" />
                    <span className="text-gray-700">Impacto social medible</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-sage-green" />
                    <span className="text-gray-700">Legado cultural duradero</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-4">Nuestros Valores</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión y acción en nuestra misión de preservar y promover el arte peruano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-sand/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-terracotta" />
                  </div>
                  <h4 className="font-semibold text-deep-brown mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-sand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-4">Nuestra Historia</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un viaje de crecimiento, impacto y transformación en el mundo artesanal peruano.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-terracotta/20"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="border-sand/20 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Calendar className="w-5 h-5 text-terracotta" />
                          <Badge variant="outline" className="border-terracotta text-terracotta">
                            {item.year}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-deep-brown mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-terracotta rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-4">Nuestro Equipo</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Profesionales apasionados comprometidos con la preservación cultural y el desarrollo social.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-sand/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-sage-green rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-deep-brown mb-1">{member.name}</h4>
                  <p className="text-terracotta text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-sand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-4">Reconocimientos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Orgullosos de los reconocimientos que validan nuestro compromiso con la excelencia y el impacto social.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-sand/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-terracotta" />
                  </div>
                  <div>
                    <p className="font-medium text-deep-brown">{achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-terracotta to-deep-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Únete a Nuestra Misión</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Sé parte de la preservación cultural y el desarrollo sostenible. Juntos podemos mantener vivas las
              tradiciones peruanas para las futuras generaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-deep-brown hover:bg-sand">
                Conviértete en Artesano
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-deep-brown"
              >
                Apoya Nuestros Productos
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
