import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";

const categories = ["All", "Towers", "Equipment", "Cables", "Tools"];

const products = [
  { name: "Telecom Tower (30m)", category: "Towers", desc: "Self-supporting steel tower for telecom installations." },
  { name: "Monopole Tower", category: "Towers", desc: "Sleek monopole tower for urban deployments." },
  { name: "Guyed Mast Tower", category: "Towers", desc: "Cost-effective guyed mast for rural areas." },
  { name: "BTS Equipment", category: "Equipment", desc: "Base Transceiver Station for mobile networks." },
  { name: "Microwave Radio Link", category: "Equipment", desc: "Point-to-point microwave communication systems." },
  { name: "VSAT Terminal", category: "Equipment", desc: "Satellite communication terminal for remote locations." },
  { name: "Fiber Optic Cable", category: "Cables", desc: "Single-mode & multi-mode fiber cables." },
  { name: "Coaxial Cable", category: "Cables", desc: "High-quality coaxial cables for RF connections." },
  { name: "Power Cable", category: "Cables", desc: "Industrial-grade power cables for installations." },
  { name: "Cable Tester", category: "Tools", desc: "Professional network cable testing equipment." },
  { name: "Fiber Splicer", category: "Tools", desc: "Precision fiber optic fusion splicer." },
  { name: "Site Survey Kit", category: "Tools", desc: "Complete kit for professional site surveys." },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      <PageBanner title="Our Products" subtitle="Quality telecom products and equipment." />

      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Filter */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-sans font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 60}>
                <div className="bg-card rounded-lg border border-border overflow-hidden hover-lift group">
                  <div className="h-40 bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center">
                    <span className="text-5xl font-display font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                      {product.category.charAt(0)}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-sans font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <h3 className="font-sans font-semibold text-card-foreground mt-3 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{product.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
