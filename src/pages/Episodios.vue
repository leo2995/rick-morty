<template>
  <div class="about">
    <h1>Pagina de Episódos</h1>
    <h1>Lista de Episodio</h1>
    <span>{{listEpisodios}}</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name:'Episodios',
    mounted(){
      this.getEpisodios()
  },
  methods:{
    ...mapActions('episodio', ['getEpisodios']),
  },
  computed:{  
    ...mapGetters("episodio", ["listEpisodios"]),
  }
}
</script>

<style scoped>

</style>
