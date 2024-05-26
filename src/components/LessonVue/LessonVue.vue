<template>
  <div class="lesson">
    <h2 class="text-2xl font-semibold mb-4">Уроки</h2>
    <input
        v-model="searchQuery"
        type="text"
        placeholder="Поиск уроков..."
        class="border p-2 rounded w-full mb-4"
    />
    <transition-group name="fade" tag="div">
      <div v-for="lesson in filteredLessons" :key="lesson.id" class="lesson-item p-4 bg-white rounded shadow mb-4">
        <h3 class="text-lg font-semibold mb-2">{{ lesson.title }}</h3>
        <p>{{ lesson.description }}</p>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'LessonVue',
  data() {
    return {
      searchQuery: '',
      lessons: [],
    };
  },
  mounted() {
    // Имитируем получение данных с сервера
    setTimeout(() => {
      this.lessons = [
        { id: 1, title: 'Первый урок', description: 'Описание первого урока.' },
        { id: 2, title: 'Второй урок', description: 'Описание второго урока.' },
        { id: 3, title: 'Третий урок', description: 'Описание Третьего урока урока.' },
        { id: 4, title: 'Четвертый урок', description: 'Описание четвертого урока.' },
        { id: 5, title: 'Пятый урок', description: 'Описание пятого урока.' },
        { id: 6, title: 'Шестой урок', description: 'Описание шестого урока.' },
        { id: 7, title: 'Лесятый урок', description: 'Описание Десятый урока.' },
      ];
    }, 1000);
  },
  computed: {
    filteredLessons() {
      return this.lessons.filter(lesson =>
          lesson.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.lesson {
  @apply p-4; /* Применяем отступы */
}

input {
  @apply border p-2 rounded w-full mb-4; /* Стилизуем ввод */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s; /* Анимация для появления и исчезновения */
}
.fade-enter, .fade-leave-to {
  opacity: 0; /* Устанавливаем начальное состояние анимации */
}
</style>

