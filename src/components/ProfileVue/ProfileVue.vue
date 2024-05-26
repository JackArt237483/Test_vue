<template>
  <div class="profile p-4 bg-gray-100 rounded shadow">
    <!-- Фотография и имя пользователя -->
    <div class="flex items-center mb-4">
      <h2 class="text-xl font-bold text-gray-800 mr-4">Профиль</h2>
      <input v-model="user.name" type="text" class="border p-2 rounded w-full" />
    </div>

    <!-- Раздел с контактными данными -->
    <div class="mb-4">
      <h3 class="text-lg font-semibold mb-2">Контактная информация</h3>
      <p>
        Email:
        <input v-model="user.email" type="email" class="border p-2 rounded w-full" />
      </p>
      <p>
        Телефон:
        <input v-model="user.phone" type="tel" class="border p-2 rounded w-full" />
      </p>
    </div>

    <!-- Раздел с дополнительной информацией -->
    <div class="mb-4">
      <h3 class="text-lg font-semibold mb-2">Дополнительная информация</h3>
      <p>
        Дата рождения:
        <input v-model="user.birthdate" type="date" class="border p-2 rounded w-full" />
      </p>
      <p>
        Город:
        <input v-model="user.city" type="text" class="border p-2 rounded w-full" />
      </p>
    </div>

    <!-- Дочерний компонент для отображения списка друзей -->
    <FriendList :friends="user.friends" @update-friends="updateFriends" />

    <!-- Кнопка для сохранения данных -->
    <button @click="saveData" class="mt-4 bg-blue-500 text-white p-2 rounded">
      Сохранить
    </button>
    <!-- Кнопка для выхода -->
    <button @click="logout" class="mt-4 bg-red-500 text-white p-2 rounded">
      Выйти
    </button>
  </div>
</template>

<script>
import FriendList from './FriendList.vue';

export default {
  name: 'ProfileVue',
  components: {
    FriendList,
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')) || {
        name: 'Иван Иванов',
        email: 'ivan@example.com',
        phone: '+1234567890',
        birthdate: '1990-01-01',
        city: 'Москва',
        friends: ['Алексей', 'Елена', 'Мария'],
      },
    };
  },
  methods: {
    saveData() {
      localStorage.setItem('user', JSON.stringify(this.user));
      alert('Данные сохранены!');
    },
    updateFriends(newFriends) {
      this.user.friends = newFriends;
    },
    logout() {
      localStorage.removeItem('user');
      this.$emit('logged-out');
    },
  },
};
</script>

<style scoped>
.profile {
  @apply p-4 bg-gray-100 rounded shadow;
}

input {
  @apply border p-2 rounded w-full mb-2;
}

button {
  @apply mt-4 bg-blue-500 text-white p-2 rounded;
}
</style>
