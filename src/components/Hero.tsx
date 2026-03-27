import { useEffect, useState } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
        <img
        src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1920&q=80"
        alt="Carpenter working with wood in workshop"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--hero-overlay)/0.7)] via-[hsl(var(--hero-overlay)/0.5)] to-[hsl(var(--hero-overlay)/0.8)]" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <h1
          className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Bespoke Carpentry: Crafted in Portishead
        </h1>
        <p
          className={`text-lg sm:text-xl text-white/85 font-body mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          From fitted kitchens to bespoke furniture — quality you can see and touch.
          Serving Portishead and the wider South West.
        </p>
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="#work"
            className="rounded-full border-2 border-white/80 px-8 py-3 text-sm font-semibold text-white hover:bg-white/15 hover:border-white transition-all duration-300"
          >
            See Our Work
          </a>
          <a
            href="#contact"
            className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            Get a Free Quote
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
