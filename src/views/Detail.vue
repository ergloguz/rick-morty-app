<template>
  <div class="c flexCenter">
    <DetailCard>
      <div>
        <img :src="image" alt="">
      </div>

      <div class="c-d">
          <CustomLabel>NAME:</CustomLabel>
          <a>{{name}}</a>

          <CustomLabel>GENDER:  </CustomLabel>
          <a>{{gender}}</a>

          <CustomLabel>SPECIES:</CustomLabel>
          <a>{{species}}</a>

          <CustomLabel>STATUS:</CustomLabel>
          <a>{{status}}</a>

          <CustomLabel>LOCATION:</CustomLabel>
          <a>{{location.name}}</a>
      </div>

    </DetailCard>
  </div>
</template>

<script>
import DetailCard from "../components/detailCard";
import CustomLabel from "../components/customLabel";

export default {
  name:"Detail",
  components: { CustomLabel, DetailCard},
  data() {
    return {
      id: "",
      name: "",
      image: null,
      species:"",
      status:"",
      location:{
        name:""
      }
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.gender = this.$route.params.gender;
    this.name = this.$route.params.name;
    this.image = this.$route.params.image;
    this.species =this.$route.params.species;
    this.status =this.$route.params.status;
    this.location =this.$route.params.location;
  },
}
</script>

<style scoped>
.c {
  padding-top: 100px;
  color: rgb(var(--white));
  &-d {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
}
</style>