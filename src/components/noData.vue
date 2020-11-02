<template>
  <div class="data flexCenter">
    <v-card class="data-miss flexCenter">
      <IconAlert></IconAlert>
    </v-card>
    <CustomLabel>SORRY ! WE COULDNT REACH YOUR FAVORITE CHARACTERS</CustomLabel>
  </div>
</template>

<script>
import CustomLabel from "@/components/customLabel"
import IconAlert from "@/icons/alert.svg"
export default {
  name:"NoData",
  components: {
    IconAlert,
    CustomLabel
  }
}
</script>

<style scoped>
.data {
  flex-direction: column;

  &-miss {
    height: 300px;
    width: 300px;
    background-color: rgb(var(--pink));
  }
}
</style>