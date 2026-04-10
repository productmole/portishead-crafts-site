import { useScrollReveal } from "@/hooks/useScrollReveal";
import cityGuildsLogo from "@/assets/city-and-guilds-logo.png";

const items = [
  { icon: null, logo: cityGuildsLogo, text: "City & Guilds Qualified" },
  { icon: "📍", logo: null, text: "Based in Portishead" },
  { icon: "⭐", logo: null, text: "Free Quotes Always Provided" },
];

const TrustBar = () => {
  const { ref, visible } = useScrollReveal(0.3);

  return (
    <section ref={ref} className="bg-secondary py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
        {items.map((item, i) => (
          <div
            key={item.text}
            className={`flex items-center gap-2 text-foreground transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: visible ? `${i * 150}ms` : "0ms" }}
          >
            {item.logo ? (
              <img src={item.logo} alt="City & Guilds" className="h-7 w-auto" />
            ) : (
              <span className="text-2xl" role="img" aria-hidden="true">{item.icon}</span>
            )}
            <span className="text-sm font-medium font-body">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
