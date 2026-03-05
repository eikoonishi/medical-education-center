import type { StaffMember } from "@/types";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

export function StaffCard({
  member,
  featured = false,
}: {
  member: StaffMember;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-ink-200/60 bg-white overflow-hidden",
        featured
          ? "flex flex-col sm:flex-row items-center gap-6 p-8"
          : "p-6 text-center"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-full bg-ink-50 shrink-0",
          featured ? "h-28 w-28" : "mx-auto mb-4 h-20 w-20"
        )}
      >
        <User
          className={cn(
            "text-iolite-300",
            featured ? "h-12 w-12" : "h-8 w-8"
          )}
        />
      </div>

      <div className={cn(featured && "text-left")}>
        <h3
          className={cn(
            "font-bold text-ink-900",
            featured ? "text-xl mb-1" : "text-base mb-0.5"
          )}
        >
          {member.name}
        </h3>
        <p className="text-base text-copper font-medium">{member.title}</p>
        {member.appointmentYear && (
          <p className="mt-1 text-sm text-ink-400">
            {member.appointmentYear}年着任
          </p>
        )}
        {member.specialty && (
          <p className="mt-1 text-sm text-ink-500">
            専門: {member.specialty}
          </p>
        )}
      </div>
    </div>
  );
}
