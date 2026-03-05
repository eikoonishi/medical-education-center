"use client";

import { useState } from "react";
import { researchItems } from "@/data/research";
import { cn } from "@/lib/utils";

const years = [...new Set(researchItems.map((item) => item.year))].sort(
  (a, b) => b - a
);

export function ResearchContent() {
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");

  const filtered =
    selectedYear === "all"
      ? researchItems
      : researchItems.filter((item) => item.year === selectedYear);

  const groupedByYear = filtered.reduce(
    (acc, item) => {
      if (!acc[item.year]) acc[item.year] = [];
      acc[item.year].push(item);
      return acc;
    },
    {} as Record<number, typeof researchItems>
  );

  const sortedYears = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <>
      {/* Year filter */}
      <div className="mb-10 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedYear("all")}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
            selectedYear === "all"
              ? "bg-copper text-white"
              : "bg-white text-ink-400 hover:bg-ink-100 border border-ink-200"
          )}
        >
          すべて
        </button>
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              selectedYear === year
                ? "bg-copper text-white"
                : "bg-white text-ink-400 hover:bg-ink-100 border border-ink-200"
            )}
          >
            {year}年度
          </button>
        ))}
      </div>

      {/* Research items grouped by year */}
      {sortedYears.map((year) => (
        <div key={year} className="mb-10 last:mb-0">
          <h2 className="mb-4 flex items-center gap-3 text-xl font-bold text-ink-900">
            <span className="h-5 w-1 rounded-full bg-copper" />
            {year}年度
          </h2>
          <div className="space-y-3">
            {groupedByYear[year].map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-ink-200/60 bg-white p-5"
              >
                <p className="mb-1 text-base font-medium text-ink-900">
                  {item.title}
                </p>
                <p className="text-sm text-ink-400">{item.authors}</p>
                <p className="mt-1 text-sm italic text-ink-300">
                  {item.journal}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
