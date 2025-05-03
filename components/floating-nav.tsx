"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, Code, Briefcase, FileText, Mail, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMobile } from "@/hooks/use-mobile";

const navItems = [
  { name: "Home", href: "#hero", icon: <Home className="h-4 w-4" /> },
  { name: "GitHub", href: "#github", icon: <Code className="h-4 w-4" /> },
  { name: "Skills", href: "#skills", icon: <FileText className="h-4 w-4" /> },
  { name: "Decks", href: "#decks", icon: <FileText className="h-4 w-4" /> },
  {
    name: "Internships",
    href: "#internships",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: <Briefcase className="h-4 w-4" />,
  },
  { name: "Contact", href: "#contact", icon: <Mail className="h-4 w-4" /> },
];

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "fixed right-4 top-4 z-50 rounded-full bg-background/80 backdrop-blur transition-all",
              isScrolled ? "shadow-md" : ""
            )}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[250px] bg-background/95 backdrop-blur"
        >
          <nav className="mt-12 flex flex-col gap-4">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="justify-start text-base"
                onClick={() => scrollToSection(item.href)}
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className={cn(
        "fixed left-1/2 top-6 z-50 -translate-x-1/2 transform transition-all duration-300",
        isScrolled ? "top-4" : ""
      )}
    >
      <nav
        className={cn(
          "flex rounded-full border bg-background/80 px-4 py-2 shadow backdrop-blur transition-all",
          isScrolled ? "shadow-md" : ""
        )}
      >
        {navItems.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            className="text-sm"
            onClick={() => scrollToSection(item.href)}
          >
            {item.icon}
            <span className="ml-1">{item.name}</span>
          </Button>
        ))}
      </nav>
    </div>
  );
}
