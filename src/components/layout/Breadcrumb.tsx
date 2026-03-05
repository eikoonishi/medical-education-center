import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="パンくずリスト" className="text-sm">
      <ol className="flex items-center gap-1 text-ink-400">
        <li>
          <Link
            href="/"
            className="transition-colors hover:text-ink-900"
          >
            トップ
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5" />
            {item.href ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-ink-900"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-ink-700">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
