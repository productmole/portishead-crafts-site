import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const trustItems = [
  "15 Years Established",
  "City & Guilds Qualified",
  "Based in Portishead, North Somerset",
  "Projects Large & Small",
  "Trusted Tradespeople Network (plasterers, plumbers, electricians)",
  "Free Quotes — No Obligation",
];

const About = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Andy Weaver — Carpenter, Portishead
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Richmond Carpentry is a City &amp; Guilds qualified carpentry business based in Portishead, with 15 years of experience serving homeowners throughout North Somerset and beyond.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Every job — from a single door to a full kitchen — gets the same attention to detail and the same trusted team. Get in touch for a free, no-obligation quote.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Contact Andy
            </a>
          </div>

          {/* Right — trust card */}
          <div className={`bg-card rounded-lg p-8 shadow-sm border border-border transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Why Choose Us</h3>
            <ul className="space-y-4">
              {trustItems.map((item, i) => (
                <li
                  key={item}
                  className={`flex items-start gap-3 transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                  style={{ transitionDelay: visible ? `${400 + i * 100}ms` : "0ms" }}
                >
                  <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-foreground font-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
