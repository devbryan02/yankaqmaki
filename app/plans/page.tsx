import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, TrendingUp, Users, Zap, Crown, Shield, BarChart } from "lucide-react"
import Link from "next/link"

export default function PlansPage() {
  const plans = [
    {
      name: "Básico",
      price: "Gratis",
      period: "",
      description: "Perfecto para comenzar tu journey artesanal",
      features: [
        "Hasta 10 productos",
        "Perfil básico de artesano",
        "Soporte por email",
        "Comisión del 15%",
        "Galería de fotos básica",
        "Estadísticas básicas",
      ],
      limitations: ["Sin productos destacados", "Sin talleres premium", "Sin badge verificado"],
      icon: Users,
      color: "bg-gray-100",
      textColor: "text-gray-600",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
      popular: false,
    },
    {
      name: "Emprendedor",
      price: "29",
      period: "/mes",
      description: "Para artesanos en crecimiento que buscan más visibilidad",
      features: [
        "Hasta 50 productos",
        "2 productos destacados por mes",
        "Perfil premium con galería extendida",
        "Estadísticas de ventas",
        "Soporte prioritario",
        "Comisión del 12%",
        "Talleres básicos ilimitados",
        "Promoción en redes sociales",
        "Herramientas de marketing básicas",
      ],
      limitations: ["Sin badge verificado premium", "Análisis limitados"],
      icon: TrendingUp,
      color: "bg-terracotta/10",
      textColor: "text-terracotta",
      buttonColor: "bg-terracotta hover:bg-terracotta/90",
      popular: true,
    },
    {
      name: "Profesional",
      price: "59",
      period: "/mes",
      description: "Para maestros artesanos que buscan maximizar su alcance",
      features: [
        "Productos ilimitados",
        "5 productos destacados por mes",
        "Perfil premium con video presentación",
        "Estadísticas avanzadas y análisis",
        "Soporte 24/7 dedicado",
        "Comisión del 10%",
        "Talleres premium ilimitados",
        "Badge verificado de maestro artesano",
        "Promoción prioritaria en la plataforma",
        "Herramientas de marketing avanzadas",
        "Acceso a eventos exclusivos",
        "Mentoring personalizado",
      ],
      limitations: [],
      icon: Crown,
      color: "bg-sage-green/10",
      textColor: "text-sage-green",
      buttonColor: "bg-sage-green hover:bg-sage-green/90",
      popular: false,
    },
  ]

  const features = [
    {
      icon: Zap,
      title: "Visibilidad Máxima",
      description: "Destaca tus productos y llega a miles de clientes potenciales en todo el mundo.",
    },
    {
      icon: Shield,
      title: "Pagos Seguros",
      description: "Procesamos todos los pagos de forma segura y te transferimos directamente a tu cuenta.",
    },
    {
      icon: BarChart,
      title: "Análisis Detallados",
      description: "Comprende mejor a tus clientes con estadísticas avanzadas de ventas y comportamiento.",
    },
    {
      icon: Users,
      title: "Comunidad Activa",
      description: "Únete a una red de artesanos que se apoyan mutuamente y comparten conocimientos.",
    },
  ]

  return (
    <div className="min-h-screen bg-sand/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-brown mb-4">Planes para Artesanos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan perfecto para hacer crecer tu negocio artesanal y llegar a más clientes
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-sand/20 hover:shadow-xl transition-all duration-300 ${
                plan.popular ? "ring-2 ring-terracotta scale-105" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-terracotta text-white">
                  Más Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className={`w-8 h-8 ${plan.textColor}`} />
                </div>
                <CardTitle className="text-2xl text-deep-brown">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-deep-brown mt-2">
                  {plan.price === "Gratis" ? (
                    "Gratis"
                  ) : (
                    <>
                      S/ {plan.price}
                      <span className="text-lg font-normal text-gray-500">{plan.period}</span>
                    </>
                  )}
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-deep-brown mb-3">Incluye:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-sage-green mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-deep-brown mb-3">No incluye:</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <li key={limitationIndex} className="flex items-start text-sm">
                          <span className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0 mt-0.5">×</span>
                          <span className="text-gray-500">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button asChild className={`w-full ${plan.buttonColor} text-white`} size="lg">
                  <Link href="/register-artisan">
                    {plan.price === "Gratis" ? "Comenzar Gratis" : `Elegir ${plan.name}`}
                  </Link>
                </Button>

                {plan.price !== "Gratis" && (
                  <p className="text-xs text-gray-500 text-center">Sin compromiso. Cancela cuando quieras.</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-deep-brown text-center mb-12">
            ¿Por qué elegir nuestros planes premium?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-sand/20 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-terracotta/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-terracotta" />
                  </div>
                  <h3 className="font-semibold text-deep-brown mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-deep-brown text-center mb-8">Comparación Detallada</h2>
          <Card className="border-sand/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-sand/30">
                  <tr>
                    <th className="text-left p-4 font-semibold text-deep-brown">Características</th>
                    <th className="text-center p-4 font-semibold text-deep-brown">Básico</th>
                    <th className="text-center p-4 font-semibold text-deep-brown">Emprendedor</th>
                    <th className="text-center p-4 font-semibold text-deep-brown">Profesional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-sand/20">
                    <td className="p-4 font-medium text-deep-brown">Número de productos</td>
                    <td className="p-4 text-center text-gray-600">10</td>
                    <td className="p-4 text-center text-gray-600">50</td>
                    <td className="p-4 text-center text-gray-600">Ilimitados</td>
                  </tr>
                  <tr className="border-b border-sand/20">
                    <td className="p-4 font-medium text-deep-brown">Productos destacados</td>
                    <td className="p-4 text-center text-gray-600">0</td>
                    <td className="p-4 text-center text-gray-600">2/mes</td>
                    <td className="p-4 text-center text-gray-600">5/mes</td>
                  </tr>
                  <tr className="border-b border-sand/20">
                    <td className="p-4 font-medium text-deep-brown">Comisión por venta</td>
                    <td className="p-4 text-center text-gray-600">15%</td>
                    <td className="p-4 text-center text-gray-600">12%</td>
                    <td className="p-4 text-center text-gray-600">10%</td>
                  </tr>
                  <tr className="border-b border-sand/20">
                    <td className="p-4 font-medium text-deep-brown">Talleres</td>
                    <td className="p-4 text-center text-gray-600">No</td>
                    <td className="p-4 text-center text-gray-600">Básicos</td>
                    <td className="p-4 text-center text-gray-600">Premium</td>
                  </tr>
                  <tr className="border-b border-sand/20">
                    <td className="p-4 font-medium text-deep-brown">Estadísticas</td>
                    <td className="p-4 text-center text-gray-600">Básicas</td>
                    <td className="p-4 text-center text-gray-600">Intermedias</td>
                    <td className="p-4 text-center text-gray-600">Avanzadas</td>
                  </tr>
                  <tr className="border-b border-sand/20">
                    <td className="p-4 font-medium text-deep-brown">Soporte</td>
                    <td className="p-4 text-center text-gray-600">Email</td>
                    <td className="p-4 text-center text-gray-600">Prioritario</td>
                    <td className="p-4 text-center text-gray-600">24/7 Dedicado</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-deep-brown">Badge verificado</td>
                    <td className="p-4 text-center text-gray-600">No</td>
                    <td className="p-4 text-center text-gray-600">No</td>
                    <td className="p-4 text-center text-sage-green">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-deep-brown text-center mb-8">Preguntas Frecuentes sobre Planes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-sand/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-deep-brown mb-2">¿Puedo cambiar de plan en cualquier momento?</h3>
                <p className="text-gray-600 text-sm">
                  Sí, puedes actualizar o cambiar tu plan cuando quieras. Los cambios se aplican inmediatamente y solo
                  pagas la diferencia prorrateada.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sand/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-deep-brown mb-2">¿Cómo funciona la comisión por ventas?</h3>
                <p className="text-gray-600 text-sm">
                  La comisión se descuenta automáticamente de cada venta. Incluye procesamiento de pagos, hosting,
                  marketing y soporte técnico.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sand/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-deep-brown mb-2">¿Qué incluye el soporte 24/7?</h3>
                <p className="text-gray-600 text-sm">
                  Acceso directo a nuestro equipo de soporte especializado, respuesta prioritaria y asistencia técnica
                  personalizada.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sand/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-deep-brown mb-2">¿Hay período de prueba gratuito?</h3>
                <p className="text-gray-600 text-sm">
                  Todos los planes premium incluyen 14 días de prueba gratuita. Puedes cancelar en cualquier momento sin
                  costo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-12 border border-sand/20">
          <h2 className="text-3xl font-bold text-deep-brown mb-4">¿Listo para hacer crecer tu negocio artesanal?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Únete a cientos de artesanos que ya están vendiendo sus productos y enseñando sus técnicas en nuestra
            plataforma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta/90">
              <Link href="/register-artisan">Comenzar Gratis</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-terracotta text-terracotta hover:bg-terracotta hover:text-white"
            >
              <Link href="/contact">Hablar con un Experto</Link>
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">Sin compromisos. Cancela cuando quieras. Soporte en español.</p>
        </div>
      </div>
    </div>
  )
}
