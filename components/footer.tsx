import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, MessageCircle, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-deep-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-terracotta rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AP</span>
              </div>
              <span className="font-bold text-lg">Artesanías del Perú</span>
            </div>
            <p className="text-gray-300 text-sm">
              Conectando artesanos peruanos con el mundo, preservando tradiciones milenarias.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-terracotta/20">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-terracotta/20">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-terracotta/20">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-terracotta/20">
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <Link href="/products" className="block text-gray-300 hover:text-white transition-colors">
                Productos
              </Link>
              <Link href="/courses" className="block text-gray-300 hover:text-white transition-colors">
                Talleres
              </Link>
              <Link href="/artisans" className="block text-gray-300 hover:text-white transition-colors">
                Artesanos
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                Nosotros
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contacto
              </Link>
            </div>
          </div>

          {/* For Artisans */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Para Artesanos</h3>
            <div className="space-y-2">
              <Link href="/register-artisan" className="block text-gray-300 hover:text-white transition-colors">
                Registrarse
              </Link>
              <Link href="/plans" className="block text-gray-300 hover:text-white transition-colors">
                Planes Premium
              </Link>
              <Link href="/dashboard" className="block text-gray-300 hover:text-white transition-colors">
                Mi Dashboard
              </Link>
              <Link href="/help" className="block text-gray-300 hover:text-white transition-colors">
                Centro de Ayuda
              </Link>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contacto</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@artesaniasdelperu.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+51 1 234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Lima, Perú</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Newsletter</h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Tu email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button size="sm" className="bg-terracotta hover:bg-terracotta/90">
                  Suscribir
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© 2024 Artesanías del Perú. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
              Privacidad
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
              Términos
            </Link>
            <Link href="/cookies" className="text-gray-300 hover:text-white text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
