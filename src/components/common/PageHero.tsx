import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

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
    <section className="relative bg-mocha-light pt-28 pb-16 md:pt-36 md:pb-20">
      <Container>
        <div className="mb-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-ink-900 md:text-5xl animate-fade-in-up">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-base text-ink-600 animate-fade-in [animation-delay:100ms]">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
