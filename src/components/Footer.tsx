import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">IM</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ImmigrationPro
              </span>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Your trusted partner in immigration services. We help individuals and families 
              achieve their dreams of starting a new life in their chosen destination.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>123 Immigration Street, Legal District, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@immigrationpro.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <div 
                  key={index}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer group"
                >
                  <Icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="space-y-3">
              {[
                "Visa Applications",
                "Family Immigration", 
                "Legal Representation",
                "Citizenship Services",
                "Document Preparation",
                "Humanitarian Cases"
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Success Stories", 
                "Immigration News",
                "FAQ",
                "Contact Us",
                "Privacy Policy"
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="pt-6">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Get the latest immigration news and updates
                </p>
                <Button variant="cta" size="sm" className="w-full">
                  Subscribe Newsletter
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 ImmigrationPro. All rights reserved. Licensed Immigration Consultants.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;