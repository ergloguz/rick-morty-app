<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style scoped>
.container {
  max-width: 1245px;
  margin-left: auto;
  margin-right: auto;
}
</style>