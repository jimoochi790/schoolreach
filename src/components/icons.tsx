export function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Open book / school shape */}
      <path d="M20 6L6 12v16l14 6 14-6V12L20 6z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M20 6v28" stroke="currentColor" strokeWidth="2" />
      <path d="M10 16h7M10 20h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Graduation cap tassel */}
      <path d="M26 14l3 2v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="6" r="2" fill="currentColor" />
      {/* Sun rays from top */}
      <path d="M20 1v2M14 2.5l1 1.7M26 2.5l-1 1.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function BookIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 8h20a6 6 0 016 6v20a6 6 0 01-6 6H10a4 4 0 01-4-4V12a4 4 0 014-4z" stroke="currentColor" strokeWidth="2.5" />
      <path d="M12 16h16M12 22h12M12 28h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M36 14v20" stroke="currentColor" strokeWidth="2" />
      <path d="M30 20l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChartIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="28" width="8" height="14" rx="2" fill="currentColor" opacity="0.3" />
      <rect x="18" y="18" width="8" height="24" rx="2" fill="currentColor" opacity="0.5" />
      <rect x="30" y="10" width="8" height="32" rx="2" fill="currentColor" />
      <path d="M6 26h38" stroke="currentColor" strokeWidth="1.5" />
      <path d="M34 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function WaitlistIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="6" width="24" height="36" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="22" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Waitlist people */}
      <circle cx="18" cy="18" r="1.5" fill="currentColor" opacity="0.3" />
      <circle cx="30" cy="16" r="1.5" fill="currentColor" opacity="0.2" />
      <circle cx="26" cy="32" r="1.5" fill="currentColor" opacity="0.2" />
      <circle cx="20" cy="36" r="1.5" fill="currentColor" opacity="0.15" />
      <circle cx="28" cy="36" r="1.5" fill="currentColor" opacity="0.15" />
    </svg>
  );
}

export function SchoolIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 36V18l18-12 18 12v18" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M10 36V20l14-9 14 9v16" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="26" width="12" height="16" rx="1" fill="currentColor" opacity="0.2" />
      <rect x="22" y="30" width="4" height="5" rx="0.5" fill="currentColor" opacity="0.4" />
      <path d="M24 14v6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="13" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function NSWOutline({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Simple NSW-shaped outline */}
      <path d="M4 12l1-3 2-1 1-3 3-1 2 1 4-2 2 3-1 4 2 3-2 2-4 1-3-2-2 1-3-1-1-2z" 
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="14" cy="10" r="1.5" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function SectionDivider() {
  return (
    <div className="flex items-center gap-3 py-2" aria-hidden="true">
      <div className="h-px flex-1 bg-border" />
      <svg width="28" height="8" viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="4" r="2" fill="currentColor" className="text-muted-foreground/30" />
        <circle cx="14" cy="4" r="2" fill="currentColor" className="text-muted-foreground/50" />
        <circle cx="24" cy="4" r="2" fill="currentColor" className="text-muted-foreground/30" />
      </svg>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
