"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Truck, Shield, CreditCard } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function CartPage() {
  const { toast } = useToast()
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Manta Andina Tradicional",
      price: 180,
      originalPrice: 220,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
      artisan: "María Quispe",
      location: "Cusco",
      inStock: true,
      maxQuantity: 5,
    },
    {
      id: 2,
      name: "Vasija de Cerámica Shipibo",
      price: 95,
      quantity: 2,
      image: "/placeholder.svg?height=100&width=100",
      artisan: "Carlos Rengifo",
      location: "Ucayali",
      inStock: true,
      maxQuantity: 3,
    },
    {
      id: 3,
      name: "Collar de Plata Filigrana",
      price: 280,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
      artisan: "Roberto Silva",
      location: "Catacaos",
      inStock: true,
      maxQuantity: 2,
    },
  ])

  const [promoCode, setPromoCode] = useState("")
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          const quantity = Math.min(newQuantity, item.maxQuantity)
          return { ...item, quantity }
        }
        return item
      }),
    )
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
    toast({
      title: "Producto eliminado",
      description: "El producto ha sido eliminado del carrito.",
    })
  }

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "artesano10") {
      setAppliedPromo("ARTESANO10")
      toast({
        title: "¡Código aplicado!",
        description: "Has obtenido 10% de descuento.",
      })
    } else {
      toast({
        title: "Código inválido",
        description: "El código promocional no es válido.",
        variant: "destructive",
      })
    }
    setPromoCode("")
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const savings = cartItems.reduce((sum, item) => {
    if (item.originalPrice) {
      return sum + (item.originalPrice - item.price) * item.quantity
    }
    return sum
  }, 0)
  const promoDiscount = appliedPromo ? subtotal * 0.1 : 0
  const shipping = subtotal > 200 ? 0 : 15
  const total = subtotal - promoDiscount + shipping

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-sand/20 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-sand/20 text-center py-12">
            <CardContent>
              <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-deep-brown mb-2">Tu carrito está vacío</h2>
              <p className="text-gray-600 mb-6">
                Descubre nuestros productos artesanales únicos y comienza tu colección.
              </p>
              <Button asChild className="bg-terracotta hover:bg-terracotta/90">
                <Link href="/products">Explorar Productos</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-sand/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4 text-deep-brown hover:text-terracotta">
            <Link href="/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continuar Comprando
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-deep-brown">Carrito de Compras</h1>
          <p className="text-gray-600 mt-2">
            {cartItems.length} {cartItems.length === 1 ? "producto" : "productos"} en tu carrito
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="border-sand/20">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-deep-brown">{item.name}</h3>
                          <p className="text-sm text-gray-600">
                            por {item.artisan} • {item.location}
                          </p>
                          {!item.inStock && (
                            <Badge variant="destructive" className="mt-1">
                              Sin Stock
                            </Badge>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="w-8 h-8 p-0"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="font-medium text-deep-brown w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={item.quantity >= item.maxQuantity}
                            className="w-8 h-8 p-0"
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                          <span className="text-xs text-gray-500 ml-2">Máx: {item.maxQuantity}</span>
                        </div>

                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-deep-brown">
                              S/ {(item.price * item.quantity).toFixed(2)}
                            </span>
                            {item.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                S/ {(item.originalPrice * item.quantity).toFixed(2)}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-gray-600">S/ {item.price} c/u</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Promo Code */}
            <Card className="border-sand/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-deep-brown mb-4">Código Promocional</h3>
                <div className="flex gap-3">
                  <Input
                    placeholder="Ingresa tu código"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="border-sand focus:border-terracotta"
                  />
                  <Button
                    onClick={applyPromoCode}
                    variant="outline"
                    className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white"
                  >
                    Aplicar
                  </Button>
                </div>
                {appliedPromo && (
                  <div className="mt-3 p-3 bg-sage-green/10 rounded-lg">
                    <p className="text-sm text-sage-green font-medium">
                      ✓ Código {appliedPromo} aplicado - 10% de descuento
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="border-sand/20">
              <CardHeader>
                <CardTitle className="text-deep-brown">Resumen del Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-deep-brown">S/ {subtotal.toFixed(2)}</span>
                </div>

                {savings > 0 && (
                  <div className="flex justify-between text-sage-green">
                    <span>Ahorros</span>
                    <span>-S/ {savings.toFixed(2)}</span>
                  </div>
                )}

                {promoDiscount > 0 && (
                  <div className="flex justify-between text-sage-green">
                    <span>Descuento ({appliedPromo})</span>
                    <span>-S/ {promoDiscount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-gray-600">Envío</span>
                  <span className="font-medium text-deep-brown">
                    {shipping === 0 ? "Gratis" : `S/ ${shipping.toFixed(2)}`}
                  </span>
                </div>

                {shipping > 0 && <p className="text-xs text-gray-500">Envío gratis en compras mayores a S/ 200</p>}

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span className="text-deep-brown">Total</span>
                  <span className="text-deep-brown">S/ {total.toFixed(2)}</span>
                </div>

                <Button asChild className="w-full bg-terracotta hover:bg-terracotta/90" size="lg">
                  <Link href="/checkout">Proceder al Pago</Link>
                </Button>

                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="w-4 h-4 text-sage-green" />
                    <span>Compra 100% segura</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Truck className="w-4 h-4 text-sage-green" />
                    <span>Envío a todo el Perú</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CreditCard className="w-4 h-4 text-sage-green" />
                    <span>Múltiples métodos de pago</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <Card className="border-sand/20">
              <CardContent className="p-4">
                <h4 className="font-semibold text-deep-brown mb-3">¿Por qué comprar con nosotros?</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>✓ Productos 100% auténticos</p>
                  <p>✓ Apoyas directamente a artesanos</p>
                  <p>✓ Garantía de calidad</p>
                  <p>✓ Envío seguro y rastreable</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
