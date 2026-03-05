import Link from "next/link";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const cardClasses = cn(
    "rounded-xl bg-white p-6 border border-ink-200/60 transition-all duration-300",
    href && "hover:border-ink-900 hover:-translate-y-0.5",
    className
  );

  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {children}
      </Link>
    );
  }

  return <div className={cardClasses}>{children}</div>;
}
