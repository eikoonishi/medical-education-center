import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/ui/Container";
import { ResearchContent } from "./ResearchContent";
import { IllustrationDNA } from "@/components/common/Illustrations";

export const metadata: Metadata = {
  title: "研究業績",
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        title="研究業績"
        description="センターの研究活動と業績"
        breadcrumbItems={[{ label: "研究業績" }]}
      />
      <section className="py-16 relative">
        {/* Decorative illustration */}
        <div className="absolute right-12 top-12 hidden lg:block opacity-10">
          <IllustrationDNA className="w-16 h-16 text-copper" />
        </div>
        <Container>
          <ResearchContent />
        </Container>
      </section>
    </>
  );
}
