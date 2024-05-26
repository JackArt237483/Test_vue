<template>
  <div class="layout">
    <header class="bg-gray-800 text-white p-4">
      <nav class="mt-4">
        <ul class="flex space-x-4">
          <li><router-link to="/profile" class="text-blue-300 hover:text-blue-500">Профиль</router-link></li>
          <li><router-link to="/catalog" class="text-blue-300 hover:text-blue-500">Каталог курсов</router-link></li>
          <li><router-link to="/course" class="text-blue-300 hover:text-blue-500">Курсы</router-link></li>
          <li><router-link to="/lesson" class="text-blue-300 hover:text-blue-500">Уроки</router-link></li>
          <li><router-link to="/forum" class="text-blue-300 hover:text-blue-500">Форум</router-link></li>
          <li><router-link to="/tasks" class="text-blue-300 hover:text-blue-500">Задания</router-link></li>
        </ul>
      </nav>
    </header>
    <main class="p-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'LayoutVueRouter',
};
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  background-color: #2d3748; /* Tailwind's bg-gray-800 */
  color: white; /* Tailwind's text-white */
  padding: 1rem; /* Tailwind's p-4 */
}

nav ul {
  display: flex;
  gap: 1rem; /* Tailwind's space-x-4 */
}

main {
  flex-grow: 1;
  padding: 1rem; /* Tailwind's p-4 */
}
</style>

