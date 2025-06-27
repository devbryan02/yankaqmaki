"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  Package,
  CheckCircle,
  Clock,
  AlertCircle,
  Phone,
  Mail,
  MessageCircle,
  Download,
  Star,
  Truck,
  RefreshCw,
  ExternalLink,
  Copy,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const [reviewText, setReviewText] = useState("")
  const [rating, setRating] = useState(0)

  // Mock order data - in real app, this would come from API
  const order = {
    id: "ORD-2024-001",
    orderNumber: "AP-240115-001",
    date: "2024-01-15T10:30:00Z",
    status: "delivered",
    total: 195,
    subtotal: 180,
    shipping: 15,
    tax: 0,
    items: [
      {
        id: 1,
        name: "Manta Andina Tradicional Premium",
        image: "/placeholder.svg?height=120&width=120",
        quantity: 1,
        price: 180,
        variant: "Mediana - Rojo Andino",
        artisan: {
          name: "María Quispe",
          id: "artisan-001",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        sku: "MAN-AND-MED-001",
      },
    ],
    shippingInfo: {
      method: "Envío estándar",
      cost: 15,
      address: {
        name: "Juan Pérez",
        street: "Av. Larco 1234",
        city: "Miraflores",
        state: "Lima",
        zipCode: "15074",
        country: "Perú",
        phone: "+51 987 654 321",
      },
      estimatedDelivery: "2024-01-20T00:00:00Z",
      actualDelivery: "2024-01-19T14:30:00Z",
      trackingNumber: "TRK123456789",
      carrier: "Olva Courier",
    },
    payment: {
      method: "Tarjeta de crédito",
      status: "paid",
      transactionId: "TXN-789456123",
      last4: "4242",
    },
    timeline: [
      {
        status: "placed",
        title: "Pedido realizado",
        description: "Tu pedido ha sido recibido y confirmado",
        timestamp: "2024-01-15T10:30:00Z",
        completed: true,
      },
      {
        status: "confirmed",
        title: "Pedido confirmado",
        description: "El artesano ha confirmado tu pedido",
        timestamp: "2024-01-15T12:00:00Z",
        completed: true,
      },
      {
        status: "processing",
        title: "Preparando pedido",
        description: "Tu pedido está siendo preparado para el envío",
        timestamp: "2024-01-16T09:00:00Z",
        completed: true,
      },
      {
        status: "shipped",
        title: "Pedido enviado",
        description: "Tu pedido ha sido enviado y está en camino",
        timestamp: "2024-01-17T14:00:00Z",
        completed: true,
      },
      {
        status: "delivered",
        title: "Pedido entregado",
        description: "Tu pedido ha sido entregado exitosamente",
        timestamp: "2024-01-19T14:30:00Z",
        completed: true,
      },
    ],
    canReview: true,
    canReturn: false,
    canReorder: true,
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { label: "Pendiente", color: "bg-yellow-500", icon: Clock },
      processing: { label: "Procesando", color: "bg-blue-500", icon: Package },
      shipped: { label: "Enviado", color: "bg-purple-500", icon: Truck },
      delivered: { label: "Entregado", color: "bg-green-500", icon: CheckCircle },
      cancelled: { label: "Cancelado", color: "bg-red-500", icon: AlertCircle },
    }
    const config = statusConfig[status as keyof typeof statusConfig]
    const IconComponent = config.icon
    return (
      <Badge className={`${config.color} text-white flex items-center gap-1`}>
        <IconComponent className="w-3 h-3" />
        {config.label}
      </Badge>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-PE", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const copyTrackingNumber = () => {
    navigator.clipboard.writeText(order.shippingInfo.trackingNumber)
    toast({
      title: "Copiado",
      description: "Número de seguimiento copiado al portapapeles.",
    })
  }

  const handleReviewSubmit = () => {
    if (rating === 0) {
      toast({
        title: "Error",
        description: "Por favor selecciona una calificación.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Reseña enviada",
      description: "Tu reseña ha sido enviada exitosamente.",
    })
    setReviewText("")
    setRating(0)
  }

  return (
    <div className="min-h-screen bg-sand/20">
      {/* Header */}
      <div className="bg-white border-b border-sand/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/my-orders">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver a Mis Pedidos
                </Link>
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-deep-brown">{order.orderNumber}</h1>
                <p className="text-gray-600">Realizado el {formatDate(order.date)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">{getStatusBadge(order.status)}</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Timeline */}
            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="text-deep-brown">Estado del Pedido</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.timeline.map((step, index) => (
                    <div key={step.status} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step.completed ? "bg-sage-green text-white" : "bg-gray-200 text-gray-500"
                          }`}
                        >
                          {step.completed ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                        </div>
                        {index < order.timeline.length - 1 && (
                          <div className={`w-0.5 h-8 mt-2 ${step.completed ? "bg-sage-green" : "bg-gray-200"}`} />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <h4 className="font-semibold text-deep-brown">{step.title}</h4>
                        <p className="text-sm text-gray-600">{step.description}</p>
                        {step.timestamp && <p className="text-xs text-gray-500 mt-1">{formatDate(step.timestamp)}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="text-deep-brown">Productos del Pedido</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 bg-sand/30 rounded-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={120}
                        height={120}
                        className="w-30 h-30 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-deep-brown">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.variant}</p>
                        <p className="text-sm text-sage-green">Por {item.artisan.name}</p>
                        <p className="text-xs text-gray-500">SKU: {item.sku}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-gray-600">Cantidad: {item.quantity}</span>
                          <span className="text-sm font-medium text-deep-brown">S/ {item.price} c/u</span>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <div className="text-lg font-bold text-deep-brown">S/ {item.price * item.quantity}</div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/products/${item.id}`}>Ver Producto</Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/artisans/${item.artisan.id}`}>Ver Artesano</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                {/* Order Summary */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium text-deep-brown">S/ {order.subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Envío:</span>
                    <span className="font-medium text-deep-brown">
                      {order.shipping === 0 ? "Gratis" : `S/ ${order.shipping}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">IGV (18%):</span>
                    <span className="font-medium text-deep-brown">S/ {order.tax}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-deep-brown">Total:</span>
                    <span className="text-deep-brown">S/ {order.total}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Review Section */}
            {order.canReview && (
              <Card className="border-sand/20">
                <CardHeader>
                  <CardTitle className="text-deep-brown">Califica tu Experiencia</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-deep-brown">Calificación</label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setRating(star)}
                          className={`w-8 h-8 ${
                            star <= rating ? "text-yellow-400" : "text-gray-300"
                          } hover:text-yellow-400 transition-colors`}
                        >
                          <Star className="w-6 h-6 fill-current" />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-deep-brown">Comentario (opcional)</label>
                    <Textarea
                      placeholder="Comparte tu experiencia con este producto..."
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      className="border-sand focus:border-terracotta"
                      rows={3}
                    />
                  </div>
                  <Button onClick={handleReviewSubmit} className="bg-terracotta hover:bg-terracotta/90">
                    <Star className="w-4 h-4 mr-2" />
                    Enviar Reseña
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="text-deep-brown">Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {order.shippingInfo.trackingNumber && (
                  <Button variant="outline" className="w-full justify-start">
                    <Truck className="w-4 h-4 mr-2" />
                    Rastrear Pedido
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </Button>
                )}

                {order.canReorder && (
                  <Button variant="outline" className="w-full justify-start">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Reordenar
                  </Button>
                )}

                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar Factura
                </Button>

                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contactar Soporte
                </Button>
              </CardContent>
            </Card>

            {/* Shipping Information */}
            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="text-deep-brown">Información de Envío</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-deep-brown mb-2">Dirección de Entrega</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p className="font-medium">{order.shippingInfo.address.name}</p>
                    <p>{order.shippingInfo.address.street}</p>
                    <p>
                      {order.shippingInfo.address.city}, {order.shippingInfo.address.state}{" "}
                      {order.shippingInfo.address.zipCode}
                    </p>
                    <p>{order.shippingInfo.address.country}</p>
                    <p>{order.shippingInfo.address.phone}</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Método de envío:</span>
                    <span className="font-medium text-deep-brown">{order.shippingInfo.method}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Transportadora:</span>
                    <span className="font-medium text-deep-brown">{order.shippingInfo.carrier}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Entrega estimada:</span>
                    <span className="font-medium text-deep-brown">
                      {new Date(order.shippingInfo.estimatedDelivery).toLocaleDateString("es-PE")}
                    </span>
                  </div>
                  {order.shippingInfo.actualDelivery && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Entregado el:</span>
                      <span className="font-medium text-sage-green">
                        {formatDate(order.shippingInfo.actualDelivery)}
                      </span>
                    </div>
                  )}
                  {order.shippingInfo.trackingNumber && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tracking:</span>
                      <div className="flex items-center gap-1">
                        <span className="font-medium text-deep-brown font-mono text-xs">
                          {order.shippingInfo.trackingNumber}
                        </span>
                        <Button variant="ghost" size="sm" className="h-auto p-1" onClick={copyTrackingNumber}>
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="text-deep-brown">Información de Pago</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Estado:</span>
                  <Badge className="bg-green-500 text-white">Pagado</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Método:</span>
                  <span className="font-medium text-deep-brown">{order.payment.method}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tarjeta:</span>
                  <span className="font-medium text-deep-brown">****{order.payment.last4}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">ID Transacción:</span>
                  <span className="font-medium text-deep-brown text-xs">{order.payment.transactionId}</span>
                </div>
              </CardContent>
            </Card>

            {/* Need Help */}
            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="text-deep-brown">¿Necesitas Ayuda?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600">
                  Si tienes alguna pregunta sobre tu pedido, no dudes en contactarnos.
                </p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    +51 1 234 5678
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    soporte@artesanosperu.com
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat en Vivo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
