import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const filters = ["All", "Fitted Kitchens", "Internal Fittings", "Bespoke Furniture", "Exteriors"];

// TODO: Replace these Unsplash placeholders with real project photos
const projects = [
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", cat: "Fitted Kitchens", alt: "Modern fitted kitchen with wooden cabinets" },
  { src: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80", cat: "Fitted Kitchens", alt: "Contemporary kitchen installation" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", cat: "Internal Fittings", alt: "Internal timber door fitting" },
  { src: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80", cat: "Bespoke Furniture", alt: "Handcrafted bespoke wooden furniture" },
  { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80", cat: "Internal Fittings", alt: "Built-in wardrobe with shelving" },
  { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", cat: "Exteriors", alt: "Timber decking and outdoor structure" },
  { src: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80", cat: "Bespoke Furniture", alt: "Custom built-in shelving unit" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", cat: "Exteriors", alt: "Glass balcony and exterior carpentry" },
];

const Work = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref, visible } = useScrollReveal();
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const goNext = () => {
    if (lightbox !== null) setLightbox((lightbox + 1) % filtered.length);
  };
  const goPrev = () => {
    if (lightbox !== null) setLightbox((lightbox - 1 + filtered.length) % filtered.length);
  };

  return (
    <>
      <section id="work" className="py-20 lg:py-28 bg-secondary/50">
        <div ref={ref} className="container mx-auto px-4">
          <div className={`text-center max-w-2xl mx-auto mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Recent Work
            </h2>
            <p className="text-muted-foreground font-body">
              A selection of recent projects across Portishead and the South West.
            </p>
          </div>

          {/* Filters */}
          <div className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  active === f
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/30"
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
                onClick={() => openLightbox(i)}
                className={`relative group rounded-lg overflow-hidden bg-card shadow-sm cursor-pointer transition-all duration-700 hover:shadow-lg ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: visible ? `${200 + i * 80}ms` : "0ms" }}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
                <span className="absolute top-3 left-3 rounded-full bg-background/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-foreground">
                  {p.cat}
                </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-semibold text-foreground">
                    View Project
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-background hover:text-primary transition-colors"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 text-background hover:text-primary transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 text-background hover:text-primary transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightbox].src.replace("w=800", "w=1200")}
              alt={filtered[lightbox].alt}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <span className="text-background/80 text-sm font-body">
                {filtered[lightbox].alt} — <span className="text-primary">{filtered[lightbox].cat}</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Work;
