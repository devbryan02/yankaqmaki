"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  GraduationCap,
  BarChart3,
  Settings,
  User,
  Bell,
  Menu,
  X,
} from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Resumen", href: "/dashboard", icon: LayoutDashboard, current: pathname === "/dashboard" },
    {
      name: "Productos",
      href: "/dashboard/products",
      icon: Package,
      current: pathname.startsWith("/dashboard/products"),
    },
    {
      name: "Pedidos",
      href: "/dashboard/orders",
      icon: ShoppingCart,
      current: pathname.startsWith("/dashboard/orders"),
      badge: "3",
    },
    {
      name: "Talleres",
      href: "/dashboard/courses",
      icon: GraduationCap,
      current: pathname.startsWith("/dashboard/courses"),
    },
    {
      name: "Analíticas",
      href: "/dashboard/analytics",
      icon: BarChart3,
      current: pathname.startsWith("/dashboard/analytics"),
    },
    {
      name: "Configuración",
      href: "/dashboard/settings",
      icon: Settings,
      current: pathname.startsWith("/dashboard/settings"),
    },
  ]

  return (
   <div className="min-h-screen bg-sand/20 flex">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-sand/20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-terracotta rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AP</span>
            </div>
            <span className="font-bold text-deep-brown">Dashboard</span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  item.current ? "bg-terracotta text-white" : "text-gray-700 hover:bg-sand/50 hover:text-deep-brown"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {item.name}
                {item.badge && <Badge className="ml-auto bg-terracotta text-white">{item.badge}</Badge>}
              </Link>
            ))}
          </div>
        </nav>

        {/* User Profile Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sand/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-terracotta rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-deep-brown truncate">María Quispe</p>
              <p className="text-xs text-gray-500 truncate">Artesana Textil</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top navigation */}
        <div className="sticky top-0 z-40 bg-white shadow-sm border-b border-sand/20">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)} className="lg:hidden">
              <Menu className="w-5 h-5" />
            </Button>

            <div className="flex items-center space-x-4 ml-auto">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 bg-terracotta text-white text-xs flex items-center justify-center">
                  2
                </Badge>
              </Button>

              <Button asChild variant="outline" size="sm">
                <Link href="/">Volver al Sitio</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 min-h-0">{children}</main>
      </div>
    </div>
  )
}
