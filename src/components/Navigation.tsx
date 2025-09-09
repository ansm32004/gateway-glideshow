import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  let contactTimeout: ReturnType<typeof setTimeout>;

  const navItems = [
    { name: "Services", href: "/#services" },
    { name: "Process", href: "/#process" },
    { name: "Success Stories", href: "/#testimonials" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-gray-100 backdrop-blur-lg border border-gray-300 rounded-full px-12 py-4 shadow-lg">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 text-lg font-medium">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}

          {/* Contact Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(contactTimeout);
              setIsContactOpen(true);
            }}
            onMouseLeave={() => {
              contactTimeout = setTimeout(() => setIsContactOpen(false), 250); // 👈 delay close
            }}
          >
            <button className="text-foreground hover:text-primary transition-colors duration-300">
              Contact
            </button>
            {isContactOpen && (
              <div className="absolute top-12 right-0 bg-white border border-gray-200 shadow-md rounded-lg w-72">
                <a
                  href="mailto:southernimmigration.sgnr@gmail.com"
                  className="flex items-center px-4 py-3 hover:bg-gray-100 text-sm text-gray-700"
                >
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  southernimmigration.sgnr@gmail.com
                </a>
                <a
                  href="tel:+919088804848"
                  className="flex items-center px-4 py-3 hover:bg-gray-100 text-sm text-gray-700"
                >
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  +91 90888-04848
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 py-4 border border-gray-300 bg-white/95 backdrop-blur-sm rounded-lg shadow-md text-center">
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
                className="flex items-center justify-center px-3 py-2 hover:bg-gray-100 text-sm text-gray-700 rounded-md"
              >
                <Mail className="w-5 h-5 mr-3 text-primary" />
                southernimmigration.sgnr@gmail.com
              </a>
              <a
                href="tel:+919088804848"
                className="flex items-center justify-center px-3 py-2 hover:bg-gray-100 text-sm text-gray-700 rounded-md"
              >
                <Phone className="w-5 h-5 mr-3 text-primary" />
                +91 90888-04848
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;



