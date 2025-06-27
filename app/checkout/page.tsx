"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  CreditCard,
  Truck,
  MapPin,
  Phone,
  Mail,
  Shield,
  Clock,
  Package,
  CheckCircle,
  Building,
  Banknote,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type CheckoutStep = "shipping" | "payment" | "review"

export default function CheckoutPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [currentStep, setCurrentStep] = useState<CheckoutStep>("shipping")
  const [isProcessing, setIsProcessing] = useState(false)

  // Form states
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "Perú",
    instructions: "",
  })

  const [billingInfo, setBillingInfo] = useState({
    sameAsShipping: true,
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "Perú",
  })

  const [paymentMethod, setPaymentMethod] = useState("card")
  const [shippingMethod, setShippingMethod] = useState("standard")
  const [cardInfo, setCardInfo] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  })

  // Mock cart data
  const cartItems = [
    {
      id: 1,
      name: "Manta Andina Tradicional",
      price: 180,
      quantity: 1,
      image: "https://freight.cargo.site/t/original/i/bdb09ac6d431221deb5d72fa7911a62cb4debbfe3a333154f7fd46604ba9870e/_DSF2731-1.jpg",
      artisan: "María Quispe",
      location: "Cusco",
    },
    {
      id: 2,
      name: "Vasija de Cerámica Shipibo",
      price: 95,
      quantity: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDP0pTJSumi8I8CnZK4GCKWbLEV8s01PJwfg&s",
      artisan: "Carlos Rengifo",
      location: "Ucayali",
    },
  ]

  const shippingOptions = [
    {
      id: "standard",
      name: "Envío Estándar",
      description: "5-7 días hábiles",
      price: 15,
      icon: Package,
    },
    {
      id: "express",
      name: "Envío Express",
      description: "2-3 días hábiles",
      price: 25,
      icon: Truck,
    },
    {
      id: "overnight",
      name: "Envío Urgente",
      description: "1 día hábil",
      price: 45,
      icon: Clock,
    },
  ]

  const paymentMethods = [
    {
      id: "card",
      name: "Tarjeta de Crédito/Débito",
      description: "Visa, Mastercard, American Express",
      icon: CreditCard,
    },
    {
      id: "yape",
      name: "Yape",
      description: "Pago móvil instantáneo",
      icon: Phone,
    },
    {
      id: "plin",
      name: "Plin",
      description: "Transferencia bancaria móvil",
      icon: Banknote,
    },
    {
      id: "bank",
      name: "Transferencia Bancaria",
      description: "BCP, BBVA, Interbank, Scotiabank",
      icon: Building,
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const selectedShipping = shippingOptions.find((option) => option.id === shippingMethod)
  const shippingCost = selectedShipping?.price || 0
  const tax = subtotal * 0.03 // comision (3%)
  const total = subtotal + shippingCost + tax

  const getStepProgress = () => {
    switch (currentStep) {
      case "shipping":
        return 33
      case "payment":
        return 66
      case "review":
        return 100
      default:
        return 0
    }
  }

  const validateShippingForm = () => {
    const required = ["firstName", "lastName", "email", "phone", "address", "city", "state", "zipCode"]
    return required.every((field) => shippingInfo[field as keyof typeof shippingInfo].trim() !== "")
  }

  const validatePaymentForm = () => {
    if (paymentMethod === "card") {
      return cardInfo.number && cardInfo.expiry && cardInfo.cvv && cardInfo.name
    }
    return true
  }

  const handleNextStep = () => {
    if (currentStep === "shipping" && !validateShippingForm()) {
      toast({
        title: "Información incompleta",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive",
      })
      return
    }

    if (currentStep === "payment" && !validatePaymentForm()) {
      toast({
        title: "Información de pago incompleta",
        description: "Por favor completa la información de pago.",
        variant: "destructive",
      })
      return
    }

    if (currentStep === "shipping") {
      setCurrentStep("payment")
    } else if (currentStep === "payment") {
      setCurrentStep("review")
    }
  }

  const handlePlaceOrder = async () => {
    setIsProcessing(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Redirect to confirmation page
    router.push("/checkout/confirmation?order=ORD-2024-001")
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(" ")
    } else {
      return v
    }
  }

  return (
    <div className="min-h-screen bg-sand/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4 text-deep-brown hover:text-terracotta">
            <Link href="/cart">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Carrito
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-deep-brown mb-4">Finalizar Compra</h1>
          
          {/* Progress Bar */}
          <div className="mb-6">
            <Progress value={getStepProgress()} className="h-2 mb-4" />
            <div className="flex justify-between text-sm">
              <span className={currentStep === "shipping" ? "text-terracotta font-medium" : "text-gray-500"}>
                1. Información de Envío
              </span>
              <span className={currentStep === "payment" ? "text-terracotta font-medium" : "text-gray-500"}>
                2. Método de Pago
              </span>
              <span className={currentStep === "review" ? "text-terracotta font-medium" : "text-gray-500"}>
                3. Revisar Pedido
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            {currentStep === "shipping" && (
              <Card className="border-sand/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-deep-brown">
                    <Truck className="w-5 h-5" />
                    Información de Envío
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h3 className="font-semibold text-deep-brown mb-4">Información de Contacto</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Nombres *</Label>
                        <Input
                          id="firstName"
                          value={shippingInfo.firstName}
                          onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                          className="border-sand focus:border-terracotta"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Apellidos *</Label>
                        <Input
                          id="lastName"
                          value={shippingInfo.lastName}
                          onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                          className="border-sand focus:border-terracotta"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={shippingInfo.email}
                          onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                          className="border-sand focus:border-terracotta"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Teléfono *</Label>
                        <Input
                          id="phone"
                          value={shippingInfo.phone}
                          onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                          className="border-sand focus:border-terracotta"
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Shipping Address */}
                  <div>
                    <h3 className="font-semibold text-deep-brown mb-4">Dirección de Envío</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address">Dirección *</Label>
                        <Input
                          id="address"
                          value={shippingInfo.address}
                          onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                          placeholder="Av. Principal 123, Distrito"
                          className="border-sand focus:border-terracotta"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">Ciudad *</Label>
                          <Input
                            id="city"
                            value={shippingInfo.city}
                            onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                            className="border-sand focus:border-terracotta"
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">Departamento *</Label>
                          <Input
                            id="state"
                            value={shippingInfo.state}
                            onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                            className="border-sand focus:border-terracotta"
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">Código Postal *</Label>
                          <Input
                            id="zipCode"
                            value={shippingInfo.zipCode}
                            onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
                            className="border-sand focus:border-terracotta"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="instructions">Instrucciones de Entrega (Opcional)</Label>
                        <Textarea
                          id="instructions"
                          value={shippingInfo.instructions}
                          onChange={(e) => setShippingInfo({...shippingInfo, instructions: e.target.value})}
                          placeholder="Ej: Dejar con el portero, tocar timbre 2 veces..."
                          className="border-sand focus:border-terracotta"
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Shipping Options */}
                  <div>
                    <h3 className="font-semibold text-deep-brown mb-4">Método de Envío</h3>
                    <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                      {shippingOptions.map((option) => (
                        <div key={option.id} className="flex items-center space-x-3 p-4 border border-sand rounded-lg hover:border-terracotta/50 transition-colors">
                          <RadioGroupItem value={option.id} id={option.id} />
                          <div className="flex-1 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <option.icon className="w-5 h-5 text-terracotta" />
                              <div>
                                <Label htmlFor={option.id} className="font-medium text-deep-brown cursor-pointer">
                                  {option.name}
                                </Label>
                                <p className="text-sm text-gray-600">{option.description}</p>
                              </div>
                            </div>
                            <span className="font-semibold text-deep-brown">
                              {option.price === 0 ? "Gratis" : `S/ ${option.price}`}
                            </span>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Payment Information */}
            {currentStep === "payment" && (
              <Card className="border-sand/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-deep-brown">
                    <CreditCard className="w-5 h-5" />
                    Método de Pago
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Payment Methods */}
                  <div>
                    <h3 className="font-semibold text-deep-brown mb-4">Selecciona tu método de pago</h3>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      {paymentMethods.map((method) => (
                        <div key={method.id} className="flex items-center space-x-3 p-4 border border-sand rounded-lg hover:border-terracotta/50 transition-colors">
                          <RadioGroupItem value={method.id} id={method.id} />
                          <div className="flex items-center gap-3">
                            {method.icon && (
                              <method.icon className="w-5 h-5 text-terracotta" />
                            )}
                            <div>
                              <Label htmlFor={method.id} className="font-medium text-deep-brown cursor-pointer">
                                {method.name}
                              </Label>
                              <p className="text-sm text-gray-600">{method.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Card Payment Form */}
                  {paymentMethod === "card" && (
                    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-deep-brown">Información de la Tarjeta</h4>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cardName">Nombre en la Tarjeta *</Label>
                          <Input
                            id="cardName"
                            value={cardInfo.name}
                            onChange={(e) => setCardInfo({...cardInfo, name: e.target.value})}
                            placeholder="Como aparece en la tarjeta"
                            className="border-sand focus:border-terracotta"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cardNumber">Número de Tarjeta *</Label>
                          <Input
                            id="cardNumber"
                            value={cardInfo.number}
                            onChange={(e) => setCardInfo({...cardInfo, number: formatCardNumber(e.target.value)})}
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                            className="border-sand focus:border-terracotta"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="cardExpiry">Fecha de Vencimiento *</Label>
                            <Input
                              id="cardExpiry"
                              value={cardInfo.expiry}
                              onChange={(e) => setCardInfo({...cardInfo, expiry: e.target.value})}
                              placeholder="MM/AA"
                              maxLength={5}
                              className="border-sand focus:border-terracotta"
                            />
                          </div>
                          <div>
                            <Label htmlFor="cardCvv">CVV *</Label>
                            <Input
                              id="cardCvv"
                              value={cardInfo.cvv}
                              onChange={(e) => setCardInfo({...cardInfo, cvv: e.target.value})}
                              placeholder="123"
                              maxLength={4}
                              className="border-sand focus:border-terracotta"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Alternative Payment Instructions */}
                  {paymentMethod !== "card" && (
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-deep-brown mb-2">Instrucciones de Pago</h4>
                      {paymentMethod === "yape" && (
                        <p className="text-sm text-gray-600">
                          Después de confirmar tu pedido, recibirás un código QR para realizar el pago con Yape.
                        </p>
                      )}
                      {paymentMethod === "plin" && (
                        <p className="text-sm text-gray-600">
                          Te enviaremos los datos bancarios para realizar la transferencia con Plin.
                        </p>
                      )}
                      {paymentMethod === "bank" && (
                        <p className="text-sm text-gray-600">
                          Recibirás los datos de nuestra cuenta bancaria para realizar la transferencia.
                        </p>
                      )}
                    </div>
                  )}

                  <Separator />

                  {/* Billing Address */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox
                        id="sameAsShipping"
                        checked={billingInfo.sameAsShipping}
                        onCheckedChange={(checked) => setBillingInfo({...billingInfo, sameAsShipping: checked as boolean})}
                      />
                      <Label htmlFor="sameAsShipping" className="text-sm">
                        La dirección de facturación es la misma que la de envío
                      </Label>
                    </div>

                    {!billingInfo.sameAsShipping && (
                      <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-deep-brown">Dirección de Facturación</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="billingFirstName">Nombres *</Label>
                            <Input
                              id="billingFirstName"
                              value={billingInfo.firstName}
                              onChange={(e) => setBillingInfo({...billingInfo, firstName: e.target.value})}
                              className="border-sand focus:border-terracotta"
                            />
                          </div>
                          <div>
                            <Label htmlFor="billingLastName">Apellidos *</Label>
                            <Input
                              id="billingLastName"
                              value={billingInfo.lastName}
                              onChange={(e) => setBillingInfo({...billingInfo, lastName: e.target.value})}
                              className="border-sand focus:border-terracotta"
                            />
                          </div>
                        </div>
                        {/* Add more billing fields as needed */}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Order Review */}
            {currentStep === "review" && (
              <div className="space-y-6">
                {/* Shipping Information Review */}
                <Card className="border-sand/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-deep-brown">
                      <MapPin className="w-5 h-5" />
                      Información de Envío
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-medium">{shippingInfo.firstName} {shippingInfo.lastName}</p>
                      <p className="text-gray-600">{shippingInfo.address}</p>
                      <p className="text-gray-600">{shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}</p>
                      <p className="text-gray-600">{shippingInfo.phone}</p>
                      <p className="text-gray-600">{shippingInfo.email}</p>
                      {shippingInfo.instructions && (
                        <p className="text-sm text-gray-500 mt-2">
                          <strong>Instrucciones:</strong> {shippingInfo.instructions}
                        </p>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentStep("shipping")}
                      className="mt-4"
                    >
                      Editar
                    </Button>
                  </CardContent>
                </Card>

                {/* Payment Method Review */}
                <Card className="border-sand/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-deep-brown">
                      <CreditCard className="w-5 h-5" />
                      Método de Pago
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      {(() => {
                        const Icon = paymentMethods.find(m => m.id === paymentMethod)?.icon
                        return Icon ? <Icon className="w-5 h-5 text-terracotta" /> : null
                      })()}
                      <div>
                        <p className="font-medium">{paymentMethods.find(m => m.id === paymentMethod)?.name}</p>
                        {paymentMethod === "card" && cardInfo.number && (
                          <p className="text-sm text-gray-600">**** **** **** {cardInfo.number.slice(-4)}</p>
                        )}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentStep("payment")}
                      className="mt-4"
                    >
                      Editar
                    </Button>
                  </CardContent>
                </Card>

                {/* Terms and Conditions */}
                <Card className="border-sand/20">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-sm leading-relaxed">
                          Acepto los{" "}
                          <Link href="/terms" className="text-terracotta hover:underline">
                            términos y condiciones
                          </Link>{" "}
                          y la{" "}
                          <Link href="/privacy" className="text-terracotta hover:underline">
                            política de privacidad
                          </Link>
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="newsletter" />
                        <Label htmlFor="newsletter" className="text-sm">
                          Quiero recibir ofertas especiales y novedades por email
                        </Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              {currentStep !== "shipping" && (
                <Button
                  variant="outline"
                  onClick={() => {
                    if (currentStep === "payment") setCurrentStep("shipping")
                    if (currentStep === "review") setCurrentStep("payment")
                  }}
                  className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white"
                >
                  Anterior
                </Button>
              )}
              
              {currentStep !== "review" ? (
                <Button
                  onClick={handleNextStep}
                  className="bg-terracotta hover:bg-terracotta/90 ml-auto"
                >
                  Continuar
                </Button>
              ) : (
                <Button
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                  className="bg-terracotta hover:bg-terracotta/90 ml-auto"
                  size="lg"
                >
                  {isProcessing ? "Procesando..." : "Confirmar Pedido"}
                </Button>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="space-y-6">
            <Card className="border-sand/20 sticky top-4">
              <CardHeader>
                <CardTitle className="text-deep-brown">Resumen del Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Cart Items */}
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="w-15 h-15 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm text-deep-brown">{item.name}</h4>
                        <p className="text-xs text-gray-600">por {item.artisan}</p>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-gray-600">Qty: {item.quantity}</span>
                          <span className="font-medium text-sm">S/ {(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Pricing Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">S/ {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Envío</span>
                    <span className="font-medium">
                      {shippingCost === 0 ? "Gratis" : `S/ ${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Comision (3%)</span>
                    <span className="font-medium">S/ {tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-deep-brown">Total</span>
                    <span className="text-deep-brown">S/ {total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Security Badges */}
                <div className="space-y-2 pt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="w-4 h-4 text-sage-green" />
                    <span>Pago 100% seguro</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-sage-green" />
                    <span>Garantía de satisfacción</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Truck className="w-4 h-4 text-sage-green" />
                    <span>Envío asegurado</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Help Card */}
            <Card className="border-sand/20">
              <CardContent className="p-4">
                <h4 className="font-semibold text-deep-brown mb-2">¿Necesitas ayuda?</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>+51 1 234-5678</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>ayuda@artesanosperu.com</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Lunes a Viernes: 9:00 AM - 6:00 PM
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
