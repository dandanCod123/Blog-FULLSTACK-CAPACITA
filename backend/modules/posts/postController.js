const postService = require("./postservices");
const logger = require("../../shared/logger");

exports.createPostController = async (req, res) => {
  const correlationId = req.headers["x-correlation-id"] || `create-${Date.now()}`;
  try {
  const { title, description, content, category, image } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        error: "Campos obrigatórios: title e content",
      });
    }

    const post = await postService.createPost({
      title,
      description,
      content,
      category,
      image,
      userId: req.user.id,
    });

    logger.info("Post criado", { correlationId, postId: post.id, userId: req.user.id });

    res.status(201).json({
      message: "Post criado com sucesso",
      post,
    });
  } catch (error) {
    logger.error("Erro ao criar post", { correlationId, error: error.message });
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

exports.getAllPostsController = async (req, res) => {
  const correlationId = req.headers["x-correlation-id"] || `list-${Date.now()}`;
  try {
    const posts = await postService.getAllPosts();
    logger.info("Posts listados", { correlationId, count: posts.length });

    res.json({ posts, count: posts.length });
  } catch (error) {
    logger.error("Erro ao listar posts", { correlationId, error: error.message });
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

exports.getPostByIdController = async (req, res) => {
  const correlationId = req.headers["x-correlation-id"] || `get-${Date.now()}`;
  try {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: "ID deve ser um número válido" });
    }

    const post = await postService.getPostById(id);

    if (!post) {
      return res.status(404).json({ error: "Post não encontrado" });
    }

    logger.info("Post encontrado", { correlationId, postId: id });
    res.json(post);
  } catch (error) {
    logger.error("Erro ao buscar post", { correlationId, error: error.message });
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

exports.updatePostController = async (req, res) => {
  const correlationId = req.headers["x-correlation-id"] || `update-${Date.now()}`;
  try {
    const { id } = req.params;
    const { title, description, content, image } = req.body;

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: "ID deve ser um número válido" });
    }

    const updatedPost = await postService.updatePost(id, { title, description, content, image });

    logger.info("Post atualizado", { correlationId, postId: id });
    res.json({ message: "Post atualizado com sucesso", post: updatedPost });
  } catch (error) {
    logger.error("Erro ao atualizar post", { correlationId, error: error.message });
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

exports.deletePostController = async (req, res) => {
  const correlationId = req.headers["x-correlation-id"] || `delete-${Date.now()}`;
  try {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: "ID deve ser um número válido" });
    }

    const deleted = await postService.deletePost(id);

    if (!deleted) {
      return res.status(404).json({ error: "Post não encontrado" });
    }

    logger.info("Post deletado", { correlationId, postId: id });
    res.json({ message: "Post deletado com sucesso" });
  } catch (error) {
    logger.error("Erro ao deletar post", { correlationId, error: error.message });
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};
