import Reveal from "./Reveal";

const PASSOS = [
  {
    numero: "01",
    titulo: "Contato inicial",
    descricao: "Você conta o que procura: tipo de fazenda, região e finalidade do negócio.",
  },
  {
    numero: "02",
    titulo: "Seleção de fazendas",
    descricao: "Apresentamos as propriedades compatíveis, com informações claras sobre área e infraestrutura.",
  },
  {
    numero: "03",
    titulo: "Visita e análise",
    descricao: "Agendamos a visita à fazenda escolhida e acompanhamos a análise no local.",
  },
  {
    numero: "04",
    titulo: "Negociação e documentação",
    descricao: "Conduzimos a negociação e o suporte na verificação documental até a conclusão do negócio.",
  },
];

export default function ComoFunciona() {
  return (
    <section className="bg-[#F5F1E8] py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C69C5D]">
            Como funciona
          </p>
          <h2 className="font-display mt-4 text-balance text-3xl font-semibold text-[#1F3D2B] md:text-4xl">
            Do primeiro contato à fazenda nas suas mãos
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {PASSOS.map((passo, index) => (
            <Reveal key={passo.numero} delay={index * 90}>
              <div className="relative h-full rounded-2xl border border-[#1F3D2B]/10 bg-white/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="font-display text-4xl font-semibold text-[#C69C5D]">
                  {passo.numero}
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold text-[#1F3D2B]">
                  {passo.titulo}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#4A2F1B]">{passo.descricao}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
