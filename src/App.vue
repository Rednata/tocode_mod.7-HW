<template>
  <div class="wrapper">
    <Header ></Header>
    <div class="wrapper-content">
      <div class="container">
        <RouterView />
      </div>
    </div>
    <Footer ></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: { Header, Footer },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
