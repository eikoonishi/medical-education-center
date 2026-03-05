import Image from "next/image";
import Link from "next/link";
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
  const hasProfile =
    member.qualifications ||
    member.career ||
    member.societies ||
    member.awards ||
    member.links;

  const card = (
    <div
      className={cn(
        "rounded-xl border border-ink-200/60 bg-white overflow-hidden transition-all duration-200",
        hasProfile && "hover:border-ink-300 hover:shadow-md cursor-pointer",
        featured
          ? "flex flex-col sm:flex-row items-center gap-6 p-8"
          : "p-6 text-center"
      )}
    >
      {member.imageUrl ? (
        <div
          className={cn(
            "relative rounded-lg overflow-hidden shrink-0",
            featured ? "h-28 w-28" : "mx-auto mb-4 h-24 w-24"
          )}
        >
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            className="object-cover object-top"
          />
        </div>
      ) : (
        <div
          className={cn(
            "flex items-center justify-center rounded-lg bg-ink-50 shrink-0",
            featured ? "h-28 w-28" : "mx-auto mb-4 h-24 w-24"
          )}
        >
          <User
            className={cn(
              "text-iolite-300",
              featured ? "h-12 w-12" : "h-8 w-8"
            )}
          />
        </div>
      )}

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
        {hasProfile && (
          <p className="mt-2 text-xs text-copper">詳細を見る →</p>
        )}
      </div>
    </div>
  );

  if (hasProfile) {
    return <Link href={`/staff/${member.id}`}>{card}</Link>;
  }

  return card;
}
