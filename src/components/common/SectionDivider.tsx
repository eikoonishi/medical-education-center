import { IllustrationWave } from "@/components/common/Illustrations";

type DividerVariant = "wave" | "dots" | "illustration";

export function SectionDivider({
  variant = "wave",
  illustration,
  className = "",
}: {
  variant?: DividerVariant;
  illustration?: React.ReactNode;
  className?: string;
}) {
  if (variant === "dots") {
    return (
      <div className={`flex justify-center items-center gap-3 py-4 ${className}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-copper/30" />
        <span className="w-2 h-2 rounded-full bg-copper/20" />
        <span className="w-1.5 h-1.5 rounded-full bg-terracotta/25" />
        <span className="w-2.5 h-2.5 rounded-full bg-copper/15" />
        <span className="w-1.5 h-1.5 rounded-full bg-terracotta/30" />
      </div>
    );
  }

  if (variant === "illustration" && illustration) {
    return (
      <div className={`flex justify-center items-center py-6 ${className}`}>
        <div className="opacity-15">{illustration}</div>
      </div>
    );
  }

  return (
    <div className={`max-w-7xl mx-auto px-8 py-2 ${className}`}>
      <IllustrationWave className="w-full h-6 text-copper/15" />
    </div>
  );
}
