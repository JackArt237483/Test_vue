<template>
  <div class="course-catalog">
    <h2 class="text-2xl font-semibold mb-4">Каталог курсов</h2>
    <input
        v-model="searchQuery"
        type="text"
        placeholder="Поиск курсов..."
        class="border p-2 rounded w-full mb-4"
    />
    <CourseItem
        v-for="course in filteredCourses"
        :key="course.id"
        :course="course"
    />
  </div>
</template>

<script>
import axios from 'axios';
import CourseItem from './CourseItem.vue';

export default {
  name: 'CourseCatalog',
  components: {
    CourseItem,
  },
  data() {
    return {
      searchQuery: '',
      courses: [],
    };
  },
  created() {
    this.fetchCourses();
  },
  methods: {
    fetchCourses() {
      axios.get('/api/courses')
          .then(response => {
            this.courses = response.data;
          })
          .catch(error => {
            console.error('Error fetching courses:', error);
          });
    }
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
</style>
