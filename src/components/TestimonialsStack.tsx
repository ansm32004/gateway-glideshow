import { Star, Quote } from "lucide-react";
import successImage from "@/assets/success-stories.jpg";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    country: "From China to USA",
    rating: 5,
    text: "The team made my H1-B to Green Card journey seamless. Their expertise and constant communication gave me confidence throughout the entire process.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format"
  },
  {
    name: "Ahmed Hassan",
    role: "Medical Doctor", 
    country: "From Egypt to Canada",
    rating: 5,
    text: "Professional, knowledgeable, and incredibly supportive. They helped me navigate the complex medical licensing and immigration process successfully.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format"
  },
  {
    name: "Maria Rodriguez",
    role: "Business Owner",
    country: "From Mexico to USA", 
    rating: 5,
    text: "Thanks to their investor visa expertise, I was able to establish my business in the US. The process was much smoother than I expected.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format"
  },
  {
    name: "David Park",
    role: "Student",
    country: "From South Korea to Australia",
    rating: 5,
    text: "They handled my student visa and later helped me transition to permanent residency. Excellent service from start to finish!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format"
  },
  {
    name: "Elena Petrov",
    role: "Research Scientist",
    country: "From Russia to Germany",
    rating: 5,
    text: "The family reunification process seemed impossible until I found this team. They made it happen and kept us informed every step of the way.",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face&auto=format"
  },
  {
    name: "James Thompson",
    role: "Teacher",
    country: "From UK to New Zealand",
    rating: 5,
    text: "Outstanding service! They helped me secure a teaching position and work visa in New Zealand. Highly recommend their professional approach.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format"
  }
];

const TestimonialsStack = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Success
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Stories
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real people who trusted us with their immigration journey. 
            Join thousands of satisfied clients who achieved their dreams.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image side */}
          <div className="relative slide-up">
            <img 
              src={successImage}
              alt="Happy clients celebrating immigration success with diverse group holding passports"
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            
            {/* Floating success metrics */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl card-stack">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">10,000+</div>
                <div className="text-sm text-muted-foreground">Dreams Fulfilled</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl card-stack pulse-glow">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold">4.9/5</span>
              </div>
              <div className="text-xs text-muted-foreground">Average Rating</div>
            </div>
          </div>

          {/* Stats side */}
          <div className="space-y-8 slide-up stagger-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-2xl shadow-lg card-stack">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Approval Rate</div>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl shadow-lg card-stack">
                <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl shadow-lg card-stack">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl shadow-lg card-stack">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-stack slide-up stagger-${(index % 3) + 1} border border-border/50 hover:border-primary/20 group`}
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author info */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} - Immigration success story`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-primary font-medium">{testimonial.country}</div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsStack;