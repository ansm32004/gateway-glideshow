import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Calendar, User, Phone, Mail, FileText } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('form_submissions')
        .insert({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service_type: formData.serviceType,
          message: formData.message,
          form_type: 'application'
        });

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: "Thank you! We'll contact you soon regarding your application.",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        serviceType: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Full Name
          </Label>
          <Input
            id="fullName"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Enter your full name"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone" className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Enter your phone number"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Enter your email address"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="serviceType" className="flex items-center gap-2">
          <FileText className="w-4 h-4" />
          Service Type
        </Label>
        <Select value={formData.serviceType} onValueChange={(value) => setFormData({ ...formData, serviceType: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select the service you need" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="family-visa">Family Visa</SelectItem>
            <SelectItem value="work-visa">Work Visa</SelectItem>
            <SelectItem value="student-visa">Student Visa</SelectItem>
            <SelectItem value="business-visa">Business Visa</SelectItem>
            <SelectItem value="permanent-residency">Permanent Residency</SelectItem>
            <SelectItem value="citizenship">Citizenship Application</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="flex items-center gap-2">
          <FileText className="w-4 h-4" />
          Additional Information
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your specific situation and requirements..."
          rows={4}
        />
      </div>

      <Button type="submit" variant="hero" size="lg" className="w-full group" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Application"}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Button>
    </form>
  );
};

const BookCallDialog = () => {
  const [callFormData, setCallFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTime: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleCallSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('form_submissions')
        .insert({
          name: callFormData.name,
          email: callFormData.email,
          phone: callFormData.phone,
          preferred_time: callFormData.preferredTime,
          form_type: 'call_booking'
        });

      if (error) throw error;

      toast({
        title: "Call Booked!",
        description: "Thank you! We'll contact you to schedule your consultation call.",
      });

      setCallFormData({
        name: "",
        email: "",
        phone: "",
        preferredTime: ""
      });
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "There was an error booking your call. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleCallSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="callName">Full Name</Label>
        <Input
          id="callName"
          value={callFormData.name}
          onChange={(e) => setCallFormData({ ...callFormData, name: e.target.value })}
          placeholder="Your full name"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="callEmail">Email</Label>
        <Input
          id="callEmail"
          type="email"
          value={callFormData.email}
          onChange={(e) => setCallFormData({ ...callFormData, email: e.target.value })}
          placeholder="Your email address"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="callPhone">Phone Number</Label>
        <Input
          id="callPhone"
          type="tel"
          value={callFormData.phone}
          onChange={(e) => setCallFormData({ ...callFormData, phone: e.target.value })}
          placeholder="Your phone number"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="preferredTime">Preferred Call Time</Label>
        <Select value={callFormData.preferredTime} onValueChange={(value) => setCallFormData({ ...callFormData, preferredTime: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Choose your preferred time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
            <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
            <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Booking..." : "Book Your Call"}
      </Button>
    </form>
  );
};

export { ApplicationForm, BookCallDialog };