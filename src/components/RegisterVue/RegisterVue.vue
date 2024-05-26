<template>
  <div class="register p-6 bg-gray-100 min-h-screen flex flex-col justify-center items-center">
    <h2 class="text-2xl font-semibold mb-4">Создайте аккаунт</h2>
    <RegistrationForm @submit="handleRegistration" />
  </div>
</template>

<script>
import RegistrationForm from './RegistrationForm';

export default {
  name: 'RegisterVue',
  components: {
    RegistrationForm,
  },
  methods: {
    handleRegistration(userData) {
      console.log('Регистрация:', userData);
    },
  },
};
</script>

<style scoped>
.register {
  @apply p-6 bg-gray-100 min-h-screen flex flex-col justify-center items-center;
}
</style>
