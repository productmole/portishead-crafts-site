const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <img
      src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80"
      alt="Warm wood texture background"
      loading="eager"
      className="absolute inset-0 w-full h-full object-cover"
    />
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.6)]" />

    <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
      <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
        Bespoke Carpentry, Crafted in Portishead
      </h1>
      <p className="text-lg sm:text-xl text-white/85 font-body mb-10 max-w-2xl mx-auto">
        From fitted kitchens to bespoke furniture — quality you can see and touch.
        Serving Portishead and the wider South West.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#work"
          className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
        >
          See Our Work
        </a>
        <a
          href="#contact"
          className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Get a Free Quote
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
