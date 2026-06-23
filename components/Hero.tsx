import Image from "next/image";
import { buildWhatsAppLink } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[92vh] scroll-mt-20 items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=2000&q=80"
        alt="Pôr do sol sobre fazenda no cerrado do Tocantins"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D2B] via-[#1F3D2B]/70 to-[#1F3D2B]/30" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-32 text-center text-white">
        <p className="animate-fade-in-up mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#C69C5D]">
          Henrique Fazendas
        </p>

        <h1
          className="animate-fade-in-up font-display max-w-4xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
          style={{ animationDelay: "100ms" }}
        >
          Fazendas à venda no Tocantins e na região do MATOPIBA
        </h1>

        <p
          className="animate-fade-in-up mt-7 max-w-2xl text-balance text-lg leading-8 text-white/90"
          style={{ animationDelay: "200ms" }}
        >
          Imóveis rurais selecionados para agricultura, pecuária e investimento,
          com atendimento direto e informações claras do primeiro contato à
          assinatura do contrato.
        </p>

        <div
          className="animate-fade-in-up mt-11 flex flex-col gap-4 sm:flex-row"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="#fazendas"
            className="rounded-full bg-[#C69C5D] px-8 py-4 text-sm font-semibold text-[#1F3D2B] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl"
          >
            Ver fazendas disponíveis
          </a>

          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/60 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-white hover:text-[#1F3D2B]"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
