<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <!-- Приветственный раздел -->
    <div class="bg-white p-6 rounded-lg shadow-md mb-6">
      <h1 class="text-2xl font-bold">Добро пожаловать, {{ username }}!</h1>
      <p class="text-gray-700 mt-2">Рады видеть вас снова. Вот ваши последние уведомления:</p>
    </div>

    <!-- Раздел уведомлений -->
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Уведомления</h2>
      <ul>
        <li v-for="notification in notifications" :key="notification.id" class="mb-2">
          <p class="text-gray-800">{{ notification.message }}</p>
          <span class="text-gray-500 text-sm">{{ notification.time }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardVue',
  data() {
    return {
      username: 'Иван Иванов',
      notifications: [
        { id: 1, message: 'У вас есть новое сообщение', time: '10 минут назад' },
        { id: 2, message: 'Ваш профиль был обновлен', time: '1 час назад' },
        { id: 3, message: 'Новое задание добавлено', time: '2 часа назад' },
      ],
    };
  },
};
</script>

<style scoped>
/* Можно добавить стили, специфичные для компонента */
</style>
