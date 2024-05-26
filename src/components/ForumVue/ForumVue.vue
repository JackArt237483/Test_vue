<template>
  <div class="forum">
    <h2 class="text-2xl font-semibold mb-4">Форум</h2>

    <!-- Форма для добавления нового поста -->
    <form @submit.prevent="addPost" class="mb-4">
      <input v-model="newPost.title" type="text" placeholder="Заголовок поста" class="form-input mb-2" required>
      <input v-model="newPost.author" type="text" placeholder="Автор" class="form-input mb-2" required>
      <textarea v-model="newPost.content" placeholder="Содержание поста" class="form-textarea mb-2" required></textarea>
      <button type="submit" class="btn bg-blue-500 text-white py-2 px-4 rounded">Добавить пост</button>
    </form>

    <!-- Дочерний компонент для отображения списка постов -->
    <ForumPost
        v-for="post in filteredPosts"
        :key="post.id"
        :post="post"
    />
  </div>
</template>

<script>
import ForumPost from './ForumPost.vue';

export default {
  name: 'ForumVue',
  components: {
    ForumPost,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'Первое сообщение', content: 'Это содержание первого сообщения на форуме.', author: 'Иван Иванов' },
        { id: 2, title: 'Второе сообщение', content: 'Это содержание второго сообщения на форуме.', author: 'Мария Смирнова' },
        // Добавьте здесь больше сообщений, если нужно
      ],
      newPost: {
        title: '',
        content: '',
        author: '',
      },
      searchQuery: '',
    };
  },
  computed: {
    // Фильтруем посты по поисковому запросу
    filteredPosts() {
      return this.posts.filter(post => {
        return post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            post.author.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  },
  methods: {
    // Добавляем новый пост
    addPost() {
      if (this.newPost.title && this.newPost.content && this.newPost.author) {
        this.posts.push({
          id: this.posts.length + 1,
          title: this.newPost.title,
          content: this.newPost.content,
          author: this.newPost.author,
        });
        // Очищаем форму после добавления поста
        this.newPost.title = '';
        this.newPost.content = '';
        this.newPost.author = '';
      }
    }
  }
};
</script>

<style scoped>
.forum {
  @apply p-4;
}
.form-input, .form-textarea {
  @apply w-full p-2 border rounded mb-2;
}
.btn {
  @apply py-2 px-4 bg-blue-500 text-white rounded cursor-pointer;
}
</style>

