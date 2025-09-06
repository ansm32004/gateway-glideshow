import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, FileCheck } from "lucide-react";
import heroImage from "@/assets/hero-immigration.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8 slide-up max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
            <Shield className="w-4 h-4 mr-2" />
            Trusted Immigration Partners
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Your Journey to a
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}New Future{" "}
            </span>
            Starts Here
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Expert immigration services to help you navigate the complex process of building your new life. 
            Professional, reliable, and personalized support every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Start Your Application
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="glass" size="lg" className="group">
              Schedule Consultation
              <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Cases Approved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;