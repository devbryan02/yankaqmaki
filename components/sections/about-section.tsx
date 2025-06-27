import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Globe, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-4">Nuestra Misión</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Preservamos y promovemos las tradiciones artesanales del Perú, conectando a maestros artesanos con el mundo
            y creando oportunidades económicas sostenibles para nuestras comunidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-deep-brown">Tradición que Trasciende Generaciones</h3>
            <p className="text-gray-600 leading-relaxed">
              Cada artesano en nuestra plataforma es guardián de técnicas ancestrales transmitidas de generación en
              generación. Desde los textiles de los Andes hasta la cerámica de la costa, cada pieza refleja siglos de
              sabiduría cultural.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nuestro compromiso va más allá del comercio: creamos un puente entre la tradición y la modernidad,
              asegurando que estas artes perduren para las futuras generaciones.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://portal.andina.pe/EDPfotografia3/Thumbnail/2021/03/19/000758650W.jpg"
              alt="Artesanos trabajando"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-sand/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-terracotta/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-terracotta" />
              </div>
              <h4 className="font-semibold text-deep-brown mb-2">Pasión</h4>
              <p className="text-sm text-gray-600">
                Cada pieza está hecha con amor y dedicación por artesanos apasionados.
              </p>
            </CardContent>
          </Card>

          <Card className="border-sand/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-sage-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-sage-green" />
              </div>
              <h4 className="font-semibold text-deep-brown mb-2">Comunidad</h4>
              <p className="text-sm text-gray-600">
                Fortalecemos las comunidades artesanales a través del comercio justo.
              </p>
            </CardContent>
          </Card>

          <Card className="border-sand/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-terracotta/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-terracotta" />
              </div>
              <h4 className="font-semibold text-deep-brown mb-2">Global</h4>
              <p className="text-sm text-gray-600">Llevamos la cultura peruana a todos los rincones del mundo.</p>
            </CardContent>
          </Card>

          <Card className="border-sand/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-sage-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-sage-green" />
              </div>
              <h4 className="font-semibold text-deep-brown mb-2">Calidad</h4>
              <p className="text-sm text-gray-600">Garantizamos la autenticidad y calidad de cada producto.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
