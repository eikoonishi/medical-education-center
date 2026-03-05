import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/ui/Container";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "業務内容",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="業務内容"
        description="医学教育推進センターの7つの業務領域"
        breadcrumbItems={[{ label: "業務内容" }]}
      />
      <section className="py-16">
        <Container>
          <p className="mb-10 max-w-3xl text-base text-ink-500 leading-relaxed">
            医学教育推進センターでは、医学部教育の質の向上を目指し、
            以下の7つの領域で業務を行っています。
            各領域は相互に連携しながら、体系的な医学教育の実現に取り組んでいます。
          </p>
          <AboutContent />
        </Container>
      </section>
    </>
  );
}
