'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

interface NavItem {
  href: string;
  label: string;
}

function NavDropdown({ label, items }: { label: string; items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const isActive = items.some(item => pathname.startsWith(item.href));

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 text-sm transition-colors ${
          isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {label}
        <svg
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 w-48 bg-background border border-border/60 rounded-lg shadow-lg z-20">
          {items.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2 text-sm transition-colors ${
                pathname.startsWith(item.href)
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SiteNav() {
  return (
    <nav className="flex items-center gap-1 text-sm">
      <NavDropdown
        label="NAPLAN Estimator"
        items={[
          { href: "/oc", label: "Year 3 → OC" },
          { href: "/selective", label: "Year 5 → Selective" },
        ]}
      />
      <NavDropdown
        label="Reserve List"
        items={[
          { href: "/reserve-list/selective", label: "Selective Schools" },
          { href: "/reserve-list/oc", label: "Opportunity Classes" },
        ]}
      />
      <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors px-2">
        About
      </Link>
    </nav>
  );
}
