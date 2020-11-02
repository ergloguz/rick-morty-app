<template>
  <div>
    <v-card class="custom">
      <v-card class="custom-inner">
        <slot></slot>
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  name:"DetailCard"
}
</script>

<style scoped>
.custom {
  background-color: rgb(var(--pink));
  width: 600px;
  height: 340px;
  padding: 20px;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  &-inner {
    background-color: rgb(var(--white));
    width: 600px;
    height: 340px;
    padding: 20px;
    border-radius: 3px;
    display: flex;
  }
}
</style>