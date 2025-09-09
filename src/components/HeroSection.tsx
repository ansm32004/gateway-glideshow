import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, Calendar } from "lucide-react";
import { ApplicationForm } from "@/components/ContactForms";

const HeroSection = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8 slide-up max-w-4xl mx-auto">
          
          {/* ✅ Logo */}
          <div className="flex justify-center mb-4 md:mb-6">
            <img
              src="/logo.png"
              alt="Southern Immigration Logo"
              className="h-24 sm:h-32 md:h-40 w-auto object-contain max-w-full"
            />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight px-4">
            Your Journey to a
            <span className="text-primary"> New Future </span>
            Starts Here
          </h1>
          
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto px-4">
            Expert immigration services to help you navigate the complex process
            of building your new life. Professional, reliable, and personalized
            support every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            {/* Start Application Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                  <span className="hidden sm:inline">Start Your Application</span>
                  <span className="sm:hidden">Apply Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center">
                    Start Your Immigration Application
                  </DialogTitle>
                </DialogHeader>
                <ApplicationForm />
              </DialogContent>
            </Dialog>

            {/* ✅ Book Your Call (Cal.com Embed) */}
            <Button
              variant="glass"
              size="lg"
              className="group w-full sm:w-auto"
              data-cal-namespace="30min"
              data-cal-link="southern-immigration-c8v0vs/30min"
              data-cal-config='{"layout":"month_view","theme":"light"}'
            >
              <span className="hidden sm:inline">Book Your Call</span>
              <span className="sm:hidden">Book Call</span>
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform ml-2" />
            </Button>
          </div>

          {/* ✅ Stats Section */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 sm:pt-12 max-w-lg mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">1K+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Cases Approved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-secondary">98%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent">3+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



