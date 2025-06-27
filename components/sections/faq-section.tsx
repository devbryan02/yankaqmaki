import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "¿Cómo puedo registrarme como artesano?",
      answer:
        "El registro es muy sencillo. Haz clic en 'Ser Artesano' en la parte superior de la página, completa el formulario con tus datos y información sobre tu arte. Nuestro equipo revisará tu solicitud en 24-48 horas y te contactaremos para activar tu cuenta.",
    },
    {
      question: "¿Qué comisión cobran por las ventas?",
      answer:
        "Nuestras comisiones varían según tu plan: Plan Básico (15%), Plan Emprendedor (12%), y Plan Profesional (10%). Estas comisiones cubren el procesamiento de pagos, hosting, marketing y soporte técnico.",
    },
    {
      question: "¿Cómo recibo mis pagos?",
      answer:
        "Los pagos se procesan semanalmente y se transfieren directamente a tu cuenta bancaria o billetera digital. Aceptamos cuentas de bancos peruanos, Yape, Plin y PayPal para artesanos internacionales.",
    },
    {
      question: "¿Puedo vender productos físicos y ofrecer talleres?",
      answer:
        "¡Por supuesto! Nuestra plataforma te permite vender productos físicos y ofrecer talleres tanto presenciales como virtuales. Puedes gestionar todo desde tu dashboard de artesano.",
    },
    {
      question: "¿Qué tipo de productos puedo vender?",
      answer:
        "Aceptamos todas las formas de artesanía peruana auténtica: textiles, cerámica, joyería, tallados en madera, instrumentos musicales, arte decorativo, y más. Todos los productos deben ser hechos a mano y de origen peruano.",
    },
    {
      question: "¿Ofrecen soporte para fotografía de productos?",
      answer:
        "Sí, ofrecemos guías detalladas para fotografía de productos y, para artesanos con plan Profesional, sesiones de consultoría gratuitas para mejorar la presentación de sus productos.",
    },
    {
      question: "¿Cómo funciona el envío de productos?",
      answer:
        "Trabajamos con múltiples empresas de courier tanto nacionales como internacionales. Los costos de envío se calculan automáticamente según el destino. Para envíos internacionales, manejamos toda la documentación necesaria.",
    },
    {
      question: "¿Puedo cambiar de plan en cualquier momento?",
      answer:
        "Sí, puedes actualizar o cambiar tu plan en cualquier momento desde tu dashboard. Los cambios se aplican inmediatamente y solo pagas la diferencia prorrateada.",
    },
  ]

  return (
    <section className="py-20 bg-sand/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-brown mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-600">
            Encuentra respuestas a las preguntas más comunes sobre nuestra plataforma.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-sand/20 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-deep-brown hover:text-terracotta">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="text-center mt-12 p-8 bg-white rounded-lg border border-sand/20">
          <h3 className="text-xl font-semibold text-deep-brown mb-2">¿No encuentras la respuesta que buscas?</h3>
          <p className="text-gray-600 mb-4">Nuestro equipo de soporte está aquí para ayudarte.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:soporte@artesaniasdelperu.com"
              className="inline-flex items-center justify-center px-4 py-2 bg-terracotta text-white rounded-md hover:bg-terracotta/90 transition-colors"
            >
              Enviar Email
            </a>
            <a
              href="https://wa.me/51987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-sage-green text-white rounded-md hover:bg-sage-green/90 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
