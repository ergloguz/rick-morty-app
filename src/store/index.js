import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters:[],
    favorites:[],
  },
  mutations: {
    SET_CHARACTERS ( state, character ){
      state.characters = character;
    },
    SET_FAVORITE(state, character) {
      state.favorites.push(character);
    },
    REMOVE_FAVORITE(state, character) {
      const index = state.favorites.findIndex((item) => item.id === character.id);
      state.favorites.splice(index, 1);
    }
  },
  actions: {
    loadCharacters({commit}) {
      axios.get("https://rickandmortyapi.com/api/character")
          .then((response) => {
            commit('SET_CHARACTERS', response.data.results)
          })
      }
  },
  getters: {
    getCharacters: state => state.characters,
    getFavorites: (state) => state.favorites,
  }
})
