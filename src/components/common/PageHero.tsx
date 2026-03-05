import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import {
  IllustrationDots,
  IllustrationLeaf,
} from "@/components/common/Illustrations";

export function PageHero({
  title,
  description,
  breadcrumbItems,
}: {
  title: string;
  description?: string;
  breadcrumbItems: { label: string; href?: string }[];
}) {
  return (
    <section className="relative bg-cafe-warm pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      {/* Decorative floating illustration */}
      <div className="absolute right-12 bottom-8 hidden lg:block opacity-10">
        <IllustrationLeaf className="w-24 h-24 text-copper" />
      </div>

      <Container>
        <div className="mb-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold tracking-tight text-ink-900 md:text-5xl animate-fade-in-up">
            {title}
          </h1>
          <IllustrationDots className="w-16 h-3 text-copper/40 hidden sm:block animate-fade-in [animation-delay:200ms]" />
        </div>
        {description && (
          <p className="mt-4 text-base text-ink-400 animate-fade-in [animation-delay:100ms]">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
