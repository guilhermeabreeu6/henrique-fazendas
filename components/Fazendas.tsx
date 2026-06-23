import { fazendas } from "@/data/fazendas";
import { buildWhatsAppLink } from "@/lib/constants";
import FazendaCard from "./FazendaCard";
import Reveal from "./Reveal";

export default function Fazendas() {
  return (
    <section id="fazendas" className="scroll-mt-20 bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C69C5D]">
              Oportunidades selecionadas
            </p>
            <h2 className="font-display mt-4 text-balance text-3xl font-semibold text-[#1F3D2B] md:text-4xl">
              Fazendas disponíveis
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#4A2F1B]">
            Fotos e dados ilustrativos. As fazendas reais com fotos e
            documentação atualizadas são apresentadas diretamente no
            atendimento.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {fazendas.map((fazenda, index) => (
            <Reveal key={fazenda.id} delay={index * 80}>
              <FazendaCard fazenda={fazenda} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={buildWhatsAppLink(
              "Olá! Quero saber sobre outras fazendas disponíveis além das que vi no site.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#1F3D2B] px-8 py-4 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            Ver outras fazendas no WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
