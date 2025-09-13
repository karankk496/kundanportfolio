"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Briefcase, 
  Award, 
  Wrench, 
  Mail,
  ChevronRight
} from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  // Set initial active item based on hash
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      if (hash) {
        const activeNav = navItems.find(item => item.href === hash)
        if (activeNav) {
          setActiveItem(activeNav.label)
        }
      } else {
        setActiveItem('Home')
      }
    }
  }, [pathname])

  // Icons for each nav item
  const navIcons = {
    'Home': <Home className="h-4 w-4" />,
    'About': <User className="h-4 w-4" />,
    'My work': <Briefcase className="h-4 w-4" />,
    'Certifications': <Award className="h-4 w-4" />,
    'Services': <Wrench className="h-4 w-4" />,
    'Contact': <Mail className="h-4 w-4" />
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active item based on scroll position
      const sections = ['home', 'about', 'portfolio', 'certifications', 'services', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        const activeNav = navItems.find(item => item.href === `#${currentSection}`)
        if (activeNav) {
          setActiveItem(activeNav.label)
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "My work" },
    { href: "#certifications", label: "Certifications" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" }
  ]

  // Handle smooth scrolling
  const handleNavClick = (e: React.MouseEvent, href: string, label: string) => {
    e.preventDefault()
    // Only update state if we're on the client
    if (typeof window !== 'undefined') {
      setActiveItem(label)
      const targetId = href.replace('#', '')
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg py-1" 
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:opacity-90 transition-opacity flex items-center"
              onClick={() => setActiveItem("")}
            >
              <span className="bg-primary/10 px-3 py-1 rounded-lg">KK</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeItem === item.label
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.label)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                      isActive 
                        ? 'bg-primary/10 text-primary' 
                        : 'text-foreground/80 hover:text-primary hover:bg-foreground/5'
                    }`}
                  >
                    <span className="mr-2">{navIcons[item.label as keyof typeof navIcons]}</span>
                    {item.label}
                    {isActive && (
                      <span className="ml-2 w-1.5 h-1.5 rounded-full bg-primary"></span>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-lg z-40 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          paddingTop: navRef.current?.offsetHeight || '4rem',
          height: '100vh',
          overflowY: 'auto'
        }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activeItem === item.label || 
                             (typeof window !== 'undefined' && window.location.hash === item.href)
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href, item.label)
                    setIsOpen(false)
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-foreground/90 hover:bg-foreground/5'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="mr-3">
                      {navIcons[item.label as keyof typeof navIcons]}
                    </span>
                    {item.label}
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              )
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-foreground/10">
            <p className="text-foreground/60 text-sm text-center">
              Let's build something amazing together
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
