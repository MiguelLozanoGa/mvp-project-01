<template>
  <div class="container">
    <h1>Participants Page</h1>

    <!-- Botón formulario -->
    <UiBaseButton label="Add Participant" @action="toggleForm" />

    <!-- Formulario  -->
    <form v-if="showForm" @submit.prevent="addParticipant" class="form">
      <input v-model="newParticipant" type="text" placeholder="Enter participant name" required />
      <button type="submit">Add</button>
    </form>

    <!-- Tabla -->
    <table v-if="participants.length > 0" class="participants-table">
      <thead>
        <tr>
          <th>Participant</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(participant, index) in participants" :key="index">
          <td>{{ participant }}</td>
          <td>
            <button @click="removeParticipant(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Botón  borrar todo  -->
    <button v-if="participants.length > 0" @click="clearParticipants">Clear All</button>
  </div>
</template>

<script setup lang="ts">
  const showForm = ref(false);
  const newParticipant = ref('');
  const participants = ref<string[]>([]);

  const toggleForm = () => {
    showForm.value = !showForm.value;
  };

  const addParticipant = () => {
    if (newParticipant.value.trim() !== '') {
      participants.value.push(newParticipant.value.trim());
      newParticipant.value = '';
    }
  };

  const removeParticipant = (index: number) => {
    participants.value.splice(index, 1);
  };

  const clearParticipants = () => {
    participants.value = [];
  };
</script>

<style scoped>
  .container {
    padding: 40px;
  }

  .form {
    margin-top: 20px;
  }

  .participants-table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
  }

  .participants-table th,
  .participants-table td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  .participants-table th {
    background-color: #f2f2f2;
  }

  button {
    padding: 8px 15px;
    margin-top: 10px;
    cursor: pointer;
  }
</style>
