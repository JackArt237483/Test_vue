<template>
  <div class="message-box p-4 bg-white rounded shadow">
    <p class="text-gray-700">Привет, как дела?</p>
  </div>
</template>

<script>
export default {
  name: 'MessageList',
};
</script>

<style scoped>
.message-box {
  @apply p-4 bg-white rounded shadow; /* Применяем отступы, белый фон, скругленные углы и тень */
}
</style>
