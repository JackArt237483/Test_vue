<template>
  <div class="profile-screen">
    <h2 class="text-2xl font-semibold mb-4">Профиль</h2>
    <RegisterVue v-if="!user" @registered="handleRegistration"/>
    <ProfileVue v-else @logged-out="handleLogout" />
  </div>
</template>

<script>
import ProfileVue from '../components/ProfileVue/ProfileVue';
import RegisterVue from "@/components/RegisterVue/RegisterVue.vue";


export default {
  name: 'ProfileScreen',
  components: {ProfileVue, RegisterVue},
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')),
    };
  },
  methods: {
    handleRegistration(user) {
      this.user = user;
    },
    handleLogout() {
      this.user = null;
    },
  },
};
</script>

<style scoped>
.profile-screen {
  @apply p-4;
}
</style>

