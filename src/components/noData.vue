<template>
  <div class="data">
    <v-card class="data-miss">
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &-miss {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 300px;
    background-color: #FFBFBF;
  }
}
</style>