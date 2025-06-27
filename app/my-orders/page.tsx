"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Package,
  Truck,
  CheckCircle,
  Clock,
  AlertCircle,
  Eye,
  Download,
  MessageCircle,
  Star,
  ArrowRight,
  Calendar,
  MapPin,
  CreditCard,
  RefreshCw,
} from "lucide-react"

export default function MyOrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("all")

  // Mock user orders data
  const orders = [
    {
      id: "ORD-2024-001",
      orderNumber: "AP-240115-001",
      date: "2024-01-15T10:30:00Z",
      status: "delivered",
      total: 195,
      items: [
        {
          id: 1,
          name: "Manta Andina Tradicional Premium",
          image: "/placeholder.svg?height=80&width=80",
          quantity: 1,
          price: 180,
          variant: "Mediana - Rojo Andino",
          artisan: "María Quispe",
        },
      ],
      shipping: {
        method: "Envío estándar",
        cost: 15,
        address: "Av. Larco 1234, Miraflores, Lima",
        estimatedDelivery: "2024-01-20T00:00:00Z",
        actualDelivery: "2024-01-19T14:30:00Z",
        trackingNumber: "TRK123456789",
      },
      payment: {
        method: "Tarjeta de crédito",
        status: "paid",
      },
      canReview: true,
      canReturn: false,
      canReorder: true,
    },
    {
      id: "ORD-2024-002",
      orderNumber: "AP-240118-002",
      date: "2024-01-18T14:20:00Z",
      status: "shipped",
      total: 285,
      items: [
        {
          id: 2,
          name: "Collar de Plata Filigrana",
          image: "/placeholder.svg?height=80&width=80",
          quantity: 1,
          price: 280,
          variant: "Diseño tradicional",
          artisan: "Carlos Mendoza",
        },
      ],
      shipping: {
        method: "Envío express",
        cost: 5,
        address: "Jr. Cusco 567, Cercado de Lima, Lima",
        estimatedDelivery: "2024-01-22T00:00:00Z",
        actualDelivery: null,
        trackingNumber: "TRK987654321",
      },
      payment: {
        method: "Yape",
        status: "paid",
      },
      canReview: false,
      canReturn: false,
      canReorder: true,
    },
    {
      id: "ORD-2024-003",
      orderNumber: "AP-240120-003",
      date: "2024-01-20T09:15:00Z",
      status: "processing",
      total: 150,
      items: [
        {
          id: 3,
          name: "Vasija de Cerámica Shipibo",
          image: "/placeholder.svg?height=80&width=80",
          quantity: 2,
          price: 75,
          variant: "Tamaño mediano",
          artisan: "Ana García",
        },
      ],
      shipping: {
        method: "Envío estándar",
        cost: 0,
        address: "Calle Real 890, San Isidro, Lima",
        estimatedDelivery: "2024-01-25T00:00:00Z",
        actualDelivery: null,
        trackingNumber: null,
      },
      payment: {
        method: "Tarjeta de débito",
        status: "paid",
      },
      canReview: false,
      canReturn: false,
      canReorder: true,
    },
    {
      id: "ORD-2024-004",
      orderNumber: "AP-240122-004",
      date: "2024-01-22T16:45:00Z",
      status: "pending",
      total: 95,
      items: [
        {
          id: 4,
          name: "Bolso Tejido a Mano",
          image: "/placeholder.svg?height=80&width=80",
          quantity: 1,
          price: 85,
          variant: "Natural - Lana de alpaca",
          artisan: "Elena Rodríguez",
        },
      ],
      shipping: {
        method: "Envío estándar",
        cost: 10,
        address: "Av. Brasil 456, Breña, Lima",
        estimatedDelivery: "2024-01-27T00:00:00Z",
        actualDelivery: null,
        trackingNumber: null,
      },
      payment: {
        method: "Transferencia bancaria",
        status: "pending",
      },
      canReview: false,
      canReturn: false,
      canReorder: false,
    },
    {
      id: "ORD-2024-005",
      orderNumber: "AP-240110-005",
      date: "2024-01-10T11:30:00Z",
      status: "cancelled",
      total: 220,
      items: [
        {
          id: 5,
          name: "Tapiz Tradicional Grande",
          image: "/placeholder.svg?height=80&width=80",
          quantity: 1,
          price: 220,
          variant: "Grande - Motivos andinos",
          artisan: "Roberto Silva",
        },
      ],
      shipping: {
        method: "Envío express",
        cost: 0,
        address: "Calle Lima 123, Callao, Callao",
        estimatedDelivery: null,
        actualDelivery: null,
        trackingNumber: null,
      },
      payment: {
        method: "Tarjeta de crédito",
        status: "refunded",
      },
      canReview: false,
      canReturn: false,
      canReorder: true,
    },
  ]

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

  const getPaymentStatusBadge = (status: string) => {
    const statusConfig = {
      paid: { label: "Pagado", color: "bg-green-500" },
      pending: { label: "Pendiente", color: "bg-yellow-500" },
      refunded: { label: "Reembolsado", color: "bg-gray-500" },
      failed: { label: "Fallido", color: "bg-red-500" },
    }
    const config = statusConfig[status as keyof typeof statusConfig]
    return <Badge className={`${config.color} text-white`}>{config.label}</Badge>
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-PE", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-PE", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.items.some(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.artisan.toLowerCase().includes(searchQuery.toLowerCase()),
      )

    const matchesStatus = statusFilter === "all" || order.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const orderStats = {
    total: orders.length,
    pending: orders.filter((o) => o.status === "pending").length,
    processing: orders.filter((o) => o.status === "processing").length,
    shipped: orders.filter((o) => o.status === "shipped").length,
    delivered: orders.filter((o) => o.status === "delivered").length,
    cancelled: orders.filter((o) => o.status === "cancelled").length,
  }

  return (
    <div className="min-h-screen bg-sand/20">
      {/* Header */}
      <div className="bg-white border-b border-sand/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-deep-brown">Mis Pedidos</h1>
              <p className="text-gray-600 mt-1">Rastrea y gestiona todos tus pedidos</p>
            </div>
            <Button asChild className="bg-terracotta hover:bg-terracotta/90">
              <Link href="/products">
                Seguir Comprando
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Card className="border-sand/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-deep-brown">{orderStats.total}</div>
              <div className="text-sm text-gray-600">Total</div>
            </CardContent>
          </Card>
          <Card className="border-sand/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">{orderStats.pending}</div>
              <div className="text-sm text-gray-600">Pendientes</div>
            </CardContent>
          </Card>
          <Card className="border-sand/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{orderStats.processing}</div>
              <div className="text-sm text-gray-600">Procesando</div>
            </CardContent>
          </Card>
          <Card className="border-sand/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{orderStats.shipped}</div>
              <div className="text-sm text-gray-600">Enviados</div>
            </CardContent>
          </Card>
          <Card className="border-sand/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{orderStats.delivered}</div>
              <div className="text-sm text-gray-600">Entregados</div>
            </CardContent>
          </Card>
          <Card className="border-sand/20">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{orderStats.cancelled}</div>
              <div className="text-sm text-gray-600">Cancelados</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="border-sand/20">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar por número de pedido, producto o artesano..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-sand focus:border-terracotta"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-48 border-sand focus:border-terracotta">
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los estados</SelectItem>
                  <SelectItem value="pending">Pendiente</SelectItem>
                  <SelectItem value="processing">Procesando</SelectItem>
                  <SelectItem value="shipped">Enviado</SelectItem>
                  <SelectItem value="delivered">Entregado</SelectItem>
                  <SelectItem value="cancelled">Cancelado</SelectItem>
                </SelectContent>
              </Select>
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="w-full sm:w-48 border-sand focus:border-terracotta">
                  <SelectValue placeholder="Fecha" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las fechas</SelectItem>
                  <SelectItem value="month">Este mes</SelectItem>
                  <SelectItem value="quarter">Últimos 3 meses</SelectItem>
                  <SelectItem value="year">Este año</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Orders Tabs */}
        <Tabs value={statusFilter} onValueChange={setStatusFilter}>
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="all">Todos ({orderStats.total})</TabsTrigger>
            <TabsTrigger value="pending">Pendientes ({orderStats.pending})</TabsTrigger>
            <TabsTrigger value="processing">Procesando ({orderStats.processing})</TabsTrigger>
            <TabsTrigger value="shipped">Enviados ({orderStats.shipped})</TabsTrigger>
            <TabsTrigger value="delivered">Entregados ({orderStats.delivered})</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelados ({orderStats.cancelled})</TabsTrigger>
          </TabsList>

          <TabsContent value={statusFilter} className="mt-6">
            {/* Orders List */}
            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <Card key={order.id} className="border-sand/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Order Header */}
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div className="flex items-center gap-3">
                            <h3 className="font-semibold text-deep-brown">{order.orderNumber}</h3>
                            {getStatusBadge(order.status)}
                            {getPaymentStatusBadge(order.payment.status)}
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-deep-brown text-lg">S/ {order.total}</div>
                            <div className="text-sm text-gray-500">{formatDate(order.date)}</div>
                          </div>
                        </div>

                        {/* Order Items */}
                        <div className="space-y-3">
                          {order.items.map((item) => (
                            <div key={item.id} className="flex items-center gap-4 p-3 bg-sand/30 rounded-lg">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                width={60}
                                height={60}
                                className="w-15 h-15 rounded-lg object-cover"
                              />
                              <div className="flex-1">
                                <h4 className="font-medium text-deep-brown">{item.name}</h4>
                                <p className="text-sm text-gray-600">{item.variant}</p>
                                <p className="text-sm text-sage-green">Por {item.artisan}</p>
                                <div className="flex items-center gap-4 mt-1">
                                  <span className="text-sm text-gray-600">Cantidad: {item.quantity}</span>
                                  <span className="text-sm font-medium text-deep-brown">
                                    S/ {item.price * item.quantity}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Shipping Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <MapPin className="w-4 h-4 text-gray-400" />
                              <span className="font-medium text-deep-brown">Dirección de envío:</span>
                            </div>
                            <p className="text-sm text-gray-600 ml-6">{order.shipping.address}</p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="w-4 h-4 text-gray-400" />
                              <span className="font-medium text-deep-brown">
                                {order.shipping.actualDelivery ? "Entregado:" : "Entrega estimada:"}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 ml-6">
                              {order.shipping.actualDelivery
                                ? formatDateTime(order.shipping.actualDelivery)
                                : formatDate(order.shipping.estimatedDelivery)}
                            </p>
                          </div>
                          {order.shipping.trackingNumber && (
                            <div className="md:col-span-2 space-y-2">
                              <div className="flex items-center gap-2 text-sm">
                                <Truck className="w-4 h-4 text-gray-400" />
                                <span className="font-medium text-deep-brown">Número de seguimiento:</span>
                              </div>
                              <p className="text-sm font-mono text-terracotta ml-6">{order.shipping.trackingNumber}</p>
                            </div>
                          )}
                        </div>

                        {/* Payment Info */}
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <CreditCard className="w-4 h-4" />
                          <span>Pagado con {order.payment.method}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex lg:flex-col gap-2 lg:w-48">
                        <Button variant="outline" size="sm" asChild className="flex-1 lg:flex-none">
                          <Link href={`/my-orders/${order.id}`}>
                            <Eye className="w-4 h-4 mr-2" />
                            Ver Detalles
                          </Link>
                        </Button>

                        {order.shipping.trackingNumber && (
                          <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                            <Truck className="w-4 h-4 mr-2" />
                            Rastrear
                          </Button>
                        )}

                        {order.canReview && (
                          <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                            <Star className="w-4 h-4 mr-2" />
                            Reseñar
                          </Button>
                        )}

                        {order.canReorder && (
                          <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                            <RefreshCw className="w-4 h-4 mr-2" />
                            Reordenar
                          </Button>
                        )}

                        <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                          <Download className="w-4 h-4 mr-2" />
                          Factura
                        </Button>

                        <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Soporte
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredOrders.length === 0 && (
              <Card className="border-sand/20">
                <CardContent className="p-12 text-center">
                  <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-deep-brown mb-2">No hay pedidos</h3>
                  <p className="text-gray-600 mb-4">
                    No se encontraron pedidos que coincidan con los filtros seleccionados.
                  </p>
                  <Button asChild className="bg-terracotta hover:bg-terracotta/90">
                    <Link href="/products">Explorar Productos</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
