<template>
  <div class="course-screen">
    <h2 class="text-2xl font-semibold mb-4">Курсы</h2>
    <CourseVue />
  </div>
</template>

<script>
import CourseVue from '../components/CourseVue/CourseVue';

export default {
  name: 'CourseScreen',
  components: {
    CourseVue,
  },
};
</script>

<style scoped>
.course-screen {
  @apply p-4;
}
</style>
