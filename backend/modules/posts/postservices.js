const prisma = require("../db/prisma");
const logger = require("../../shared/logger");

// Função auxiliar: normaliza todas as chaves do objeto para lowercase
const normalizeKeys = (obj) => {
  const result = {};
  for (const key in obj) {
    result[key.toLowerCase()] = obj[key];
  }
  return result;
};

// ============================
// Recuperar todos os posts
// ============================
const getAllPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      include: { user: { select: { id: true, name: true, email: true } } },
    });
    logger.info("Posts listados com sucesso.", { count: posts.length });
    return posts;
  } catch (error) {
    logger.error("Erro ao acessar os posts.", { error: error.message });
    throw error;
  }
};

// ============================
// Recuperar um post pelo id
// ============================
const getPostById = async (id) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(id) },
      include: { user: { select: { id: true, name: true, email: true } } },
    });

    if (!post) {
      logger.warn("Post não encontrado na base de dados.", { id });
      return null;
    }

    logger.info("Post encontrado com sucesso.", { id });
    return post;
  } catch (error) {
    logger.error("Erro ao acessar um post específico.", { error: error.message });
    throw error;
  }
};

// ============================
// Criar um novo post
// ============================
const createPost = async (postData) => {
  try {
    const normalizedData = normalizeKeys(postData);

    const {
      title,
      description = null,
      content,
      category,
      image = null,
      userid // userId pode vir em qualquer capitalização
    } = normalizedData;

    if (!title || !content || !userid) {
      throw new Error("Campos obrigatórios ausentes: title, content ou userId");
    }

    const finalCategory = category || "sem categoria";

    const post = await prisma.post.create({
      data: {
        title,
        description,
        content,
        category,
        image,
        userId: userid,
      },
    });

    logger.info("Post criado com sucesso.", { id: post.id, userId: userid });
    return post;
  } catch (error) {
    logger.error("Erro ao cadastrar um post.", { error: error.message });
    throw error;
  }
};

// Controller para criação de post
const createPostController = async (req, res) => {
  try {
    const userId = req.user.id;

    const post = await createPost({ ...req.body, userId });

    res.status(201).json({ message: "Post criado com sucesso", post });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar post", error: error.message });
  }
};

// ============================
// Atualizar um post pelo id
// ============================
const updatePost = async (id, postData) => {
  try {
    const normalizedData = normalizeKeys(postData);

    const { title, description, content, image, category } = normalizedData;

    const dataToUpdate = {};
    if (title !== undefined) dataToUpdate.title = title;
    if (description !== undefined) dataToUpdate.description = description;
    if (content !== undefined) dataToUpdate.content = content;
    if (image !== undefined) dataToUpdate.image = image;
    if (category !== undefined) dataToUpdate.category = category;

    if (Object.keys(dataToUpdate).length === 0) {
      throw new Error("Nenhum campo válido foi enviado para atualização");
    }

    const updatedPost = await prisma.post.update({
      where: { id: parseInt(id) },
      data: dataToUpdate,
    });

    logger.info("Post atualizado com sucesso.", { id });
    return updatedPost;
  } catch (error) {
    logger.error("Erro ao atualizar um post.", { error: error.message });
    throw error;
  }
};

// Controller para update
const updatePostController = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedPost = await updatePost(id, req.body);

    res.status(200).json({ message: "Post atualizado com sucesso", post: updatedPost });
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar post", error: error.message });
  }
};

// ============================
// Deletar um post pelo id
// ============================
const deletePost = async (id) => {
  try {
    const post = await getPostById(id);
    if (!post) return null;

    await prisma.post.delete({
      where: { id: parseInt(id) },
    });

    logger.info("Post deletado com sucesso.", { id });
    return true;
  } catch (error) {
    logger.error("Erro ao deletar um post.", { error: error.message });
    throw error;
  }
};

// Controller para delete
const deletePostController = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deletePost(id);
    if (!result) {
      return res.status(404).json({ message: "Post não encontrado" });
    }

    res.status(200).json({ message: "Post deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar post", error: error.message });
  }
};

module.exports = {
  createPost,
  createPostController,
  getAllPosts,
  getPostById,
  updatePost,
  updatePostController,
  deletePost,
  deletePostController,
};
