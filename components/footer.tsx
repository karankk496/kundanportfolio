import { Mail, Phone, Linkedin, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-background pt-16 pb-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Kundan Kumar
              </h3>
              <p className="text-background/90 leading-relaxed mb-6 text-lg">
                Transforming visions into structurally sound realities with innovative engineering solutions and architectural excellence.
              </p>
              <div className="flex items-center space-x-4 mt-6">
                <a 
                  href="https://in.linkedin.com/in/kundankumar6299" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-all duration-300 group"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5 text-background group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-4">
              <h4 className="text-xl font-semibold mb-6 relative pb-2 inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'About', href: '#about' },
                  { name: 'My Work', href: '#portfolio' },
                  { name: 'Services', href: '#services' },
                  { name: 'Contact', href: '#contact' },
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="text-background/80 hover:text-background transition-all duration-300 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-4">
              <h4 className="text-xl font-semibold mb-6 relative pb-2 inline-block">
                Get In Touch
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-background/80 text-sm">Email me at</p>
                    <a 
                      href="mailto:kundankumar629957@gmail.com" 
                      className="text-background hover:text-primary transition-colors font-medium"
                    >
                      kundankumar629957@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-background/80 text-sm">Call me at</p>
                    <a 
                      href="tel:+91 6299579484" 
                      className="text-background hover:text-primary transition-colors font-medium"
                    >
                      +91 6299579484
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-background/80 text-sm">Origin from</p>
                    <p className="text-background font-medium">
                      Rohtas, Bihar 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-background/20 mt-12 pt-8 text-center">
            <p className="text-background/70 text-sm">
              © {new Date().getFullYear()} <a href="/" className="font-medium hover:text-primary transition-colors">Kundan Kumar</a>. All rights reserved.
              <span className="mx-2">•</span>
              <span>Designed with ❤️ for structural excellence</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
