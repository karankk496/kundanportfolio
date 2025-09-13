import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "Exceptional work on our dream home design. The attention to detail and structural expertise exceeded our expectations.",
    rating: 5,
    image: "/professional-woman-headshot.png",
  },
  {
    name: "Michael Chen",
    role: "Property Developer",
    content:
      "Outstanding structural solutions for our commercial project. Professional, timely, and innovative approach to complex challenges.",
    rating: 5,
    image: "/professional-man-headshot.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Architect",
    content:
      "Collaborative and skilled engineer who brings creative solutions to structural challenges. Highly recommended for any project.",
    rating: 5,
    image: "/professional-woman-architect.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              What clients say about working with me on their projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-all duration-300 animate-scale-in">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-4">Ready to start your project?</p>
            <p className="text-sm text-muted-foreground">Join our satisfied clients and bring your vision to life</p>
          </div>
        </div>
      </div>
    </section>
  )
}
