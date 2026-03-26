import { useState, type FormEvent } from "react";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Call Andy directly or fill in the form and we'll get back to you.
            </p>
            <div className="space-y-4">
              <a
                href="tel:07722959708"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-body font-medium">07722 959708</span>
              </a>
              <a
                href="mailto:rcsportishead@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-body font-medium">rcsportishead@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            {submitted ? (
              <div className="text-center py-12">
                <p className="text-xl font-heading font-semibold text-foreground mb-2">
                  Thanks!
                </p>
                <p className="text-muted-foreground font-body">Andy will be in touch soon.</p>
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
                      type="text"
                      required
                      className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1.5 font-body">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5 font-body">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5 font-body">
                    Phone <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5 font-body">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Send Message
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
