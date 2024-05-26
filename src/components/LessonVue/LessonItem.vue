<template>
  <div v-if="lesson" class="lesson-item p-4 bg-white rounded shadow mb-4">
    <h3 class="text-lg font-semibold mb-2">{{ lesson.title }}</h3>
    <p>{{ lesson.description }}</p>
  </div>
  <div v-else class="text-red-500">Данные урока отсутствуют</div>
</template>

<script>
export default {
  name: 'LessonItem',
  props: {
    lesson: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.lesson-item {
  @apply p-4 bg-white rounded shadow mb-4;
}
</style>
