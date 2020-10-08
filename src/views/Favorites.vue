<template>
  <div>
    <NoData v-if="!favorites.length"/>
    <CharacterCard :data-list="favorites"/>
  </div>
</template>

<script>

import CharacterCard from "@/components/characterCard";
import {mapState} from "vuex";
import NoData from "@/components/noData";
export default {
  name: "Favorites",
  components: {
    NoData,
    CharacterCard,
  },
  computed: {
    ...mapState(['favorites'])
  }
};

</script>

<style>
</style>