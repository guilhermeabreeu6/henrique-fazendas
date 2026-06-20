import { fazendas } from "@/data/fazendas";
import { buildWhatsAppLink } from "@/lib/constants";
import FazendaCard from "./FazendaCard";

export default function Fazendas() {
  return (
    <section id="fazendas" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C69C5D]">
              Oportunidades selecionadas
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold text-[#1F3D2B] md:text-4xl">
              Fazendas disponíveis
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#4A2F1B]">
            Fotos e dados ilustrativos. As fazendas reais com fotos e
            documentação atualizadas são apresentadas diretamente no
            atendimento.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {fazendas.map((fazenda) => (
            <FazendaCard key={fazenda.id} fazenda={fazenda} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={buildWhatsAppLink(
              "Olá! Quero saber sobre outras fazendas disponíveis além das que vi no site.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#1F3D2B] px-8 py-4 text-sm font-semibold text-white transition hover:scale-105"
          >
            Ver outras fazendas no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
