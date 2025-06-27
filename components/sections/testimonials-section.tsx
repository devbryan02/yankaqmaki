"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "María Elena Quispe",
      role: "Artesana Textil",
      location: "Cusco",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Gracias a esta plataforma he podido llegar a clientes de todo el mundo. Mis tejidos andinos ahora tienen el reconocimiento que merecen y mi familia tiene ingresos estables.",
      sales: "150+ ventas",
    },
    {
      id: 2,
      name: "Carlos Rengifo",
      role: "Ceramista",
      location: "Ucayali",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Los talleres virtuales me han permitido enseñar mi arte a personas de diferentes países. Es increíble ver cómo valoran nuestras tradiciones ancestrales.",
      sales: "80+ estudiantes",
    },
    {
      id: 3,
      name: "Ana Sofía Mendoza",
      role: "Cliente",
      location: "Madrid, España",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Cada pieza que he comprado cuenta una historia única. La calidad es excepcional y saber que apoyo directamente a los artesanos hace que cada compra sea especial.",
      sales: "20+ compras",
    },
    {
      id: 4,
      name: "Roberto Silva",
      role: "Joyero",
      location: "Catacaos",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "El plan profesional me ha dado todas las herramientas que necesito. Las estadísticas me ayudan a entender mejor a mis clientes y mejorar mis productos.",
      sales: "200+ ventas",
    },
    {
      id: 5,
      name: "Elena Mamani",
      role: "Tejedora",
      location: "Puno",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Nunca pensé que podría vender mis tejidos fuera de mi comunidad. Ahora tengo clientes en varios países y puedo mantener viva nuestra tradición familiar.",
      sales: "90+ ventas",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-4">Historias de Éxito</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce las experiencias de artesanos y clientes que forman parte de nuestra comunidad global.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-sand/20 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <Image
                      src={currentTestimonial.image || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      width={120}
                      height={120}
                      className="w-24 h-24 md:w-30 md:h-30 rounded-full object-cover border-4 border-sand"
                    />
                    <div className="absolute -top-2 -right-2 bg-terracotta rounded-full p-2">
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start items-center gap-1 mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                    "{currentTestimonial.text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="space-y-1">
                    <div className="font-semibold text-deep-brown text-lg">{currentTestimonial.name}</div>
                    <div className="text-terracotta font-medium">{currentTestimonial.role}</div>
                    <div className="text-gray-600 text-sm">
                      {currentTestimonial.location} • {currentTestimonial.sales}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-terracotta" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={testimonial.id} className="border-sand/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-deep-brown text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
