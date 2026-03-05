import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { mainNavItems } from "@/data/navigation";
import {
  IllustrationCoffee,
  IllustrationFlower,
  IllustrationWave,
} from "@/components/common/Illustrations";

export function Footer() {
  return (
    <footer className="bg-white border-t border-ink-100 relative overflow-hidden">
      {/* Decorative wave separator */}
      <div className="absolute top-0 left-0 right-0 -translate-y-1/2">
        <IllustrationWave className="w-full h-4 text-copper/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Left: Address + Contact */}
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo/logo.jpg"
                alt="ロゴ"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <div>
                <h5 className="text-base font-bold text-ink-900">
                  東北大学大学院医学系研究科
                </h5>
                <p className="text-sm font-bold text-ink-900">
                  医学教育推進センター
                </p>
              </div>
            </div>
            <p className="text-sm text-ink-600 leading-relaxed tracking-wider mb-6">
              〒980-8575
              <br />
              宮城県仙台市青葉区星陵町2-1
              <br />
              医学部1号館
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-ink-200 rounded-full text-sm font-bold tracking-widest text-ink-900 hover:bg-copper hover:text-white hover:border-copper transition-colors group"
            >
              <Mail className="w-4 h-4 mr-2" />
              お問い合わせ
            </a>
          </div>

          {/* Right: Nav + Copyright */}
          <div className="md:w-1/2 flex flex-col md:items-end">
            <div className="flex flex-wrap gap-6 text-sm font-bold text-ink-400 tracking-widest mb-6 font-en">
              {mainNavItems.filter(n => n.href !== "/").map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-copper transition uppercase"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Playful illustrations row */}
            <div className="flex items-center gap-4 mb-4 hidden md:flex">
              <IllustrationCoffee className="w-7 h-7 text-ink-200" />
              <IllustrationFlower className="w-6 h-6 text-ink-200" />
            </div>

            <p className="text-xs text-ink-300 font-en tracking-widest">
              &copy; {new Date().getFullYear()} Office of Medical Education, Tohoku University.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
