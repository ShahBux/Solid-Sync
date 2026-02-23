import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";
import { Zap, Shield, Radio, Wrench, Eye, Cable, Server, Waves } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Tower Installation",
    desc: "Complete indoor and outdoor tower installation services with professional engineering expertise.",
  },
  {
    icon: Cable,
    title: "Fiber Optics",
    desc: "Comprehensive fiber optic cable laying, splicing, and testing services for telecom networks.",
  },
  {
    icon: Zap,
    title: "Power Installation",
    desc: "Design and installation of power systems including generators, UPS, and solar power solutions.",
  },
  {
    icon: Radio,
    title: "Microwave Equipment",
    desc: "Installation and commissioning of microwave radio links and BTS equipment.",
  },
  {
    icon: Eye,
    title: "Site Survey & Inspection",
    desc: "Professional site acquisition, survey, and inspection services for telecom projects.",
  },
  {
    icon: Wrench,
    title: "Operation & Maintenance",
    desc: "Annual contract-based operation and maintenance of telecom equipment and infrastructure.",
  },
  {
    icon: Server,
    title: "VSAT Installation",
    desc: "Installation and configuration of VSAT systems for satellite communication services.",
  },
  {
    icon: Waves,
    title: "Earthing & Grounding",
    desc: "Professional earthing and grounding solutions to protect telecom infrastructure.",
  },
];

const Services = () => {
  return (
    <div>
      <PageBanner title="Our Services" subtitle="Comprehensive telecom engineering solutions for your needs." />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 80}>
                <div className="bg-card p-6 rounded-lg border border-border hover-lift hover-glow group cursor-pointer h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-sans font-semibold text-lg text-card-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
