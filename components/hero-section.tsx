import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Download, GraduationCap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { TypingAnimation } from "@/components/ui/typing-animation"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Civil Engineering Design Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Structural Elements - Left Side */}
        <div className="absolute left-4 top-1/4 opacity-15 animate-pulse">
          <svg width="120" height="200" viewBox="0 0 120 200" className="text-primary">
            {/* I-Beam Structure */}
            <rect x="10" y="0" width="100" height="8" fill="currentColor" />
            <rect x="54" y="8" width="12" height="184" fill="currentColor" />
            <rect x="10" y="192" width="100" height="8" fill="currentColor" />
            {/* Connection Points */}
            <circle cx="30" cy="4" r="2" fill="currentColor" />
            <circle cx="60" cy="4" r="2" fill="currentColor" />
            <circle cx="90" cy="4" r="2" fill="currentColor" />
            <circle cx="30" cy="196" r="2" fill="currentColor" />
            <circle cx="60" cy="196" r="2" fill="currentColor" />
            <circle cx="90" cy="196" r="2" fill="currentColor" />
          </svg>
        </div>

        {/* Architectural Blueprint - Right Side */}
        <div className="absolute right-4 top-1/3 opacity-15 animate-pulse delay-1000">
          <svg width="150" height="120" viewBox="0 0 150 120" className="text-primary">
            {/* Building Floor Plan */}
            <rect x="10" y="10" width="130" height="100" fill="none" stroke="currentColor" strokeWidth="2" />
            <rect x="20" y="20" width="50" height="35" fill="none" stroke="currentColor" strokeWidth="1" />
            <rect x="80" y="20" width="50" height="35" fill="none" stroke="currentColor" strokeWidth="1" />
            <rect x="20" y="65" width="110" height="35" fill="none" stroke="currentColor" strokeWidth="1" />
            {/* Doors */}
            <path d="M 70 20 L 70 35" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
            <path d="M 75 55 L 75 65" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
            {/* Dimensions */}
            <text x="45" y="8" fontSize="6" fill="currentColor" textAnchor="middle">
              12.5m
            </text>
            <text x="5" y="60" fontSize="6" fill="currentColor" textAnchor="middle" transform="rotate(-90 5 60)">
              8.0m
            </text>
          </svg>
        </div>

        {/* Construction Tools - Bottom Left */}
        <div className="absolute left-8 bottom-20 opacity-20 animate-bounce delay-2000">
          <svg width="80" height="60" viewBox="0 0 80 60" className="text-primary">
            {/* Compass/Divider */}
            <path d="M 20 10 L 30 50 M 30 10 L 20 50" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="25" cy="8" r="3" fill="currentColor" />
            <circle cx="20" cy="50" r="2" fill="currentColor" />
            <circle cx="30" cy="50" r="2" fill="currentColor" />
            {/* Ruler */}
            <rect x="45" y="25" width="30" height="4" fill="currentColor" />
            <path
              d="M 50 25 L 50 29 M 55 25 L 55 29 M 60 25 L 60 29 M 65 25 L 65 29 M 70 25 L 70 29"
              stroke="white"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        {/* Structural Calculations - Bottom Right */}
        <div className="absolute right-8 bottom-20 opacity-15 animate-pulse delay-3000">
          <svg width="100" height="80" viewBox="0 0 100 80" className="text-primary">
            {/* Mathematical Formulas */}
            <text x="5" y="15" fontSize="8" fill="currentColor">
              σ = M/S
            </text>
            <text x="5" y="30" fontSize="8" fill="currentColor">
              τ = V/A
            </text>
            <text x="5" y="45" fontSize="8" fill="currentColor">
              δ = PL/AE
            </text>
            <text x="5" y="60" fontSize="8" fill="currentColor">
              f = √(E/ρ)
            </text>
            {/* Load Diagram */}
            <path d="M 60 10 L 90 10" stroke="currentColor" strokeWidth="2" />
            <path
              d="M 65 5 L 65 15 M 70 5 L 70 15 M 75 5 L 75 15 M 80 5 L 80 15 M 85 5 L 85 15"
              stroke="currentColor"
              strokeWidth="1"
            />
            <text x="75" y="25" fontSize="6" fill="currentColor" textAnchor="middle">
              Uniform Load
            </text>
          </svg>
        </div>

        {/* Building Silhouette - Center Background */}
        <div className="absolute inset-x-0 bottom-0 opacity-5">
          <svg width="100%" height="200" viewBox="0 0 1200 200" preserveAspectRatio="none" className="text-primary">
            {/* City Skyline */}
            <rect x="0" y="120" width="80" height="80" fill="currentColor" />
            <rect x="100" y="80" width="60" height="120" fill="currentColor" />
            <rect x="180" y="100" width="70" height="100" fill="currentColor" />
            <rect x="270" y="60" width="80" height="140" fill="currentColor" />
            <rect x="370" y="90" width="60" height="110" fill="currentColor" />
            <rect x="450" y="70" width="90" height="130" fill="currentColor" />
            <rect x="560" y="110" width="70" height="90" fill="currentColor" />
            <rect x="650" y="85" width="80" height="115" fill="currentColor" />
            <rect x="750" y="95" width="60" height="105" fill="currentColor" />
            <rect x="830" y="75" width="75" height="125" fill="currentColor" />
            <rect x="920" y="105" width="65" height="95" fill="currentColor" />
            <rect x="1000" y="90" width="80" height="110" fill="currentColor" />
            <rect x="1100" y="130" width="100" height="70" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl bg-white">
                  <Image
                    src="/kundan..jpg"
                    alt="Kundan Kumar - Civil Engineer"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Professional badge overlay */}
                <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2 shadow-lg z-10">
                  <GraduationCap className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div className="text-center mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
                Hi, I'm{' '}
                <span className="text-primary">
                  <TypingAnimation text="Kundan Kumar" className="inline-block min-w-[200px]" />
                </span>
              </h1>
              <p className="text-2xl font-semibold text-foreground">
                I design and build structures as a <strong>Civil Engineer</strong>
              </p>
            </div>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Passionate about turning innovative ideas into strong, sustainable, and beautiful structures
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link href="#portfolio">View My Work</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent" asChild>
                <a href="https://drive.google.com/file/d/1kzXGKTurFIfDw0Ba7-jgHz-zZh49Fdkw/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  View My Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
                <Link href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>

          {/* Professional Highlights */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div> */}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
