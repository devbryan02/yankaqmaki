import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-sand/30 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-peruvian-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-brown leading-tight">
                Artesanías
                <span className="text-terracotta block">Auténticas</span>
                del Perú
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Descubre tesoros únicos hechos a mano por maestros artesanos peruanos. Cada pieza cuenta una historia de
                tradición, cultura y pasión.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta/90 text-white">
                <Link href="/register-artisan" className="flex items-center">
                  Ser Artesano
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white"
              >
                <Link href="/products" className="flex items-center">
                  Explorar Productos
                  <Play className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-sand/50">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-terracotta">500+</div>
                <div className="text-sm text-gray-600">Artesanos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-terracotta">2,000+</div>
                <div className="text-sm text-gray-600">Productos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-terracotta">50+</div>
                <div className="text-sm text-gray-600">Talleres</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://emprender.pe/wp-content/uploads/2025/02/001140872W-1068x712.jpg"
                alt="Artesano peruano trabajando"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
              {/* Overlay with traditional pattern */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/20 to-transparent"></div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-sand/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-terracotta rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-deep-brown text-sm">Calidad Garantizada</div>
                  <div className="text-xs text-gray-500">100% Hecho a mano</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-sand/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-sage-green rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🌱</span>
                </div>
                <div>
                  <div className="font-semibold text-deep-brown text-sm">Eco-Friendly</div>
                  <div className="text-xs text-gray-500">Materiales naturales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
