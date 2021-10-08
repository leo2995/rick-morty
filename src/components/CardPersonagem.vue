<template>
  <div>
    <b-row>
      <b-card
        v-for="personagem in listPersonagens"
        :key="personagem.index"
        :title="personagem.name"
        :img-src="personagem.image"
        img-alt="Image"
        style="max-width: 20rem"
        class="card--style"
      >
        <b-card-text class="card__personagem--detail">
          <span>Espécie: {{ speciesTranslate(personagem.species) }}</span>
          <span>Estado: {{ statusTranslate(personagem.status) }} </span>
          <span>ID Personagem: {{ personagem.id }} </span>
          <span>Lugar de Origem: {{ personagem.location.name }}</span>
        </b-card-text>
        <b-button
          variant="outline-primary"
          @click="abrirDetalhespersonagem(personagem.id)"
          >Detalhes</b-button
        >
      </b-card>
    </b-row>

  <b-row>
    <div class="row">
      <b-container class="btn__act--pages">
        <b-button
          variant="light"
          :disabled="getPageIndex < 2"
          @click="PaginaAnterior(getPageIndex)"
          >Anterior</b-button
        >
        <b-button variant="light" @click="proximaPagina(getPageIndex)"
          >Proximo</b-button
        >
      </b-container>
    </div>
  </b-row>
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'CardPersonagem',
    data(){
      return{
        pageNumber: 1
      }
    },
    computed:{
        ...mapGetters("personagem", ['listPersonagens', 'getPageIndex'])
    },
    methods:{
      ...mapActions('personagem', ["getPersonagemByPage"]),

    speciesTranslate(specie) {
      if (specie === "Human") {
        return "Humano";
      } else {
        return "Alien";
      }
    },
        statusTranslate(status) {
        if (status === "Alive") {
            return "Vivo";
        } else {
            return "Morto";
        }
        },
    abrirDetalhespersonagem(id) {
      this.$router.push(`/personagem/detalhes/${id}`);
    },
    proximaPagina(id) {
      let params = {
        id: id,
        pageIndex: this.pageNumber,
      };
      this.getPersonagemByPage(params).then(() => {
        this.$store.commit("personagem/SET_PAGE_INDEX", params.pageIndex);
      });
    },
    PaginaAnterior(id) {
      let params = {
        id: id - 1,
        pageIndex: this.pageNumber,
      };
      this.getPersonagemByPage(params).then(() => {
        this.$store.commit("personagem/REMOVE_PAGE_INDEX", params.pageIndex);
      });
    },
    }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card__personagem--detail {
  display: flex;
  flex-direction: column;
}
.card--style {
  margin: 16px;
}
.btn__act--pages {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px auto 20px auto;
}

</style>