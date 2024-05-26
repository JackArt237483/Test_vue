<template>
  <div class="forum-post p-4 bg-white rounded shadow mb-4">
    <h3 class="text-lg font-semibold mb-2">{{ post.title }}</h3>
    <p class="text-gray-700">{{ post.content }}</p>
    <p class="text-sm text-gray-500 mt-2">Автор: {{ post.author }}</p>
  </div>
</template>

<script>
export default {
  name: 'ForumPost',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.forum-post {
  @apply p-4 bg-white rounded shadow mb-4; /* Применяем отступы, белый фон, скругленные углы и тень */
}
</style>
