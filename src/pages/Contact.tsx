import { Link } from "react-router-dom";
import { contactLinks } from "@/content/contact";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto max-w-2xl animate-fade-in">
        <Link
          to="/"
          className="mb-12 inline-block text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          ← Home
        </Link>

        <h1 className="mb-10 text-4xl font-bold md:text-5xl" style={{ color: "#FF69B4" }}>Contact</h1>

        <div className="space-y-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-sm border border-border p-5 transition-all hover:border-primary hover:shadow-md"
            >
              <span className="text-lg font-medium transition-colors group-hover:text-primary">
                {link.label}
              </span>
              <span className="ml-2 text-sm text-muted-foreground">↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
