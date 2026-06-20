export const SITE = {
  name: "Henrique Fazendas",
  shortName: "Henrique",
  tagline: "Fazendas à venda no Tocantins e no MATOPIBA",
  description:
    "Corretor especializado em fazendas no Tocantins e na região do MATOPIBA. Imóveis rurais selecionados para agricultura, pecuária e investimento, com atendimento direto e seguro do início ao fim do negócio.",
  phoneDisplay: "+55 63 8411-1737",
  phoneWhatsApp: "556384111737",
  instagramUrl: "https://www.instagram.com/henriquefazendas_tocantins/",
  instagramHandle: "@henriquefazendas_tocantins",
  defaultWhatsAppMessage:
    "Olá! Vi o site da Henrique Fazendas e gostaria de saber mais sobre as fazendas disponíveis.",
} as const;

export function buildWhatsAppLink(message: string = SITE.defaultWhatsAppMessage) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE.phoneWhatsApp}?text=${text}`;
}
