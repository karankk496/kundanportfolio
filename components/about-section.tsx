import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Users, Lightbulb, BookOpen, Code, Ruler, Building2, Hammer, HardHat, Home, RulerIcon } from "lucide-react"
import Image from "next/image"
import { Badge } from "./ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Passionate Civil Engineer with expertise in structural design and architectural creativity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">

              <p className="text-lg text-foreground leading-relaxed text-justify">
                Hello! I'm <strong>Kundan Kumar</strong>, a dedicated Civil Engineer with a Diploma and B.E degree in Civil Engineering. I
                specialize in creating innovative structural solutions that seamlessly blend functionality with
                aesthetic appeal. Skilled in 2D drafting and 3D modelling of residential and commercial buildings using AutoCAD, Revit, Civil 3D, STAAD.Pro and SketchUp Pro. My journey in engineering has been driven by a passion for transforming architectural
                visions into structurally sound realities.
              </p>
              
              {/* Education Section */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-foreground">
                  <BookOpen className="h-5 w-5 mr-2 text-primary" />
                  Education
                </h3>
                <div className="space-y-6 pl-2">
                  <div className="border-l-2 border-primary/20 pl-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                      <h4 className="font-medium text-foreground">Bachelor of Engineering, Civil Engineering</h4>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">Oct 2023 - Present</span>
                    </div>
                    <p className="text-muted-foreground">Vivekananda College of Engineering & Technology, Mangalore, Puttur</p>
                    <p className="text-sm text-muted-foreground">Under VTU | CGPA: 8.15</p>
                  </div>
                  <div className="border-l-2 border-primary/20 pl-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                      <h4 className="font-medium text-foreground">Diploma in Civil Engineering</h4>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">Nov 2020 – Aug 2023</span>
                    </div>
                    <p className="text-muted-foreground">Vivekananda College of Engineering & Technology, Mangalore, Puttur</p>
                    <p className="text-sm text-muted-foreground">CGPA: 9.0</p>
                  </div>
                </div>
              </div>

              {/* Skills & Tools */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-foreground">
                  <Code className="h-5 w-5 mr-2 text-primary" />
                  Technical Skills & Tools
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2 flex items-center">
                      <Ruler className="h-4 w-4 mr-2 text-primary" />
                      CAD & 3D Modeling
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-sm">AutoCAD</Badge>
                      <Badge variant="secondary" className="text-sm">Civil 3D</Badge>
                      <Badge variant="secondary" className="text-sm">Revit Architecture</Badge>
                      <Badge variant="secondary" className="text-sm">SketchUp Pro</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2 flex items-center">
                      <Building2 className="h-4 w-4 mr-2 text-primary" />
                      Structural Engineering
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-sm">STAAD Pro</Badge>
                      <Badge variant="secondary" className="text-sm">ETABS</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2 text-primary">
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <line x1="2" x2="22" y1="10" y2="10" />
                      </svg>
                      Project Management
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-sm">Primavera P6</Badge>
                      <Badge variant="secondary" className="text-sm">MS Excel</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2 text-primary">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" x2="9.01" y1="9" y2="9" />
                        <line x1="15" x2="15.01" y1="9" y2="9" />
                      </svg>
                      Rendering
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-sm">V-Ray</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2 flex items-center">
                      <Hammer className="h-4 w-4 mr-2 text-primary" />
                      Construction Management
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-sm">MS Project</Badge>
                      <Badge variant="secondary" className="text-sm">Primavera P6</Badge>
                      <Badge variant="secondary" className="text-sm">AutoCAD Civil 3D</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="animate-scale-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Internship Experience</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary/20 pl-4">
                      <h4 className="font-medium text-foreground">Civil Engineering Intern</h4>
                      <p className="text-muted-foreground">Sri Durga Structural Consultancy, Mangalore, Puttur</p>
                      <p className="text-sm text-muted-foreground">March 2023 – May 2023</p>
                      <ul className="list-disc pl-5 mt-2 space-y-2 text-muted-foreground">
                        <li>Gained hands-on experience in structural detailing and drafting of RCC and steel-framed structures</li>
                        <li>Created precise 2D and 3D building drawings using AutoCAD, Revit Architecture, STAAD.Pro, SketchUp Pro, and V-Ray</li>
                        <li>Prepared GADs, reinforcement details, and layouts for footings, beams, columns, plinth beams, slabs, and foundations</li>
                        <li>Collaborated with structural engineers to understand load paths, framing systems, and connection detailing</li>
                        <li>Applied IS codes (IS 456, IS 800) and participated in site visits to align drawings with real-world construction practices</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
