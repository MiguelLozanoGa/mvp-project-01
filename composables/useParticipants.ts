export const useParticipants = () => {
  const participants = ref<string[]>([]);

  const addParticipant = (name: string) => {
    if (name.trim() !== '') {
      participants.value.push(name.trim());
    }
  };

  const removeParticipant = (index: number) => {
    participants.value.splice(index, 1);
  };

  const clearParticipants = () => {
    participants.value = [];
  };

  return { participants, addParticipant, removeParticipant, clearParticipants };
};
