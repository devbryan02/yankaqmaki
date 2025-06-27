"use client"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import {
  Package,
  Users,
  TrendingUp,
  ShoppingCart,
  Calendar,
  Star,
  ArrowRight,
  Award,
  Target,
  Clock,
} from "lucide-react"

export default function DashboardPage() {
  // Mock data
  const stats = {
    totalProducts: 24,
    totalSales: 1250,
    totalRevenue: 15680,
    totalStudents: 45,
    monthlyGrowth: 12.5,
    pendingOrders: 3,
    activeWorkshops: 2,
  }

  const salesData = [
    { month: "Ene", sales: 1200, revenue: 15000 },
    { month: "Feb", sales: 1900, revenue: 23000 },
    { month: "Mar", sales: 800, revenue: 12000 },
    { month: "Abr", sales: 2400, revenue: 28000 },
    { month: "May", sales: 1800, revenue: 22000 },
    { month: "Jun", sales: 2200, revenue: 26000 },
  ]

  const recentActivity = [
    {
      type: "sale",
      title: "Nueva venta: Manta Andina Premium",
      description: "Vendido a Ana García por S/ 180",
      time: "Hace 2 horas",
      icon: ShoppingCart,
      color: "text-sage-green",
    },
    {
      type: "review",
      title: "Nueva reseña de 5 estrellas",
      description: "Carlos Mendoza calificó tu Vasija Shipibo",
      time: "Hace 4 horas",
      icon: Star,
      color: "text-yellow-500",
    },
    {
      type: "workshop",
      title: "Nuevo estudiante inscrito",
      description: "Elena se inscribió en tu taller de cerámica",
      time: "Hace 6 horas",
      icon: Users,
      color: "text-terracotta",
    },
  ]

  const quickActions = [
    {
      title: "Agregar Producto",
      description: "Sube un nuevo producto a tu tienda",
      href: "/dashboard/products/new",
      icon: Package,
      color: "bg-terracotta",
    },
    {
      title: "Crear Taller",
      description: "Programa un nuevo taller o curso",
      href: "/dashboard/courses/new",
      icon: Calendar,
      color: "bg-sage-green",
    },
    {
      title: "Ver Pedidos",
      description: "Gestiona tus pedidos pendientes",
      href: "/dashboard/orders",
      icon: ShoppingCart,
      color: "bg-deep-brown",
      badge: stats.pendingOrders,
    },
    {
      title: "Analíticas",
      description: "Revisa el rendimiento de tu tienda",
      href: "/dashboard/analytics",
      icon: TrendingUp,
      color: "bg-blue-600",
    },
  ]

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 max-w-7xl mx-auto">
      {/* Welcome Header - Mejorar responsive */}
      <div className="bg-gradient-to-r from-terracotta to-terracotta/80 rounded-2xl p-6 sm:p-8 text-white">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">¡Bienvenida, María! 👋</h1>
            <p className="text-terracotta-100 text-base sm:text-lg">Aquí tienes un resumen de tu actividad artesanal</p>
          </div>
          <div className="grid grid-cols-3 gap-4 lg:flex lg:items-center lg:space-x-6">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">{stats.totalProducts}</div>
              <div className="text-xs sm:text-sm text-terracotta-100">Productos</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">{stats.totalSales}</div>
              <div className="text-xs sm:text-sm text-terracotta-100">Ventas</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">S/ {stats.totalRevenue.toLocaleString()}</div>
              <div className="text-xs sm:text-sm text-terracotta-100">Ingresos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions - Mejorar grid responsive */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-deep-brown mb-4 sm:mb-6">Acciones Rápidas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {quickActions.map((action, index) => (
            <Card
              key={index}
              className="border-sand/20 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <Link href={action.href}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    {action.badge && <Badge className="bg-terracotta text-white">{action.badge}</Badge>}
                  </div>
                  <h3 className="font-semibold text-deep-brown mb-2 group-hover:text-terracotta transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{action.description}</p>
                  <div className="flex items-center text-terracotta text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Ir ahora <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Overview - Mejorar responsive */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card className="border-sand/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Productos Activos</CardTitle>
            <Package className="h-4 w-4 text-terracotta" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-deep-brown">{stats.totalProducts}</div>
            <p className="text-xs text-sage-green">+2 este mes</p>
          </CardContent>
        </Card>

        <Card className="border-sand/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pedidos Pendientes</CardTitle>
            <Clock className="h-4 w-4 text-terracotta" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-deep-brown">{stats.pendingOrders}</div>
            <p className="text-xs text-gray-500">Requieren atención</p>
          </CardContent>
        </Card>

        <Card className="border-sand/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Talleres Activos</CardTitle>
            <Calendar className="h-4 w-4 text-terracotta" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-deep-brown">{stats.activeWorkshops}</div>
            <p className="text-xs text-sage-green">{stats.totalStudents} estudiantes</p>
          </CardContent>
        </Card>

        <Card className="border-sand/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Crecimiento</CardTitle>
            <TrendingUp className="h-4 w-4 text-terracotta" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-deep-brown">+{stats.monthlyGrowth}%</div>
            <p className="text-xs text-sage-green">vs mes anterior</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Activity - Mejorar layout */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
        {/* Sales Chart */}
        <Card className="border-sand/20">
          <CardHeader>
            <CardTitle className="text-deep-brown">Ventas de los Últimos 6 Meses</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#C87E5A" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="border-sand/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-deep-brown">Actividad Reciente</CardTitle>
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/activity">Ver todo</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-sand/30 rounded-lg">
                  <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center ${activity.color}`}>
                    <activity.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-deep-brown text-sm">{activity.title}</p>
                    <p className="text-gray-600 text-sm">{activity.description}</p>
                    <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Goals & Achievements - Mejorar responsive */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
        <Card className="border-sand/20">
          <CardHeader>
            <CardTitle className="text-deep-brown flex items-center">
              <Target className="w-5 h-5 mr-2 text-terracotta" />
              Metas del Mes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Ventas (S/ 20,000)</span>
                <span className="font-medium text-deep-brown">78%</span>
              </div>
              <div className="w-full bg-sand/50 rounded-full h-2">
                <div className="bg-terracotta h-2 rounded-full" style={{ width: "78%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Nuevos productos (5)</span>
                <span className="font-medium text-deep-brown">60%</span>
              </div>
              <div className="w-full bg-sand/50 rounded-full h-2">
                <div className="bg-sage-green h-2 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Estudiantes en talleres (50)</span>
                <span className="font-medium text-deep-brown">90%</span>
              </div>
              <div className="w-full bg-sand/50 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-sand/20">
          <CardHeader>
            <CardTitle className="text-deep-brown flex items-center">
              <Award className="w-5 h-5 mr-2 text-terracotta" />
              Logros Recientes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-sage-green/10 rounded-lg">
              <div className="w-8 h-8 bg-sage-green rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-medium text-deep-brown text-sm">¡100 ventas completadas!</p>
                <p className="text-gray-600 text-xs">Alcanzaste un hito importante</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-terracotta/10 rounded-lg">
              <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-medium text-deep-brown text-sm">Artesano Verificado</p>
                <p className="text-gray-600 text-xs">Tu perfil ahora tiene el badge de verificación</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-medium text-deep-brown text-sm">Mejor mes del año</p>
                <p className="text-gray-600 text-xs">Superaste tus ventas anteriores</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
