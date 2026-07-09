# 📝 Blog FULLSTACK CAPACITA

Projeto fullstack de um **blog**, desenvolvido como parte de um processo de capacitação/estudo em desenvolvimento web. A aplicação é dividida em duas partes principais: uma **API REST** (backend) construída com Node.js, Express e Prisma, e uma camada de **frontend** (pasta `blog-game-station`) responsável pela interface do usuário.

> ⚠️ Este README foi montado com base na estrutura e nas dependências públicas do repositório. Alguns detalhes específicos (rotas da API, banco de dados exato, variáveis de ambiente) podem precisar de ajuste — marquei abaixo os pontos que você deve conferir/completar.

---

## 📌 Índice

- [Sobre o projeto](#-sobre-o-projeto)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e configuração](#-instalação-e-configuração)
- [Variáveis de ambiente](#-variáveis-de-ambiente)
- [Executando o projeto](#-executando-o-projeto)
- [Scripts disponíveis](#-scripts-disponíveis)
- [Prisma / Banco de dados](#-prisma--banco-de-dados)
- [Roadmap](#-roadmap)
- [Contribuindo](#-contribuindo)
- [Autor](#-autor)
- [Licença](#-licença)

---

## 📖 Sobre o projeto

O **Blog FULLSTACK CAPACITA** é uma aplicação de blog completa, com autenticação de usuários e persistência de dados via ORM. O objetivo do projeto é colocar em prática conceitos de desenvolvimento fullstack, incluindo:

- Criação de uma API RESTful com **Express**
- Autenticação e segurança com **JWT** e **bcrypt**
- Modelagem e acesso a banco de dados com **Prisma ORM**
- Consumo da API por uma interface web (HTML, CSS e JavaScript)

---

## 🚀 Tecnologias utilizadas

### Backend
- [Node.js](https://nodejs.org/)
- [Express 5](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/) (`@prisma/client`, `prisma`)
- [JSON Web Token (jsonwebtoken)](https://www.npmjs.com/package/jsonwebtoken) — autenticação
- [bcrypt](https://www.npmjs.com/package/bcrypt) — hash de senhas
- [cors](https://www.npmjs.com/package/cors) — controle de acesso entre origens
- [dotenv](https://www.npmjs.com/package/dotenv) — variáveis de ambiente
- [pino](https://getpino.io/) + [pino-pretty](https://www.npmjs.com/package/pino-pretty) — logging
- [nodemon](https://www.npmjs.com/package/nodemon) — reinício automático em desenvolvimento

### Frontend
- JavaScript (Vanilla)
- HTML5
- CSS3

> Pasta: `blog-game-station`

---

## 📁 Estrutura do projeto

```
Blog-FULLSTACK-CAPACITA/
├── backend/               # API REST (Express + Prisma)
│   └── server.js          # Ponto de entrada do servidor
├── blog-game-station/     # Frontend da aplicação
├── package.json           # Dependências e scripts do projeto
└── package-lock.json
```

> 💡 Se dentro de `backend/` e `blog-game-station/` você tiver subpastas como `routes/`, `controllers/`, `prisma/schema.prisma`, `public/`, etc., vale detalhar aqui para deixar a navegação mais clara pra quem for ler o repo.

---

## ✅ Pré-requisitos

Antes de começar, você vai precisar ter instalado:

- [Node.js](https://nodejs.org/) (recomendado LTS mais recente)
- [npm](https://www.npmjs.com/) (instalado junto com o Node.js)
- Um banco de dados compatível com Prisma (ex: **PostgreSQL**, **MySQL** ou **SQLite**, conforme configurado em `prisma/schema.prisma`)

---

## ⚙️ Instalação e configuração

```bash
# Clone o repositório
git clone https://github.com/dandanCod123/Blog-FULLSTACK-CAPACITA.git

# Acesse a pasta do projeto
cd Blog-FULLSTACK-CAPACITA

# Instale as dependências
npm install
```

---

## 🔐 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto (ou dentro de `backend/`, dependendo de onde o Prisma/Express espera carregá-lo) com as variáveis abaixo:

```env
# Banco de dados (ajuste conforme o provider usado no schema.prisma)
DATABASE_URL="postgresql://usuario:senha@localhost:5432/blog_capacita"

# Autenticação
JWT_SECRET="sua_chave_secreta_aqui"

# Servidor
PORT=3000
```

> ⚠️ Confirme os nomes exatos das variáveis usadas no código (`process.env.XXX`) e ajuste este bloco de acordo.

---

## ▶️ Executando o projeto

### Backend (modo desenvolvimento)

```bash
npm run backend
```

Esse comando executa `nodemon backend/server.js`, reiniciando o servidor automaticamente a cada alteração no código.

### Frontend

Abra os arquivos dentro de `blog-game-station` (por exemplo, `index.html`) diretamente no navegador, ou sirva a pasta com uma extensão como **Live Server** (VSCode).

---

## 📜 Scripts disponíveis

| Comando            | Descrição                                         |
|---------------------|----------------------------------------------------|
| `npm run backend`   | Inicia o servidor backend com nodemon              |
| `npm test`          | Placeholder (ainda não há testes configurados)      |

---

## 🗄️ Prisma / Banco de dados

Este projeto usa o **Prisma** como ORM. Comandos úteis durante o desenvolvimento:

```bash
# Gerar o Prisma Client
npx prisma generate

# Rodar migrações
npx prisma migrate dev

# Abrir o Prisma Studio (interface visual do banco)
npx prisma studio
```

> 💡 Certifique-se de que o arquivo `prisma/schema.prisma` está configurado com o `provider` e a `DATABASE_URL` corretos antes de rodar as migrações.

---

## 🗺️ Roadmap

- [ ] Documentar as rotas da API (endpoints, métodos, payloads)
- [ ] Adicionar testes automatizados
- [ ] Adicionar exemplos de uso (prints ou GIFs da aplicação)
- [ ] Deploy (Vercel / Render / Railway, etc.)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Commit suas alterações (`git commit -m 'Adiciona minha feature'`)
4. Faça push para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

---

## 👤 Autor

Desenvolvido por [**dandanCod123**](https://github.com/dandanCod123)

---

## 📄 Licença

Este projeto está sob a licença **ISC** (conforme definido no `package.json`). Sinta-se à vontade para adaptar conforme necessário.
