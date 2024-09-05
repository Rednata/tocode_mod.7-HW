<template>
  <ul class="notes-list">
    <li class="note-item" v-for="(note, idx) in items" :key="idx">
      <div class="note-header">
        <p>{{ note.title }}</p>
        <button class="del-btn" @click="$emit('onRemove', idx)">&#10005;</button>
      </div>
      <div class="note-footer">
        <TagsList
          isPreview
          v-if="note.tags && note.tags.length"
          :items="note.tags"/>
      </div>
    </li>
  </ul>
</template>

<script>
import TagsList from '@/components/Notes/UI/TagsList.vue';

export default {
  components: { TagsList },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.notes-list {
  padding: 40px 0;
}

  .note-item {
    width: 100%;
    padding: 18px 20px;
    margin-bottom: 20px;
    border-radius: 14px;
    background-color: #ffffff;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
    &:hover {
      box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
      transform: translate(0, -6px);
      transition-delay: 0s !important;
    }
  }

  .note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

  .note-footer {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
  .del-btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
</style>
