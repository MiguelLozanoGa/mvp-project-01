<template>
  <button @click="emit('action')" class="button">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
  defineProps<{
    label: string;
  }>();

  const emit = defineEmits<{
    (event: 'action'): void;
  }>();
</script>

<style scoped>
  .button {
    padding: 12px 25px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .button:hover {
    background-color: #2c8a66;
  }
</style>
