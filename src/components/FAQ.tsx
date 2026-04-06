import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What areas do you cover?",
    a: "We're based in Portishead and cover Portishead, Clevedon, Nailsea, Portbury, and the wider North Somerset area. Get in touch if you're unsure — we're happy to travel for the right project.",
  },
  {
    q: "Do you supply materials or do I need to?",
    a: "Either works. For most projects we can supply and source all materials, or we're happy to work with materials you've already purchased. We'll agree this with you upfront so there are no surprises.",
  },
  {
    q: "How do I get a quote?",
    a: "Just get in touch via the contact form or give us a call. We'll arrange a time to visit, take a look at the project, and provide a free no-obligation quote. We aim to get quotes back to you within a few days.",
  },
  {
    q: "Are you insured?",
    a: "Yes, we carry full public liability insurance for all work we carry out.",
  },
  {
    q: "Are you qualified?",
    a: "Yes — Andy holds a City & Guilds qualification in carpentry and joinery, and has over 15 years of experience working on residential and commercial projects across North Somerset.",
  },
  {
    q: "How long will my job take?",
    a: "It depends on the scope of work. A single door or set of skirtings can often be done in a day, while a full kitchen fit or bespoke wardrobe build typically takes several days to a week. We'll give you a realistic timeframe when we quote.",
  },
  {
    q: "Can you work alongside other tradespeople?",
    a: "Absolutely. We're experienced working as part of a wider team on larger projects alongside plumbers, electricians, and plasterers, and can help coordinate the sequencing of trades if needed.",
  },
  {
    q: "Do you do small jobs as well as large ones?",
    a: "Yes — no job is too small. Whether it's a door that won't close properly, a set of shelves, or a full kitchen refit, we treat every job with the same care and attention.",
  },
];

const FAQ = () => {
  const { ref, visible } = useScrollReveal();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-secondary/50">
      <div ref={ref} className="container mx-auto px-4 max-w-3xl">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground font-body">
            Everything you need to know before getting in touch.
          </p>
        </div>
        <div className={`space-y-3 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="font-body font-semibold text-foreground text-sm sm:text-base pr-4">
                  {faq.q}
                </span>
                <span className="shrink-0 text-primary">
                  {open === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
