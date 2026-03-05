import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Container } from "@/components/ui/Container";
import { AboutContent } from "./AboutContent";
import {
  IllustrationClipboard,
  IllustrationCoffee,
} from "@/components/common/Illustrations";

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
      <section className="py-16 relative">
        {/* Decorative illustrations */}
        <div className="absolute right-12 top-16 hidden lg:block opacity-10">
          <IllustrationClipboard className="w-20 h-20 text-copper" />
        </div>
        <div className="absolute left-8 bottom-24 hidden lg:block opacity-8">
          <IllustrationCoffee className="w-14 h-14 text-terracotta opacity-10" />
        </div>

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
