<template>
  <div class="messaging">
    <h2 class="text-2xl font-semibold mb-4">Сообщения</h2>
    <!-- Дочерний компонент для отображения одного сообщения -->
    <MessageList />
  </div>
</template>

<script>
// Импортируем дочерний компонент
import MessageList from './MessageList';

export default {
  name: 'MessagingVue',
  components: {
    MessageList, // Регистрируем дочерний компонент
  },
};
</script>

<style scoped>
.messaging {
  @apply p-4; /* Применяем отступы */
}
</style>

