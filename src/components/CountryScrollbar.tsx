import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const countries = [
  { name: "United States", flag: "🇺🇸", code: "US" },
  { name: "Canada", flag: "🇨🇦", code: "CA" },
  { name: "United Kingdom", flag: "🇬🇧", code: "UK" },
  { name: "Australia", flag: "🇦🇺", code: "AU" },
  { name: "Germany", flag: "🇩🇪", code: "DE" },
  { name: "France", flag: "🇫🇷", code: "FR" },
  { name: "Netherlands", flag: "🇳🇱", code: "NL" },
  { name: "Norway", flag: "🇳🇴", code: "NO" },
  { name: "Sweden", flag: "🇸🇪", code: "SE" },
  { name: "Switzerland", flag: "🇨🇭", code: "CH" },
  { name: "New Zealand", flag: "🇳🇿", code: "NZ" },
  { name: "Japan", flag: "🇯🇵", code: "JP" },
  { name: "Singapore", flag: "🇸🇬", code: "SG" },
  { name: "Ireland", flag: "🇮🇪", code: "IE" },
  { name: "Spain", flag: "🇪🇸", code: "ES" },
];

const CountryScrollbar = () => {
  const autoplay = Autoplay({ delay: 2000, stopOnInteraction: true });

  return (
    <section id="countries" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Countries We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We have extensive experience helping clients immigrate to these popular destinations
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplay]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {countries.map((country, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-auto">
                <div className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer min-w-[200px]">
                  <div className="text-6xl mb-4">{country.flag}</div>
                  <h3 className="font-semibold text-center text-foreground">{country.name}</h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default CountryScrollbar;