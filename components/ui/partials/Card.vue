<template>
  <div class="card h-100">
    <div class="card-body p-4">
      <div class="text-center">
        <h5 class="fw-bolder">{{ name }}</h5>
      </div>
    </div>
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div class="text-center">
        <button class="btn btn-outline-danger mt-auto" @click="$emit('delete')">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    name: string;
  }>();

  defineEmits(['delete']);
</script>
