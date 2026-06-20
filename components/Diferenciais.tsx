const ITEMS = [
  {
    title: "Conhecimento da região",
    description:
      "Atuação focada no Tocantins e no MATOPIBA, com avaliação criteriosa de localização, solo e acesso de cada propriedade.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Z M12 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      />
    ),
  },
  {
    title: "Atendimento direto",
    description:
      "Contato direto com o corretor, sem intermediários, do primeiro orçamento até a visita à fazenda.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 12h8M8 12a4 4 0 1 1 8 0M3 12h2M19 12h2"
      />
    ),
  },
  {
    title: "Negociação segura",
    description:
      "Apoio na verificação de documentação e regularidade do imóvel, para reduzir riscos na compra.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3 4 6v6c0 5 3.5 7.7 8 9 4.5-1.3 8-4 8-9V6l-8-3Z M9 12l2 2 4-4"
      />
    ),
  },
  {
    title: "Visão de investimento",
    description:
      "Orientação sobre potencial produtivo e valorização das fazendas, pensando no retorno do negócio.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 19h16M7 16V9m5 7V5m5 11v-5"
      />
    ),
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-[#F5F1E8] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C69C5D]">
            Por que negociar com a Henrique Fazendas
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-[#1F3D2B] md:text-4xl">
            Um processo claro, do primeiro contato à escritura
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#1F3D2B]/10 bg-white/60 p-6 transition hover:shadow-lg"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="mb-4 h-10 w-10 text-[#C69C5D]"
              >
                {item.icon}
              </svg>
              <h3 className="font-display text-lg font-semibold text-[#1F3D2B]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#4A2F1B]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
