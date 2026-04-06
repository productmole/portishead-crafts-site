import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import img_1401 from "../assets/gallery/IMG_1401.jpeg";
import img_0812 from "../assets/gallery/IMG_0812.jpeg";
import img_3116 from "../assets/gallery/IMG_3116.jpeg";
import img_3962 from "../assets/gallery/IMG_3962.jpeg";
import img_4059 from "../assets/gallery/IMG_4059.jpeg";
import img_3109 from "../assets/gallery/IMG_3109.jpeg";
import img_1628 from "../assets/gallery/IMG_1628.jpeg";
import img_3932 from "../assets/gallery/IMG_3932.jpeg";
import img_0769 from "../assets/gallery/IMG_0769.jpeg";
import img_0775 from "../assets/gallery/IMG_0775.jpeg";
import img_0778 from "../assets/gallery/IMG_0778.jpeg";
import img_3464 from "../assets/gallery/IMG_3464.jpeg";
import img_3236 from "../assets/gallery/IMG_3236.jpeg";
import img_2280 from "../assets/gallery/IMG_2280.jpeg";
import img_3943 from "../assets/gallery/IMG_3943.jpeg";
import img_4172 from "../assets/gallery/IMG_4172.jpeg";
import img_4183 from "../assets/gallery/IMG_4183.jpeg";
import img_1288 from "../assets/gallery/IMG_1288.jpeg";
import img_2797 from "../assets/gallery/IMG_2797.jpeg";
import img_4068 from "../assets/gallery/IMG_4068.jpeg";
import img_1155 from "../assets/gallery/IMG_1155.jpeg";

const filters = ["All", "Fitted Kitchens", "Bespoke Furniture", "Internal Fittings", "Exteriors"];

const projects: { src: string; cat: string; alt: string; caption?: string }[] = [
  { src: img_1401, cat: "Fitted Kitchens", alt: "Dark shaker kitchen with range cooker and Belfast sink" },
  { src: img_0812, cat: "Fitted Kitchens", alt: "White shaker kitchen with oak worktop" },
  { src: img_3116, cat: "Fitted Kitchens", alt: "Forest green shaker kitchen" },
  { src: img_3962, cat: "Fitted Kitchens", alt: "Charcoal kitchen with marble island" },
  { src: img_4059, cat: "Fitted Kitchens", alt: "Dark kitchen with marble splashback" },
  { src: img_1628, cat: "Fitted Kitchens", alt: "White gloss kitchen with dark worktop" },
  { src: img_3109, cat: "Fitted Kitchens", alt: "Handleless grey kitchen with island" },
  { src: img_3932, cat: "Fitted Kitchens", alt: "Light grey shaker kitchen" },
  { src: img_0769, cat: "Exteriors", alt: "Raised deck with glass balustrade" },
  { src: img_0775, cat: "Exteriors", alt: "Garden decking with planter" },
  { src: img_0778, cat: "Exteriors", alt: "Timber pergola" },
  { src: img_3464, cat: "Exteriors", alt: "Composite deck with hot tub platform" },
  { src: img_3236, cat: "Bespoke Furniture", alt: "Wall-to-wall wardrobe with TV recess" },
  { src: img_2280, cat: "Bespoke Furniture", alt: "Loft bed with storage staircase" },
  { src: img_3943, cat: "Bespoke Furniture", alt: "Navy fitted pantry cupboard" },
  { src: img_4172, cat: "Bespoke Furniture", alt: "Fitted wardrobe with arched ceiling" },
  { src: img_4183, cat: "Bespoke Furniture", alt: "Alcove shelving beside fireplace" },
  { src: img_1288, cat: "Internal Fittings", alt: "Oak and glass staircase balustrade" },
  { src: img_2797, cat: "Internal Fittings", alt: "Oak staircase with black metal balusters" },
  { src: img_4068, cat: "Internal Fittings", alt: "Herringbone hallway flooring" },
  { src: img_1155, cat: "Internal Fittings", alt: "Door frame and cornice detail" },
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
                {p.caption && (
                  <div className="px-3 py-2.5">
                    <p className="text-sm font-body text-foreground/80">{p.caption}</p>
                  </div>
                )}
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
