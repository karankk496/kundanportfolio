import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Cable as Cube, Home, RefreshCw } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "2D Home/Building Design",
    description:
      "I create detailed floor plans, elevations, and technical drawings for residential and commercial projects with precise measurements and specifications tailored to your needs.",
  },
  {
    icon: Cube,
    title: "3D Visualization & Modeling",
    description:
      "I provide photorealistic 3D renderings and virtual walkthroughs that bring your architectural vision to life, helping you visualize the final result before construction begins.",
  },
  {
    icon: Building2,
    title: "Structural Design & Analysis",
    description:
      "I offer comprehensive structural engineering solutions ensuring safety, efficiency, and compliance with building codes and regulations for all types of construction projects.",
  },
  {
    icon: RefreshCw,
    title: "Custom Design Solutions",
    description:
      "I specialize in personalized architectural designs tailored to your lifestyle, preferences, and site conditions, creating unique spaces that reflect your vision.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">What I Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive engineering and design solutions tailored to bring your construction projects to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-scale-in">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Steps */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-foreground mb-12">How I Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", desc: "Understanding your vision and project requirements" },
                { step: "02", title: "Design", desc: "Creating detailed plans and 3D visualizations" },
                { step: "03", title: "Review", desc: "Collaborative refinement and client approval" },
                { step: "04", title: "Delivery", desc: "Final drawings and complete documentation" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
