<template>
  <div>
    <b-form-input
      v-model="name"
      placeholder="Pesquisar por nome do Personagem"
      @input="filterCharacter"
    ></b-form-input>
    <div class="mt-2">Value: {{ name }}</div>
  </div>
</template>

<script>
import _ from "lodash";
import { mapActions } from "vuex";
export default {
  name: "SearchCharacter",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    ...mapActions("personagem", ["getPersonagemByName"]),

    filterCharacter: _.debounce(function (e) {
      this.name = e;
      this.getPersonagemByName(this.name).then(() => {});
    }, 500),
  },
};
</script>

<style scoped></style>
