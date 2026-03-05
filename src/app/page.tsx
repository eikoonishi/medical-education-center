import { HeroSection } from "@/components/home/HeroSection";
import { OverviewSection } from "@/components/home/OverviewSection";
import { NewsSection } from "@/components/home/NewsSection";
import { BannerLinks } from "@/components/home/BannerLinks";
import { SectionDivider } from "@/components/common/SectionDivider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionDivider variant="line" />
      <OverviewSection />
      <SectionDivider variant="dots" />
      <NewsSection />
      <SectionDivider variant="line" />
      <BannerLinks />
    </>
  );
}
