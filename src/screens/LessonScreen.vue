<template>
  <div class="lesson-screen">
    <h2 class="text-2xl font-semibold mb-4">Уроки</h2>
    <LessonVue />
  </div>
</template>

<script>
import LessonVue from '../components/LessonVue/LessonVue.vue';

export default {
  name: 'LessonScreen',
  components: {
    LessonVue,
  },
};
</script>

<style scoped>
.lesson-screen {
  @apply p-4;
}
</style>
