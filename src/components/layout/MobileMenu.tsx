"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { mainNavItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col bg-ink-800/98 backdrop-blur-sm md:hidden"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white/80 transition-colors hover:text-white"
              aria-label="メニューを閉じる"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-2">
            {mainNavItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-lg px-8 py-3 text-xl font-medium transition-colors",
                    pathname === item.href
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="p-8 text-center text-sm text-white/40">
            東北大学 医学教育推進センター
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
