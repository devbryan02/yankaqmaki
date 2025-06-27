"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import {
  Heart,
  ShoppingCart,
  Star,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  MapPin,
  Calendar,
  Award,
  MessageCircle,
  ThumbsUp,
  Flag,
  Verified,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [isWishlisted, setIsWishlisted] = useState(false)

  // Mock product data - in real app, this would come from API
  const product = {
    id: 1,
    name: "Manta Andina Tradicional Premium",
    description:
      "Hermosa manta tejida a mano con técnicas ancestrales transmitidas de generación en generación. Cada pieza es única y refleja la rica tradición textil de los Andes peruanos. Elaborada con lana de alpaca 100% natural y teñida con tintes naturales extraídos de plantas locales.",
    price: 180,
    originalPrice: 220,
    discount: 18,
    images: [
      "https://freight.cargo.site/t/original/i/bdb09ac6d431221deb5d72fa7911a62cb4debbfe3a333154f7fd46604ba9870e/_DSF2731-1.jpg",
      "https://www.tienda-peruana.com/1924/manta-macha-peruana-roja-aprox-110x120cm.jpg",
      "https://d15yqn4xt8exgp.cloudfront.net/media/products/TTP000504/inka-products-tissu-traditionnel-peruvien-inca-andin-4-20221103073531.zoom.jpg",
      "https://freight.cargo.site/t/original/i/bdb09ac6d431221deb5d72fa7911a62cb4debbfe3a333154f7fd46604ba9870e/_DSF2731-1.jpg",
    ],
    artisan: {
      name: "María Quispe",
      image: "/placeholder.svg?height=80&width=80",
      location: "Cusco, Perú",
      rating: 4.9,
      totalProducts: 45,
      yearsExperience: 25,
      verified: true,
      bio: "Maestra tejedora con 25 años de experiencia, especializada en técnicas tradicionales andinas. Heredera de conocimientos ancestrales transmitidos por su abuela.",
    },
    rating: 4.9,
    totalReviews: 23,
    ratingDistribution: {
      5: 18,
      4: 3,
      3: 1,
      2: 1,
      1: 0,
    },
    category: "Textiles",
    subcategory: "Mantas y Cobijas",
    tags: ["Hecho a mano", "Lana de alpaca", "Tintes naturales", "Tradicional"],
    inStock: true,
    stock: 5,
    maxQuantity: 3,
    dimensions: "150cm x 200cm",
    weight: "800g",
    materials: ["Lana de alpaca 100%", "Tintes naturales", "Fibras andinas"],
    colors: ["Natural", "Rojo Andino", "Azul Índigo"],
    sizes: ["Pequeña (120x150cm)", "Mediana (150x200cm)", "Grande (180x220cm)"],
    careInstructions: [
      "Lavar a mano con agua fría",
      "Usar detergente suave",
      "Secar a la sombra",
      "No usar blanqueador",
      "Planchar a temperatura baja",
    ],
    shippingInfo: {
      freeShipping: true,
      estimatedDays: "3-5 días hábiles",
      international: true,
    },
    featured: true,
    createdAt: "2024-01-10",
  }

  const reviews = [
    {
      id: 1,
      user: {
        name: "Ana García",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      rating: 5,
      date: "2024-01-12",
      title: "Calidad excepcional",
      comment:
        "La manta es hermosa, la calidad de la lana es excelente y los colores son vibrantes. Se nota el trabajo artesanal. Muy recomendada.",
      helpful: 12,
      images: ["/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100"],
    },
    {
      id: 2,
      user: {
        name: "Carlos Mendoza",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: false,
      },
      rating: 5,
      date: "2024-01-08",
      title: "Perfecta para el invierno",
      comment:
        "Compré esta manta para mi casa de campo y es perfecta. Muy cálida y con un diseño precioso. El envío fue rápido.",
      helpful: 8,
    },
    {
      id: 3,
      user: {
        name: "Elena Rodríguez",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      rating: 4,
      date: "2024-01-05",
      title: "Muy bonita pero cara",
      comment:
        "La manta es realmente hermosa y de buena calidad, pero considero que el precio es un poco elevado. Aún así, vale la pena por el trabajo artesanal.",
      helpful: 5,
    },
  ]

  const relatedProducts = [
    {
      id: 2,
      name: "Cojín Andino Decorativo",
      price: 45,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      artisan: "María Quispe",
    },
    {
      id: 3,
      name: "Tapiz Tradicional",
      price: 120,
      originalPrice: 150,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
      artisan: "Carmen López",
    },
    {
      id: 4,
      name: "Bufanda de Alpaca",
      price: 65,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.7,
      artisan: "Rosa Mamani",
    },
  ]

  const handleAddToCart = () => {
    toast({
      title: "Producto agregado",
      description: `${quantity} ${product.name} agregado al carrito.`,
    })
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast({
      title: isWishlisted ? "Eliminado de favoritos" : "Agregado a favoritos",
      description: isWishlisted
        ? "El producto ha sido eliminado de tu lista de favoritos."
        : "El producto ha sido agregado a tu lista de favoritos.",
    })
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const averageRating = product.rating
  const totalReviews = product.totalReviews

  return (
    <div className="min-h-screen bg-sand/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <Link href="/" className="hover:text-terracotta">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-terracotta">
              Productos
            </Link>
            <span>/</span>
            <Link href={`/products?category=${product.category.toLowerCase()}`} className="hover:text-terracotta">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-deep-brown font-medium">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={product.images[currentImageIndex] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-deep-brown" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
              >
                <ChevronRight className="w-5 h-5 text-deep-brown" />
              </button>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.featured && <Badge className="bg-terracotta text-white">Destacado</Badge>}
                {product.discount && <Badge className="bg-sage-green text-white">-{product.discount}%</Badge>}
              </div>

              {/* Share Button */}
              <button className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all">
                <Share2 className="w-5 h-5 text-deep-brown" />
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex ? "border-terracotta" : "border-transparent"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{product.category}</Badge>
                <Badge variant="outline">{product.subcategory}</Badge>
              </div>
              <h1 className="text-3xl font-bold text-deep-brown mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-deep-brown">{averageRating}</span>
                  <span className="text-gray-600">({totalReviews} reseñas)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{product.artisan.location}</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-deep-brown">S/ {product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">S/ {product.originalPrice}</span>
              )}
              {product.discount && (
                <Badge className="bg-sage-green text-white">Ahorra S/ {product.originalPrice! - product.price}</Badge>
              )}
            </div>

            {/* Artisan Info */}
            <Card className="border-sand/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={product.artisan.image || "/placeholder.svg"} alt={product.artisan.name} />
                    <AvatarFallback>{product.artisan.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-deep-brown">{product.artisan.name}</h3>
                      {product.artisan.verified && <Verified className="w-4 h-4 text-sage-green" />}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{product.artisan.rating}</span>
                      </div>
                      <span>{product.artisan.yearsExperience} años de experiencia</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/artisans/${product.artisan.name.toLowerCase().replace(" ", "-")}`}>Ver Perfil</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Options */}
            <div className="space-y-4">
              {/* Colors */}
              {product.colors.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-deep-brown mb-2">Color</label>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-2 border rounded-lg text-sm transition-all ${
                          selectedColor === color
                            ? "border-terracotta bg-terracotta text-white"
                            : "border-sand hover:border-terracotta"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sizes */}
              {product.sizes.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-deep-brown mb-2">Tamaño</label>
                  <div className="flex gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-2 border rounded-lg text-sm transition-all ${
                          selectedSize === size
                            ? "border-terracotta bg-terracotta text-white"
                            : "border-sand hover:border-terracotta"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-deep-brown mb-2">Cantidad</label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-sand rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-sand/50 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-medium text-deep-brown">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.maxQuantity, quantity + 1))}
                      className="p-2 hover:bg-sand/50 transition-colors"
                      disabled={quantity >= product.maxQuantity}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.stock} disponibles (máx {product.maxQuantity} por pedido)
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <Button onClick={handleAddToCart} className="flex-1 bg-terracotta hover:bg-terracotta/90" size="lg">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Agregar al Carrito
                </Button>
                <Button
                  onClick={handleWishlist}
                  variant="outline"
                  size="lg"
                  className={`border-terracotta ${
                    isWishlisted ? "bg-terracotta text-white" : "text-terracotta hover:bg-terracotta hover:text-white"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
                </Button>
              </div>
              <Button asChild variant="outline" className="w-full" size="lg">
                <Link href="/checkout">Comprar Ahora</Link>
              </Button>
            </div>

            {/* Shipping & Guarantees */}
            <div className="space-y-3 pt-4 border-t border-sand/20">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="w-5 h-5 text-sage-green" />
                <div>
                  <span className="font-medium text-deep-brown">Envío gratis</span>
                  <span className="text-gray-600 ml-2">Entrega en {product.shippingInfo.estimatedDays}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="w-5 h-5 text-sage-green" />
                <span className="text-gray-600">Compra protegida - Garantía de autenticidad</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RotateCcw className="w-5 h-5 text-sage-green" />
                <span className="text-gray-600">Devoluciones gratuitas hasta 30 días</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-sand/50">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Descripción</TabsTrigger>
            <TabsTrigger value="specifications">Especificaciones</TabsTrigger>
            <TabsTrigger value="reviews">Reseñas ({totalReviews})</TabsTrigger>
            <TabsTrigger value="artisan">Sobre el Artesano</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card className="border-sand/20">
              <CardContent className="p-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
                  <h3 className="text-lg font-semibold text-deep-brown mb-3">Características destacadas:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Tejido 100% a mano con técnicas ancestrales</li>
                    <li>Lana de alpaca de la más alta calidad</li>
                    <li>Tintes naturales extraídos de plantas andinas</li>
                    <li>Diseños únicos que reflejan la cultura peruana</li>
                    <li>Cada pieza es única e irrepetible</li>
                  </ul>
                  <h3 className="text-lg font-semibold text-deep-brown mb-3 mt-6">Cuidados:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {product.careInstructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card className="border-sand/20">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-deep-brown mb-4">Especificaciones del Producto</h3>
                    <dl className="space-y-3">
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Dimensiones:</dt>
                        <dd className="font-medium text-deep-brown">{product.dimensions}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Peso:</dt>
                        <dd className="font-medium text-deep-brown">{product.weight}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Categoría:</dt>
                        <dd className="font-medium text-deep-brown">{product.category}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Subcategoría:</dt>
                        <dd className="font-medium text-deep-brown">{product.subcategory}</dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-deep-brown mb-4">Materiales</h3>
                    <ul className="space-y-2">
                      {product.materials.map((material, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                          <span className="text-gray-700">{material}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {/* Reviews Summary */}
              <Card className="border-sand/20">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-deep-brown mb-2">{averageRating}</div>
                      <div className="flex justify-center items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">Basado en {totalReviews} reseñas</p>
                    </div>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center gap-3">
                          <span className="text-sm text-gray-600 w-8">{rating}★</span>
                          <Progress
                            value={
                              (product.ratingDistribution[rating as keyof typeof product.ratingDistribution] /
                                totalReviews) *
                              100
                            }
                            className="flex-1 h-2"
                          />
                          <span className="text-sm text-gray-600 w-8">
                            {product.ratingDistribution[rating as keyof typeof product.ratingDistribution]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Write Review */}
              <Card className="border-sand/20">
                <CardHeader>
                  <CardTitle className="text-deep-brown">Escribir una reseña</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-2">Tu calificación</label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button key={rating} className="text-gray-300 hover:text-yellow-400 transition-colors">
                          <Star className="w-6 h-6" />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-2">Tu reseña</label>
                    <Textarea
                      placeholder="Comparte tu experiencia con este producto..."
                      className="border-sand focus:border-terracotta"
                      rows={4}
                    />
                  </div>
                  <Button className="bg-terracotta hover:bg-terracotta/90">Publicar Reseña</Button>
                </CardContent>
              </Card>

              {/* Reviews List */}
              <div className="space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id} className="border-sand/20">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={review.user.avatar || "/placeholder.svg"} alt={review.user.name} />
                          <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-deep-brown">{review.user.name}</span>
                              {review.user.verified && <Verified className="w-4 h-4 text-sage-green" />}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="font-medium text-deep-brown">{review.title}</span>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                          {review.images && (
                            <div className="flex gap-2 mt-3">
                              {review.images.map((image, index) => (
                                <Image
                                  key={index}
                                  src={image || "/placeholder.svg"}
                                  alt={`Review image ${index + 1}`}
                                  width={80}
                                  height={80}
                                  className="w-20 h-20 object-cover rounded-lg"
                                />
                              ))}
                            </div>
                          )}
                          <div className="flex items-center gap-4 pt-2">
                            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-terracotta transition-colors">
                              <ThumbsUp className="w-4 h-4" />
                              Útil ({review.helpful})
                            </button>
                            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-terracotta transition-colors">
                              <MessageCircle className="w-4 h-4" />
                              Responder
                            </button>
                            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-600 transition-colors">
                              <Flag className="w-4 h-4" />
                              Reportar
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="artisan" className="mt-6">
            <Card className="border-sand/20">
              <CardContent className="p-6">
                <div className="flex gap-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={product.artisan.image || "/placeholder.svg"} alt={product.artisan.name} />
                    <AvatarFallback className="text-2xl">{product.artisan.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-deep-brown">{product.artisan.name}</h3>
                        {product.artisan.verified && <Verified className="w-6 h-6 text-sage-green" />}
                      </div>
                      <div className="flex items-center gap-4 text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{product.artisan.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{product.artisan.yearsExperience} años de experiencia</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          <span>{product.artisan.totalProducts} productos</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.artisan.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-semibold text-deep-brown">{product.artisan.rating}</span>
                        <span className="text-gray-600">calificación promedio</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{product.artisan.bio}</p>
                    <div className="flex gap-3">
                      <Button asChild className="bg-terracotta hover:bg-terracotta/90">
                        <Link href={`/artisans/${product.artisan.name.toLowerCase().replace(" ", "-")}`}>
                          Ver Perfil Completo
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white"
                      >
                        Contactar Artesano
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-deep-brown mb-6">Productos Relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="border-sand/20 hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {relatedProduct.originalPrice && (
                    <Badge className="absolute top-3 right-3 bg-sage-green text-white">
                      -
                      {Math.round(
                        ((relatedProduct.originalPrice - relatedProduct.price) / relatedProduct.originalPrice) * 100,
                      )}
                      %
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-deep-brown mb-2 line-clamp-2">{relatedProduct.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">por {relatedProduct.artisan}</p>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{relatedProduct.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-deep-brown">S/ {relatedProduct.price}</span>
                      {relatedProduct.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">S/ {relatedProduct.originalPrice}</span>
                      )}
                    </div>
                    <Button size="sm" className="bg-terracotta hover:bg-terracotta/90">
                      Ver
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
