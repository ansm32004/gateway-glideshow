import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-primary">
                Southern Immigration
              </span>

                
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Your trusted partner in immigration services. We help individuals and families
              achieve their dreams of starting a new life in their chosen destination.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>101 H Block, First floor Near H block Diggi, Sriganganagar, Rajasthan</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 90888-04848</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>southernimmigration.sgnr@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61562889298777"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-primary group-hover:text-secondary transition-colors duration-300" />
              </a>
              <a
                href="https://www.instagram.com/southernimmigration"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-primary group-hover:text-secondary transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Process
                </a>
              </li>
              <li>
                <a href="#success-stories" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

