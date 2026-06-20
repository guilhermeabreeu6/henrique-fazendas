import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#1F3D2B] py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg font-semibold">{SITE.name}</p>
          <p className="mt-1 text-sm text-white/70">{SITE.tagline}</p>
        </div>

        <div className="flex items-center gap-6 text-sm text-white/70">
          <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            {SITE.instagramHandle}
          </a>
          <a href={`tel:+${SITE.phoneWhatsApp}`} className="hover:text-white">
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
