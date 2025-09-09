import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, FileText, Scale, Globe, Heart } from "lucide-react";
import ServiceForm from "./ServiceForm";

type Service = {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  color: string
  delay: string
}

const services: Service[] = [
  {
    icon: BookOpen,
    title: "Visa Applications",
    description: "Expert guidance for all visa types including work, study, tourist, and investment visas.",
    features: ["Work Visas", "Student Visas", "Tourist Visas", "Investment Visas"],
    color: "from-primary to-primary-glow",
    delay: "stagger-1"
  },
  {
    icon: Users,
    title: "Family Immigration",
    description: "Reunite with your loved ones through family-based immigration programs.",
    features: ["Spouse Visas", "Parent Sponsorship", "Child Immigration", "Extended Family"],
    color: "from-secondary to-secondary-glow",
    delay: "stagger-2"
  },
  {
    icon: Scale,
    title: "Legal Representation",
    description: "Professional legal support for complex immigration cases and appeals.",
    features: ["Court Representation", "Appeals Process", "Legal Consultation", "Document Review"],
    color: "from-accent to-accent-glow",
    delay: "stagger-3"
  },
  {
    icon: Globe,
    title: "Citizenship Services",
    description: "Complete support for naturalization and citizenship applications.",
    features: ["Naturalization", "Dual Citizenship", "Citizenship Test Prep", "Oath Ceremony"],
    color: "from-primary to-secondary",
    delay: "stagger-1"
  },
  {
    icon: FileText,
    title: "Document Preparation",
    description: "Comprehensive assistance with all required immigration documentation.",
    features: ["Form Completion", "Document Translation", "Apostille Services", "Notarization"],
    color: "from-secondary to-accent",
    delay: "stagger-2"
  },
  {
    icon: Heart,
    title: "Humanitarian Cases",
    description: "Specialized support for asylum seekers and humanitarian protection.",
    features: ["Asylum Applications", "Refugee Status", "Protection Visas", "Emergency Cases"],
    color: "from-accent to-primary",
    delay: "stagger-3"
  }
];

const ServicesStack = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleLearnMore = (service: Service) => {
    setSelectedService(service);
    setIsFormOpen(true);
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Comprehensive Immigration{" "}
            <span className="text-primary">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            From initial consultation to final approval, we provide end-to-end immigration services 
            tailored to your unique situation and goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-stack slide-up ${service.delay} border border-border/50 hover:border-primary/20`}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${index % 2 === 0 ? "bg-yellow-500" : "bg-blue-500"} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:bg-secondary transition-colors duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                    onClick={() => handleLearnMore(service)}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            )
          })}
        </div>

        {/* Service Form Dialog */}
        {selectedService && (
          <ServiceForm
            isOpen={isFormOpen}
            onClose={() => setIsFormOpen(false)}
            serviceTitle={selectedService.title}
            serviceOptions={selectedService.features}
          />
        )}
      </div>
    </section>
  );
};

export default ServicesStack;
