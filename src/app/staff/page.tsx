import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/ui/Container";
import { StaffCard } from "@/components/staff/StaffCard";
import { staffGroups } from "@/data/staff";
import { IllustrationPeople } from "@/components/common/Illustrations";

export const metadata: Metadata = {
  title: "スタッフ紹介",
};

export default function StaffPage() {
  return (
    <>
      <PageHero
        title="スタッフ紹介"
        description="医学教育推進センターのメンバー"
        breadcrumbItems={[{ label: "スタッフ紹介" }]}
      />
      <section className="py-16 relative">
        {/* Decorative illustration */}
        <div className="absolute right-12 top-12 hidden lg:block opacity-10">
          <IllustrationPeople className="w-20 h-20 text-copper" />
        </div>

        <Container>
          {staffGroups.map((group) => (
            <div key={group.groupTitle} className="mb-12 last:mb-0">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-ink-900">
                <span className="h-6 w-1 rounded-full bg-copper" />
                {group.groupTitle}
              </h2>

              {group.groupTitle === "教授" ? (
                // Featured layout for professor
                <div>
                  {group.members.map((member) => (
                    <StaffCard key={member.id} member={member} featured />
                  ))}
                </div>
              ) : group.groupTitle === "事務スタッフ" ? (
                // Simple text for administrative staff
                <div className="rounded-xl border border-ink-200/60 bg-white p-6">
                  {group.members.map((member) => (
                    <p key={member.id} className="text-ink-500">
                      {member.title}
                    </p>
                  ))}
                </div>
              ) : (
                // Grid layout for others
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {group.members.map((member) => (
                    <StaffCard key={member.id} member={member} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
