<template>
    <div class="custom">
      <CharacterCard />
      <router-link to="/about">
        <button>giiiit</button>
      </router-link>

    </div>
</template>

<script>

import CharacterCard from "@/components/characterCard";

export default {
  name: 'Home',
  components: {
    CharacterCard
  },

}
</script>
<style>
.custom{
  display: flex;
  flex-direction: row;
}
</style>