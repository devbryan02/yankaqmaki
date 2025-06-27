"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    })
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-4">Contáctanos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Tienes preguntas o necesitas ayuda? Estamos aquí para apoyarte en tu journey artesanal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="text-deep-brown flex items-center gap-2">
                  <Mail className="w-5 h-5 text-terracotta" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">info@artesaniasdelperu.com</p>
                <p className="text-gray-600">soporte@artesaniasdelperu.com</p>
              </CardContent>
            </Card>

            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="text-deep-brown flex items-center gap-2">
                  <Phone className="w-5 h-5 text-terracotta" />
                  Teléfono
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">+51 1 234-5678</p>
                <p className="text-gray-600">+51 987-654-321</p>
              </CardContent>
            </Card>

            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="text-deep-brown flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-terracotta" />
                  Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Av. El Sol 123
                  <br />
                  San Blas, Cusco
                  <br />
                  Perú
                </p>
              </CardContent>
            </Card>

            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="text-deep-brown flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-terracotta" />
                  WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://wa.me/51987654321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-green hover:underline"
                >
                  +51 987-654-321
                </a>
                <p className="text-sm text-gray-500 mt-1">Lun - Vie: 9:00 AM - 6:00 PM</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="text-deep-brown">Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-deep-brown mb-2">
                        Nombre completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-sand focus:border-terracotta"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-deep-brown mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-sand focus:border-terracotta"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-deep-brown mb-2">
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-sand focus:border-terracotta"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-deep-brown mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="border-sand focus:border-terracotta"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-terracotta hover:bg-terracotta/90">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
