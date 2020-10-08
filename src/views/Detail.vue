<template>
  <div class="c">
    <DetailCard>
      <div>
        <img :src="image" alt="">
      </div>

      <div class="c-d">

          <CustomLabel>NAME:</CustomLabel>
          {{name}}



          <CustomLabel>GENDER:  </CustomLabel>
          {{gender}}




          <CustomLabel>SPECIES:</CustomLabel>
          {{species}}



          <CustomLabel>STATUS:</CustomLabel>
          {{status}}


          <CustomLabel>LOCATION:</CustomLabel>    {{location.name}}

      </div>

    </DetailCard>
  </div>
</template>

<script>
import DetailCard from "../components/detailCard";
import CustomLabel from "../components/customLabel";
import CustomText from "../components/customText";
export default {
  name:"Detail",
  components: {CustomText, CustomLabel, DetailCard},
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  color: white;
  &-d {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
}
</style>