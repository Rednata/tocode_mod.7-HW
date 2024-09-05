<template>
  <footer class="footer">
    <div class="container">
      <ul class="navbar-list">
        <li class="navbar-item" v-for="link in links" :key="link.alias">
          <RouterLink class="navbar-link" :to="link.url">{{ link.title }}</RouterLink>
        </li>
      </ul>

  </div>
  </footer>

</template>

<script>
import { links } from '@/_config';

export default {
  data() {
    return {
      links,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
