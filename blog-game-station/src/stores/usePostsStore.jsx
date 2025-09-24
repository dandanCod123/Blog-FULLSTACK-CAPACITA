import { create } from "zustand";
import api from "../services/api";

const usePostStore = create((set) => ({
  // States
  posts: [],
  isLoading: false,
  error: null,

  // Actions auxiliares
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),

  // Carregar todos os posts
  fetchPosts: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.get("/posts");
      set({
        posts: Array.isArray(response.data.posts)
          ? response.data.posts
          : [],
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.error || "Erro ao carregar posts",
      });
    }
  },

  // Criar um post
  createPost: async (postData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.post("/posts", postData);
      const newPost = response.data.post;
      set((state) => ({
        posts: [...state.posts, newPost],
        isLoading: false,
        error: null,
      }));
      return { success: true, post: newPost };
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Erro ao criar post";
      set({ isLoading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Atualizar um post
  updatePost: async (id, postData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.put(`/posts/${id}`, postData);
      const updatedPost = response.data.post;
      set((state) => ({
        posts: state.posts.map((p) => (p.id === id ? updatedPost : p)),
        isLoading: false,
        error: null,
      }));
      return { success: true, post: updatedPost };
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Erro ao atualizar post";
      set({ isLoading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },

  // Deletar um post
  deletePost: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await api.delete(`/posts/${id}`);
      set((state) => ({
        posts: state.posts.filter((p) => p.id !== id),
        isLoading: false,
        error: null,
      }));
      return { success: true };
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Erro ao deletar post";
      set({ isLoading: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  },
}));

export default usePostStore;
