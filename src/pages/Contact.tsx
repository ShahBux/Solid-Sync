import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ email: "", subject: "", message: "" });
  };

  return (
    <div>
      <PageBanner title="Contact Us" subtitle="Get in touch with us for your telecom needs." />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Get In <span className="text-primary">Touch</span>
                </h2>
                {[
                  { icon: MapPin, label: "Address", value: "Karachi, 75300, Pakistan" },
                  { icon: Phone, label: "Phone", value: "+92 333-222-8213" },
                  { icon: Mail, label: "Email", value: "info@solidsync.com" },
                  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-foreground text-sm">{item.label}</h4>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={200} className="lg:col-span-2">
              <div className="bg-card rounded-lg border border-border p-8">
                <h3 className="text-xl font-sans font-semibold text-card-foreground mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="font-sans"
                    />
                    <Input
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="font-sans"
                    />
                  </div>
                  <Textarea
                    placeholder="How can we help?"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="font-sans"
                  />
                  <Button type="submit" size="lg" className="font-sans w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* Map Placeholder */}
          <ScrollReveal className="mt-12">
            <div className="rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.0257987817!2d66.7581584!3d25.1931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location Map"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
