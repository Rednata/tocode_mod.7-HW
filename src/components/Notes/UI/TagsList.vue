<template>
  <div>
    <div class="tags-list">
      <button
        class="tag-item"
        :class="{isPreview: isPreview, isActive: item.isActive && !isPreview}"
        v-for="item in items"
        @click="$emit('onItemClick', $event)"
        :key="item"
        >
        <span >{{ item.title }}</span>

      </button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {

  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    // isActive: {
    //   type: Boolean,
    //   default: false,
    // },
    isPreview: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  border: none;
  user-select: none;
  cursor: pointer;

  &.isActive {
    background-color: #444ce0;
    color: #fff;
  }

  &.isPreview {
    padding: 0;
    color: #444ce0;
    cursor: default;
    &:before {
      content: '#';
    }
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
