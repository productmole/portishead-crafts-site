import { useEffect, useState } from "react";
import heroImg from "../assets/gallery/IMG_5096.jpeg";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fadeClass = loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3";
  const headingStyle = { fontFamily: "'Cormorant Garamond', serif" };
  const bodyStyle = { fontFamily: "'Montserrat', sans-serif" };
  const subheading = "Fitted kitchens, bespoke wardrobes, alcove units, doors, flooring and more. City & Guilds qualified. 15 years established.";

  return (
    <>
      <style>{`@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Montserrat:wght@400;500;600;700&display=swap");`}</style>

      <section className="relative min-h-[89vh] overflow-hidden md:min-h-screen">
        <div className="grid min-h-[89vh] grid-cols-1 md:min-h-screen md:grid-cols-2">
          <div className="order-2 flex items-center justify-center bg-[#f4f1ea] px-4 py-8 sm:px-6 sm:py-14 md:order-1">
            <div className={`mx-auto w-full max-w-xl text-center md:text-left transition-all duration-700 ${fadeClass}`}>
              <h1 style={headingStyle} className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                Richmond Carpentry
              </h1>
              <p style={bodyStyle} className="mb-7 text-sm text-muted-foreground sm:mb-8 sm:text-base">
                {subheading}
              </p>
              <div className="mb-7 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row md:items-start">
                <a href="#contact" style={bodyStyle} className="w-full max-w-[260px] rounded-full bg-[#B8995A] px-6 py-2.5 text-center text-sm font-semibold text-black transition-opacity hover:opacity-90 sm:w-auto sm:px-8 sm:py-3">Get a free quote</a>
                <a href="#work" style={bodyStyle} className="w-full max-w-[260px] rounded-full border-2 border-muted-foreground px-6 py-2.5 text-center text-sm font-semibold text-muted-foreground transition-colors hover:bg-black/5 sm:w-auto sm:px-8 sm:py-3">See Our Work</a>
              </div>
            </div>
          </div>
          <div className="order-1 relative min-h-[47vh] overflow-hidden md:order-2 md:min-h-screen">
            <img
              src={heroImg}
              alt="Kitchen carpentry project"
              className="absolute inset-x-0 top-0 h-[180%] w-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
