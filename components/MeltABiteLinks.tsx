import Link from "next/link";

const links = [
  { href: "/meltabite", label: "Overview" },
  { href: "/meltabite/support", label: "Support" },
  { href: "/meltabite/privacy", label: "Privacy Policy" },
  { href: "/meltabite/terms", label: "Terms of Use" },
];

export default function MeltABiteLinks({ current }: { current?: string }) {
  return (
    <nav className="mab-links" aria-label="MeltABite">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className={current === link.href ? "mab-link mab-link-current" : "mab-link"}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
