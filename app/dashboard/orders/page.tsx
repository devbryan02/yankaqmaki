"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  MessageCircle,
  Truck,
  Package,
  CheckCircle,
  AlertCircle,
  Download,
  MapPin,
} from "lucide-react"
import Image from "next/image"

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("all")

  const orders = [
    {
      id: "ORD-2024-001",
      customer: {
        name: "Ana García",
        email: "ana.garcia@email.com",
        phone: "+51 987 654 321",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      items: [
        {
          id: 1,
          name: "Manta Andina Tradicional Premium",
          image: "/placeholder.svg?height=60&width=60",
          quantity: 1,
          price: 180,
          variant: "Mediana - Rojo Andino",
        },
      ],
      total: 195, // Including shipping
      subtotal: 180,
      shipping: 15,
      tax: 0,
      status: "pending",
      paymentStatus: "paid",
      shippingAddress: {
        street: "Av. Larco 1234",
        city: "Miraflores",
        state: "Lima",
        zipCode: "15074",
        country: "Perú",
      },
      orderDate: "2024-01-15T10:30:00Z",
      estimatedDelivery: "2024-01-20T00:00:00Z",
      trackingNumber: null,
      notes: "Cliente solicita empaque especial para regalo",
      priority: "normal",
    },
    {
      id: "ORD-2024-002",
      customer: {
        name: "Carlos Mendoza",
        email: "carlos.mendoza@email.com",
        phone: "+51 912 345 678",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      items: [
        {
          id: 2,
          name: "Vasija de Cerámica Shipibo",
          image: "/placeholder.svg?height=60&width=60",
          quantity: 2,
          price: 95,
          variant: "Tamaño mediano",
        },
      ],
      total: 190,
      subtotal: 190,
      shipping: 0, // Free shipping
      tax: 0,
      status: "processing",
      paymentStatus: "paid",
      shippingAddress: {
        street: "Jr. Cusco 567",
        city: "Cercado de Lima",
        state: "Lima",
        zipCode: "15001",
        country: "Perú",
      },
      orderDate: "2024-01-14T14:20:00Z",
      estimatedDelivery: "2024-01-19T00:00:00Z",
      trackingNumber: "TRK123456789",
      notes: "",
      priority: "high",
    },
    {
      id: "ORD-2024-003",
      customer: {
        name: "Elena Rodríguez",
        email: "elena.rodriguez@email.com",
        phone: "+51 998 765 432",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      items: [
        {
          id: 3,
          name: "Collar de Plata Filigrana",
          image: "/placeholder.svg?height=60&width=60",
          quantity: 1,
          price: 280,
          variant: "Diseño tradicional",
        },
        {
          id: 4,
          name: "Aretes a juego",
          image: "/placeholder.svg?height=60&width=60",
          quantity: 1,
          price: 120,
          variant: "Plata 950",
        },
      ],
      total: 400,
      subtotal: 400,
      shipping: 0,
      tax: 0,
      status: "shipped",
      paymentStatus: "paid",
      shippingAddress: {
        street: "Calle Real 890",
        city: "San Isidro",
        state: "Lima",
        zipCode: "15036",
        country: "Perú",
      },
      orderDate: "2024-01-12T09:15:00Z",
      estimatedDelivery: "2024-01-17T00:00:00Z",
      trackingNumber: "TRK987654321",
      notes: "",
      priority: "normal",
    },
    {
      id: "ORD-2024-004",
      customer: {
        name: "Roberto Silva",
        email: "roberto.silva@email.com",
        phone: "+51 955 123 456",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      items: [
        {
          id: 5,
          name: "Tapiz Tradicional",
          image: "/placeholder.svg?height=60&width=60",
          quantity: 1,
          price: 150,
          variant: "Grande - Motivos andinos",
        },
      ],
      total: 150,
      subtotal: 150,
      shipping: 0,
      tax: 0,
      status: "delivered",
      paymentStatus: "paid",
      shippingAddress: {
        street: "Av. Brasil 456",
        city: "Breña",
        state: "Lima",
        zipCode: "15082",
        country: "Perú",
      },
      orderDate: "2024-01-10T16:45:00Z",
      estimatedDelivery: "2024-01-15T00:00:00Z",
      trackingNumber: "TRK456789123",
      notes: "",
      priority: "normal",
    },
    {
      id: "ORD-2024-005",
      customer: {
        name: "María González",
        email: "maria.gonzalez@email.com",
        phone: "+51 977 888 999",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      items: [
        {
          id: 6,
          name: "Bolso Tejido a Mano",
          image: "/placeholder.svg?height=60&width=60",
          quantity: 1,
          price: 65,
          variant: "Natural - Lana de alpaca",
        },
      ],
      total: 80,
      subtotal: 65,
      shipping: 15,
      tax: 0,
      status: "cancelled",
      paymentStatus: "refunded",
      shippingAddress: {
        street: "Calle Lima 123",
        city: "Callao",
        state: "Callao",
        zipCode: "07001",
        country: "Perú",
      },
      orderDate: "2024-01-08T11:30:00Z",
      estimatedDelivery: null,
      trackingNumber: null,
      notes: "Cliente canceló por cambio de planes",
      priority: "normal",
    },
  ]

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { label: "Pendiente", color: "bg-yellow-500" },
      processing: { label: "Procesando", color: "bg-blue-500" },
      shipped: { label: "Enviado", color: "bg-purple-500" },
      delivered: { label: "Entregado", color: "bg-green-500" },
      cancelled: { label: "Cancelado", color: "bg-red-500" },
    }
    const config = statusConfig[status as keyof typeof statusConfig]
    return <Badge className={`${config.color} text-white`}>{config.label}</Badge>
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

  const getPriorityIcon = (priority: string) => {
    if (priority === "high") {
      return <AlertCircle className="w-4 h-4 text-red-500" />
    }
    return null
  }

  const formatDate = (dateString: string) => {
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
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchQuery.toLowerCase())

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
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-deep-brown">Gestión de Pedidos</h1>
          <p className="text-gray-600">Administra y da seguimiento a todos tus pedidos</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
          <Button className="bg-terracotta hover:bg-terracotta/90">
            <Filter className="w-4 h-4 mr-2" />
            Filtros Avanzados
          </Button>
        </div>
      </div>

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
                placeholder="Buscar por ID, cliente o email..."
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
                <SelectItem value="today">Hoy</SelectItem>
                <SelectItem value="week">Esta semana</SelectItem>
                <SelectItem value="month">Este mes</SelectItem>
                <SelectItem value="quarter">Este trimestre</SelectItem>
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
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* Order Info */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold text-deep-brown">{order.id}</h3>
                          {getPriorityIcon(order.priority)}
                          {getStatusBadge(order.status)}
                          {getPaymentStatusBadge(order.paymentStatus)}
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-deep-brown">S/ {order.total}</div>
                          <div className="text-sm text-gray-500">{formatDate(order.orderDate)}</div>
                        </div>
                      </div>

                      {/* Customer Info */}
                      <div className="flex items-center gap-3">
                        <Image
                          src={order.customer.avatar || "/placeholder.svg"}
                          alt={order.customer.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium text-deep-brown">{order.customer.name}</div>
                          <div className="text-sm text-gray-600">{order.customer.email}</div>
                        </div>
                      </div>

                      {/* Items */}
                      <div className="space-y-2">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center gap-3 p-2 bg-sand/30 rounded-lg">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              width={40}
                              height={40}
                              className="w-10 h-10 rounded object-cover"
                            />
                            <div className="flex-1">
                              <div className="font-medium text-sm text-deep-brown">{item.name}</div>
                              <div className="text-xs text-gray-600">
                                {item.variant} • Cantidad: {item.quantity}
                              </div>
                            </div>
                            <div className="text-sm font-medium text-deep-brown">S/ {item.price * item.quantity}</div>
                          </div>
                        ))}
                      </div>

                      {/* Shipping Address */}
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>
                          {order.shippingAddress.city}, {order.shippingAddress.state}
                        </span>
                        {order.trackingNumber && (
                          <>
                            <span>•</span>
                            <span className="font-medium">Tracking: {order.trackingNumber}</span>
                          </>
                        )}
                      </div>

                      {/* Notes */}
                      {order.notes && (
                        <div className="p-2 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                          <strong>Nota:</strong> {order.notes}
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex lg:flex-col gap-2">
                      <Button variant="outline" size="sm" asChild className="flex-1 lg:flex-none">
                        <Link href={`/dashboard/orders/${order.id}`}>
                          <Eye className="w-4 h-4 mr-2" />
                          Ver Detalles
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Contactar
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Package className="w-4 h-4 mr-2" />
                            Marcar como Procesando
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Truck className="w-4 h-4 mr-2" />
                            Marcar como Enviado
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Marcar como Entregado
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <AlertCircle className="w-4 h-4 mr-2" />
                            Cancelar Pedido
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
                <p className="text-gray-600">No se encontraron pedidos que coincidan con los filtros seleccionados.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
