import { ChefHat, Armchair, DoorOpen, LayoutGrid, Monitor, Fence } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: ChefHat,
    title: "Fitted Kitchens",
    desc: "Complete fitted kitchen installations with careful finishing and practical layouts for everyday use.",
  },
  {
    icon: LayoutGrid,
    title: "Bespoke Wardrobes",
    desc: "Built-to-measure wardrobes designed around your room, including awkward spaces and alcoves.",
  },
  {
    icon: Armchair,
    title: "Alcove Units",
    desc: "Custom alcove shelving and cabinets that make the most of unused space and match your interior.",
  },
  {
    icon: DoorOpen,
    title: "Doors",
    desc: "Internal door fitting and replacement with accurate hanging, clean lines, and reliable operation.",
  },
  {
    icon: Monitor,
    title: "Flooring",
    desc: "Professional timber and patterned flooring installation with attention to detail across the full run.",
  },
  {
    icon: Fence,
    title: "Skirtings",
    desc: "Neat skirting installation and finishing to complete rooms and tie new joinery together.",
  },
];

const Services = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground font-body">
            We provide free quotes for jobs of all sizes — from small one-off home improvements to larger ongoing commercial projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group bg-card rounded-lg p-6 border border-border shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${150 + i * 100}ms` : "0ms" }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <s.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
