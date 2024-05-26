<template>
  <div class="catalog-screen">
    <h2 class="text-2xl font-semibold mb-4">Каталог курсов</h2>
    <CourseVue />
  </div>
</template>

<script>
import CourseVue from '../components/CourseCatalog/CourseCatalog';

export default {
  name: 'CatalogScreen',
  components: {
    CourseVue,
  },
};
</script>

<style scoped>
.catalog-screen {
  @apply p-4;
}
</style>
