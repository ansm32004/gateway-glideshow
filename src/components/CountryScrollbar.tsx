import { ScrollArea } from "@/components/ui/scroll-area";

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
  return (
    <div className="py-12 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            Countries We Serve
          </h3>
          <p className="text-muted-foreground">
            We help clients immigrate to these destinations worldwide
          </p>
        </div>
        
        <ScrollArea className="w-full whitespace-nowrap rounded-lg">
          <div className="flex space-x-4 pb-4">
            {countries.map((country) => (
              <div
                key={country.code}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="flex flex-col items-center p-4 bg-card hover:bg-primary/5 rounded-xl transition-all duration-300 border border-border/50 hover:border-primary/20 hover:shadow-md min-w-[120px]">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {country.flag}
                  </div>
                  <div className="text-sm font-medium text-center leading-tight">
                    {country.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default CountryScrollbar;