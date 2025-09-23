// src/exercicio05/modules/Auth/user.service.js

// 1️⃣ Carrega dotenv antes de qualquer outra coisa
require('dotenv').config({ path: __dirname + '/../../.env' });

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const logger = require('../../shared/logger');
const prisma = require('../db/prisma');

// 2️⃣ Pega a chave JWT do .env
const JWT_SECRET = process.env.JWT_SECRET_KEY;

// 3️⃣ Teste rápido para conferir se a variável está carregando
if (!JWT_SECRET) {
  logger.error("Chave JWT SECRET não foi carregada corretamente");
  throw new Error("JWT SECRET não carregada!");
} else {
  logger.info("JWT SECRET carregada corretamente");
}

// 4️⃣ Função de cadastro de usuário
const registerUser = async (nome, email, senha) => {
  try {
    if (!nome || !email || !senha) {
      logger.error("nome, email e senha estão incompletos.");
      throw new Error("nome, email e senha são obrigatórias");
    }

    if (senha.length < 6) {
      logger.error("senha deve ter o mínimo de 6 digitos.");
      throw new Error("senha deve ter o mínimo de 6 digitos.");
    }

    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
      logger.warn("Usuário já existente no sistema");
      return userExists;
    }

    logger.info("Início do cadastro do usuário: ", { nome, email });

    const cryptPassword = await bcrypt.hash(senha, 10);

    const newUser = await prisma.user.create({
      data: { name: nome, email, password: cryptPassword }
    });

    const token = jwt.sign(
      { id: newUser.id, name: newUser.name, email: newUser.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );


    logger.info("Usuário cadastrado com sucesso", {
      userId: newUser.id,
      userEmail: newUser.email,
    });

    return { newUser, token };
  } catch (error) {
    logger.error("Erro ao cadastrar o usuário",
      {
        message: error.message,
        stack: error.stack,  // mostra a stack completa
        code: error.code,    // Prisma fornece códigos de erro
        clientVersion: error.clientVersion,
        email,
        nome,
      });
    throw error;
  }
};

// 5️⃣ Função para pegar todos os usuários
const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    logger.info('Usuários acessados com sucesso.', { count: users.length });
    return users;
  } catch (error) {
    logger.error("Erro ao acessar os usuários", { error: error.message });
    throw error;
  }
};

// 6️⃣ Função de login
const login = async (email, senha) => {
  try {
    if (!email || !senha) {
      logger.error("email e senha estão incompletos.");
      throw new Error("email e senha são obrigatórias");
    }

    const userExists = await prisma.user.findUnique({ where: { email } });
    if (!userExists) {
      logger.warn("Usuário não cadastrado na aplicação.");
      throw new Error("Usuário não cadastrado na aplicação.");
    }

    const passwordValid = await bcrypt.compare(senha, userExists.password);
    if (!passwordValid) {
      logger.error("Senha inválida.");
      throw new Error("Senha inválida.");
    }

    const token = jwt.sign(
      { id: userExists.id, name: userExists.name, email: userExists.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    logger.info('Login realizado com sucesso', { userId: userExists.id, email });

    return { userExists, token };
  } catch (error) {
    logger.error("Erro ao realizar o login", { error: error.message, email });
    throw error;
  }
};

// 7️⃣ Exporta funções
module.exports = {
  registerUser,
  getAllUsers,
  login
};
