<template>
  <div class="container">
    <h1>Participants Page</h1>

    <UiBaseButton label="Add Participant" @action="toggleForm" />

    <form v-if="showForm" @submit.prevent="handleAdd" class="form">
      <input v-model="newParticipant" type="text" placeholder="Enter participant name" required />
      <button type="submit">Add</button>
    </form>

    <table v-if="participants.length > 0" class="table">
      <thead>
        <tr>
          <th>Participant</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(participant, index) in participants" :key="index">
          <td>{{ participant }}</td>
          <td><button @click="removeParticipant(index)">Delete</button></td>
        </tr>
      </tbody>
    </table>

    <button v-if="participants.length > 0" @click="clearParticipants">Clear All</button>
  </div>
</template>

<script setup lang="ts">
  const { participants, addParticipant, removeParticipant, clearParticipants } = useParticipants();

  const showForm = ref(false);
  const newParticipant = ref('');

  const toggleForm = () => {
    showForm.value = !showForm.value;
  };

  const handleAdd = () => {
    addParticipant(newParticipant.value);
    newParticipant.value = '';
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
