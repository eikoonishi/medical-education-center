// Hand-drawn style SVG illustrations for warmth and personality
// These are simple line drawings with slightly irregular strokes

export function IllustrationStethoscope({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8 C18 8, 17 20, 18 28 C19 36, 28 40, 32 40" />
      <path d="M46 8 C46 8, 47 20, 46 28 C45 36, 36 40, 32 40" />
      <path d="M32 40 L32 48 C32 52, 36 56, 40 56 C44 56, 48 52, 48 48 C48 44, 44 42, 42 42" />
      <circle cx="48" cy="48" r="3" fill="currentColor" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="46" cy="6" r="3" />
    </svg>
  );
}

export function IllustrationBook({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 12 L10 52 C10 52, 22 48, 32 52 C42 48, 54 52, 54 52 L54 12 C54 12, 42 8, 32 12 C22 8, 10 12, 10 12Z" />
      <path d="M32 12 L32 52" />
      <path d="M16 20 L26 18" />
      <path d="M16 26 L26 24" />
      <path d="M16 32 L24 30" />
      <path d="M38 18 L48 20" />
      <path d="M38 24 L48 26" />
    </svg>
  );
}

export function IllustrationGradCap({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 14 L6 26 L32 38 L58 26 Z" />
      <path d="M14 30 L14 44 C14 44, 22 50, 32 50 C42 50, 50 44, 50 44 L50 30" />
      <path d="M54 26 L54 42" />
      <circle cx="54" cy="44" r="2" fill="currentColor" />
    </svg>
  );
}

export function IllustrationMicroscope({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M28 8 L36 8 L38 14 L26 14 Z" />
      <path d="M30 14 L30 32" />
      <path d="M34 14 L34 32" />
      <circle cx="32" cy="38" r="8" />
      <path d="M32 46 L32 52" />
      <path d="M22 52 L42 52" />
      <path d="M40 32 L46 26" />
      <circle cx="48" cy="24" r="4" />
    </svg>
  );
}

export function IllustrationLightbulb({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 8 C22 8, 14 16, 14 26 C14 34, 20 38, 24 42 L24 48 L40 48 L40 42 C44 38, 50 34, 50 26 C50 16, 42 8, 32 8Z" />
      <path d="M26 48 L26 52 C26 54, 28 56, 32 56 C36 56, 38 54, 38 52 L38 48" />
      <path d="M24 42 L40 42" />
      <path d="M32 2 L32 5" />
      <path d="M52 16 L56 14" />
      <path d="M12 16 L8 14" />
    </svg>
  );
}

export function IllustrationPeople({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="16" r="6" />
      <path d="M8 40 C8 30, 14 26, 20 26 C26 26, 32 30, 32 40" />
      <circle cx="44" cy="16" r="6" />
      <path d="M32 40 C32 30, 38 26, 44 26 C50 26, 56 30, 56 40" />
      <path d="M8 40 L56 40" />
      <path d="M14 48 L50 48" />
    </svg>
  );
}

// ─── New illustrations for more playfulness ───

export function IllustrationCoffee({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Cup body */}
      <path d="M12 26 L16 54 L44 54 L48 26" />
      {/* Handle */}
      <path d="M48 30 C54 30, 56 34, 56 38 C56 42, 54 46, 48 46" />
      {/* Saucer */}
      <path d="M8 54 L52 54" />
      {/* Steam - wavy lines */}
      <path d="M24 20 C24 16, 28 16, 28 12 C28 8, 24 8, 24 4" />
      <path d="M34 18 C34 14, 38 14, 38 10 C38 6, 34 6, 34 2" />
    </svg>
  );
}

export function IllustrationHeart({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 56 C32 56, 8 40, 8 22 C8 14, 14 8, 22 8 C28 8, 32 14, 32 14 C32 14, 36 8, 42 8 C50 8, 56 14, 56 22 C56 40, 32 56, 32 56Z" />
      {/* Pulse line inside */}
      <path d="M18 30 L26 30 L28 24 L32 36 L36 26 L38 30 L46 30" />
    </svg>
  );
}

export function IllustrationSparkle({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Main star */}
      <path d="M32 4 C32 4, 34 24, 32 32 C34 24, 60 26, 60 26 C60 26, 34 28, 32 32 C34 36, 32 60, 32 60 C32 60, 30 36, 32 32 C30 36, 4 34, 4 34 C4 34, 30 28, 32 32 C30 24, 32 4, 32 4Z" />
      {/* Small sparkle */}
      <circle cx="50" cy="12" r="2" fill="currentColor" />
      <path d="M50 6 L50 8" />
      <path d="M50 16 L50 18" />
      <path d="M44 12 L46 12" />
      <path d="M54 12 L56 12" />
    </svg>
  );
}

export function IllustrationLeaf({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 8 C18 8, 8 20, 8 34 C8 48, 20 56, 32 56 C44 56, 56 48, 56 34 C56 20, 46 8, 32 8Z" />
      {/* Center vein */}
      <path d="M32 12 L32 52" />
      {/* Side veins */}
      <path d="M32 20 L20 28" />
      <path d="M32 20 L44 28" />
      <path d="M32 32 L18 38" />
      <path d="M32 32 L46 38" />
      <path d="M32 42 L22 46" />
      <path d="M32 42 L42 46" />
    </svg>
  );
}

export function IllustrationPen({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M42 6 L54 18 L22 50 L8 54 L12 40 Z" />
      <path d="M38 10 L50 22" />
      <path d="M12 40 L22 50" />
      {/* Pen tip detail */}
      <path d="M8 54 L12 50" />
      {/* Small scribble near pen */}
      <path d="M28 56 C30 54, 34 58, 38 56 C42 54, 46 58, 50 56" />
    </svg>
  );
}

export function IllustrationDNA({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Double helix */}
      <path d="M20 4 C20 4, 44 12, 44 20 C44 28, 20 36, 20 44 C20 52, 44 60, 44 60" />
      <path d="M44 4 C44 4, 20 12, 20 20 C20 28, 44 36, 44 44 C44 52, 20 60, 20 60" />
      {/* Rungs */}
      <path d="M24 12 L40 12" />
      <path d="M22 20 L42 20" />
      <path d="M24 28 L40 28" />
      <path d="M22 36 L42 36" />
      <path d="M24 44 L40 44" />
      <path d="M24 52 L40 52" />
    </svg>
  );
}

export function IllustrationClipboard({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Board */}
      <rect x="12" y="12" width="40" height="48" rx="4" />
      {/* Clip */}
      <path d="M24 12 L24 8 C24 6, 26 4, 32 4 C38 4, 40 6, 40 8 L40 12" />
      <rect x="28" y="2" width="8" height="6" rx="2" />
      {/* Checkboxes */}
      <rect x="18" y="22" width="5" height="5" rx="1" />
      <path d="M19 25 L20.5 27 L23 22.5" />
      <path d="M28 24 L46 24" />
      <rect x="18" y="34" width="5" height="5" rx="1" />
      <path d="M19 37 L20.5 39 L23 34.5" />
      <path d="M28 36 L42 36" />
      <rect x="18" y="46" width="5" height="5" rx="1" />
      <path d="M28 48 L44 48" />
    </svg>
  );
}

export function IllustrationSpeechBubble({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 12 C8 8, 12 6, 16 6 L48 6 C52 6, 56 8, 56 12 L56 36 C56 40, 52 42, 48 42 L24 42 L14 52 L16 42 L16 42 C12 42, 8 40, 8 36 Z" />
      {/* Dots for typing */}
      <circle cx="24" cy="24" r="2.5" fill="currentColor" />
      <circle cx="32" cy="24" r="2.5" fill="currentColor" />
      <circle cx="40" cy="24" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function IllustrationFlower({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Petals */}
      <ellipse cx="32" cy="16" rx="6" ry="10" />
      <ellipse cx="32" cy="16" rx="6" ry="10" transform="rotate(60, 32, 28)" />
      <ellipse cx="32" cy="16" rx="6" ry="10" transform="rotate(120, 32, 28)" />
      <ellipse cx="32" cy="16" rx="6" ry="10" transform="rotate(180, 32, 28)" />
      <ellipse cx="32" cy="16" rx="6" ry="10" transform="rotate(240, 32, 28)" />
      {/* Center */}
      <circle cx="32" cy="28" r="5" fill="currentColor" opacity="0.3" />
      {/* Stem */}
      <path d="M32 33 C32 33, 32 50, 32 58" />
      <path d="M32 44 C28 40, 22 42, 20 44" />
      <path d="M32 50 C36 46, 42 48, 44 50" />
    </svg>
  );
}

export function IllustrationWave({ className = "w-full h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 30" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" preserveAspectRatio="none">
      <path d="M0 15 C20 5, 40 5, 60 15 C80 25, 100 25, 120 15 C140 5, 160 5, 180 15 C200 25, 220 25, 240 15 C260 5, 280 5, 300 15 C320 25, 340 25, 360 15 C380 5, 400 5, 400 15" />
    </svg>
  );
}

export function IllustrationDots({ className = "w-24 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 16" fill="currentColor">
      <circle cx="8" cy="8" r="2.5" opacity="0.6" />
      <circle cx="24" cy="8" r="1.8" opacity="0.4" />
      <circle cx="38" cy="8" r="2.8" opacity="0.5" />
      <circle cx="54" cy="8" r="2" opacity="0.3" />
      <circle cx="68" cy="8" r="2.5" opacity="0.6" />
      <circle cx="84" cy="8" r="1.5" opacity="0.4" />
      <circle cx="96" cy="8" r="2.2" opacity="0.5" />
    </svg>
  );
}

export function IllustrationArrowDoodle({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 48 C16 40, 20 20, 48 16" />
      <path d="M40 10 L50 16 L42 22" />
    </svg>
  );
}
