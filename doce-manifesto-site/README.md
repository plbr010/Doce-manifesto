# Doce Manifesto — Site Premium

Site institucional da confeitaria **Doce Manifesto**, desenvolvido com Next.js 16, TypeScript, Tailwind CSS e Framer Motion.

## Como rodar

```bash
cd doce-manifesto-site
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Embla Carousel
- Lucide Icons

## Imagens locais

Substitua os arquivos mantendo os **mesmos nomes**:

| Pasta | Arquivos |
|-------|----------|
| `/public/produtos/` | `brownie-tradicional.jpg`, `brownie-ninho.jpg`, `copo-felicidade.jpg`, `brigadeiro-gourmet.jpg`, `caixa-brownies.jpg` |
| `/public/hero/` | `hero-brownie.jpg` |
| `/public/galeria/` | `galeria-1.jpg` … `galeria-6.jpg` |
| `/public/` | `logo.png` (logo oficial) |

Se alguma imagem falhar ao carregar, o site exibe um **placeholder premium** automático (nunca fica vazio).

## Personalização

- **Logo:** `public/logo.png`
- **Produtos e textos:** `src/lib/constants.ts`
