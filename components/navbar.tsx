"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, User, Menu, X, Heart, Search, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems] = useState(3) // Mock cart items

  return (
    <nav className="bg-white shadow-sm border-b border-sand/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-terracotta rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">YM</span>
            </div>
            <span className="font-bold text-deep-brown text-lg">Yankaq Maki</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 mx-3">
            <Link href="/products" className="text-deep-brown hover:text-terracotta transition-colors">
              Productos
            </Link>
            <Link href="/courses" className="text-deep-brown hover:text-terracotta transition-colors">
              Talleres
            </Link>
            <Link href="/artisans" className="text-deep-brown hover:text-terracotta transition-colors">
              Artesanos
            </Link>
            <Link href="/about" className="text-deep-brown hover:text-terracotta transition-colors">
              Nosotros
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Buscar productos, artesanos..."
                className="pl-10 bg-sand/30 border-sand focus:border-terracotta"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="sm" className="text-deep-brown hover:text-terracotta relative">
                <ShoppingCart className="w-5 h-5" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-terracotta text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-deep-brown">
                  <User className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/login">Iniciar Sesión</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/register">Registrarse</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">
                    <User className="w-4 h-4 mr-2" />
                    Mi Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/my-orders">Mis Pedidos</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild className="bg-terracotta hover:bg-terracotta/90">
              <Link href="/register-artisan">Ser Artesano</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-deep-brown">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-sand/20">
            <div className="flex flex-col space-y-4">
              <Input placeholder="Buscar..." className="bg-sand/30" />
              <Link href="/products" className="text-deep-brown hover:text-terracotta">
                Productos
              </Link>
              <Link href="/courses" className="text-deep-brown hover:text-terracotta">
                Talleres
              </Link>
              <Link href="/artisans" className="text-deep-brown hover:text-terracotta">
                Artesanos
              </Link>
              <Link href="/about" className="text-deep-brown hover:text-terracotta">
                Nosotros
              </Link>
              <Link href="/dashboard" className="text-deep-brown hover:text-terracotta">
                Mi Dashboard
              </Link>
              <div className="flex space-x-2 pt-4">
                <Button asChild variant="outline" className="flex-1">
                  <Link href="/login">Iniciar Sesión</Link>
                </Button>
                <Button asChild className="flex-1 bg-terracotta hover:bg-terracotta/90">
                  <Link href="/register-artisan">Ser Artesano</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
