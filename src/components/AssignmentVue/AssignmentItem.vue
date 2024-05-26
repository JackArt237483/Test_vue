<template>
  <div v-if="assignment" class="assignment-item p-4 bg-white rounded shadow mb-4">
    <h3 class="text-lg font-semibold mb-2">{{ assignment.title }}</h3>
    <p>{{ assignment.description }}</p>
  </div>
  <div v-else class="text-red-500">Данные задания отсутствуют</div>
</template>

<script>
export default {
  name: 'AssignmentItem',
  props: {
    assignment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.assignment-item {
  @apply p-4 bg-white rounded shadow mb-4; /* Применяем отступы, белый фон, скругленные углы и тень */
}
</style>
