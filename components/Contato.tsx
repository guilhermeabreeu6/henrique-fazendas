import { SITE, buildWhatsAppLink } from "@/lib/constants";
import Reveal from "./Reveal";

export default function Contato() {
  return (
    <section id="contato" className="scroll-mt-20 bg-white py-24 lg:py-28">
      <Reveal className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C69C5D]">
          Fale com a Henrique Fazendas
        </p>
        <h2 className="font-display mt-4 text-balance text-3xl font-semibold text-[#1F3D2B] md:text-4xl">
          Vamos encontrar a fazenda certa para você
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-[#4A2F1B]">
          Atendimento direto via WhatsApp ou Instagram. Conte o que você
          procura e receba uma seleção de fazendas compatíveis.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#1F3D2B] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl"
          >
            Falar no WhatsApp
          </a>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#1F3D2B] px-8 py-4 text-sm font-semibold text-[#1F3D2B] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#1F3D2B] hover:text-white"
          >
            Seguir no Instagram
          </a>
        </div>

        <p className="mt-8 text-sm text-[#4A2F1B]/70">
          {SITE.phoneDisplay} &middot; {SITE.instagramHandle}
        </p>
      </Reveal>
    </section>
  );
}
