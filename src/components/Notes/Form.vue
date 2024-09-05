<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <label for="value">
        <textarea
        class=""
        type="text" required
        v-model="value"
        placeholder="Enter Your note">
        </textarea>
      </label>

      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
    <TagsList :items="tags" @onItemClick="handleTagClick"/>
  </div>

</template>

<script>
import TagsList from '@/components/Notes/UI/TagsList.vue';

export default {
  components: { TagsList },
  data() {
    return {
      value: '',
      tags: [
        { title: 'home', id: 0 },
        { title: 'work', id: 1 },
        { title: 'travel', id: 2 },
      ],
    };
  },
  methods: {
    getActiveTags() {
      const tags = [];
      document.querySelectorAll('.tags-list .isActive').forEach((elem) => tags.push(
        { title: elem.textContent },
      ));
      return tags;
    },
    onSubmit() {
      // const note = { title: this.value, tags: this.tags.filter((tag) => tag.isActive) };
      const note = { title: this.value, tags: this.getActiveTags() };
      this.$emit('onSubmit', note);
      this.value = '';
      document.querySelectorAll('.tags-list .isActive').forEach((btn) => btn.classList.remove('isActive'));
    },
    handleTagClick(event) {
      event.target.closest('button').classList.toggle('isActive');
    },
  },
};
</script>

<style lang="scss" scoped>
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center
}
  .note-form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 100%;

    textarea {
      margin-bottom: 0;
    }
  }
</style>
