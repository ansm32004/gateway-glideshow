import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CountryScrollbar from "@/components/CountryScrollbar";
import ServicesStack from "@/components/ServicesStack";
import ProcessSteps from "@/components/ProcessSteps";
import TestimonialsStack from "@/components/TestimonialsStack";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "Expert Immigration Services | ImmigrationPro - Your Journey to Success";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional immigration services with 98% success rate. Expert visa applications, family reunification, citizenship support. Free consultation available. Trusted by 10,000+ clients worldwide.");
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "ImmigrationPro",
      "description": "Expert immigration services and legal consultation",
      "url": window.location.origin,
      "telephone": "+1-555-123-4567",
      "email": "info@immigrationpro.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Immigration Street",
        "addressLocality": "Legal District",
        "addressRegion": "NY",
        "postalCode": "10001",
        "addressCountry": "US"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "2000"
      },
      "offers": {
        "@type": "Offer",
        "name": "Free Immigration Consultation",
        "description": "Professional immigration assessment and case evaluation",
        "price": "0",
        "priceCurrency": "USD"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section id="home">
        <HeroSection />
      </section>
      
      <CountryScrollbar />
      
      <section id="services">
        <ServicesStack />
      </section>
      
      <section id="process">
        <ProcessSteps />
      </section>
      
      <section id="testimonials">
        <TestimonialsStack />
      </section>
      
      <Footer />
    </main>
  );
};

export default Index;
