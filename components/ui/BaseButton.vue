<template>
  <button @click="emit('action')" class="btn btn-primary">
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
