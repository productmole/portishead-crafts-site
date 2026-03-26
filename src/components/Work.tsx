import { useState } from "react";

const filters = ["All", "Fitted Kitchens", "Internal Fittings", "Bespoke Furniture", "Exteriors"];

// TODO: Replace these Unsplash placeholders with real project photos
const projects = [
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", cat: "Fitted Kitchens", alt: "Modern fitted kitchen project" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", cat: "Fitted Kitchens", alt: "Kitchen with wooden cabinetry" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80", cat: "Internal Fittings", alt: "Internal door fitting" },
  { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", cat: "Bespoke Furniture", alt: "Bespoke wooden furniture" },
  { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80", cat: "Internal Fittings", alt: "Built-in wardrobe" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80", cat: "Exteriors", alt: "Timber deck exterior" },
  { src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&q=80", cat: "Bespoke Furniture", alt: "Custom shelving unit" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", cat: "Exteriors", alt: "Glass balcony installation" },
];

const Work = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="work" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Recent Work
          </h2>
          <p className="text-muted-foreground font-body">
            A selection of recent projects across Portishead and the South West.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((p, i) => (
            <div
              key={`${p.src}-${i}`}
              className="relative group rounded-lg overflow-hidden bg-card shadow-sm"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground">
                {p.cat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
