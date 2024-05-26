<template>
  <div class="register p-6 bg-gray-100 min-h-screen flex flex-col justify-center items-center">
    <h2 class="text-2xl font-semibold mb-4">Создайте аккаунт</h2>
    <form @submit.prevent="handleSubmit" class="w-full max-w-md">
      <input v-model="name" type="text" placeholder="Имя" class="form-input mb-4" required />
      <input v-model="email" type="email" placeholder="Email" class="form-input mb-4" required />
      <input v-model="password" type="password" placeholder="Пароль" class="form-input mb-4" required />
      <button @click="goToProfile" class="bg-blue-500 text-white p-2 rounded w-full">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      const user = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      // Лучше проверить, есть ли доступ к localStorage
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(user));
        // Вам нужно иметь событие registered в родительском компоненте
        // this.$emit('registered', user);
      } else {
        console.error('localStorage is not available');
      }
    },
    // Метод для перехода на страницу профиля
    goToProfile() {
      this.$router.push('/profile');
    }
  },
};
</script>

<style scoped>
.register {
  @apply p-6 bg-gray-100 min-h-screen flex flex-col justify-center items-center;
}
.form-input {
  @apply w-full p-2 border rounded mb-4;
}
</style>

