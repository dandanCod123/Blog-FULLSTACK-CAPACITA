# 📝 Blog FULLSTACK CAPACITA

<p align="center">
  <!-- Backend -->
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
  <img src="https://img.shields.io/badge/bcrypt-Security-8A2BE2?style=for-the-badge" />
  <!-- Frontend -->
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
</p>

<p align="center">
  Aplicação fullstack de <strong>blog</strong> com autenticação de usuários, desenvolvida como projeto prático de capacitação em desenvolvimento web — API REST em Node.js/Express + Prisma no backend, consumida por uma interface web no frontend.
</p>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Arquitetura](#-arquitetura)
- [Stack Tecnológica](#-stack-tecnológica)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e Configuração](#-instalação-e-configuração)
  - [Backend](#-backend)
  - [Frontend](#-frontend)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Prisma / Banco de Dados](#-prisma--banco-de-dados)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Roadmap](#-roadmap)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

---

## 🚀 Sobre o Projeto

O **Blog FULLSTACK CAPACITA** é uma aplicação de blog fullstack construída para colocar em prática conceitos essenciais de desenvolvimento web: criação de uma API REST segura, autenticação de usuários, persistência de dados via ORM e consumo dessa API por uma interface web.

O projeto é dividido em duas partes:

- **`backend/`** — API REST em **Node.js + Express 5**, com autenticação via **JWT**, senhas protegidas com **bcrypt** e acesso ao banco de dados via **Prisma ORM**.
- **`blog-game-station/`** — camada de frontend responsável pela interface do usuário, consumindo a API do backend.

---

## ✨ Funcionalidades

> As funcionalidades abaixo refletem o que é possível inferir das dependências do projeto (auth JWT + bcrypt + Prisma). Ajuste esta lista para bater exatamente com o que está implementado.

- 🔐 **Autenticação de usuários** — cadastro e login com senha criptografada (bcrypt) e sessão via JWT
- ✍️ **Publicação de posts** — criação, edição e exclusão de conteúdos do blog
- 📄 **Listagem e leitura de posts** — visualização dos artigos publicados
- 🗄️ **Persistência de dados** — modelagem e acesso ao banco via Prisma ORM
- 🌐 **API REST** — comunicação entre frontend e backend via endpoints HTTP
- 📋 **Logging estruturado** — logs de requisições/erros com Pino

---

## 🏗️ Arquitetura

```
┌───────────────────────────────────────────┐
│         Cliente (blog-game-station)        │
│         HTML • CSS • JavaScript             │
└─────────────────────┬───────────────────────┘
                      │ HTTP / REST API
┌─────────────────────▼───────────────────────┐
│            Servidor (backend)                │
│   Express 5 • JWT • bcrypt • Pino (logs)     │
└─────────────────────┬───────────────────────┘
                      │ Prisma ORM
┌─────────────────────▼───────────────────────┐
│              Banco de Dados                   │
│     (PostgreSQL / MySQL / SQLite — conferir)  │
└───────────────────────────────────────────────┘
```

---

## 🛠️ Stack Tecnológica

### Backend

| Tecnologia | Uso |
|---|---|
| Node.js | Runtime JavaScript |
| Express 5 | Framework web / criação da API REST |
| Prisma ORM | Acesso e modelagem do banco de dados |
| jsonwebtoken (JWT) | Autenticação e autorização |
| bcrypt | Hash e verificação de senhas |
| cors | Controle de acesso entre origens (CORS) |
| dotenv | Carregamento de variáveis de ambiente |
| pino / pino-pretty | Logging estruturado |
| nodemon | Reinício automático em desenvolvimento |

### Frontend

| Tecnologia | Uso |
|---|---|
| JavaScript (Vanilla) | Lógica da interface e consumo da API |
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização |

---

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado LTS mais recente)
- [npm](https://www.npmjs.com/)
- Um banco de dados compatível com Prisma (PostgreSQL, MySQL ou SQLite — conforme configurado em `prisma/schema.prisma`)

---

## ⚙️ Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/dandanCod123/Blog-FULLSTACK-CAPACITA.git
cd Blog-FULLSTACK-CAPACITA
```

### 2. Instale as dependências

```bash
npm install
```

---

### 🔧 Backend

#### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` (veja a [seção de variáveis](#-variáveis-de-ambiente)).

#### 4. Rode as migrations do Prisma

```bash
npx prisma migrate dev
```

#### 5. Inicie o servidor

```bash
npm run backend
```

O comando executa `nodemon backend/server.js`, reiniciando o servidor automaticamente a cada alteração no código. Por padrão, a API deve ficar disponível em `http://localhost:3000` (confira a porta configurada no seu `.env`).

---

### 🎨 Frontend

#### 6. Acesse a pasta do frontend

```bash
cd blog-game-station
```

#### 7. Abra a aplicação

Abra o `index.html` diretamente no navegador ou sirva a pasta com uma extensão como **Live Server** (VSCode), apontando as chamadas de API para a URL do backend.

---

## 🔐 Variáveis de Ambiente

```env
# Banco de dados (ajuste conforme o provider usado no schema.prisma)
DATABASE_URL="postgresql://usuario:senha@localhost:5432/blog_capacita"

# JWT
JWT_SECRET="sua_chave_secreta_aqui"
JWT_EXPIRES_IN="7d"

# Servidor
PORT=3000
```

> ⚠️ **Nunca** commite o arquivo `.env` no repositório. Confirme os nomes exatos das variáveis usadas no código (`process.env.XXX`) e ajuste conforme necessário.

---

## 📜 Scripts Disponíveis

```bash
npm run backend    # Inicia o servidor backend com nodemon (watch mode)
npm test           # Placeholder — ainda não há testes configurados
```

---

## 🗄️ Prisma / Banco de Dados

```bash
npx prisma generate     # Gera o Prisma Client
npx prisma migrate dev  # Cria e executa uma nova migration
npx prisma studio       # Abre o Prisma Studio (GUI do banco)
```

> 💡 Certifique-se de que `prisma/schema.prisma` está com o `provider` e a `DATABASE_URL` corretos antes de rodar as migrations.

---

## 📁 Estrutura do Projeto

```
Blog-FULLSTACK-CAPACITA/
│
├── backend/                    # API REST (Express + Prisma)
│   ├── prisma/
│   │   ├── schema.prisma       # Schema do banco de dados
│   │   └── migrations/         # Histórico de migrations
│   ├── src/
│   │   ├── routes/             # Rotas da API
│   │   ├── controllers/        # Lógica das requisições
│   │   ├── middlewares/        # Autenticação, validações, etc.
│   │   └── services/           # Regras de negócio
│   └── server.js               # Ponto de entrada do servidor
│
├── blog-game-station/          # Frontend da aplicação
│   ├── index.html
│   ├── css/
│   └── js/
│
├── package.json                # Dependências e scripts do projeto
└── package-lock.json
```

> 💡 Esta estrutura é um modelo baseado em convenções comuns de projetos Express + Prisma. Ajuste para refletir exatamente as subpastas de `backend/` e `blog-game-station/` no seu repositório.

---

## 🗺️ Roadmap

- [ ] Documentar os endpoints da API (rotas, métodos, payloads de request/response)
- [ ] Adicionar testes automatizados (unitários e/ou e2e)
- [ ] Adicionar prints ou GIFs demonstrando a aplicação em uso
- [ ] Configurar deploy (Vercel / Render / Railway)

---

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature: `git checkout -b feat/minha-feature`
3. Commit suas alterações: `git commit -m 'feat: adiciona minha feature'`
4. Push para a branch: `git push origin feat/minha-feature`
5. Abra um Pull Request

Recomenda-se seguir o padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/).

---

## 📄 Licença

Este projeto está sob a licença **ISC** (conforme definido no `package.json`). Sinta-se à vontade para adaptar conforme necessário.

---

<p align="center">Feito com ❤️ por <a href="https://github.com/dandanCod123">dandanCod123</a></p>
