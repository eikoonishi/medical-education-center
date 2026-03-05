import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10", className)}>
      <div className="flex items-center gap-3 mb-2">
        <div className="h-8 w-1 rounded-full bg-copper" />
        <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="ml-4 text-ink-400 text-sm">{subtitle}</p>
      )}
    </div>
  );
}
