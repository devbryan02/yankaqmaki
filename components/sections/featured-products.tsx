import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star } from "lucide-react"

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Manta Andina Tradicional",
      price: 180,
      originalPrice: 220,
      image: "https://freight.cargo.site/t/original/i/bdb09ac6d431221deb5d72fa7911a62cb4debbfe3a333154f7fd46604ba9870e/_DSF2731-1.jpg",
      artisan: "María Quispe",
      location: "Cusco",
      rating: 4.9,
      reviews: 23,
      category: "Textiles",
      featured: true,
    },
    {
      id: 2,
      name: "Vasija de Cerámica Shipibo",
      price: 95,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDP0pTJSumi8I8CnZK4GCKWbLEV8s01PJwfg&s",
      artisan: "Carlos Rengifo",
      location: "Ucayali",
      rating: 4.8,
      reviews: 15,
      category: "Cerámica",
    },
    {
      id: 3,
      name: "Tallado en Madera Huamanga",
      price: 150,
      image: "https://museopedrodeosma.org/wp-content/uploads/2021/03/Lagar-mistico_Sala-Piedra-de-Huamanga_004.jpg",
      artisan: "Ana Flores",
      location: "Ayacucho",
      rating: 5.0,
      reviews: 8,
      category: "Madera",
    },
    {
      id: 4,
      name: "Joyería en Plata Filigrana",
      price: 280,
      image: "https://i.pinimg.com/736x/1f/79/a9/1f79a94d32b77c76ee4878176e33ab52.jpg",
      artisan: "Roberto Silva",
      location: "Catacaos",
      rating: 4.9,
      reviews: 31,
      category: "Joyería",
      featured: true,
    },
    {
      id: 5,
      name: "Bolso Tejido a Mano",
      price: 65,
      image: "https://culli.pe/123-product_zoom/bolso-la-chuquina-grande-2-lana-culli-peru.jpg",
      artisan: "Elena Mamani",
      location: "Puno",
      rating: 4.7,
      reviews: 19,
      category: "Textiles",
    },
    {
      id: 6,
      name: "Máscara Ceremonial",
      price: 320,
      image: "https://i.etsystatic.com/11551073/r/il/48c5cc/4547160572/il_570xN.4547160572_gmbo.jpg",
      artisan: "José Huamán",
      location: "Paucartambo",
      rating: 4.8,
      reviews: 12,
      category: "Arte",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-4">Productos Destacados</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre piezas únicas seleccionadas por su calidad excepcional y la maestría de nuestros artesanos.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group border-sand/20 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.featured && <Badge className="bg-terracotta text-white">Destacado</Badge>}
                  <Badge variant="secondary" className="bg-white/90 text-deep-brown">
                    {product.category}
                  </Badge>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="secondary" className="w-10 h-10 p-0 bg-white/90 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="sm" className="w-10 h-10 p-0 bg-terracotta hover:bg-terracotta/90">
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>

                {/* Discount Badge */}
                {product.originalPrice && (
                  <Badge className="absolute bottom-3 left-3 bg-sage-green text-white">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </Badge>
                )}
              </div>

              <CardContent className="p-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-deep-brown group-hover:text-terracotta transition-colors">
                    <Link href={`/products/${product.id}`}>{product.name}</Link>
                  </h3>

                  <div className="flex items-center text-sm text-gray-600">
                    <span>por {product.artisan}</span>
                    <span className="mx-2">•</span>
                    <span>{product.location}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-deep-brown">S/ {product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">S/ {product.originalPrice}</span>
                      )}
                    </div>
                    <Button size="sm" className="bg-terracotta hover:bg-terracotta/90">
                      Agregar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white"
          >
            <Link href="/products">Ver Todos los Productos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
