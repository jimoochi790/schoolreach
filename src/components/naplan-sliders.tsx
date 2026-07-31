'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { DOMAIN_LABELS, getYearInfo } from '@/lib/naplan';

interface NaplanSlidersProps {
  year: 'year3' | 'year5';
  scores: Record<string, number>;
  onChange: (domain: string, value: string) => void;
}

const DOMAINS = ['numeracy', 'reading', 'writing', 'spelling', 'grammar'] as const;

const COLORS = {
  exceeding:  '#99c3f4',
  strong:     '#bad4f6',
  developing: '#d9e7fb',
  needs:      '#ffffff',
  hexGreen:   '#b9da62',
  hexStroke:  '#6b7f38',
  hexInner:   '#e8f3cc',
  boxStroke:  '#2c2c2c',
  text:       '#1d1d1b',
};

const VW = 350;
const VH = 820;
const HEX_TOP = 30;
const HEX_BOT = 790;
const HEX_H = HEX_BOT - HEX_TOP;
const HEX_CX = 205;

const LEVELS = [
  { label: 'Exceeding',              y: 70,  h: 170, fill: COLORS.exceeding },
  { label: 'Strong',                 y: 240, h: 250, fill: COLORS.strong },
  { label: 'Developing',             y: 490, h: 120, fill: COLORS.developing },
  { label: ['Needs', 'additional', 'support'], y: 610, h: 140, fill: COLORS.needs },
];

function NaplanBarSVG({
  label,
  bands,
  value,
  onChange,
}: {
  label: string;
  bands: { value: number; label: string }[];
  value?: number;
  onChange: (value: string) => void;
}) {
  const minBand = bands[0].value;
  const maxBand = bands[bands.length - 1].value;
  const committedVal = value ?? minBand;
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const ownCommitRef = useRef(false);

  const [posFraction, setPosFraction] = useState(
    () => (committedVal - minBand) / (maxBand - minBand)
  );
  const [dragging, setDragging] = useState(false);

  // The dot follows posFraction at all times — continuous, no band snapping
  const markerY = HEX_BOT - posFraction * HEX_H;

  // Sync to band position when value changes from outside (e.g. Reset button).
  // Skip our own commits via ownCommitRef.
  useEffect(() => {
    if (ownCommitRef.current) {
      ownCommitRef.current = false;
      return;
    }
    if (!dragging) {
      setPosFraction((committedVal - minBand) / (maxBand - minBand));
    }
  }, [value, committedVal, minBand, maxBand, dragging]);

  const getFraction = useCallback((clientY: number): number => {
    const el = containerRef.current;
    if (!el) return 0.5;
    const rect = el.getBoundingClientRect();
    const y = clientY - rect.top;
    return Math.max(0, Math.min(1, 1 - y / rect.height));
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    draggingRef.current = true;
    setDragging(true);
    setPosFraction(getFraction(e.clientY));
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    setPosFraction(getFraction(e.clientY));
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const f = getFraction(e.clientY);
    const rawBand = minBand + f * (maxBand - minBand);
    const band = Math.round(rawBand);
    const clamped = Math.max(minBand, Math.min(maxBand, band));
    ownCommitRef.current = true;
    onChange(clamped.toString());
    // Dot stays at exact release position — no snap
    setPosFraction(f);
    draggingRef.current = false;
    setDragging(false);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="mb-1 w-full min-h-[2.5rem] flex items-end justify-center">
        <span className="text-sm sm:text-base font-semibold text-foreground text-center leading-tight">
          {label}
        </span>
      </div>
      <div
        ref={containerRef}
        className="relative w-full cursor-pointer select-none aspect-[35/82]"
        style={{ touchAction: 'none', userSelect: 'none' }}
      >
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="absolute inset-0 z-10"
          style={{ touchAction: 'none' }}
        />
        <svg
          viewBox={`0 0 ${VW} ${VH}`}
          className="w-full h-full pointer-events-none select-none"
          style={{ userSelect: 'none' }}
        >
          <style>{`
            * { user-select: none; }
            .bt { font-family: Aptos, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; font-weight: 700; font-size: 24px; fill: ${COLORS.text}; }
          `}</style>
          <path d="M 205 30 L 250 60 L 250 760 L 205 790 L 160 760 L 160 60 Z" fill={COLORS.hexGreen} stroke={COLORS.hexStroke} strokeWidth="1" />
          <rect x="175" y="315" width="60" height="240" fill={COLORS.hexInner} stroke="#7a9244" strokeWidth="1" />
          {LEVELS.map((lv, i) => {
            const lines = Array.isArray(lv.label) ? lv.label : [lv.label];
            const lineH = 26;
            const totalTextH = lines.length * lineH;
            const textStartY = lv.y + lv.h / 2 - totalTextH / 2 + 15;
            return (
              <g key={i}>
                <rect x="10" y={lv.y} width="150" height={lv.h} fill={lv.fill} stroke={COLORS.boxStroke} strokeWidth="2" />
                {lines.map((line, li) => (
                  <text key={li} x="25" y={textStartY + li * lineH} className="bt">{line}</text>
                ))}
              </g>
            );
          })}
          <g>
            <circle cx={HEX_CX} cy={markerY} r="18" fill={COLORS.text} stroke="#fff" strokeWidth="3" />
          </g>
          <text x={HEX_CX} y={(HEX_TOP + HEX_BOT) / 2 + 20} textAnchor="middle" fontSize="18" fill="#999" fontFamily="Aptos, Segoe UI, system-ui, sans-serif" opacity={committedVal !== minBand ? '0' : dragging ? '0' : '1'}>
            Tap or drag
          </text>
        </svg>
      </div>
    </div>
  );
}

export default function NaplanSliders({ year, scores, onChange }: NaplanSlidersProps) {
  const yearInfo = getYearInfo(year);
  const bands = yearInfo.bands;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 w-full mx-auto">
      {DOMAINS.map((domain) => (
        <NaplanBarSVG
          key={domain}
          label={DOMAIN_LABELS[domain]}
          bands={bands}
          value={scores[domain] != null ? Number(scores[domain]) : undefined}
          onChange={(v) => onChange(domain, v)}
        />
      ))}
    </div>
  );
}
