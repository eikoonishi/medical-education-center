"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { mainNavItems } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-ink-200/30"
            : "bg-white/80 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-20 lg:px-8">
          {/* Logo + Name */}
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/images/logo/logo.jpg"
              alt="医学教育推進センター ロゴ"
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-bold tracking-wide text-ink-900 group-hover:text-terracotta transition-colors leading-tight">
                東北大学医学教育推進センター
              </p>
              <p className="text-[11px] font-en tracking-[0.15em] text-copper mt-0.5 uppercase">
                Office of Medical Education
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {mainNavItems.filter(n => n.href !== "/").map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-base font-medium transition-colors py-1",
                  "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-terracotta after:transition-all after:duration-300",
                  pathname === item.href
                    ? "text-ink-900 after:w-full"
                    : "text-ink-600 hover:text-terracotta after:w-0 hover:after:w-full"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink-900 hover:bg-ink-100 transition-colors md:hidden"
            aria-label="メニューを開く"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
