const items = [
  { icon: "🏅", text: "City & Guilds Qualified" },
  { icon: "📍", text: "Based in Portishead" },
  { icon: "⭐", text: "Free Quotes Always Provided" },
];

const TrustBar = () => (
  <section className="bg-secondary py-6">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
      {items.map((item) => (
        <div key={item.text} className="flex items-center gap-2 text-foreground">
          <span className="text-2xl" role="img" aria-hidden="true">{item.icon}</span>
          <span className="text-sm font-medium font-body">{item.text}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TrustBar;
