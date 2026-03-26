import { Check } from "lucide-react";

const trustItems = [
  "City & Guilds Qualified",
  "Based in Portishead, North Somerset",
  "Residential & Commercial Projects",
  "Trusted Tradespeople Network (plasterers, plumbers, electricians)",
  "Free Quotes — No Obligation",
];

const About = () => (
  <section id="about" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left */}
        <div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Andy Richmond — Craftsman, Portishead
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            We're a City &amp; Guilds qualified carpentry business based in Portishead, working with homeowners and businesses throughout North Somerset and beyond.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mb-8">
            Every job — from a single door to a full kitchen — gets the same attention to detail and the same trusted team. Get in touch for a free, no-obligation quote.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Contact Andy
          </a>
        </div>

        {/* Right — trust card */}
        <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Why Choose Us</h3>
          <ul className="space-y-4">
            {trustItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground font-body">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
