import Image from "next/image";
import { buildWhatsAppLink } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[90vh] items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=2000&q=80"
        alt="Pôr do sol sobre fazenda no cerrado do Tocantins"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D2B] via-[#1F3D2B]/70 to-[#1F3D2B]/30" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-32 text-center text-white">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C69C5D]">
          Henrique Fazendas
        </p>

        <h1 className="font-display max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
          Fazendas à venda no Tocantins e na região do MATOPIBA
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
          Imóveis rurais selecionados para agricultura, pecuária e investimento,
          com atendimento direto e informações claras do primeiro contato à
          assinatura do contrato.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#fazendas"
            className="rounded-full bg-[#C69C5D] px-8 py-4 text-sm font-semibold text-[#1F3D2B] transition hover:scale-105"
          >
            Ver fazendas disponíveis
          </a>

          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/60 px-8 py-4 text-sm font-semibold text-white transition hover:scale-105 hover:bg-white hover:text-[#1F3D2B]"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
