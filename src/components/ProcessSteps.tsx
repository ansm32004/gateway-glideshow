import { CheckCircle, Circle, ArrowDown } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Initial Consultation",
    description: "Free assessment of your case and eligibility review",
    details: ["Case evaluation", "Document checklist", "Timeline planning", "Cost estimation"]
  },
  {
    number: "2", 
    title: "Documentation",
    description: "Comprehensive preparation of all required documents",
    details: ["Form completion", "Document collection", "Translation services", "Legal review"]
  },
  {
    number: "3",
    title: "Application Submission",
    description: "Professional submission with ongoing status monitoring",
    details: ["Application filing", "Fee payment", "Confirmation receipt", "Case tracking"]
  },
  {
    number: "4",
    title: "Follow-up & Support",
    description: "Continuous support until your case is approved",
    details: ["Status updates", "Interview preparation", "Additional documents", "Final approval"]
  }
];

const ProcessSteps = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Simple
            <span className="text-primary">
              {" "}4-Step Process
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined immigration process ensures clarity and peace of mind 
            throughout your journey to a new life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-primary/30 to-secondary/30 z-0"></div>
              )}

              <div className={`relative flex items-start space-x-8 mb-12 slide-up stagger-${index + 1}`}>
                {/* Step number */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 group">
                  <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-stack border border-border/50 hover:border-primary/20">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground mb-6 text-lg">
                      {step.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-3">
                          <Circle className="w-2 h-2 text-primary fill-current" />
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center mb-8">
                  <ArrowDown className="w-6 h-6 text-primary/50 floating-animation" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;