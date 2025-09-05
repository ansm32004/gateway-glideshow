import { CheckCircle, Circle, ArrowDown } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Free assessment of your case and eligibility review",
    details: ["Case evaluation", "Document checklist", "Timeline planning", "Cost estimation"],
    status: "completed"
  },
  {
    number: "02", 
    title: "Documentation",
    description: "Comprehensive preparation of all required documents",
    details: ["Form completion", "Document collection", "Translation services", "Legal review"],
    status: "completed"
  },
  {
    number: "03",
    title: "Application Submission",
    description: "Professional submission with ongoing status monitoring",
    details: ["Application filing", "Fee payment", "Confirmation receipt", "Case tracking"],
    status: "active"
  },
  {
    number: "04",
    title: "Follow-up & Support",
    description: "Continuous support until your case is approved",
    details: ["Status updates", "Interview preparation", "Additional documents", "Final approval"],
    status: "pending"
  }
];

const ProcessSteps = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Simple
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
                {/* Step number and status */}
                <div className="flex-shrink-0 relative z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                    step.status === 'completed' 
                      ? 'bg-secondary text-white' 
                      : step.status === 'active'
                      ? 'bg-primary text-white pulse-glow'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {step.status === 'completed' ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      step.number
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 group">
                  <div className={`bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-stack border border-border/50 ${
                    step.status === 'active' ? 'border-primary/50 bg-primary/5' : 'hover:border-primary/20'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        step.status === 'completed' 
                          ? 'bg-secondary/20 text-secondary' 
                          : step.status === 'active'
                          ? 'bg-primary/20 text-primary'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {step.status === 'completed' ? 'Completed' : step.status === 'active' ? 'In Progress' : 'Upcoming'}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 text-lg">
                      {step.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-3">
                          <Circle className={`w-2 h-2 ${
                            step.status === 'completed' ? 'text-secondary fill-current' :
                            step.status === 'active' ? 'text-primary fill-current' :
                            'text-muted-foreground'
                          }`} />
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