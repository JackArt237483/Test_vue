<template>
  <div class="friend-list mt-4">
    <h3 class="text-lg font-semibold mb-2">Список друзей</h3>
    <ul>
      <li v-for="(friend, index) in localFriends" :key="index" class="mb-2 flex items-center">
        <input
            v-model="localFriends[index]"
            type="text"
            class="border p-2 rounded w-full mr-2"
        />
        <button @click="removeFriend(index)" class="bg-red-500 text-white p-2 rounded">
          Удалить
        </button>
      </li>
    </ul>
    <button @click="addFriend" class="mt-4 bg-green-500 text-white p-2 rounded">
      Добавить друга
    </button>
  </div>
</template>

<script>
export default {
  name: 'FriendList',
  props: {
    friends: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      localFriends: this.friends,
    };
  },
  methods: {
    addFriend() {
      this.localFriends.push('');
      this.$emit('update-friends', this.localFriends);
    },
    removeFriend(index) {
      this.localFriends.splice(index, 1);
      this.$emit('update-friends', this.localFriends);
    },
  },
  watch: {
    friends: {
      handler(newFriends) {
        this.localFriends = [...newFriends];
      },
      deep: true,
    },
    localFriends: {
      handler(newLocalFriends) {
        this.$emit('update-friends', newLocalFriends);
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.friend-list {
  @apply mt-4;
}

input {
  @apply border p-2 rounded w-full mb-2;
}

button {
  @apply bg-red-500 text-white p-2 rounded;
}

</style>

