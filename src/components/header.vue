<template>
  <div class="header">
    <router-link class="header-link" to="/">home</router-link>
    <router-link class="header-link" to="/favorites">favorites</router-link>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.header {
  display: flex;
  height: 56px;
  &-link {
    margin-right: 20px;
    color:rgb(var(--white));
    font-size: 28px;
    &:hover {
      color:rgb(var(--blue));
    }
  }
}
</style>