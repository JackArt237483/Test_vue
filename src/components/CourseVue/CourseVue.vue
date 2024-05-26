<template>
  <div class="course-catalog">
    <h2 class="text-2xl font-semibold mb-4">Каталог курсов</h2>
    <input
        v-model="searchQuery"
        type="text"
        placeholder="Поиск курсов..."
        class="border p-2 rounded w-full mb-4"
    />
    <transition-group name="fade" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <CourseItemName
          v-for="course in filteredCourses"
          :key="course.id"
          :course="course"
      />
    </transition-group>
  </div>
</template>

<script>
import CourseItemName from './CourseItemName.vue';

export default {
  name: 'CourseVue',
  components: {
    CourseItemName,
  },
  data() {
    return {
      searchQuery: '',
      courses: [
        { id: 1, title: 'Курс по веб-разработке', description: 'Изучите основы веб-разработки с помощью этого курса.' },
        { id: 2, title: 'Курс по мобильной разработке', description: 'Узнайте, как создавать мобильные приложения с помощью этого курса.' },
        { id: 3, title: 'Курс по машинному обучению', description: 'Познакомьтесь с основами машинного обучения.' },
        { id: 4, title: 'Курс по дизайну интерфейсов', description: 'Научитесь создавать удобные и красивые интерфейсы.' },
        { id: 5, title: 'Курс по кибербезопасности', description: 'Узнайте, как защитить свои данные и приложения.' },
      ],
    };
  },
  computed: {
    filteredCourses() {
      return this.courses.filter(course =>
          course.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.course-catalog {
  @apply p-4;
}

input {
  @apply border p-2 rounded w-full mb-4;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
