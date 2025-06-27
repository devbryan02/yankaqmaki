import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { FeaturedProducts } from "@/components/sections/featured-products"
import { FeaturedCourses } from "@/components/sections/featured-courses"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FAQSection } from "@/components/sections/faq-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <FeaturedProducts />
      <FeaturedCourses />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </div>
  )
}
