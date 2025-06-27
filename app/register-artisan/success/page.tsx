"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Mail, Phone, ArrowRight, Home } from "lucide-react"

export default function ArtisanRegistrationSuccess() {
  return (
    <div className="min-h-screen bg-sand/20 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-deep-brown mb-4">¡Solicitud Enviada Exitosamente!</h1>
          <p className="text-lg text-gray-600">Gracias por tu interés en unirte a nuestra comunidad de artesanos</p>
        </div>

        {/* Main Content Card */}
        <Card className="shadow-lg mb-8">
          <CardContent className="p-8">
            <div className="space-y-6">
              {/* Timeline */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-deep-brown mb-4">¿Qué sigue ahora?</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-deep-brown">Revisión Inicial</h3>
                      <p className="text-sm text-gray-600">
                        Nuestro equipo revisará tu solicitud y documentación en las próximas 24-48 horas
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Clock className="w-4 h-4 text-orange-500" />
                        <span className="text-sm text-orange-600 font-medium">En proceso</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-500 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Verificación</h3>
                      <p className="text-sm text-gray-500">
                        Verificaremos tu identidad y validaremos tu experiencia artesanal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-500 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Activación</h3>
                      <p className="text-sm text-gray-500">
                        Te enviaremos las credenciales para acceder a tu dashboard de artesano
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-sage-green/10 p-6 rounded-lg">
                <h3 className="font-semibold text-deep-brown mb-3">Información de Contacto</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-sage-green" />
                    <span className="text-sm">artesanos@artesaniasperu.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-sage-green" />
                    <span className="text-sm">+51 1 234-5678</span>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-deep-brown mb-3">Información Importante</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>Recibirás un email de confirmación en los próximos minutos</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>El proceso de verificación puede tomar entre 2-5 días hábiles</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>Te notificaremos por email y SMS sobre el estado de tu solicitud</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>Mantén tu teléfono disponible por si necesitamos contactarte</span>
                  </li>
                </ul>
              </div>

              {/* Benefits Reminder */}
              <div className="bg-terracotta/10 p-6 rounded-lg">
                <h3 className="font-semibold text-deep-brown mb-3">Beneficios de ser Artesano</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-deep-brown">✓ Comisión justa del 8%</p>
                    <p className="text-sm font-medium text-deep-brown">✓ Herramientas de gestión</p>
                    <p className="text-sm font-medium text-deep-brown">✓ Promoción en redes sociales</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-deep-brown">✓ Capacitación gratuita</p>
                    <p className="text-sm font-medium text-deep-brown">✓ Comunidad de artesanos</p>
                    <p className="text-sm font-medium text-deep-brown">✓ Soporte técnico 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-terracotta hover:bg-terracotta/90">
            <Link href="/" className="flex items-center space-x-2">
              <Home className="w-4 h-4" />
              <span>Volver al Inicio</span>
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/artisans" className="flex items-center space-x-2">
              <span>Ver Artesanos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Número de solicitud:{" "}
            <span className="font-mono font-medium">
              ART-2024-{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </span>
          </p>
          <p className="text-xs text-gray-400 mt-2">Guarda este número para futuras referencias</p>
        </div>
      </div>
    </div>
  )
}
