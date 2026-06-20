import Image from "next/image";

const PONTOS = [
  "Parte do MATOPIBA, uma das principais fronteiras agrícolas do Brasil",
  "Relevo predominantemente plano, favorável à mecanização",
  "Acesso facilitado pela Ferrovia Norte-Sul e pela BR-153",
  "Clima e solo de cerrado adequados a grãos e pecuária",
];

export default function Regiao() {
  return (
    <section id="regiao" className="bg-[#1F3D2B] py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C69C5D]">
            Por que investir aqui
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold md:text-4xl">
            Tocantins e MATOPIBA: a nova fronteira do agronegócio brasileiro
          </h2>
          <p className="mt-6 text-white/80">
            A região reúne terras produtivas, logística em expansão e preços
            de entrada ainda mais acessíveis do que em fronteiras agrícolas
            mais consolidadas — um cenário que atrai tanto produtores quanto
            investidores de longo prazo.
          </p>

          <ul className="mt-8 space-y-4">
            {PONTOS.map((ponto) => (
              <li key={ponto} className="flex items-start gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C69C5D]"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                </svg>
                <span className="text-sm leading-6 text-white/90">{ponto}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80"
            alt="Paisagem de cerrado com áreas agrícolas no Tocantins"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
