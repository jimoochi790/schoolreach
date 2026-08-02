'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

interface NavItem {
  href: string;
  label: string;
}

const NAV_GROUPS = [
  {
    label: "NAPLAN Estimator",
    items: [
      { href: "/naplan-oc-estimator", label: "Year 3 → OC" },
      { href: "/naplan-selective-estimator", label: "Year 5 → Selective" },
    ],
  },
  {
    label: "Reserve List",
    items: [
      { href: "/reserve-list/selective", label: "Selective Schools" },
      { href: "/reserve-list/oc", label: "Opportunity Classes" },
    ],
  },
];

function NavDropdown({ label, items }: { label: string; items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const isActive = items.some(item => pathname.startsWith(item.href));

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change via key remount
  return <SiteNavInner key={pathname} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} pathname={pathname} />;
}

function SiteNavInner({ mobileOpen, setMobileOpen, pathname }: { mobileOpen: boolean; setMobileOpen: (v: boolean) => void; pathname: string }) {

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden sm:flex items-center gap-1 text-sm">
        {NAV_GROUPS.map(group => (
          <NavDropdown key={group.label} label={group.label} items={group.items} />
        ))}
        <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors px-2">
          About
        </Link>
        <span className="text-border mx-1">|</span>
        <Link
          href={pathname.startsWith("/zh") ? pathname.replace("/zh", "") : "/zh" + (pathname === "/" ? "" : pathname)}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {pathname.startsWith("/zh") ? "EN" : "中文"}
        </Link>
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="sm:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-muted transition-colors"
        aria-label="Toggle menu"
      >
        {mobileOpen ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden fixed inset-x-0 top-14 bottom-0 bg-background z-50 overflow-y-auto">
          <nav className="px-4 py-6 space-y-6">
            {NAV_GROUPS.map(group => (
              <div key={group.label}>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/50 mb-3">
                  {group.label}
                </p>
                <div className="space-y-1">
                  {group.items.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${
                        pathname.startsWith(item.href)
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/50 mb-3">
                More
              </p>
              <Link
                href="/about"
                className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  pathname.startsWith("/about")
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                About
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
