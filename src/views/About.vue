<template>
  <div>
    <CharacterCard :data-list="favorites"/>
  </div>
</template>

<script>

import CharacterCard from "@/components/characterCard";
import {mapState} from "vuex";
export default {
  name: "Favorites",
  components: {
    CharacterCard,
  },
  computed: {
    ...mapState(['favorites'])
  }
};

</script>

<style>
</style>