"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Camera,
  Upload,
  FileText,
  Store,
  Palette,
  Award,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Star,
  Heart,
  Users,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const STEPS = [
  { id: 1, title: "Información Personal", description: "Datos básicos y contacto" },
  { id: 2, title: "Información Artesanal", description: "Especialidad y experiencia" },
  { id: 3, title: "Documentación", description: "Verificación y certificados" },
  { id: 4, title: "Configuración de Tienda", description: "Perfil público" },
  { id: 5, title: "Revisión Final", description: "Confirmar información" },
]

const SPECIALTIES = [
  "Textiles Tradicionales",
  "Cerámica y Alfarería",
  "Joyería",
  "Tallado en Madera",
  "Pintura y Arte",
  "Cuero y Marroquinería",
  "Instrumentos Musicales",
  "Bordados",
  "Tejidos",
  "Retablos",
  "Otros",
]

const EXPERIENCE_LEVELS = [
  { value: "beginner", label: "Principiante (0-2 años)" },
  { value: "intermediate", label: "Intermedio (3-5 años)" },
  { value: "advanced", label: "Avanzado (6-10 años)" },
  { value: "expert", label: "Experto (11-15 años)" },
  { value: "master", label: "Maestro Artesano (15+ años)" },
]

const REGIONS = [
  "Lima",
  "Cusco",
  "Arequipa",
  "Ayacucho",
  "Huancavelica",
  "Apurímac",
  "Puno",
  "Junín",
  "Huánuco",
  "Cajamarca",
  "Otros",
]

export default function RegisterArtisanPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Paso 1: Información Personal
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dni: "",
    birthDate: "",
    address: "",
    region: "",
    city: "",

    // Paso 2: Información Artesanal
    specialties: [] as string[],
    experienceLevel: "",
    yearsExperience: "",
    artisanStory: "",
    techniques: "",
    materials: "",

    // Paso 3: Documentación
    profilePhoto: null as File | null,
    coverPhoto: null as File | null,
    portfolioImages: [] as File[],
    dniDocument: null as File | null,
    certificates: [] as File[],

    // Paso 4: Configuración de Tienda
    shopName: "",
    shopDescription: "",
    instagram: "",
    facebook: "",
    website: "",
    paymentMethods: [] as string[],
    shippingInfo: "",

    // Términos
    acceptTerms: false,
    acceptPrivacy: false,
  })

  const { toast } = useToast()

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSpecialtyToggle = (specialty: string) => {
    setFormData((prev) => ({
      ...prev,
      specialties: prev.specialties.includes(specialty)
        ? prev.specialties.filter((s) => s !== specialty)
        : [...prev.specialties, specialty],
    }))
  }

  const handleFileUpload = (field: string, files: FileList | null) => {
    if (!files) return

    if (field === "portfolioImages" || field === "certificates") {
      const fileArray = Array.from(files)
      setFormData((prev) => ({ ...prev, [field]: fileArray }))
    } else {
      setFormData((prev) => ({ ...prev, [field]: files[0] }))
    }
  }

  const nextStep = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    toast({
      title: "¡Solicitud Enviada!",
      description: "Tu solicitud ha sido enviada. Te contactaremos en 24-48 horas.",
    })
    // Redirect to success page
    window.location.href = "/register-artisan/success"
  }

  const progress = (currentStep / STEPS.length) * 100

  return (
    <div className="min-h-screen bg-sand/20 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-terracotta rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Palette className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-deep-brown mb-2">Únete como Artesano</h1>
          <p className="text-gray-600">Comparte tu arte con el mundo y forma parte de nuestra comunidad</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {STEPS.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step.id ? "bg-terracotta text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {currentStep > step.id ? <CheckCircle className="w-4 h-4" /> : step.id}
                </div>
                <div className="text-center mt-2">
                  <p className="text-xs font-medium text-deep-brown">{step.title}</p>
                  <p className="text-xs text-gray-500 hidden sm:block">{step.description}</p>
                </div>
                {index < STEPS.length - 1 && (
                  <div
                    className={`hidden sm:block absolute h-0.5 w-full top-4 left-1/2 ${
                      currentStep > step.id ? "bg-terracotta" : "bg-gray-200"
                    }`}
                    style={{ zIndex: -1 }}
                  />
                )}
              </div>
            ))}
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Form Content */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-deep-brown">{STEPS[currentStep - 1].title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Paso 1: Información Personal */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-2">Nombres *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="pl-10"
                        placeholder="Tus nombres"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-2">Apellidos *</label>
                    <Input
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Tus apellidos"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-2">Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pl-10"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-2">Teléfono *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="pl-10"
                        placeholder="+51 987 654 321"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-2">DNI *</label>
                    <Input
                      value={formData.dni}
                      onChange={(e) => handleInputChange("dni", e.target.value)}
                      placeholder="12345678"
                      maxLength={8}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-2">Fecha de Nacimiento *</label>
                    <Input
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => handleInputChange("birthDate", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-brown mb-2">Dirección *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                    <Textarea
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      className="pl-10"
                      placeholder="Dirección completa de tu domicilio"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-2">Región *</label>
                    <Select value={formData.region} onValueChange={(value) => handleInputChange("region", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu región" />
                      </SelectTrigger>
                      <SelectContent>
                        {REGIONS.map((region) => (
                          <SelectItem key={region} value={region}>
                            {region}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-2">Ciudad *</label>
                    <Input
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="Tu ciudad"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Paso 2: Información Artesanal */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-deep-brown mb-3">
                    Especialidades Artesanales * (Selecciona todas las que apliquen)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {SPECIALTIES.map((specialty) => (
                      <div
                        key={specialty}
                        onClick={() => handleSpecialtyToggle(specialty)}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          formData.specialties.includes(specialty)
                            ? "border-terracotta bg-terracotta/10 text-terracotta"
                            : "border-gray-200 hover:border-terracotta/50"
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <Checkbox checked={formData.specialties.includes(specialty)} readOnly />
                          <span className="text-sm font-medium">{specialty}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-2">Nivel de Experiencia *</label>
                    <Select
                      value={formData.experienceLevel}
                      onValueChange={(value) => handleInputChange("experienceLevel", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu nivel" />
                      </SelectTrigger>
                      <SelectContent>
                        {EXPERIENCE_LEVELS.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-2">Años de Experiencia *</label>
                    <Input
                      type="number"
                      value={formData.yearsExperience}
                      onChange={(e) => handleInputChange("yearsExperience", e.target.value)}
                      placeholder="Ej: 5"
                      min="0"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-brown mb-2">Tu Historia como Artesano *</label>
                  <Textarea
                    value={formData.artisanStory}
                    onChange={(e) => handleInputChange("artisanStory", e.target.value)}
                    placeholder="Cuéntanos cómo comenzaste en el mundo artesanal, qué te inspira, y cuál es tu filosofía..."
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-brown mb-2">Técnicas que Dominas *</label>
                  <Textarea
                    value={formData.techniques}
                    onChange={(e) => handleInputChange("techniques", e.target.value)}
                    placeholder="Ej: Tejido en telar, teñido natural, bordado a mano..."
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-brown mb-2">Materiales que Utilizas *</label>
                  <Textarea
                    value={formData.materials}
                    onChange={(e) => handleInputChange("materials", e.target.value)}
                    placeholder="Ej: Lana de alpaca, algodón orgánico, tintes naturales..."
                    rows={3}
                    required
                  />
                </div>
              </div>
            )}

            {/* Paso 3: Documentación */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-2">Foto de Perfil *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-terracotta transition-colors">
                      <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Sube tu foto de perfil</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload("profilePhoto", e.target.files)}
                        className="hidden"
                        id="profile-photo"
                      />
                      <Button asChild variant="outline" size="sm">
                        <label htmlFor="profile-photo" className="cursor-pointer">
                          <Upload className="w-4 h-4 mr-2" />
                          Seleccionar Archivo
                        </label>
                      </Button>
                      {formData.profilePhoto && (
                        <p className="text-xs text-green-600 mt-2">✓ {formData.profilePhoto.name}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-2">Foto de Portada</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-terracotta transition-colors">
                      <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Imagen para tu tienda</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload("coverPhoto", e.target.files)}
                        className="hidden"
                        id="cover-photo"
                      />
                      <Button asChild variant="outline" size="sm">
                        <label htmlFor="cover-photo" className="cursor-pointer">
                          <Upload className="w-4 h-4 mr-2" />
                          Seleccionar Archivo
                        </label>
                      </Button>
                      {formData.coverPhoto && (
                        <p className="text-xs text-green-600 mt-2">✓ {formData.coverPhoto.name}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-brown mb-2">
                    Portfolio de Trabajos * (Máximo 10 imágenes)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-terracotta transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Muestra tus mejores trabajos</p>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handleFileUpload("portfolioImages", e.target.files)}
                      className="hidden"
                      id="portfolio-images"
                    />
                    <Button asChild variant="outline">
                      <label htmlFor="portfolio-images" className="cursor-pointer">
                        <Upload className="w-4 h-4 mr-2" />
                        Seleccionar Imágenes
                      </label>
                    </Button>
                    {formData.portfolioImages.length > 0 && (
                      <p className="text-xs text-green-600 mt-2">
                        ✓ {formData.portfolioImages.length} imagen(es) seleccionada(s)
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-brown mb-2">
                    Documento de Identidad (DNI) *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-terracotta transition-colors">
                    <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Foto clara de tu DNI</p>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileUpload("dniDocument", e.target.files)}
                      className="hidden"
                      id="dni-document"
                    />
                    <Button asChild variant="outline" size="sm">
                      <label htmlFor="dni-document" className="cursor-pointer">
                        <Upload className="w-4 h-4 mr-2" />
                        Subir DNI
                      </label>
                    </Button>
                    {formData.dniDocument && (
                      <p className="text-xs text-green-600 mt-2">✓ {formData.dniDocument.name}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-brown mb-2">
                    Certificados y Reconocimientos (Opcional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-terracotta transition-colors">
                    <Award className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Certificados, premios, reconocimientos</p>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      multiple
                      onChange={(e) => handleFileUpload("certificates", e.target.files)}
                      className="hidden"
                      id="certificates"
                    />
                    <Button asChild variant="outline" size="sm">
                      <label htmlFor="certificates" className="cursor-pointer">
                        <Upload className="w-4 h-4 mr-2" />
                        Subir Certificados
                      </label>
                    </Button>
                    {formData.certificates.length > 0 && (
                      <p className="text-xs text-green-600 mt-2">
                        ✓ {formData.certificates.length} archivo(s) seleccionado(s)
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Paso 4: Configuración de Tienda */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-deep-brown mb-2">Nombre de tu Tienda *</label>
                  <div className="relative">
                    <Store className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      value={formData.shopName}
                      onChange={(e) => handleInputChange("shopName", e.target.value)}
                      className="pl-10"
                      placeholder="Ej: Artesanías María, Tejidos Andinos..."
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-brown mb-2">Descripción de tu Tienda *</label>
                  <Textarea
                    value={formData.shopDescription}
                    onChange={(e) => handleInputChange("shopDescription", e.target.value)}
                    placeholder="Describe tu tienda, qué productos ofreces, tu estilo único..."
                    rows={4}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-2">Instagram</label>
                    <Input
                      value={formData.instagram}
                      onChange={(e) => handleInputChange("instagram", e.target.value)}
                      placeholder="@tu_usuario"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-2">Facebook</label>
                    <Input
                      value={formData.facebook}
                      onChange={(e) => handleInputChange("facebook", e.target.value)}
                      placeholder="Tu página de Facebook"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-brown mb-2">Sitio Web</label>
                    <Input
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      placeholder="www.tusitio.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-brown mb-3">Métodos de Pago que Aceptas</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["Yape", "Plin", "Transferencia", "Efectivo"].map((method) => (
                      <div
                        key={method}
                        onClick={() => {
                          const methods = formData.paymentMethods.includes(method)
                            ? formData.paymentMethods.filter((m) => m !== method)
                            : [...formData.paymentMethods, method]
                          handleInputChange("paymentMethods", methods)
                        }}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          formData.paymentMethods.includes(method)
                            ? "border-terracotta bg-terracotta/10 text-terracotta"
                            : "border-gray-200 hover:border-terracotta/50"
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <Checkbox checked={formData.paymentMethods.includes(method)} readOnly />
                          <span className="text-sm font-medium">{method}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-brown mb-2">Información de Envíos</label>
                  <Textarea
                    value={formData.shippingInfo}
                    onChange={(e) => handleInputChange("shippingInfo", e.target.value)}
                    placeholder="Describe tus políticas de envío, tiempos de entrega, costos..."
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Paso 5: Revisión Final */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="bg-sage-green/10 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-deep-brown mb-4">Resumen de tu Solicitud</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-deep-brown mb-2">Información Personal</h4>
                      <p className="text-sm text-gray-600">
                        {formData.firstName} {formData.lastName}
                      </p>
                      <p className="text-sm text-gray-600">{formData.email}</p>
                      <p className="text-sm text-gray-600">{formData.phone}</p>
                      <p className="text-sm text-gray-600">
                        {formData.region}, {formData.city}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-deep-brown mb-2">Información Artesanal</h4>
                      <p className="text-sm text-gray-600">
                        <strong>Especialidades:</strong> {formData.specialties.join(", ")}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Experiencia:</strong> {formData.yearsExperience} años
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Tienda:</strong> {formData.shopName}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-deep-brown mb-4">¿Qué sigue?</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-terracotta rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-medium text-deep-brown">Revisión de Solicitud</p>
                        <p className="text-sm text-gray-600">Nuestro equipo revisará tu solicitud en 24-48 horas</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-terracotta rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-medium text-deep-brown">Verificación</p>
                        <p className="text-sm text-gray-600">Verificaremos tu documentación e información</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-terracotta rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-medium text-deep-brown">Activación</p>
                        <p className="text-sm text-gray-600">
                          Te enviaremos las credenciales para acceder a tu dashboard
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => handleInputChange("acceptTerms", checked)}
                      required
                    />
                    <div className="text-sm">
                      <p className="text-gray-700">
                        Acepto los{" "}
                        <Link href="/terms" className="text-terracotta hover:underline">
                          Términos y Condiciones
                        </Link>{" "}
                        para artesanos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      checked={formData.acceptPrivacy}
                      onCheckedChange={(checked) => handleInputChange("acceptPrivacy", checked)}
                      required
                    />
                    <div className="text-sm">
                      <p className="text-gray-700">
                        Acepto la{" "}
                        <Link href="/privacy" className="text-terracotta hover:underline">
                          Política de Privacidad
                        </Link>{" "}
                        y el tratamiento de mis datos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center space-x-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </Button>

              {currentStep < STEPS.length ? (
                <Button onClick={nextStep} className="bg-terracotta hover:bg-terracotta/90 flex items-center space-x-2">
                  <span>Siguiente</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.acceptTerms || !formData.acceptPrivacy}
                  className="bg-terracotta hover:bg-terracotta/90 flex items-center space-x-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Enviar Solicitud</span>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-terracotta" />
            </div>
            <h3 className="font-semibold text-deep-brown mb-2">Comunidad Global</h3>
            <p className="text-sm text-gray-600">Conecta con clientes de todo el mundo</p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-12 h-12 bg-sage-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-sage-green" />
            </div>
            <h3 className="font-semibold text-deep-brown mb-2">Herramientas Profesionales</h3>
            <p className="text-sm text-gray-600">Dashboard completo para gestionar tu negocio</p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-semibold text-deep-brown mb-2">Comisión Justa</h3>
            <p className="text-sm text-gray-600">Solo 8% de comisión por venta</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
