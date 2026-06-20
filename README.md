# Henrique Fazendas

Landing page para a Henrique Fazendas, corretor de fazendas no Tocantins e na região do MATOPIBA. Site institucional com listagem de fazendas, diferenciais do atendimento, informações sobre a região e contato direto via WhatsApp/Instagram.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Outros comandos úteis:

```bash
npm run build   # build de produção
npm run start   # roda o build de produção
npm run lint    # lint do projeto
```

## Estrutura do projeto

```
app/                 # rotas, layout e metadata (App Router)
components/          # seções e componentes da landing page
data/fazendas.ts     # listagem de fazendas exibidas no site
lib/constants.ts      # dados do negócio (WhatsApp, Instagram, textos padrão)
```

### Seções da página (`app/page.tsx`)

`Header` → `Hero` → `Diferenciais` → `Fazendas` → `Regiao` → `ComoFunciona` → `Contato` → `Footer`, com um botão flutuante de WhatsApp (`WhatsAppFloatButton`) fixo na tela.

## Customização

- **Contato e textos padrão**: editar `lib/constants.ts` (número de WhatsApp, link do Instagram, mensagens pré-preenchidas).
- **Fazendas listadas**: editar `data/fazendas.ts`. Cada item tem nome, cidade, área, tipo, destaques e imagem.
- **Imagens das fazendas**: cada card tem fallback automático — se a imagem (`fazenda.imagem`) não carregar, exibe um placeholder "Foto em breve" em vez de quebrar o layout.

## Pendências antes de publicar para o cliente

- [ ] Substituir os dados de exemplo em `data/fazendas.ts` por fazendas reais do Henrique Fazendas.
- [ ] Substituir as fotos de banco de imagens (Unsplash) por fotos reais das fazendas.
- [ ] Validar textos institucionais (seção "Diferenciais" e "Região") com o cliente.

## Deploy

Projeto hospedado no [Vercel](https://vercel.com). Deploy automático a cada push na branch `master` (quando o repositório estiver conectado ao projeto Vercel).
