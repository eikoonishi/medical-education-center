import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/ui/Container";
import { staffGroups } from "@/data/staff";
import { User, ExternalLink, ArrowLeft } from "lucide-react";

function findMember(id: string) {
  for (const group of staffGroups) {
    const member = group.members.find((m) => m.id === id);
    if (member) return member;
  }
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const member = findMember(id);
  if (!member) return { title: "スタッフ紹介" };
  return { title: `${member.name} | スタッフ紹介` };
}

export function generateStaticParams() {
  return staffGroups.flatMap((group) =>
    group.members.map((member) => ({ id: member.id }))
  );
}

export default async function StaffDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const member = findMember(id);
  if (!member) notFound();

  const hasProfile =
    member.qualifications ||
    member.career ||
    member.societies ||
    member.awards ||
    member.links;

  return (
    <>
      <PageHero
        title="スタッフ紹介"
        breadcrumbItems={[
          { label: "スタッフ紹介", href: "/staff" },
          { label: member.name },
        ]}
      />
      <section className="py-12 md:py-16">
        <Container>
          <Link
            href="/staff"
            className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-copper transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            スタッフ一覧に戻る
          </Link>

          {/* Header card */}
          <div className="rounded-2xl border border-ink-200/60 bg-white p-8 md:p-10 mb-10">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              {member.imageUrl ? (
                <div className="relative h-36 w-36 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              ) : (
                <div className="flex h-36 w-36 items-center justify-center rounded-lg bg-ink-50 shrink-0">
                  <User className="h-16 w-16 text-iolite-300" />
                </div>
              )}
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-ink-900">
                  {member.name}
                  {member.nameEn && (
                    <span className="ml-3 text-lg md:text-xl font-en font-normal text-ink-500">
                      {member.nameEn}
                    </span>
                  )}
                  {member.degree && (
                    <span className="ml-2 text-base font-en font-normal text-ink-400">
                      {member.degree}
                    </span>
                  )}
                </h1>
                <p className="mt-2 text-lg text-copper font-medium">
                  {member.title}
                </p>
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
                {member.links && member.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {member.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-ink-50 px-4 py-1.5 text-sm text-ink-600 hover:bg-ink-100 transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Profile sections */}
          {hasProfile && (
            <div className="space-y-10">
              {member.qualifications && member.qualifications.length > 0 && (
                <ProfileSection title="資格">
                  <ul className="space-y-1.5">
                    {member.qualifications.map((q, i) => (
                      <li key={i} className="text-ink-700 text-sm md:text-base leading-relaxed">
                        {q}
                      </li>
                    ))}
                  </ul>
                </ProfileSection>
              )}

              {member.career && member.career.length > 0 && (
                <ProfileSection title="経歴">
                  <div className="space-y-2">
                    {member.career.map((c, i) => (
                      <div key={i} className="flex gap-4 text-sm md:text-base">
                        <span className="shrink-0 w-16 text-ink-400 font-en">
                          {c.year}
                        </span>
                        <span className="text-ink-700">{c.description}</span>
                      </div>
                    ))}
                  </div>
                </ProfileSection>
              )}

              {member.societies && member.societies.length > 0 && (
                <ProfileSection title="所属学会・学外委員歴">
                  <ul className="space-y-1.5">
                    {member.societies.map((s, i) => (
                      <li key={i} className="text-ink-700 text-sm md:text-base leading-relaxed">
                        {s}
                      </li>
                    ))}
                  </ul>
                </ProfileSection>
              )}

              {member.awards && member.awards.length > 0 && (
                <ProfileSection title="受賞歴">
                  <div className="space-y-2">
                    {member.awards.map((a, i) => (
                      <div key={i} className="flex gap-4 text-sm md:text-base">
                        <span className="shrink-0 w-16 text-ink-400 font-en">
                          {a.year}
                        </span>
                        <span className="text-ink-700">{a.description}</span>
                      </div>
                    ))}
                  </div>
                </ProfileSection>
              )}
            </div>
          )}

          {!hasProfile && (
            <p className="text-ink-400 text-center py-12">
              プロフィール情報は準備中です。
            </p>
          )}
        </Container>
      </section>
    </>
  );
}

function ProfileSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-bold text-ink-900 mb-4 pb-2 border-b border-ink-100">
        {title}
      </h2>
      {children}
    </div>
  );
}
