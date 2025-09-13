import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, Trophy, Star } from "lucide-react"
import Image from "next/image"

export function CertificationsSection() {
  const certifications = [
    {
      title: "BIM for Construction",
      issuer: "Medini Technologies",
      date: "2025",
      icon: Award,
      photo: "/course11.jpg",
    },
    {
      title: "AutoCAD 3D Certified Professional",
      issuer: "Infosys",
      date: "2023",
      icon: Trophy,
      photo: "/course1.jpg",
    },
    {
      title: "BIM for Construction",
      issuer: "Medini Technologies and Autodesk",
      date: "2024",
      icon: Star,
      photo: "/course3.jpg",
    },
    {
      title: "BIM Fundamentals for Engineers",
      issuer: "Coursera",
      date: "2023",
      icon: Award,
      photo: "/course4.jpg",
    },
    {
      title: "Renewable Energy and Green Building..",
      issuer: "Duke University - Coursera",
      date: "2023",
      icon: Award,
      photo: "/course8.jpg",
    },
    {
      title: "Autodesk Certified Professional",
      issuer: "AUTODESK - Coursera",
      date: "2023",
      icon: Award,
      photo: "/course5.jpg",
    },
    {
      title: "SketchUp - 3D Modeling",
      issuer: "Coursera",
      date: "2023",
      icon: Award,
      photo: "/course6.jpg",
    },
    {
      title: "Product Design",
      issuer: "Coursera",
      date: "2023",
      icon: Award,
      photo: "/course7.jpg",
    },
  ]

  const achievements = [
    {
      title: "Best Structural Design Award",
      organization: "VCET",
      year: "2023",
      description: "Won First Prize in Green House Building 2D Modelling Competition Organized by VCET",
      photo: "/best-structural-design-award-trophy.jpg",
    },
    {
      title: "Excellence in Civil Engineering",
      organization: "University",
      year: "2020-23",
      description: "Achieved 1st Rank consistently across all 6 semesters of Civil Engineering Diploma",
      photo: "/excellence-in-civil-engineering-award.jpg",
    },
    {
      title: "State Level Workshop",
      organization: "Elite Association, Dept. of Interior Design & Decoration",
      year: "2024",
      description: "Achieved State Level recognition in the workshop on Vastu Vinyasa",
      photo: "/achieve.png",
    },
    
  ]

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Certifications & Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Professional credentials and recognition that validate my expertise in civil and structural engineering
            </p>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Professional Certifications and courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <div className="relative h-100 bg-muted">
                      <Image
                        src={cert.photo || "/placeholder.svg"}
                        alt={`${cert.title} certificate`}
                        fill
                        className="object-contain"
                      />
                      </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg text-balance">{cert.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        Obtained: {cert.date}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Awards & Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="relative h-40 bg-muted">
                    <Image
                      src={achievement.photo || "/placeholder.svg"}
                      alt={`${achievement.title} award`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                      <Trophy className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 text-balance">{achievement.title}</h4>
                    <p className="text-sm text-primary font-medium mb-2">{achievement.organization}</p>
                    <p className="text-muted-foreground text-sm mb-3 text-pretty">{achievement.description}</p>
                    <Badge variant="outline">{achievement.year}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
