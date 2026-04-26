# Loja Camisas Seleção Brasil 2026 🇧🇷

Projeto focado em altíssima conversão para vendas de camisas personalizadas da Seleção Brasileira (Copa 2026) criado com React, Vite, Tailwind CSS e TypeScript.

## 🚀 Como instalar e rodar o projeto

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Rode o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse a URL gerada no terminal (geralmente `http://localhost:5173`).

3. **Gerar build para produção (Deploy):**
   ```bash
   npm run build
   ```
   Isso gerará os arquivos na pasta `dist/`.

## ⚙️ Como customizar as configurações

### Trocar links de pagamento e WhatsApp
Acesse `src/config/paymentLinks.ts`:
- Edite `camisa1` para o link do produto unitário.
- Edite `promo` para o link da promoção (2 camisas + bola).
- Edite `whatsappNumber` para o número do seu atendimento (somente números com DDD).

### Como editar preços
Acesse `src/utils/pricing.ts` e edite as variáveis constantes no início do arquivo:
- `UNIT_PRICE` e `ORIGINAL_UNIT_PRICE`
- `PROMO_PRICE` e `PROMO_ORIGINAL_PRICE`

### Como editar textos, imagens e design
- **Ajustar cores do Brasil**: Abra `tailwind.config.js` e altere os códigos HEX nas cores personalizadas (`brasil-green`, etc).
- **Alterar textos do site**: Navegue até a pasta `src/components/` e abra o arquivo correspondente à seção que quer alterar (ex: `Hero.tsx` para a headline principal).
- **Adicionar imagem do produto**: Insira a imagem na pasta `public/` e atualize a tag `<img>` (ou a `div` placeholder) dentro de `src/components/ProductInfo.tsx`.

## 🌐 Como subir para o GitHub e Vercel

1. **Subir para o GitHub:**
   - Inicie o git localmente: `git init`
   - Adicione os arquivos: `git add .`
   - Faça o commit: `git commit -m "first commit"`
   - Adicione a origem e faça o push: `git remote add origin SUA_URL_DO_GITHUB` e `git push -u origin main`

2. **Publicar na Vercel:**
   - Crie uma conta na [Vercel](https://vercel.com/) conectada ao seu GitHub.
   - Clique em "Add New Project" e selecione este repositório.
   - As configurações de "Framework Preset" para **Vite** serão detectadas automaticamente.
   - Clique em **Deploy**.

Feito com 💚💛💙
