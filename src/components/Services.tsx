import { ChefHat, Armchair, DoorOpen, LayoutGrid, Monitor, Fence } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: ChefHat,
    title: "Kitchen Planning & Fitting",
    desc: "Full kitchen installation with project management, including a trusted team of plasterers, plumbers, and electricians.",
  },
  {
    icon: Armchair,
    title: "Bespoke Furniture",
    desc: "Custom-built pieces designed and crafted to fit your space perfectly.",
  },
  {
    icon: DoorOpen,
    title: "Doors & Skirting",
    desc: "Internal door fitting and skirting board installation, clean and precise.",
  },
  {
    icon: LayoutGrid,
    title: "Wardrobes & Storage",
    desc: "Built-in wardrobes and storage solutions tailored to your room.",
  },
  {
    icon: Monitor,
    title: "Office Workstations",
    desc: "Practical, well-crafted workspaces for home and commercial offices.",
  },
  {
    icon: Fence,
    title: "Glass Balconies & Exteriors",
    desc: "Outdoor structures, decking, pergolas, and glass balcony installations.",
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
