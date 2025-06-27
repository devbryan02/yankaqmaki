"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  ArrowLeft,
  Package,
  CheckCircle,
  Clock,
  AlertCircle,
  Phone,
  Mail,
  Calendar,
  MessageCircle,
  Download,
  Edit,
  Send,
  Copy,
  ExternalLink,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const [orderStatus, setOrderStatus] = useState("processing")
  const [trackingNumber, setTrackingNumber] = useState("TRK123456789")
  const [customerMessage, setCustomerMessage] = useState("")

  // Mock order data - in real app, this would come from API
  const order = {
    id: "ORD-2024-002",
    customer: {
      name: "Carlos Mendoza",
      email: "carlos.mendoza@email.com",
      phone: "+51 912 345 678",
      avatar: "/placeholder.svg?height=80&width=80",
      totalOrders: 5,
      customerSince: "2023-08-15",
    },
    items: [
      {
        id: 2,
        name: "Vasija de Cerámica Shipibo",
        image: "/placeholder.svg?height=80&width=80",
        quantity: 2,
        price: 95,
        variant: "Tamaño mediano",
        sku: "CER-SHIP-MED-001",
      },
    ],
    pricing: {
      subtotal: 190,
      shipping: 0,
      tax: 0,
      discount: 0,
      total: 190,
    },
    status: "processing",
    paymentStatus: "paid",
    paymentMethod: "Tarjeta de crédito",
    transactionId: "TXN-789456123",
    shippingAddress: {
      name: "Carlos Mendoza",
      street: "Jr. Cusco 567",
      city: "Cercado de Lima",
      state: "Lima",
      zipCode: "15001",
      country: "Perú",
      phone: "+51 912 345 678",
    },
    billingAddress: {
      name: "Carlos Mendoza",
      street: "Jr. Cusco 567",
      city: "Cercado de Lima",
      state: "Lima",
      zipCode: "15001",
      country: "Perú",
    },
    orderDate: "2024-01-14T14:20:00Z",
    estimatedDelivery: "2024-01-19T00:00:00Z",
    trackingNumber: "TRK123456789",
    shippingMethod: "Envío estándar",
    notes: "Cliente prefiere entrega en horario de mañana",
    priority: "high",
    timeline: [
      {
        status: "placed",
        title: "Pedido realizado",
        description: "El cliente realizó el pedido y el pago fue confirmado",
        timestamp: "2024-01-14T14:20:00Z",
        completed: true,
      },
      {
        status: "confirmed",
        title: "Pedido confirmado",
        description: "Hemos confirmado la disponibilidad de los productos",
        timestamp: "2024-01-14T15:30:00Z",
        completed: true,
      },
      {
        status: "processing",
        title: "Preparando pedido",
        description: "Los productos están siendo preparados para el envío",
        timestamp: "2024-01-15T09:00:00Z",
        completed: true,
      },
      {
        status: "shipped",
        title: "Pedido enviado",
        description: "El pedido ha sido enviado y está en camino",
        timestamp: null,
        completed: false,
      },
      {
        status: "delivered",
        title: "Pedido entregado",
        description: "El pedido ha sido entregado al cliente",
        timestamp: null,
        completed: false,
      },
    ],
  }

  const statusOptions = [
    { value: "pending", label: "Pendiente", color: "bg-yellow-500" },
    { value: "processing", label: "Procesando", color: "bg-blue-500" },
    { value: "shipped", label: "Enviado", color: "bg-purple-500" },
    { value: "delivered", label: "Entregado", color: "bg-green-500" },
    { value: "cancelled", label: "Cancelado", color: "bg-red-500" },
  ]

  const getStatusBadge = (status: string) => {
    const config = statusOptions.find((s) => s.value === status)
    return <Badge className={`${config?.color} text-white`}>{config?.label}</Badge>
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

  const handleStatusUpdate = () => {
    toast({
      title: "Estado actualizado",
      description: "El estado del pedido ha sido actualizado exitosamente.",
    })
  }

  const handleSendMessage = () => {
    if (!customerMessage.trim()) return

    toast({
      title: "Mensaje enviado",
      description: "Tu mensaje ha sido enviado al cliente.",
    })
    setCustomerMessage("")
  }

  const copyTrackingNumber = () => {
    navigator.clipboard.writeText(trackingNumber)
    toast({
      title: "Copiado",
      description: "Número de seguimiento copiado al portapapeles.",
    })
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard/orders">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Pedidos
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-deep-brown">{order.id}</h1>
            <p className="text-gray-600">Realizado el {formatDate(order.orderDate)}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {getStatusBadge(order.status)}
          {order.priority === "high" && <AlertCircle className="w-5 h-5 text-red-500" />}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-deep-brown">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.variant}</p>
                      <p className="text-xs text-gray-500">SKU: {item.sku}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm text-gray-600">Cantidad: {item.quantity}</span>
                        <span className="text-sm font-medium text-deep-brown">S/ {item.price} c/u</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-deep-brown">S/ {item.price * item.quantity}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              {/* Order Summary */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium text-deep-brown">S/ {order.pricing.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Envío:</span>
                  <span className="font-medium text-deep-brown">
                    {order.pricing.shipping === 0 ? "Gratis" : `S/ ${order.pricing.shipping}`}
                  </span>
                </div>
                {order.pricing.discount > 0 && (
                  <div className="flex justify-between text-sage-green">
                    <span>Descuento:</span>
                    <span>-S/ {order.pricing.discount}</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-deep-brown">Total:</span>
                  <span className="text-deep-brown">S/ {order.pricing.total}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Communication */}
          <Card className="border-sand/20">
            <CardHeader>
              <CardTitle className="text-deep-brown">Comunicación con el Cliente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-deep-brown">Enviar mensaje al cliente</label>
                <Textarea
                  placeholder="Escribe un mensaje para el cliente..."
                  value={customerMessage}
                  onChange={(e) => setCustomerMessage(e.target.value)}
                  className="border-sand focus:border-terracotta"
                  rows={3}
                />
              </div>
              <Button onClick={handleSendMessage} className="bg-terracotta hover:bg-terracotta/90">
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensaje
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Order Actions */}
          <Card className="border-sand/20">
            <CardHeader>
              <CardTitle className="text-deep-brown">Acciones del Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-deep-brown">Actualizar estado</label>
                <Select value={orderStatus} onValueChange={setOrderStatus}>
                  <SelectTrigger className="border-sand focus:border-terracotta">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((status) => (
                      <SelectItem key={status.value} value={status.value}>
                        {status.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-deep-brown">Número de seguimiento</label>
                <div className="flex gap-2">
                  <Input
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="border-sand focus:border-terracotta"
                    placeholder="Ingresa el número de tracking"
                  />
                  <Button variant="outline" size="sm" onClick={copyTrackingNumber}>
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <Button onClick={handleStatusUpdate} className="w-full bg-terracotta hover:bg-terracotta/90">
                <Edit className="w-4 h-4 mr-2" />
                Actualizar Pedido
              </Button>

              <Separator />

              <div className="space-y-2">
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar Factura
                </Button>
                <Button variant="outline" className="w-full">
                  <Package className="w-4 h-4 mr-2" />
                  Imprimir Etiqueta
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full text-red-600 hover:text-red-700">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Cancelar Pedido
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Cancelar Pedido</DialogTitle>
                      <DialogDescription>
                        ¿Estás seguro de que quieres cancelar este pedido? Esta acción no se puede deshacer.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Cancelar</Button>
                      <Button variant="destructive">Confirmar Cancelación</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          {/* Customer Information */}
          <Card className="border-sand/20">
            <CardHeader>
              <CardTitle className="text-deep-brown">Información del Cliente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={order.customer.avatar || "/placeholder.svg"} alt={order.customer.name} />
                  <AvatarFallback>{order.customer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-deep-brown">{order.customer.name}</h4>
                  <p className="text-sm text-gray-600">{order.customer.totalOrders} pedidos realizados</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{order.customer.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{order.customer.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">
                    Cliente desde {new Date(order.customer.customerSince).getFullYear()}
                  </span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contactar Cliente
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
                <h4 className="font-medium text-deep-brown mb-2">Dirección de Envío</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-medium">{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.street}</p>
                  <p>
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                  </p>
                  <p>{order.shippingAddress.country}</p>
                  <p>{order.shippingAddress.phone}</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Método de envío:</span>
                  <span className="font-medium text-deep-brown">{order.shippingMethod}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Entrega estimada:</span>
                  <span className="font-medium text-deep-brown">
                    {new Date(order.estimatedDelivery).toLocaleDateString("es-PE")}
                  </span>
                </div>
                {order.trackingNumber && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tracking:</span>
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-deep-brown">{order.trackingNumber}</span>
                      <Button variant="ghost" size="sm" className="h-auto p-1">
                        <ExternalLink className="w-3 h-3" />
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
                <span className="font-medium text-deep-brown">{order.paymentMethod}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">ID Transacción:</span>
                <span className="font-medium text-deep-brown text-xs">{order.transactionId}</span>
              </div>
            </CardContent>
          </Card>

          {/* Order Notes */}
          {order.notes && (
            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="text-deep-brown">Notas del Pedido</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{order.notes}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
