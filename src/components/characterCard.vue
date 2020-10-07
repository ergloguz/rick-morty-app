<template>
<div class="cl">
  <div v-for="(item, index) in dataList" :key="index" class="card">

    <div class="card-image">
      <img class="card-image-img" :src="item.image">
    </div>

    <div class="card-body">

      <div class="card-body-header">
        <a class="card-body-header-name">{{ item.name }}</a>
      </div>

      <button @click.prevent="setFavorite(item)" class="card-body-footer"><IconLike/></button>
    </div>
  </div>
</div>
</template>

<script>

import {mapState} from "vuex"
import IconLike from "@/icons/like.svg"

export default {
  name:"CharacterCard",
  components:{
    IconLike
  },
  created() {this.$store.dispatch('loadCharacters')
  },
  computed: mapState(['characters']),
  props: {
    dataList: {
      type: Array,
      required: true,
    },
  },
  methods:{
    setFavorite(movieItem) {
      if (this.isFavorite(movieItem.id)) {
        this.$store.commit('REMOVE_FAVORITE', movieItem);
      } else {
        this.$store.commit('SET_FAVORITE', movieItem);
      }
    },
    isFavorite(id) {
      return this.$store.state.favorites.filter((character) => character.id === id)[0];
    }
  }
}
</script>

<style scoped>
.cl {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  margin-right: 20px;
  padding: 10px 10px 10px 10px;
  height: 350px;
  width: 225px;
  border-radius: 2px;
  background-color: white;
  &-image {
    height: 250px;
    width: 200px;
    &-img {
      height: inherit;
      width: inherit;
      border-radius: 2px;
    }
  }
  &-body {
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 20px;
    &-header {
      display: flex;
      align-items: center;
      padding-left: 10px;
      height: 50px;
      width: 150px;
      &-name {
        color: black;
        font-size: 22px;
        font-weight: bold;
      }
    }
    &-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      width: 50px;
      border-radius: 5px;
      background-color: #FFBFBF;
      font-weight: bold;
      color: white;
    }

  }
}
</style>