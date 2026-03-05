"use client";

import { Accordion } from "@/components/ui/Accordion";
import { businessCategories } from "@/data/business";

export function AboutContent() {
  return (
    <div className="space-y-4">
      {businessCategories.map((category, i) => (
        <Accordion
          key={category.id}
          title={`${category.number}. ${category.title}`}
          badge={category.yearRange}
          defaultOpen={i === 0}
        >
          <p className="mb-4 text-ink-500 leading-relaxed">
            {category.description}
          </p>
          <ul className="space-y-2">
            {category.details.map((detail, j) => (
              <li key={j} className="flex items-start gap-2 text-base text-ink-500">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                {detail}
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </div>
  );
}
