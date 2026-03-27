import { useState, type FormEvent } from "react";
import { Phone, Mail, Send, Loader2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FORMSPREE_URL = "https://formspree.io/f/mjgpgbbk";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { ref, visible } = useScrollReveal();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary/50">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Call Andy directly or fill in the form and we'll get back to you.
            </p>
            <div className="space-y-4">
              <a
                href="tel:07722959708"
                className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="font-body font-medium">07722 959708</span>
              </a>
              <a
                href="mailto:rcsportishead@gmail.com"
                className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="font-body font-medium">rcsportishead@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className={`bg-card rounded-lg p-8 shadow-sm border border-border transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-primary" />
                </div>
                <p className="text-xl font-heading font-semibold text-foreground mb-2">
                  Thanks!
                </p>
                <p className="text-muted-foreground font-body">Andy will be in touch soon.</p>
              </div>
            ) : status === "error" ? (
              <div className="text-center py-12">
                <p className="text-xl font-heading font-semibold text-foreground mb-2">
                  Something went wrong
                </p>
                <p className="text-muted-foreground font-body">
                  Please email{" "}
                  <a href="mailto:rcsportishead@gmail.com" className="text-primary underline">
                    rcsportishead@gmail.com
                  </a>{" "}
                  directly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm text-primary hover:underline font-body"
                >
                  Try again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1.5 font-body">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      disabled={status === "loading"}
                      className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1.5 font-body">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      disabled={status === "loading"}
                      className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow disabled:opacity-50"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5 font-body">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={status === "loading"}
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5 font-body">
                    Phone <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    disabled={status === "loading"}
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5 font-body">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    disabled={status === "loading"}
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-shadow disabled:opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
