import { Star, Quote } from "lucide-react";
import successImage from "@/assets/success-stories.jpg";
type Testimonial = {
  name: string;
  service: string;
  country: string;
  rating: number;
  text: string;
  image: string;
};
const testimonials: Testimonial[] = [{
  name: "Harmanjot Singh",
  service: "Visitor Visa",
  country: "Canada",
  rating: 5,
  text: "My visitor visa for Canada was approved smoothly. The team guided me with patience and ensured every document was perfect. I felt fully supported throughout.",
  image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format"
}, {
  name: "Sarmanjot Singh",
  service: "Study Visa",
  country: "Russia",
  rating: 5,
  text: "Studying abroad was my dream, and they made it possible. The Russia study visa process was handled professionally and without stress.",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format"
}, {
  name: "Dharmender Singh",
  service: "Tourist Visa",
  country: "Canada",
  rating: 5,
  text: "Visiting Canada to see my family became a reality thanks to their help. The tourist visa application was quick and simple with their expert support.",
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format"
}, {
  name: "Rahul Soni",
  service: "Visitor Visa",
  country: "New Zealand",
  rating: 5,
  text: "The New Zealand visitor visa process felt effortless with their guidance. They answered all my doubts and ensured a smooth journey.",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format"
}, {
  name: "Pawandeep Singh",
  service: "Study Visa",
  country: "UK",
  rating: 5,
  text: "Thanks to their support, I am now studying in the UK. The process was clear, transparent, and handled with great care.",
  image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face&auto=format"
}, {
  name: "Pawan Kumar",
  service: "Work Permit",
  country: "Poland",
  rating: 5,
  text: "Getting my Poland work permit approved was stress-free. Their attention to detail and fast responses made the whole process smooth.",
  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format"
}, {
  name: "Nizam Uddin",
  service: "Work Permit",
  country: "Canada",
  rating: 5,
  text: "The team managed my Canadian work permit application flawlessly. I am grateful for their professionalism and dedication to my success.",
  image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face&auto=format"
}, {
  name: "Palwinder Singh Deol",
  service: "Study Visa",
  country: "UK",
  rating: 5,
  text: "Studying in the UK was my dream, and they turned it into reality. The whole application process was far easier than I expected.",
  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format"
}];
const TestimonialsStack = () => {
  return <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real people who trusted us with their immigration journey. 
            Join thousands of satisfied clients who achieved their dreams.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative slide-up">
            <img src={successImage} alt="Happy clients celebrating immigration success with diverse group holding passports" className="w-full h-[500px] object-cover rounded-3xl shadow-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl card-stack">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">1,000+</div>
                <div className="text-sm text-muted-foreground">Dreams Fulfilled</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl card-stack pulse-glow">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />)}
                </div>
                <span className="text-sm font-semibold">4.9/5</span>
              </div>
              <div className="text-xs text-muted-foreground">Average Rating</div>
            </div>
          </div>

          <div className="space-y-8 slide-up stagger-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-2xl shadow-lg card-stack">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Approval Rate</div>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl shadow-lg card-stack">
                <div className="text-4xl font-bold text-secondary mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl shadow-lg card-stack">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl shadow-lg card-stack">
                <div className="text-4xl font-bold text-primary mb-2">1K+</div>
                <div className="text-sm text-muted-foreground">Happy Client</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className={`relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-stack slide-up stagger-${index % 3 + 1} border border-border/50 hover:border-primary/20 group`}>
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.service}</div>
                  <div className="text-xs text-primary font-medium">{testimonial.country}</div>
                </div>
              </div>

              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>)}
        </div>
      </div>
    </section>;
};
export default TestimonialsStack;