<template>
  <div v-if="course" class="course-item p-4 bg-white rounded shadow mb-4">
    <h3 class="text-lg font-semibold mb-2">{{ course.title }}</h3>
    <p>{{ course.description }}</p>
  </div>
  <div v-else class="text-red-500">Course data is missing</div>
</template>

<script>
export default {
  name: 'CourseItem',
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.course-item {
  @apply p-4 bg-white rounded shadow mb-4;
}
</style>
