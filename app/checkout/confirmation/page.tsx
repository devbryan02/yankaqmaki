"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle,
  Package,
  Truck,
  Mail,
  Phone,
  Download,
  Share2,
  Calendar,
  MapPin,
  CreditCard,
  ArrowRight,
  Star,
  Heart,
} from "lucide-react"

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams()
  const orderNumber = searchParams.get("order") || "ORD-2024-001"
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  // Mock order data
  const orderData = {
    orderNumber,
    date: new Date().toLocaleDateString("es-PE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    status: "confirmed",
    estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString("es-PE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    items: [
      {
        id: 1,
        name: "Manta Andina Tradicional",
        price: 180,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
        artisan: "María Quispe",
        location: "Cusco",
      },
      {
        id: 2,
        name: "Vasija de Cerámica Shipibo",
        price: 95,
        quantity: 2,
        image: "/placeholder.svg?height=80&width=80",
        artisan: "Carlos Rengifo",
        location: "Ucayali",
      },
    ],
    shipping: {
      method: "Envío Estándar",
      cost: 15,
      address: {
        name: "Juan Pérez",
        street: "Av. Arequipa 1234",
        city: "Lima",
        state: "Lima",
        zipCode: "15001",
      },
    },
    payment: {
      method: "Tarjeta de Crédito",
      last4: "1234",
      subtotal: 370,
      shipping: 15,
      tax: 66.6,
      total: 451.6,
    },
  }

  return (
    <div className="min-h-screen bg-sand/20 py-8">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent">
            {/* Simple confetti animation */}
            <div className="animate-bounce absolute top-20 left-1/4 w-2 h-2 bg-terracotta rounded-full"></div>
            <div
              className="animate-bounce absolute top-32 right-1/4 w-2 h-2 bg-sage-green rounded-full"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="animate-bounce absolute top-24 left-1/2 w-2 h-2 bg-deep-brown rounded-full"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-green/10 rounded-full mb-4">
            <CheckCircle className="w-8 h-8 text-sage-green" />
          </div>
          <h1 className="text-3xl font-bold text-deep-brown mb-2">¡Pedido Confirmado!</h1>
          <p className="text-gray-600 mb-4">
            Gracias por tu compra. Tu pedido ha sido recibido y está siendo procesado.
          </p>
          <div className="inline-flex items-center gap-2 bg-sage-green/10 px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-sage-green">Pedido #{orderNumber}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Status Timeline */}
            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-deep-brown">
                  <Package className="w-5 h-5" />
                  Estado del Pedido
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-sage-green rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-deep-brown">Pedido Confirmado</h4>
                      <p className="text-sm text-gray-600">
                        Hoy, {new Date().toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                    <Badge className="bg-sage-green/10 text-sage-green">Completado</Badge>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <Package className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-500">Preparando Pedido</h4>
                      <p className="text-sm text-gray-400">1-2 días hábiles</p>
                    </div>
                    <Badge variant="outline">Pendiente</Badge>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <Truck className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-500">En Camino</h4>
                      <p className="text-sm text-gray-400">3-5 días hábiles</p>
                    </div>
                    <Badge variant="outline">Pendiente</Badge>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-500">Entregado</h4>
                      <p className="text-sm text-gray-400">Estimado: {orderData.estimatedDelivery}</p>
                    </div>
                    <Badge variant="outline">Pendiente</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="text-deep-brown">Productos Pedidos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.items.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 border border-sand/20 rounded-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-deep-brown">{item.name}</h4>
                        <p className="text-sm text-gray-600">
                          por {item.artisan} • {item.location}
                        </p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm text-gray-600">Cantidad: {item.quantity}</span>
                          <span className="font-semibold text-deep-brown">
                            S/ {(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Shipping Information */}
            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-deep-brown">
                  <MapPin className="w-5 h-5" />
                  Información de Envío
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-deep-brown mb-2">Dirección de Entrega</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p className="font-medium">{orderData.shipping.address.name}</p>
                      <p>{orderData.shipping.address.street}</p>
                      <p>
                        {orderData.shipping.address.city}, {orderData.shipping.address.state}
                      </p>
                      <p>{orderData.shipping.address.zipCode}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-deep-brown mb-2">Método de Envío</h4>
                    <div className="text-sm text-gray-600">
                      <p>{orderData.shipping.method}</p>
                      <p>Costo: S/ {orderData.shipping.cost.toFixed(2)}</p>
                      <p className="text-sage-green font-medium mt-2">
                        Entrega estimada: {orderData.estimatedDelivery}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="text-deep-brown">¿Qué sigue?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-terracotta mt-0.5" />
                    <div>
                      <h4 className="font-medium text-deep-brown">Confirmación por Email</h4>
                      <p className="text-sm text-gray-600">
                        Te hemos enviado un email de confirmación con todos los detalles de tu pedido.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-terracotta mt-0.5" />
                    <div>
                      <h4 className="font-medium text-deep-brown">Preparación del Pedido</h4>
                      <p className="text-sm text-gray-600">
                        Nuestros artesanos comenzarán a preparar tu pedido en las próximas 24 horas.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-terracotta mt-0.5" />
                    <div>
                      <h4 className="font-medium text-deep-brown">Seguimiento de Envío</h4>
                      <p className="text-sm text-gray-600">
                        Recibirás un código de seguimiento cuando tu pedido sea enviado.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="text-deep-brown">Resumen del Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>S/ {orderData.payment.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Envío</span>
                    <span>S/ {orderData.payment.shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">IGV (18%)</span>
                    <span>S/ {orderData.payment.tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>S/ {orderData.payment.total.toFixed(2)}</span>
                  </div>
                </div>

                <Separator />

                <div className="text-sm">
                  <h4 className="font-medium text-deep-brown mb-2">Método de Pago</h4>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">
                      {orderData.payment.method} •••• {orderData.payment.last4}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="text-deep-brown">Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full bg-terracotta hover:bg-terracotta/90">
                  <Link href={`/dashboard/orders/${orderNumber}`}>
                    Ver Detalles del Pedido
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar Factura
                </Button>
                <Button variant="outline" className="w-full">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartir Pedido
                </Button>
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="text-deep-brown">¿Necesitas Ayuda?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-terracotta" />
                    <span>+51 1 234-5678</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-terracotta" />
                    <span>ayuda@artesanosperu.com</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Contactar Soporte
                </Button>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="text-deep-brown">Te Podría Interesar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" asChild className="w-full justify-start">
                  <Link href="/products">
                    <Star className="w-4 h-4 mr-2" />
                    Explorar Más Productos
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full justify-start">
                  <Link href="/courses">
                    <Calendar className="w-4 h-4 mr-2" />
                    Ver Cursos Disponibles
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full justify-start">
                  <Link href="/wishlist">
                    <Heart className="w-4 h-4 mr-2" />
                    Mi Lista de Deseos
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
