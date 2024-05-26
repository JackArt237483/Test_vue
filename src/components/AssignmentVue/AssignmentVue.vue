<template>
  <div class="assignment">
    <h2 class="text-2xl font-semibold mb-4">Задания</h2>
    <!-- Форма для поиска заданий -->
    <input v-model="searchQuery" type="text" placeholder="Поиск заданий" class="form-input mb-4">
    <AssignmentItem
        v-for="assignment in filteredAssignments"
        :key="assignment.id"
        :assignment="assignment"
    />
  </div>
</template>

<script>
import AssignmentItem from './AssignmentItem.vue';

export default {
  name: 'AssignmentVue',
  components: {
    AssignmentItem,
  },
  data() {
    return {
      assignments: [],
      searchQuery: '',
    };
  },
  mounted() {
    setTimeout(() => {
      this.assignments = [
        { id: 1, title: 'Первое задание', description: 'Описание первого задания.' },
        { id: 2, title: 'Второе задание', description: 'Описание второго задания.' },
        { id: 3, title: 'Третье задание', description: 'Описание третьего задания.' },
        { id: 4, title: 'Четвертое задание', description: 'Описание четвертого задания.' },
        { id: 5, title: 'Пятое задание', description: 'Описание пятого задания.' },
        { id: 6, title: 'Шестое задание', description: 'Описание шестого задания.' },
        { id: 7, title: 'Седьмое задание', description: 'Описание седьмого задания.' },
        { id: 8, title: 'Восьмое задание', description: 'Описание восьмого задания.' },
        { id: 9, title: 'Девятое задание', description: 'Описание девятого задания.' },
        { id: 10, title: 'Десятое задание', description: 'Описание десятого задания.' },

      ];
    }, 1000);
  },
  computed: {
    filteredAssignments() {
      return this.assignments.filter(assignment => {
        return assignment.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            assignment.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  }
};
</script>

<style scoped>
.assignment {
  @apply p-4; /* Применяем отступы */
}
.form-input {
  @apply w-full p-2 border rounded mb-4;
}
.assignment-item {
  @apply p-4 bg-white rounded shadow mb-4; /* Применяем отступы, белый фон, скругленные углы и тень */
}
</style>
