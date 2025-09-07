import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Award, Clock, Globe, Heart, Scale, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  useEffect(() => {
    document.title = "About Us - Southern Immigration | Expert Immigration Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Southern Immigration\'s experienced team, our mission, and commitment to providing exceptional immigration services with proven results.');
    }
  }, []);

  const stats = [
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "98%", label: "Success Rate", icon: Award },
    { number: "5000+", label: "Cases Approved", icon: Users },
    { number: "50+", label: "Countries Served", icon: Globe }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Service",
      description: "We understand that immigration is a deeply personal journey. Our team provides empathetic support every step of the way."
    },
    {
      icon: Scale,
      title: "Legal Excellence",
      description: "Our experienced legal professionals stay current with immigration laws to provide the most effective representation."
    },
    {
      icon: Users,
      title: "Personalized Approach",
      description: "Every case is unique. We tailor our services to meet your specific needs and circumstances."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "With experience across multiple countries and visa types, we have the expertise to handle complex international cases."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-4">
      <Navigation />
      
      <main className="pt-20">
        {/* Back to Home Arrow */}
        <div className="container mx-auto px-6 lg:px-8 pt-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-primary">
                About Southern Immigration
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                For over 15 years, Southern Immigration has been helping individuals and families 
                achieve their immigration goals with professional expertise, personalized service, 
                and unwavering dedication to success.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-primary">Our Mission</h2>
                <p className="text-xl text-muted-foreground">
                  To provide exceptional immigration services that empower individuals and families 
                  to pursue their dreams of building new lives in their chosen countries.
                </p>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  At Southern Immigration, we believe that everyone deserves the opportunity to pursue 
                  their dreams, no matter where they were born. Our dedicated team of immigration 
                  professionals combines deep legal expertise with genuine care for our clients' success.
                </p>
                <p className="mb-6">
                  Founded in 2009, our firm has grown from a small practice to one of the most trusted 
                  immigration service providers in the region. We've helped thousands of individuals 
                  and families navigate complex immigration processes, from visa applications to 
                  citizenship ceremonies.
                </p>
                <p>
                  What sets us apart is our commitment to personalized service. We take the time to 
                  understand each client's unique situation and goals, developing customized strategies 
                  that maximize the chances of success while minimizing stress and uncertainty.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-primary">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These core values guide everything we do and define how we serve our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-sm border border-border/50">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-6">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-primary">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our experienced professionals are dedicated to providing you with the highest 
                quality immigration services and support.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 text-center">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Experienced Immigration Professionals</h3>
                <p className="text-muted-foreground mb-6">
                  Our team consists of licensed immigration consultants, lawyers, and support staff 
                  with extensive experience in all areas of immigration law. We maintain the highest 
                  professional standards and stay current with changing immigration policies and procedures.
                </p>
                <p className="text-muted-foreground">
                  Every team member is committed to providing personalized attention and achieving 
                  the best possible outcomes for our clients. We pride ourselves on our attention 
                  to detail, clear communication, and dedication to excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home Button */}
        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <Button
              size="lg"
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-2 mx-auto"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;