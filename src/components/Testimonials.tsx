import { useState, useEffect, useCallback } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ── Testimonial data — edit this array to add / remove reviews ──
const testimonials: { review: string; name: string; date: string }[] = [
  {
    review:
      "Andy just completed a kitchen refit for us. This included removing an old kitchen and fitting a new one in a different room, relaying all our flooring, building a cabinet to house our boiler and putting in shelves in an under stairs cupboard to turn it into a pantry. He was brilliant throughout, easy to talk to and quick in his response. He coordinated all plumbing and electrical work which made the whole project so much easier. The final product was finished to a real high standard and we are so happy with everything he did for us. Great value for money and super professional. I would highly recommend his services!",
    name: "Kate Webster",
    date: "",
  },
  {
    review:
      "Andy fitted new unit doors and drawers to our kitchen. He took the utmost care and we are really pleased with the result. He was polite, considerate and the price more than reasonable. Would recommend and will certainly engage him again if we need further work.",
    name: "Norma & Ian",
    date: "",
  },
  {
    review:
      "We've worked with Andy for over 7 years now. He's done jobs from hanging doors to laying multiple rooms with wooden floor to building our loft conversion. Andy is an absolute pleasure to work with, he's got an outstanding eye for detail and always delivers top quality work.",
    name: "Julia Adams",
    date: "",
  },
  {
    review:
      "Andy did a fantastic job on my son's built-in wardrobe. Great from start to finish — design, build and finish. Really good value too. Highly recommended.",
    name: "Gary Walder",
    date: "",
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
      {date && <p className="font-body text-muted-foreground text-xs mt-0.5">{date}</p>}
    </div>
  </div>
);

export default Testimonials;
