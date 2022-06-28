<template>
  <div class="main">
    <router-view :key="key" />
  </div>
</template>

<script>
export default {
  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped>
.main {
  padding: 20px;
}
</style>
