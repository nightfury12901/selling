"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-brand-bg/90 backdrop-blur-md border-b border-brand-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-heading font-bold tracking-tight">
            [<span className="text-brand-name">ProtoLab</span>]
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-brand-muted">
            <Link href="/shop" className="hover:text-brand-primary transition-colors">Shop</Link>
            <Link href="/shop/software" className="hover:text-brand-primary transition-colors">Software</Link>
            <Link href="/shop/hardware" className="hover:text-brand-primary transition-colors">Hardware</Link>
            <Link href="/shop/bundles" className="hover:text-brand-primary transition-colors">Bundles</Link>
            <Link href="/custom-projects" className="hover:text-brand-primary transition-colors">Custom</Link>
            <Link href="/faq" className="hover:text-brand-primary transition-colors">FAQ</Link>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <ThemeToggle />

          <Link href="/cart" className="text-brand-primary hover:text-brand-name transition-colors relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-brand-name text-[#000000] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>

          <Link
            href="/contact"
            className="px-5 py-2 bg-brand-primary text-brand-bg font-medium rounded-full text-sm hover:opacity-80 transition-opacity"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="text-brand-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-bg fixed top-20 left-0 right-0 bottom-0 overflow-y-auto border-t border-brand-border"
          >
            <div className="flex flex-col px-4 py-8 gap-6 text-lg font-heading">
              <Link href="/shop" onClick={() => setMobileMenuOpen(false)}>Shop All</Link>
              <Link href="/shop/software" onClick={() => setMobileMenuOpen(false)}>Software</Link>
              <Link href="/shop/hardware" onClick={() => setMobileMenuOpen(false)}>Hardware</Link>
              <Link href="/shop/bundles" onClick={() => setMobileMenuOpen(false)}>Bundles</Link>
              <Link href="/custom-projects" onClick={() => setMobileMenuOpen(false)}>Custom Projects</Link>
              <Link href="/faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
              <hr className="border-brand-border" />
              <Link href="/cart" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                Cart (0)
              </Link>
              <Link href="/contact" className="mt-4" onClick={() => setMobileMenuOpen(false)}>
                Contact Us →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
