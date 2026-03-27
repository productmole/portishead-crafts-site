import { useState, useEffect, useCallback } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ── Testimonial data — edit this array to add / remove reviews ──
const testimonials: { review: string; name: string; date: string }[] = [
  {
    review:
      "Andy fitted our kitchen from start to finish and the quality is outstanding. He managed the whole project, including the plumber and electrician, and kept everything on schedule. Couldn't recommend him more highly.",
    name: "Sarah & Tom P.",
    date: "March 2025",
  },
  {
    review:
      "We had bespoke shelving and a window seat built for our living room. The craftsmanship is beautiful — it looks like it's always been part of the house.",
    name: "James L.",
    date: "January 2025",
  },
  {
    review:
      "Prompt, tidy, and genuinely skilled. Andy replaced all the internal doors and skirting in our Victorian terrace. Perfect finish every time.",
    name: "Claire M.",
    date: "November 2024",
  },
  {
    review:
      "Had a glass balcony and decking installed. The whole team was professional and the result is stunning — we practically live outside now.",
    name: "David & Karen R.",
    date: "September 2024",
  },
];

const Testimonials = () => {
  const { ref, visible } = useScrollReveal();
  const [current, setCurrent] = useState(0);

  const count = testimonials.length;

  const goNext = useCallback(() => setCurrent((c) => (c + 1) % count), [count]);
  const goPrev = useCallback(() => setCurrent((c) => (c - 1 + count) % count), [count]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    if (count === 0) return;
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, [goNext, count]);

  // If no testimonials, render nothing
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-background">
      <div ref={ref} className="container mx-auto px-4">
        <div
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
        </div>

        {/* Desktop: 2-column grid */}
        <div
          className={`hidden md:grid grid-cols-2 gap-6 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} delay={i * 100} visible={visible} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div
          className={`md:hidden transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            <TestimonialCard {...testimonials[current]} delay={0} visible={visible} />

            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current ? "bg-primary" : "bg-border"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={goNext}
                aria-label="Next testimonial"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  review,
  name,
  date,
  delay,
  visible,
}: {
  review: string;
  name: string;
  date: string;
  delay: number;
  visible: boolean;
}) => (
  <div
    className={`bg-card rounded-lg border border-border p-6 sm:p-8 shadow-sm transition-all duration-700 hover:shadow-md ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`}
    style={{ transitionDelay: visible ? `${200 + delay}ms` : "0ms" }}
  >
    {/* Amber quote mark */}
    <span className="block font-heading text-5xl leading-none text-primary mb-2 select-none">
      &ldquo;
    </span>
    <p className="font-heading italic text-foreground/90 text-base sm:text-lg leading-relaxed mb-6">
      {review}
    </p>
    <div>
      <p className="font-body font-semibold text-foreground text-sm">{name}</p>
      <p className="font-body text-muted-foreground text-xs mt-0.5">{date}</p>
    </div>
  </div>
);

export default Testimonials;
