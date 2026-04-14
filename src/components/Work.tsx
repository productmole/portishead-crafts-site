import { useState, useEffect, useCallback, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import img_0769 from "../assets/gallery/IMG_0769.jpeg";
import img_0775 from "../assets/gallery/IMG_0775.jpeg";
import img_0778 from "../assets/gallery/IMG_0778.jpeg";
import img_0782 from "../assets/gallery/IMG_0782.jpeg";
import img_0804 from "../assets/gallery/IMG_0804.jpeg";
import img_0816 from "../assets/gallery/IMG_0816.jpeg";
import img_1150 from "../assets/gallery/IMG_1150.jpeg";
import img_1152 from "../assets/gallery/IMG_1152.jpeg";
import img_1155 from "../assets/gallery/IMG_1155.jpeg";
import img_1288 from "../assets/gallery/IMG_1288.jpeg";
import img_1370 from "../assets/gallery/IMG_1370.jpeg";
import img_1382 from "../assets/gallery/IMG_1382.jpeg";
import img_1401 from "../assets/gallery/IMG_1401.jpeg";
import img_1404 from "../assets/gallery/IMG_1404.jpeg";
import img_1621 from "../assets/gallery/IMG_1621.jpeg";
import img_1624 from "../assets/gallery/IMG_1624.jpeg";
import img_1628 from "../assets/gallery/IMG_1628.jpeg";
import img_1661 from "../assets/gallery/IMG_1661.jpeg";
import img_1662 from "../assets/gallery/IMG_1662.jpeg";
import img_1669 from "../assets/gallery/IMG_1669.jpeg";
import img_1718 from "../assets/gallery/IMG_1718.jpeg";
import img_2054 from "../assets/gallery/IMG_2054.jpeg";
import img_2278 from "../assets/gallery/IMG_2278.jpeg";
import img_2279 from "../assets/gallery/IMG_2279.jpeg";
import img_2280 from "../assets/gallery/IMG_2280.jpeg";
import img_2691 from "../assets/gallery/IMG_2691.jpeg";
import img_2776 from "../assets/gallery/IMG_2776.jpeg";
import img_2777 from "../assets/gallery/IMG_2777.jpeg";
import img_2797 from "../assets/gallery/IMG_2797.jpeg";
import img_2813 from "../assets/gallery/IMG_2813.jpeg";
import img_2815 from "../assets/gallery/IMG_2815.jpeg";
import img_2827 from "../assets/gallery/IMG_2827.jpeg";
import img_2927 from "../assets/gallery/IMG_2927.jpeg";
import img_2930 from "../assets/gallery/IMG_2930.jpeg";
import img_2986 from "../assets/gallery/IMG_2986.jpeg";
import img_2990 from "../assets/gallery/IMG_2990.jpeg";
import img_3102 from "../assets/gallery/IMG_3102.jpeg";
import img_3107 from "../assets/gallery/IMG_3107.jpeg";
import img_3109 from "../assets/gallery/IMG_3109.jpeg";
import img_3116 from "../assets/gallery/IMG_3116.jpeg";
import img_3234 from "../assets/gallery/IMG_3234.jpeg";
import img_3235 from "../assets/gallery/IMG_3235.jpeg";
import img_3236 from "../assets/gallery/IMG_3236.jpeg";
import img_3280 from "../assets/gallery/IMG_3280.jpeg";
import img_3281 from "../assets/gallery/IMG_3281.jpeg";
import img_3284 from "../assets/gallery/IMG_3284.jpeg";
import img_3330 from "../assets/gallery/IMG_3330.jpeg";
import img_3464 from "../assets/gallery/IMG_3464.jpeg";
import img_3932 from "../assets/gallery/IMG_3932.jpeg";
import img_3933 from "../assets/gallery/IMG_3933.jpeg";
import img_3966 from "../assets/gallery/IMG_3966.jpeg";
import img_3968 from "../assets/gallery/IMG_3968.jpeg";
import img_3970 from "../assets/gallery/IMG_3970.jpeg";
import img_3971 from "../assets/gallery/IMG_3971.jpeg";
import img_4059 from "../assets/gallery/IMG_4059.jpeg";
import img_4068 from "../assets/gallery/IMG_4068.jpeg";
import img_4137 from "../assets/gallery/IMG_4137.jpeg";
import img_4138 from "../assets/gallery/IMG_4138.jpeg";
import img_4170 from "../assets/gallery/IMG_4170.jpeg";
import img_4172 from "../assets/gallery/IMG_4172.jpeg";
import img_4183 from "../assets/gallery/IMG_4183.jpeg";
import img_new_kitchen_oak from "../assets/gallery/Image 2026-04-13 at 18.59.32.jpeg";
import img_new_openplan from "../assets/gallery/Image 2026-04-13 at 18.59.33.jpeg";
import img_new_oventower from "../assets/gallery/Image 2026-04-13 at 18.59.33 (1).jpeg";
import img_new_shutters from "../assets/gallery/Image 2026-04-13 at 19.40.03.jpeg";
import img_new_wardrobe from "../assets/gallery/Image 2026-04-13 at 18.52.16.jpeg";
import deckingDetail1 from "../assets/gallery/decking-detail-1.jpeg";
import deckingSteps from "../assets/gallery/decking-steps.jpeg";
import hotTubSurround from "../assets/gallery/hot-tub-surround.jpeg";
import balconyCorner from "../assets/gallery/balcony-glass-balustrade-corner.jpeg";
import balconyLength from "../assets/gallery/balcony-decking-length.jpeg";
import balconyStepDetail from "../assets/gallery/balcony-decking-step-detail.jpeg";
import balconyWide from "../assets/gallery/balcony-glass-balustrade-wide.jpeg";
import oakLedgedDoor from "../assets/gallery/oak-ledged-door.jpeg";
import oakPanelDoor from "../assets/gallery/oak-panel-door.jpeg";
import oakArchitrave from "../assets/gallery/oak-architrave-detail.jpeg";
import shakerKitchenWide from "../assets/gallery/shaker-kitchen-wide.jpeg";
import shakerKitchenAppliances from "../assets/gallery/shaker-kitchen-appliances.jpeg";
import greyLarder from "../assets/gallery/grey-shaker-larder.jpeg";
import oakFloatingShelves from "../assets/gallery/oak-floating-shelves.jpeg";
import fittedWardrobeClosed from "../assets/gallery/fitted-wardrobe-closed.jpeg";
import fittedWardrobeInterior from "../assets/gallery/fitted-wardrobe-interior.jpeg";

const filters = ["All", "Fitted Kitchens", "Bespoke Furniture", "Internal Fittings", "Exteriors"];

const INITIAL_COUNT = 3;

const projects: { src: string; cat: string; alt: string }[] = [
  { src: img_3966, cat: "Fitted Kitchens", alt: "Dark navy shaker kitchen with Belfast sink, LED splashback and herringbone floor" },
  { src: img_0769, cat: "Exteriors", alt: "Raised timber deck with glass balustrade and steel posts" },
  { src: img_1404, cat: "Fitted Kitchens", alt: "Dark grey shaker pantry cabinet with cup handles next to navy blue kitchen units" },
  { src: img_3970, cat: "Fitted Kitchens", alt: "Dark navy kitchen with white quartz island and LED glass splashback" },
  { src: img_new_openplan, cat: "Fitted Kitchens", alt: "Open-plan grey gloss kitchen with island, pendant lights and oak flooring" },
  { src: img_1621, cat: "Bespoke Furniture", alt: "Under-stair storage cupboard fitted to sloping profile" },
  { src: img_2815, cat: "Internal Fittings", alt: "Oak and glass staircase balustrade viewed from landing" },
  { src: img_0778, cat: "Exteriors", alt: "Timber pergola installed to rear of property" },
  { src: img_new_shutters, cat: "Fitted Kitchens", alt: "Light grey shaker kitchen with plantation shutters and stone-effect worktop" },
  { src: img_1370, cat: "Bespoke Furniture", alt: "White handleless eaves wardrobe fitted to loft slope" },
  { src: img_2827, cat: "Internal Fittings", alt: "Decorative wainscot panelling installed on staircase walls" },
  { src: img_0782, cat: "Exteriors", alt: "Timber pergola over rear patio" },
  { src: img_2280, cat: "Bespoke Furniture", alt: "Bespoke loft bed with integrated storage staircase and desk" },
  { src: img_1288, cat: "Internal Fittings", alt: "Oak and glass staircase balustrade with hardwood flooring" },
  { src: img_0775, cat: "Exteriors", alt: "Garden decking with integrated planter box detail" },
  { src: img_4068, cat: "Internal Fittings", alt: "Herringbone hallway flooring installed through full run" },

  { src: img_3107, cat: "Fitted Kitchens", alt: "Grey shaker kitchen with dark marble splashback, integrated oven and LED plinth lighting" },
  { src: img_2797, cat: "Internal Fittings", alt: "Oak staircase with decorative black metal balusters" },
  { src: img_0804, cat: "Exteriors", alt: "Raised timber deck with glass balustrade" },
  { src: img_4059, cat: "Fitted Kitchens", alt: "Dark kitchen full run with marble splashback and brass tap" },
  { src: img_3116, cat: "Bespoke Furniture", alt: "Built-in wardrobes with integrated TV unit" },
  { src: img_2813, cat: "Internal Fittings", alt: "Oak staircase with glass balustrade panels and open risers" },
  { src: img_3464, cat: "Exteriors", alt: "Composite decking with hot tub platform and stepped levels" },
  { src: img_2054, cat: "Internal Fittings", alt: "Painted spindle balustrade with oak handrail at loft landing" },
  { src: img_3235, cat: "Fitted Kitchens", alt: "Green shaker kitchen with marble worktop and white metro tiles" },
  { src: img_4183, cat: "Bespoke Furniture", alt: "Custom alcove shelving and cabinets either side of fireplace" },
  { src: img_3234, cat: "Fitted Kitchens", alt: "Green shaker kitchen full run with brass tap and white metro tiles" },
  { src: img_4172, cat: "Bespoke Furniture", alt: "Taupe fitted wardrobe adapted to arched ceiling profile" },
  { src: img_3236, cat: "Fitted Kitchens", alt: "Green kitchen units with marble worktop and brass tap" },
  { src: img_2279, cat: "Bespoke Furniture", alt: "Loft bed storage staircase with plywood drawers and oak treads" },
  { src: img_1718, cat: "Fitted Kitchens", alt: "White gloss kitchen with dark quartz worktop and metro tile splashback" },
  { src: img_2278, cat: "Bespoke Furniture", alt: "Loft bed storage staircase with drawers open showing internal compartments" },
  { src: img_3102, cat: "Fitted Kitchens", alt: "Shaker kitchen with dark marble worktop and matching splashback" },
  { src: img_2990, cat: "Bespoke Furniture", alt: "Floor-to-ceiling fitted wardrobe with internal shelving compartments" },
  { src: img_3284, cat: "Fitted Kitchens", alt: "Navy blue kitchen units with white worktop and integrated tall pantry" },
  { src: img_2986, cat: "Bespoke Furniture", alt: "Floor-to-ceiling handleless fitted wardrobe in white" },
  { src: img_3281, cat: "Fitted Kitchens", alt: "Navy blue handleless kitchen with metro tile splashback and double oven" },
  { src: img_2930, cat: "Bespoke Furniture", alt: "Built-in eaves wardrobe with hanging rails and adjustable shelving" },
  { src: img_3280, cat: "Fitted Kitchens", alt: "Navy kitchen island with skylight in open-plan dining area" },
  { src: img_2927, cat: "Bespoke Furniture", alt: "Full-width handleless fitted wardrobe in light grey" },
  { src: img_3971, cat: "Fitted Kitchens", alt: "Dark navy kitchen close-up of Belfast sink with LED glass splashback" },
  { src: img_2776, cat: "Bespoke Furniture", alt: "Green fitted alcove wardrobe with push-to-open doors" },
  { src: img_0816, cat: "Fitted Kitchens", alt: "Light grey shaker kitchen with oak worktop and LED undercabinet lighting" },
  { src: img_2777, cat: "Bespoke Furniture", alt: "Green fitted wardrobe interior with chrome rails and shelving" },
  { src: img_1628, cat: "Fitted Kitchens", alt: "White gloss kitchen with contrasting dark worktop and tiled splashback" },
  { src: img_1382, cat: "Bespoke Furniture", alt: "Beech-veneered fitted wardrobe adapted to sloped ceiling" },
  { src: img_3109, cat: "Fitted Kitchens", alt: "Shaker kitchen with matching worktop and wall tiles" },
  { src: img_4170, cat: "Bespoke Furniture", alt: "Painted wardrobe with panelled doors fitted to eaves profile" },
  { src: img_3932, cat: "Fitted Kitchens", alt: "Light grey shaker kitchen with stone worktop" },
  { src: img_3330, cat: "Bespoke Furniture", alt: "Under-stair storage cupboard with MDF panelled doors" },
  { src: img_3933, cat: "Fitted Kitchens", alt: "Light grey shaker kitchen with integrated wine rack and stone worktop" },
  { src: img_1624, cat: "Bespoke Furniture", alt: "Under-stair cupboard with angled doors" },
  { src: img_1661, cat: "Fitted Kitchens", alt: "Contemporary handleless kitchen with integrated double oven and quartz worktop" },
  { src: img_4137, cat: "Bespoke Furniture", alt: "Handmade pine tongue-and-groove cupboard with turned knobs" },
  { src: img_1662, cat: "Fitted Kitchens", alt: "Taupe handleless kitchen with quartz worktop and L-shaped layout" },
  { src: img_4138, cat: "Bespoke Furniture", alt: "Handmade pine storage cupboard with shelving" },
  { src: img_1669, cat: "Fitted Kitchens", alt: "Handleless kitchen with oak breakfast bar island and integrated appliances" },
  { src: img_2691, cat: "Bespoke Furniture", alt: "Bespoke cloakroom fitted vanity and tongue-and-groove panelling" },
  { src: img_1150, cat: "Fitted Kitchens", alt: "Grey shaker kitchen with curved island and quartz worktop" },
  { src: img_3968, cat: "Fitted Kitchens", alt: "Dark navy shaker coffee bar fitted under sloping ceiling with white quartz worktop" },
  { src: img_1152, cat: "Fitted Kitchens", alt: "Grey shaker kitchen with double oven tower and quartz worktop" },
  { src: img_new_wardrobe, cat: "Bespoke Furniture", alt: "Four-door shaker wardrobe with brass knobs fitted wall-to-wall" },
  { src: img_1155, cat: "Fitted Kitchens", alt: "Charcoal shaker kitchen units with granite worktop" },
  { src: img_1401, cat: "Fitted Kitchens", alt: "Dark grey shaker kitchen with range cooker and Belfast sink" },
  { src: img_new_kitchen_oak, cat: "Fitted Kitchens", alt: "Shaker kitchen with butcher-block oak worktop and patterned tile splashback" },
  { src: img_new_oventower, cat: "Fitted Kitchens", alt: "White gloss oven tower with LED display shelving and double built-in ovens" },

  { src: deckingDetail1, cat: "Exteriors", alt: "Composite decking with chevron pattern detail" },
  { src: deckingSteps, cat: "Exteriors", alt: "Tiered composite decking steps with hot tub surround" },
  { src: hotTubSurround, cat: "Exteriors", alt: "Composite decking with built-in hot tub recess" },
  { src: balconyCorner, cat: "Exteriors", alt: "Composite balcony decking with frameless glass balustrade" },
  { src: balconyLength, cat: "Exteriors", alt: "Raised composite decking balcony with glass panels" },
  { src: balconyStepDetail, cat: "Exteriors", alt: "Balcony decking with step-down detail and glass surround" },
  { src: balconyWide, cat: "Exteriors", alt: "Wide-angle view of composite balcony with glass balustrade" },
  { src: oakLedgedDoor, cat: "Internal Fittings", alt: "Handmade oak ledged door with wrought-iron strap hinges" },
  { src: oakPanelDoor, cat: "Internal Fittings", alt: "Solid oak panel door with matching oak frame" },
  { src: oakArchitrave, cat: "Internal Fittings", alt: "Oak architrave mitre joint detail" },
  { src: shakerKitchenWide, cat: "Fitted Kitchens", alt: "Fitted shaker kitchen with oak worktop and under-cabinet lighting" },
  { src: shakerKitchenAppliances, cat: "Fitted Kitchens", alt: "Shaker kitchen with integrated appliances and oak worktop" },
  { src: greyLarder, cat: "Fitted Kitchens", alt: "Grey shaker-style larder unit with drawers and chrome handles" },
  { src: oakFloatingShelves, cat: "Bespoke Furniture", alt: "Bespoke oak floating corner shelves" },
  { src: fittedWardrobeClosed, cat: "Bespoke Furniture", alt: "Built-in fitted wardrobes with shaker-style doors" },
  { src: fittedWardrobeInterior, cat: "Bespoke Furniture", alt: "Fitted wardrobe interior with shelving and hanging space" },
];

const Work = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const { ref, visible } = useScrollReveal();

  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);
  const hasMore = filtered.length > visibleCount;
  const visibleItems = filtered.slice(0, visibleCount);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const goNext = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev + 1) % filtered.length : null));
  }, [filtered.length]);
  const goPrev = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);

  const handleFilterChange = (f: string) => {
    setActive(f);
    setVisibleCount(INITIAL_COUNT);
  };

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox, goNext, goPrev]);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) < 50 || Math.abs(dy) > Math.abs(dx)) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  return (
    <>
      <section id="work" className="py-20 lg:py-28 bg-secondary/50">
        <div ref={ref} className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 transition-all duration-700 opacity-100 translate-y-0">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Recent Work
            </h2>
            <p className="text-muted-foreground font-body">
              A selection of recent projects across Portishead and the South West.
            </p>
          </div>

          {/* Filters — single scrollable row on mobile */}
          <div className="flex overflow-x-auto scrollbar-hide gap-2 mb-10 pb-2 md:justify-center md:flex-wrap transition-all duration-700 delay-100 opacity-100 translate-y-0">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => handleFilterChange(f)}
                className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  active === f
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid — 2 cols mobile, 3 cols desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
            {visibleItems.map((p, i) => (
              <div
                key={`${p.src}-${active}-${i}`}
                onClick={() => openLightbox(i)}
                className={`relative group overflow-hidden cursor-pointer aspect-[4/5] transition-all duration-500 hover:shadow-lg ${
                  i >= visibleCount - 3 && visibleCount > INITIAL_COUNT ? "animate-fade-in-up" : ""
                }`}
                style={{
                  transitionDelay: visible ? `${100 + i * 60}ms` : "0ms",
                  animationDelay: i >= visibleCount - 3 && visibleCount > INITIAL_COUNT ? `${(i - (visibleCount - 3)) * 60}ms` : undefined,
                }}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
                <span className="absolute top-2 left-2 rounded-full bg-background/80 backdrop-blur-sm px-2.5 py-0.5 text-[10px] md:text-xs font-medium text-foreground/90">
                  {p.cat}
                </span>
              </div>
            ))}
          </div>

          {/* View More */}
          {hasMore && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setVisibleCount((c) => c + 3)}
                className="rounded-full px-8 py-3 text-sm font-medium bg-primary text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                View more
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-md flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-10 bg-background/20 backdrop-blur-sm rounded-full p-2 text-background hover:text-primary transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-3 md:left-6 z-10 bg-background/20 backdrop-blur-sm rounded-full p-2 text-background hover:text-primary transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-3 md:right-6 z-10 bg-background/20 backdrop-blur-sm rounded-full p-2 text-background hover:text-primary transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          <div className="max-w-4xl w-full px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="text-center mt-3">
              <span className="text-background/70 text-sm font-body">
                {filtered[lightbox].alt}
                <span className="mx-2 text-background/30">·</span>
                <span className="text-primary">{filtered[lightbox].cat}</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Work;
