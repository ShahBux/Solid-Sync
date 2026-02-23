import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";
import StatsCounter from "@/components/StatsCounter";
import aboutTeam from "@/assets/about-team.jpg";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div>
      <PageBanner title="About Us" subtitle="Learn more about SolidSync and our mission." />

      {/* Main About */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <img
                src={aboutTeam}
                alt="Our Team"
                className="rounded-lg shadow-xl w-full object-cover aspect-video"
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Who We <span className="text-primary">Are</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SolidSync is the leading company providing Services & Management for many GSM & Telecom Companies, supporting their Tele Housing Services such as projects relating to promotions of communication services, tower installation, wiring, commissioning, civil works, power, cooling systems, fiber optics measures, and more.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                SolidSync has particular expertise and experience in identifying, preparing, and managing projects on behalf of its clients. We have completed many projects successfully and satisfactorily.
              </p>
              <ul className="space-y-3">
                {[
                  "Quality Services & Client Satisfaction",
                  "Expert Team of Engineers",
                  "21+ Years of Experience",
                  "ISO Certified Company",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-card rounded-lg p-8 border border-border hover-lift h-full">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Our <span className="text-primary">Mission</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide the highest quality telecom engineering services, ensuring our clients receive reliable, efficient, and cost-effective solutions that drive their business forward.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-card rounded-lg p-8 border border-border hover-lift h-full">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Our <span className="text-primary">Vision</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and preferred telecom engineering partner in Pakistan, leading innovation and excellence in every project we undertake.
                </p>
              </div>
            </ScrollReveal>
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
    </div>
  );
};

export default About;
