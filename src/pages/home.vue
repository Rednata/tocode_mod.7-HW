<template>
  <Form></Form>
  <List/>

</template>

<script>
import Form from '@/components/Notes/Form.vue';
import List from '@/components/Notes/List.vue';

export default {
  components: { Form, List },
  data() {
    return {
    };
  },
  // mounted() {
  //   this.getNotes();
  // },
  // watch: {
  //   notes: {
  //     handler(updateList) {
  //       localStorage.setItem('notes', JSON.stringify(updateList));
  //     },
  //     deep: true,
  //   },
  // },
  // methods: {
  //   getNotes() {
  //     const localNotes = localStorage.getItem('notes');
  //     if (localNotes) {
  //       this.notes = JSON.parse(localNotes);
  //     }
  //   },
  // },
};
</script>

<style lang="scss" scoped>

</style>
