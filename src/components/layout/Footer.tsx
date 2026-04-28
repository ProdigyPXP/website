import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Install", href: "#install" },
  { label: "GitHub", href: "https://github.com/ProdigyPXP/ProdigyOrigin", external: true }
];

const communityLinks = [
  { label: "Discord", href: "https://dsc.gg/ProdigyPXP", external: true },
  { label: "Issues", href: "https://github.com/ProdigyPXP/ProdigyOrigin/issues", external: true },
  { label: "Contributing", href: "https://github.com/ProdigyPXP/ProdigyOrigin/blob/master/CONTRIBUTING.md", external: true }
];

const legalLinks = [
  { label: "License (MPL-2.0)", href: "https://github.com/ProdigyPXP/ProdigyOrigin/blob/master/LICENSE.txt", external: true },
  { label: "Privacy Policy", href: "https://github.com/ProdigyPXP/ProdigyOrigin/blob/master/meta/PRIVACY_POLICY.md", external: true }
];

function LinkColumn({
  title,
  links
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h3 className="text-[11px] uppercase tracking-[0.25em] text-white font-semibold mb-4">
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#a0a0a0] hover:text-[#c9a84c] transition-colors inline-flex items-center gap-1"
              >
                {link.label}
                <ExternalLink size={12} className="opacity-60" />
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-sm text-[#a0a0a0] hover:text-[#c9a84c] transition-colors"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="" width={36} height={36} className="rounded-md" />
              <span
                className="text-lg font-semibold text-white"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                Prodigy Origin
              </span>
            </Link>
            <p className="text-sm text-[#a0a0a0] leading-relaxed max-w-xs">
              Free and open-source mod loader for Prodigy Math Game. Built by the ProdigyPXP community.
            </p>
          </div>

          <LinkColumn title="Product" links={productLinks} />
          <LinkColumn title="Community" links={communityLinks} />
          <LinkColumn title="Legal" links={legalLinks} />
        </div>

        <div className="mt-16 pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs text-[#666]">© 2026 ProdigyPXP · Free and open-source</p>
          <p className="text-xs text-[#666] tracking-[0.2em] uppercase">
            v4.2.0
          </p>
        </div>
      </div>
    </footer>
  );
}
