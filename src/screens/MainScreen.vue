<template>
  <div class="main-screen">
    <header class="bg-gray-800 text-white p-4">
      <h1 class="text-3xl">Главный Экран</h1>
      <nav class="mt-4">
        <ul class="flex space-x-4">
          <li><router-link to="/profile" class="text-blue-300 hover:text-blue-500">Профиль</router-link></li>
          <li><router-link to="/catalog" class="text-blue-300 hover:text-blue-500">Каталог курсов</router-link></li>
          <li><router-link to="/course" class="text-blue-300 hover:text-blue-500">Курсы</router-link></li>
          <li><router-link to="/lesson" class="text-blue-300 hover:text-blue-500">Уроки</router-link></li>
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
  name: 'MainScreen',
};
</script>

<style scoped>
.main-screen {
  @apply flex flex-col h-screen;
}

header {
  @apply bg-gray-800 text-white p-4;
}

nav ul {
  @apply flex space-x-4;
}

main {
  @apply flex-grow p-4;
}
</style>
