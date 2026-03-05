type DividerVariant = "line" | "dots";

export function SectionDivider({
  variant = "line",
  className = "",
}: {
  variant?: DividerVariant;
  className?: string;
}) {
  if (variant === "dots") {
    return (
      <div className={`flex justify-center items-center gap-2 py-6 ${className}`}>
        <span className="w-1 h-1 rounded-full bg-ink-200" />
        <span className="w-1.5 h-1.5 rounded-full bg-ink-200" />
        <span className="w-1 h-1 rounded-full bg-ink-200" />
      </div>
    );
  }

  return (
    <div className={`max-w-7xl mx-auto px-8 py-4 ${className}`}>
      <div className="w-full h-px bg-ink-100" />
    </div>
  );
}
