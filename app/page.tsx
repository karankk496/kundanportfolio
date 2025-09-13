import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ServicesSection } from "@/components/services-section"
// import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <CertificationsSection />
      <ServicesSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
    </main>
  )
}
