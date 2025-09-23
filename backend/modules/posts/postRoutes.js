const express = require('express');
const postControllers = require('./postController');
const { authenticateToken } = require('../middlewares/auth');

const router = express.Router();

// Todas as rotas abaixo exigem autenticação
router.post('/posts', authenticateToken, postControllers.createPostController);
router.get('/posts', authenticateToken, postControllers.getAllPostsController);
router.get('/posts/:id', authenticateToken, postControllers.getPostByIdController);
router.put('/posts/:id', authenticateToken, postControllers.updatePostController);
router.delete('/posts/:id', authenticateToken, postControllers.deletePostController);

module.exports = router;
