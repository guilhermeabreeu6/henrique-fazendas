"use client";

import { useState } from "react";
import Image from "next/image";
import type { Fazenda } from "@/data/fazendas";
import { buildWhatsAppLink } from "@/lib/constants";

export default function FazendaCard({ fazenda }: { fazenda: Fazenda }) {
  const [imgError, setImgError] = useState(false);

  const whatsAppLink = buildWhatsAppLink(
    `Olá! Tenho interesse na ${fazenda.nome}, em ${fazenda.cidade}/${fazenda.estado}. Pode me passar mais detalhes?`,
  );

  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-[#1F3D2B]/10 bg-white/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#1F3D2B]/10">
        {!imgError ? (
          <Image
            src={fazenda.imagem}
            alt={fazenda.imagemAlt}
            fill
            onError={() => setImgError(true)}
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#1F3D2B] to-[#4A2F1B] text-white/70">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-10 w-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5Z" />
            </svg>
            <span className="text-xs font-medium uppercase tracking-wide">Foto em breve</span>
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-full bg-[#C69C5D] px-3 py-1 text-xs font-semibold text-[#1F3D2B]">
          {fazenda.tipo}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-[#1F3D2B]">
          {fazenda.nome}
        </h3>
        <p className="mt-1 text-sm text-[#4A2F1B]">
          {fazenda.cidade}/{fazenda.estado} &middot; {fazenda.areaHectares.toLocaleString("pt-BR")} ha
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {fazenda.destaques.map((destaque) => (
            <li
              key={destaque}
              className="rounded-full bg-[#1F3D2B]/5 px-3 py-1 text-xs font-medium text-[#1F3D2B]"
            >
              {destaque}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm font-semibold text-[#1F3D2B]">
            {fazenda.precoLabel}
          </span>
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#1F3D2B] px-4 py-2 text-sm font-semibold text-[#1F3D2B] transition duration-300 hover:bg-[#1F3D2B] hover:text-white"
          >
            Consultar
          </a>
        </div>
      </div>
    </article>
  );
}
