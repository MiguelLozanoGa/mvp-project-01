<template>
  <div class="container">
    <!--  ALERT  -->
    <UiPartialsAlert message="Añade participantes abajo!" />

    <h1>Participants</h1>

    <!-- Formulario -->
    <form @submit.prevent="handleAdd" class="mb-4">
      <input
        v-model="newParticipant"
        type="text"
        placeholder="Nombre del Participante"
        required
        class="form-control mb-2"
      />
      <button type="submit" class="btn btn-primary">Nuevo Participante</button>
    </form>

    <div class="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3">
      <div class="col mb-5" v-for="(participant, index) in participants" :key="index">
        <UiPartialsCard :name="participant" @delete="removeParticipant(index)" />
      </div>
    </div>

    <!-- Botón  eliminar todos  -->
    <button v-if="participants.length" @click="clearParticipants" class="btn btn-danger">
      Clear All
    </button>
  </div>
</template>

<script setup lang="ts">
  // composable
  const { participants, addParticipant, removeParticipant, clearParticipants } = useParticipants();

  const newParticipant = ref('');

  const handleAdd = () => {
    addParticipant(newParticipant.value);
    newParticipant.value = '';
  };
</script>
