import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import StatsCounter from "@/components/StatsCounter";
import MarqueeBar from "@/components/MarqueeBar";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-secondary/70" />
        <div className="relative z-10 container-custom px-4 md:px-8 lg:px-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Welcome To{" "}
              <span className="text-primary">SolidSync</span>{" "}
              Official Site
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-8">
              Leading Telecom Engineering company providing comprehensive services & management for GSM & Telecom Companies. From tower installation to fiber optics, we deliver excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-sans group">
                <Link to="/about">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-sans border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <MarqueeBar />

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <img
                src={aboutTeam}
                alt="SolidSync Team"
                className="rounded-lg shadow-xl w-full object-cover aspect-video"
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                <span className="text-primary">SolidSync</span> is Your Trusted Telecom Partner
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SolidSync is the leading company providing Services & Management for many GSM & Telecom Companies, supporting their Tele Housing Services including tower installation, fiber optics, commissioning, civil works, and more.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We have completed many projects successfully with a focus on Quality Services & Client Satisfaction.
              </p>
              <Button asChild className="font-sans group">
                <Link to="/about">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Our <span className="text-primary">Services</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide comprehensive telecom engineering solutions to meet all your infrastructure needs.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Power Installation", desc: "Complete power systems for telecom infrastructure." },
              { icon: Shield, title: "Tower Installation", desc: "Indoor & outdoor tower installation services." },
              { icon: Users, title: "Site Survey", desc: "Professional site survey & inspection consultation." },
              { icon: Award, title: "Fiber Optics", desc: "Fiber optics measures and installation services." },
            ].map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <div className="bg-card p-6 rounded-lg hover-lift hover-glow border border-border group cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-sans font-semibold text-lg text-card-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter end={14} label="Our Clients" suffix="+" />
            <StatsCounter end={219} label="Our Products" suffix="+" />
            <StatsCounter end={21} label="Years Experience" suffix="+" />
            <StatsCounter end={150} label="Projects Completed" suffix="+" />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Our <span className="text-primary">Clients</span>
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Some of our valued clients</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {["PTCL", "Warid", "PAF", "NTC", "KESC", "Burraq"].map((client, i) => (
              <ScrollReveal key={client} delay={i * 50}>
                <div className="bg-muted rounded-lg p-6 flex items-center justify-center h-24 hover-lift">
                  <span className="font-sans font-bold text-muted-foreground text-lg">{client}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-secondary/80" />
        <div className="relative z-10 container-custom text-center px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Get in touch with us to discuss your telecom infrastructure needs.
          </p>
          <Button asChild size="lg" className="font-sans">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
