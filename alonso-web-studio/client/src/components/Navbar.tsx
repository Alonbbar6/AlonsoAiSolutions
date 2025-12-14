import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [location] = useLocation();

  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Showcase", href: "/showcase" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 font-serif text-xl font-bold text-primary">
            <span className="text-secondary">Alonso</span> Web Studio
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.name}
              </a>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/intake">
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
