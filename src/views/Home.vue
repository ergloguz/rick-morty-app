<template>
    <div>
      <CharacterCard :data-list="characters"/>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import CharacterCard from "@/components/characterCard";

export default {
  name: 'Home',
  components: {
    CharacterCard
  },
  computed: {
    ...mapState(['characters'])
  }

}
</script>
<style>

</style>