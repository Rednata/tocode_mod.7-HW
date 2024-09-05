<template>
  <Form @onSubmit="handlerSubmit"></Form>
  <List :items="notes" @onRemove="handleRemove"/>

</template>

<script>
import Form from '@/components/Notes/Form.vue';
import List from '@/components/Notes/List.vue';

export default {
  components: { Form, List },
  data() {
    return {
      notes: [
        {
          title: 'Learn Vue3',
          tags: [{ title: 'work', isActive: true }],
        },
        {
          title: 'Finish Course',
          tags: [
            { title: 'work', isActive: true },
            { title: 'home', isActive: true },
          ],
        },
      ],
    };
  },
  mounted() {
    this.getNotes();
  },
  watch: {
    notes: {
      handler(updateList) {
        localStorage.setItem('notes', JSON.stringify(updateList));
      },
      deep: true,
    },
  },
  methods: {
    getNotes() {
      const localNotes = localStorage.getItem('notes');
      if (localNotes) {
        this.notes = JSON.parse(localNotes);
      }
    },
    handlerSubmit({ title, tags }) {
      console.log('tags: ', tags);
      const note = { title, tags };
      this.notes.push(note);
    },
    handleRemove(idx) {
      this.notes.splice(idx, 1);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
