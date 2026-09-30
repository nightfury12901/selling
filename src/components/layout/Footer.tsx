import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-brand-border bg-brand-bg w-full">
      {/* Top Grid */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand Column */}
        <div className="md:col-span-4">
          <p className="font-heading font-black text-xl text-brand-primary uppercase leading-tight mb-6">
            Build-ready software<br />
            and IoT projects<br />
            for makers &amp; engineers.
          </p>

          <div className="mt-6">
            <p className="text-xs font-mono text-brand-muted uppercase tracking-[0.2em] mb-3">Subscribe</p>
            <p className="text-sm text-brand-muted mb-4">Get notified when new projects drop.</p>
            <div className="flex items-center gap-0 border border-brand-border rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-4 py-3 text-sm text-brand-primary placeholder:text-brand-muted outline-none"
              />
              <button className="px-4 py-3 bg-brand-primary text-brand-bg text-sm font-medium hover:opacity-80 transition-opacity shrink-0">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Company */}
        <div className="md:col-span-2">
          <p className="text-xs font-mono text-brand-muted uppercase tracking-[0.2em] mb-4">Company</p>
          <ul className="flex flex-col gap-3 text-sm text-brand-primary">
            <li><Link href="/" className="hover:text-brand-muted transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-brand-muted transition-colors">About us</Link></li>
            <li><Link href="/contact" className="hover:text-brand-muted transition-colors">Contact us</Link></li>
          </ul>
        </div>

        {/* Product */}
        <div className="md:col-span-2">
          <p className="text-xs font-mono text-brand-muted uppercase tracking-[0.2em] mb-4">Product</p>
          <ul className="flex flex-col gap-3 text-sm text-brand-primary">
            <li><Link href="/shop" className="hover:text-brand-muted transition-colors">Shop All</Link></li>
            <li><Link href="/shop/software" className="hover:text-brand-muted transition-colors">Software</Link></li>
            <li><Link href="/shop/hardware" className="hover:text-brand-muted transition-colors">Hardware</Link></li>
            <li><Link href="/admin" className="hover:text-brand-muted transition-colors">Admin Panel</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="md:col-span-2">
          <p className="text-xs font-mono text-brand-muted uppercase tracking-[0.2em] mb-4">Resources</p>
          <ul className="flex flex-col gap-3 text-sm text-brand-primary">
            <li><Link href="/faq" className="hover:text-brand-muted transition-colors">FAQ</Link></li>
            <li><Link href="/blog" className="hover:text-brand-muted transition-colors">Build Logs</Link></li>
            <li><Link href="/custom-projects" className="hover:text-brand-muted transition-colors">Custom Work</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div className="md:col-span-2">
          <p className="text-xs font-mono text-brand-muted uppercase tracking-[0.2em] mb-4">Social</p>
          <ul className="flex flex-col gap-3 text-sm text-brand-primary">
            <li><a href="#" className="hover:text-brand-muted transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-brand-muted transition-colors">YouTube</a></li>
            <li><a href="#" className="hover:text-brand-muted transition-colors">GitHub</a></li>
            <li><a href="#" className="hover:text-brand-muted transition-colors">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-brand-border" />

      {/* Address + Legal Row */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-brand-muted">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] mb-2 text-brand-muted">Address</p>
          <p>Nagpur, Maharashtra, India</p>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] mb-2 text-brand-muted">General Inquiries</p>
          <a href="mailto:hello@protolab.in" className="hover:text-brand-primary transition-colors">hello@protolab.in</a>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] mb-2 text-brand-muted">New Business</p>
          <a href="mailto:projects@protolab.in" className="hover:text-brand-primary transition-colors">projects@protolab.in</a>
        </div>
      </div>

      {/* Giant Brand Name */}
      <div className="border-t border-brand-border relative overflow-hidden">
        <div className="px-4 pt-6 pb-0">
          <svg
            viewBox="0 0 1200 200"
            className="w-full h-auto text-brand-primary fill-none stroke-current"
            strokeWidth="1.5"
            aria-label="ProtoLab"
          >
            {/* Outlined text using a rough bespoke path-like technique via dominant-baseline */}
            <text
              x="50%"
              y="170"
              textAnchor="middle"
              fontFamily="'Space Grotesk', sans-serif"
              fontWeight="900"
              fontSize="180"
              className="stroke-brand-border fill-transparent"
              style={{ letterSpacing: "-4px" }}
            >
              ProtoLab
            </text>
          </svg>
        </div>

        {/* Bottom copyright bar */}
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-5 border-t border-brand-border text-xs font-mono text-brand-muted gap-4">
          <span>© {year} ProtoLab. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-primary transition-colors">Terms &amp; Conditions</Link>
            <Link href="/refund-policy" className="hover:text-brand-primary transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
