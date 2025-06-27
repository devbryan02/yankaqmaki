import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, TrendingUp, Users, Zap, Shield } from "lucide-react"
import Link from "next/link"

export function BenefitsSection() {
  const plans = [
    {
      name: "Básico",
      price: "Gratis",
      description: "Perfecto para comenzar",
      features: ["Hasta 10 productos", "Perfil básico", "Soporte por email", "Comisión 15%"],
      icon: Users,
      color: "bg-gray-100",
      textColor: "text-gray-600",
    },
    {
      name: "Emprendedor",
      price: "S/ 29",
      period: "/mes",
      description: "Para artesanos en crecimiento",
      features: [
        "Hasta 50 productos",
        "2 productos destacados",
        "Estadísticas básicas",
        "Soporte prioritario",
        "Comisión 12%",
      ],
      icon: TrendingUp,
      color: "bg-terracotta/10",
      textColor: "text-terracotta",
      popular: true,
    },
    {
      name: "Profesional",
      price: "S/ 59",
      period: "/mes",
      description: "Para maestros artesanos",
      features: [
        "Productos ilimitados",
        "5 productos destacados",
        "Estadísticas avanzadas",
        "Soporte 24/7",
        "Comisión 10%",
        "Talleres ilimitados",
        "Badge verificado",
      ],
      icon: Star,
      color: "bg-sage-green/10",
      textColor: "text-sage-green",
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Visibilidad Máxima",
      description: "Destaca tus productos en nuestra plataforma y llega a miles de clientes potenciales.",
    },
    {
      icon: Shield,
      title: "Pagos Seguros",
      description: "Procesamos todos los pagos de forma segura y te transferimos directamente.",
    },
    {
      icon: Users,
      title: "Comunidad Activa",
      description: "Únete a una red de artesanos que se apoyan mutuamente y comparten conocimientos.",
    },
    {
      icon: TrendingUp,
      title: "Crecimiento Garantizado",
      description: "Herramientas y recursos para hacer crecer tu negocio artesanal.",
    },
  ]

  return (
    <section className="py-20 bg-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-4">Beneficios para Artesanos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Únete a nuestra comunidad y accede a herramientas diseñadas específicamente para hacer crecer tu negocio
            artesanal.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-sand/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-terracotta/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-terracotta" />
                </div>
                <h4 className="font-semibold text-deep-brown mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Plans */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-deep-brown text-center mb-8">Planes Premium</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-sand/20 hover:shadow-lg transition-shadow ${plan.popular ? "ring-2 ring-terracotta" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-terracotta">
                    Más Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 ${plan.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className={`w-6 h-6 ${plan.textColor}`} />
                  </div>
                  <CardTitle className="text-deep-brown">{plan.name}</CardTitle>
                  <div className="text-2xl font-bold text-deep-brown">
                    {plan.price}
                    {plan.period && <span className="text-sm font-normal text-gray-500">{plan.period}</span>}
                  </div>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-sage-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full ${plan.popular ? "bg-terracotta hover:bg-terracotta/90" : "bg-deep-brown hover:bg-deep-brown/90"}`}
                  >
                    <Link href="/register-artisan">{plan.price === "Gratis" ? "Comenzar Gratis" : "Elegir Plan"}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta/90">
            <Link href="/register-artisan">Comenzar Ahora - Es Gratis</Link>
          </Button>
          <p className="text-sm text-gray-500 mt-2">Sin compromisos. Cancela cuando quieras.</p>
        </div>
      </div>
    </section>
  )
}
