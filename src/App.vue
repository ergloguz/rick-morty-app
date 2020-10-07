<template>
  <div>
    <Container>
      <Header/>
      <router-view/>
    </Container>
  </div>
</template>
<script>
import Container from "@/components/container";
import Header from "@/components/header";
export default {
  name:"App",
  components: {Header, Container},
  mounted(){
    this.$store.dispatch("loadCharacters")

  }
}

</script>
<style>

</style>
