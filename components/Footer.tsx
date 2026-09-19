import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/icons";

// Placeholders: no social accounts and no legal pages exist yet. Swap the "#"
// hrefs once they do.
const LINKS = [
  { label: "Kā tas strādā", href: "#ka-tas-strada" },
  { label: "Kam tas ir", href: "#kam-tas-ir" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakti", href: "mailto:info@irvieta.lv" },
];

const SOCIALS = [
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "TikTok", href: "#", Icon: TikTokIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-black/5 px-5 py-12 md:px-8 md:py-16">
      <div className="container-page">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xl font-bold tracking-tight text-primary">irvieta</p>
            <p className="mt-2 text-sm text-ink-soft">Kāds jau brauc tavā virzienā.</p>
          </div>

          <nav aria-label="Kājenes navigācija">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="rounded text-sm text-ink-soft transition-colors hover:text-primary motion-reduce:transition-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-btn bg-bg text-ink-soft shadow-neu-sm transition-all hover:text-primary hover:shadow-neu active:shadow-neu-inset motion-reduce:transition-none"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 border-t border-black/5 pt-6">
          <p className="text-sm text-ink-soft">
            © 2026 irvieta · Made with 💚 in Latvia ·{" "}
            <a href="#" className="rounded transition-colors hover:text-primary motion-reduce:transition-none">
              Privātuma politika
            </a>{" "}
            ·{" "}
            <a href="#" className="rounded transition-colors hover:text-primary motion-reduce:transition-none">
              Noteikumi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
