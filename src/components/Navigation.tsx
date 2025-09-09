import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-4 left-10 right-10 z-50 bg-white/80 backdrop-blur-lg border border-gray-300 rounded-full">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex w-full items-center justify-between">
            {/* Left side intentionally left blank (logo moved to Hero) */}
            <div></div>

            {/* Center: Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}

              {/* Contact Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsContactOpen(true)}
                onMouseLeave={() => setIsContactOpen(false)}
              >
                <button className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
                  Contact
                </button>
                {isContactOpen && (
                  <div className="absolute top-8 right-0 bg-white border border-gray-200 shadow-md rounded-lg w-72">
                    <a
                      href="mailto:southernimmigration.sgnr@gmail.com"
                      className="flex items-center px-4 py-3 hover:bg-gray-100 text-sm text-gray-700"
                    >
                      <Mail className="w-5 h-5 mr-3" /> Email: southernimmigration.sgnr@gmail.com
                    </a>
                    <a
                      href="tel:+919088804848"
                      className="flex items-center px-4 py-3 hover:bg-gray-100 text-sm text-gray-700"
                    >
                      <Phone className="w-5 h-5 mr-3" /> Phone: +91 90888-04848
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-300 bg-white/95 backdrop-blur-sm">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Contact Section in mobile */}
              <div className="space-y-3 mt-3 border-t pt-3">
                <a
                  href="mailto:southernimmigration.sgnr@gmail.com"
                  className="flex items-center px-3 py-2 hover:bg-gray-100 text-sm text-gray-700 rounded-md"
                >
                  <Mail className="w-5 h-5 mr-3" /> Email: southernimmigration.sgnr@gmail.com
                </a>
                <a
                  href="tel:+919088804848"
                  className="flex items-center px-3 py-2 hover:bg-gray-100 text-sm text-gray-700 rounded-md"
                >
                  <Phone className="w-5 h-5 mr-3" /> Phone: +91 90888-04848
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

