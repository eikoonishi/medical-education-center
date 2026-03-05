import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/ui/Container";
import { ResearchContent } from "./ResearchContent";

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
      <section className="py-16">
        <Container>
          <ResearchContent />
        </Container>
      </section>
    </>
  );
}
