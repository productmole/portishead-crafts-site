const Footer = () => (
  <footer className="bg-footer text-footer-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <span className="font-heading text-lg font-semibold">
          Richmond Carpentry — Portishead, North Somerset
        </span>
        <nav className="flex gap-6">
          {["Services", "Work", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-footer-foreground/70 hover:text-primary transition-colors duration-300 font-body"
            >
              {l}
            </a>
          ))}
        </nav>
        <span className="text-sm text-footer-foreground/60 font-body">
          © Richmond Carpentry 2025
        </span>
      </div>
      <div className="text-center text-xs text-footer-foreground/50 font-body">
        City &amp; Guilds Qualified Carpenter
      </div>
    </div>
  </footer>
);

export default Footer;
