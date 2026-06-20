export type TipoFazenda = "Pecuária" | "Agricultura" | "Mista";

export interface Fazenda {
  id: string;
  nome: string;
  cidade: string;
  estado: "TO" | "MA" | "PI" | "BA";
  areaHectares: number;
  tipo: TipoFazenda;
  precoLabel: string;
  destaques: string[];
  imagem: string;
  imagemAlt: string;
}

/**
 * Dados de exemplo para validar layout e fluxo de conversão.
 * Substituir por fazendas reais (com fotos próprias) antes de publicar para o cliente.
 */
export const fazendas: Fazenda[] = [
  {
    id: "gurupi-pecuaria-1",
    nome: "Fazenda Vista Verde",
    cidade: "Gurupi",
    estado: "TO",
    areaHectares: 850,
    tipo: "Pecuária",
    precoLabel: "Consulte valores",
    destaques: ["Pastagem formada", "Curral e sede", "Água em abundância"],
    imagem:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    imagemAlt: "Pastagem verde e ondulada típica de fazenda de pecuária",
  },
  {
    id: "formoso-agricultura-1",
    nome: "Fazenda Cerrado Dourado",
    cidade: "Formoso do Araguaia",
    estado: "TO",
    areaHectares: 1400,
    tipo: "Agricultura",
    precoLabel: "Consulte valores",
    destaques: ["Topografia plana", "Apta a irrigação", "Acesso asfaltado próximo"],
    imagem:
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80",
    imagemAlt: "Plantação extensa em terreno plano ao entardecer",
  },
  {
    id: "porto-nacional-mista-1",
    nome: "Fazenda Rio Claro",
    cidade: "Porto Nacional",
    estado: "TO",
    areaHectares: 620,
    tipo: "Mista",
    precoLabel: "Consulte valores",
    destaques: ["Área de lavoura e pasto", "Nascentes preservadas", "Boa infraestrutura"],
    imagem:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
    imagemAlt: "Propriedade rural com áreas mistas de cultivo e pastagem",
  },
  {
    id: "araguaina-pecuaria-1",
    nome: "Fazenda Boa Esperança",
    cidade: "Araguaína",
    estado: "TO",
    areaHectares: 1100,
    tipo: "Pecuária",
    precoLabel: "Consulte valores",
    destaques: ["Divisão em piquetes", "Energia elétrica", "Documentação regularizada"],
    imagem:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80",
    imagemAlt: "Campo verde extenso sob luz da manhã",
  },
  {
    id: "pedro-afonso-agricultura-1",
    nome: "Fazenda Novo Horizonte",
    cidade: "Pedro Afonso",
    estado: "TO",
    areaHectares: 980,
    tipo: "Agricultura",
    precoLabel: "Consulte valores",
    destaques: ["Solo corrigido", "Pronta para plantio", "Próxima a armazéns"],
    imagem:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
    imagemAlt: "Plantação de grãos em região de cerrado",
  },
  {
    id: "paraiso-mista-1",
    nome: "Fazenda Águas Claras",
    cidade: "Paraíso do Tocantins",
    estado: "TO",
    areaHectares: 540,
    tipo: "Mista",
    precoLabel: "Consulte valores",
    destaques: ["Sede reformada", "Curso de água permanente", "Fácil acesso pela BR"],
    imagem:
      "https://images.unsplash.com/photo-1444858291040-58f756a3fdd6?auto=format&fit=crop&w=1200&q=80",
    imagemAlt: "Vegetação tropical e área rural com vegetação verde",
  },
];
